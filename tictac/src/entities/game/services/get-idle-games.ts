import { GameEntityIdle } from "../domen";
import { gameRepository } from "../repositories/game";

export const getIdleGames = async (): Promise<GameEntityIdle[]> =>  {
    const games = await gameRepository.gameList({
        status: 'idle',
    })

    return games as GameEntityIdle[];
}