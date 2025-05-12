import { GameList } from "@/features/gamelist/server";

export default async function Home() {
  return (
    <div className="flex flex-col gap-8 container mx-auto pt-[100px]">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Игры</h1>
      </div>
      <GameList />
    </div>
  );
}
