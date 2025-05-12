"use server"

import { prisma } from "@/shared/lib/db"

export async function clearGamesAction() {
    await prisma.game.deleteMany()
    return { success: true }
} 