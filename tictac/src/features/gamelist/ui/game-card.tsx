import { Card, CardContent, CardHeader, CardTitle } from "@/shared/ui/card"

export const GameCard = ({
    login,
    rating
}: {
    login: string
    rating: number
}) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Игра с {login}</CardTitle>
            </CardHeader>
            <CardContent>Рейтинг: {rating}</CardContent>
        </Card>
    )
}