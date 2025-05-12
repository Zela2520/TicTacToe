"use client";

import { Button } from "@/shared/ui/button";
import { CreateGameError, createGameAction } from "../actions/create-game";
import { Either, mapLeft } from "@/shared/lib/either";
import { useActionState } from "@/shared/lib/react";
import { startTransition } from "react";
import { GameEntity } from "@/entities/game/domen";

const errorMessages: Record<CreateGameError, string> = {
  "can-create-only-one-game": "Вы можете создать только одну игру",
  "user-not-found": "Пользователя нету",
};

export function CreateButton() {
  const [state, dispatch, isPending] = useActionState<Either<CreateGameError, GameEntity>, undefined>(
    createGameAction,
    undefined,
  );

  const error = state ? mapLeft(
    state,
    (e) => errorMessages[e]
  ) : undefined;

  return (
    <Button
      disabled={isPending}
      onClick={() => startTransition(dispatch)}
      error={error}
    >
      Создать игру
    </Button>
  );
}