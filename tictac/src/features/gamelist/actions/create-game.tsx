"use server"

import { GameEntity } from "@/entities/game/domen"
import { createGame } from "@/entities/game/server"
import { prisma } from "@/shared/lib/db"
import { Left, Right, left } from "@/shared/lib/either"
import { redirect } from "next/navigation"

export type CreateGameError = "can-create-only-one-game" | "user-not-found";

export async function createGameAction(): Promise<Right<GameEntity> | Left<CreateGameError>> {
    const user = await prisma.user.findFirst()

    if (!user) {
        return left('user-not-found')
    }
    
    const gameResult = await createGame(user)

    if (gameResult.type === "right") {
        redirect(`/game/${gameResult.value.id}`)
    }
    
    return left('can-create-only-one-game')
}