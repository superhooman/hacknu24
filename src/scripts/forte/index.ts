import OpenAI from 'openai';

import { env } from '@src/env';

import { cashbackSchema } from './schemas';

const prompt = [
    'Дай информацию о кэшбэках только в JSON формате:',
    '```',
    '{',
    '\tgeneric: 0.5, //общий кэшбэк для всех покупок',
    '\tdeals: [',
    '\t\t{',
    '\t\t\tmcc: [5893], // MCC коды',
    '\t\t\tpercent: 5,',
    '\t\t\tcondition: "", // условие кэшбэка',
    '\t\t}',
    '\t]',
    '}',
    '```',
    'Apple Pay/Samsung Pay/Google Pay - это NFC',
    'Игнорируй при отсутсвии MCC кода',
    'Важно: может быть два вида условия: через карту и через NFC',
    '',
    'Информация тут:',
];

export const fetchForte = async () => {
    const response = await fetch('https://forte.kz/black');

    const text = await response.text();

    const nextData = text.split('<script id="__NEXT_DATA__" type="application/json">')[1]?.split('</script>')[0];

    if (!nextData) {
        throw new Error('Failed to parse data');
    }

    const data = nextData.split('На этот месяц')[1]?.split('"richText":"')[1]?.split('}]}')[0];

    if (!data) {
        throw new Error('Failed to parse data');
    }

    const openai = new OpenAI({
        apiKey: env.OPENAI_API_KEY
    });

    let chatData: string;

    const completion = await openai.chat.completions.create({
        messages: [
            {
                role: 'user',
                content: [
                    ...prompt,
                    data,
                ].join('\n')
            }
        ],
        tools: [
            {
                type: 'function',
                function: {
                    name: 'returnJson',
                    description: 'Return JSON object',
                    parameters: {
                        type: 'object',
                        properties: {
                            json: {
                                type: 'object',
                            },
                        },
                        required: ['json'],
                    }
                },
            }
        ],
        model: 'gpt-4-turbo-preview',
    });

    const completionResponse = completion.choices[0]?.message;

    console.log({ completionResponse });

    if (completionResponse?.tool_calls?.[0]?.function.name === 'returnJson') {
        chatData = completionResponse.tool_calls[0].function.arguments;
    } else {
        throw new Error('Failed to parse data');
    }

    const output = cashbackSchema.parse(JSON.parse(chatData));

    return {
        id: 'forte',
        ...output,
    };
};
