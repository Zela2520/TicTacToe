export default async function GamePage({ params }: { params: { id: string } }) {
    const game = await params

    return <div>{game.id}</div>
}