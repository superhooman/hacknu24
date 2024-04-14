import fetch from "node-fetch";
import { Code, type Tag, type Item, type Token } from "./types";
import { CITIES } from "@src/app/constants/cities";

const authorize = async () => {
    const t = new FormData;
    t.append("grant_type", "client_credentials"),
    t.append("scope", "sms_send"),
    t.append("client_id", "halykbankkz"),
    t.append("client_secret", "bCI7YdlOzC2h7LAgaZJJQArqhPpYQIIPtdXgdbi4zNqMVz1cVaVOyka2eTmlqSBH");

    const token = (await fetch('https://oauth.homebank.kz/oauth2/token', {
        method: 'POST',
        body: t,
    }).then((res) => res.json())) as Token;

    return token;
};

export const fetchHalykPartners = async (city: keyof typeof CITIES) => {
    const { halykId }  = CITIES[city];

    const token = await authorize();

    console.log(token);

    const items = (await fetch(`https://pelican-api.homebank.kz/halykclub-api/v1/terminal/devices?in_main_page=true`, {
        headers: {
            Authorization: `Bearer ${token.access_token}`,
            City_id: `${halykId}`,
            'Accept-Language': 'ru',
        },
    }).then((res) => res.json())) as Item[];

    return items.map((item) => ({
        ...item,
        tags: parseTags(item.tags),
        lat: Number(item.latitude),
        lng: Number(item.longitude),
    }));
};

const parsePercent = (str: string) => {
    const match = str.match(/(\d+)%/);

    if (!match) {
        return undefined;
    }

    return Number(match[1]);
};

const parseTags = (tags: Tag[]) => {
    const phone = tags.find(({ code }) => code === Code.Phone)?.text;
    const bonus = tags.find(({ code }) => code === Code.Bonus)?.text;

    return {
        phone: phone ? parsePercent(phone) : undefined,
        bonus: bonus ? parsePercent(bonus) : undefined,
    };
};
