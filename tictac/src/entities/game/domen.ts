export type GameEntity = GameEntityIdle | GameEntityInProgress | GameEntityOver | GameEntityOverDraw

export type GameEntityIdle = {
    id: string
    creator: PlayerEntity
    status: 'idle'
}

export type GameEntityInProgress = {
    id: string
    players: PlayerEntity[]
    field: Field
    status: 'inProgress'
}


export type GameEntityOver = {
    id: string
    players: PlayerEntity[]
    field: Field
    status: 'gameOver'
    winner: PlayerEntity
}

export type GameEntityOverDraw = {
    id: string
    players: PlayerEntity[]
    field: Field
    status: 'gameOverDraw'
}

export type PlayerEntity = {
    id: string
    login: string
    rating: number
}

export type Field = (string | null)[]
export type Cell = GameSymbol | 'null'
export type GameSymbol = 'string'
