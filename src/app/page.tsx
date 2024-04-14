import { Main } from '@src/features/Main';
import { api } from '@src/trpc/server';

export default async function Home() {
    // const hello = await api.post.hello({ text: "from tRPC" });
    // const session = await getServerAuthSession();
    const items = await api.places.getAll();
    const cards = await api.cards.getAll();

    return (
        <>
            <Main items={items} cards={cards} />
        </>
    );
}
