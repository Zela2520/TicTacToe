import { prisma } from "@/shared/lib/db";
import { Button } from "@/shared/ui/button";
import { Card, CardTitle } from "@/shared/ui/card";

export default async function Home() {
  const games = await prisma.game.findMany();

  console.log({ games });

  return (
    <div>
      <Button>hello</Button>
      {games.map((x) => {
        return (
          <Card key={x.id}>
            <CardTitle>{x.name}</CardTitle>
          </Card>
        );
      })}
    </div>
  );
}
