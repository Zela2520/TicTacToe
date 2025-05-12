import { getIdleGames } from "@/entities/game/server";
import { GameListLayout } from "../ui/layout";
import { GameCard } from "../ui/game-card";
import { CreateButton } from "./create-button";
import { ClearButton } from "./clear-button";
export const GameList = async () => {
  const games = await getIdleGames();

  return (
    <GameListLayout
      actions={
        <div className="flex gap-4">
          <CreateButton />
          <ClearButton />
        </div>
      }
    >
      {games.map((game) => (
        <GameCard
          key={game.id}
          login={game.creator.login}
          rating={game.creator.rating}
        />
      ))}
    </GameListLayout>
  );
};
