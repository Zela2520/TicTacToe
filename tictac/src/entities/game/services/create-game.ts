import cuid from "cuid";
import { GameEntity, PlayerEntity } from "../domen";
import { gameRepository } from "../repositories/game";
import { right, left, Left, Right } from "@/shared/lib/either";

export async function createGame(player: PlayerEntity): Promise<Left<"Game already in idle status"> | Right<GameEntity>> {
    const playerGames = await gameRepository.gameList({
        players: {
            some: {
                id: player.id
            }
        },
        status: 'idle'
    })

    const isGameInIdleStatus = playerGames.some(game => game.status === 'idle' && game.creator.id === player.id)

    if (isGameInIdleStatus) {
        return left('Game already in idle status');
    }

    const createdGame = await gameRepository.createGame({
        id: cuid(),
        creator: player,
        status: 'idle'
    })
    
    return right(createdGame);
}