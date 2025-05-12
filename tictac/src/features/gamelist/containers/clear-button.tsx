"use client";

import { Button } from "@/shared/ui/button";
import { clearGamesAction } from "../actions/clear-games";
import { useActionState } from "@/shared/lib/react";
import { startTransition } from "react";
import { useRouter } from "next/navigation";

export function ClearButton() {
  const router = useRouter();
  const [, dispatch, isPending] = useActionState(clearGamesAction, undefined);

  const handleClear = () => {
    startTransition(async () => {
      await dispatch();
      router.refresh();
    });
  };

  return (
    <Button
      variant="destructive"
      disabled={isPending}
      onClick={handleClear}
    >
      Очистить игры
    </Button>
  );
} 