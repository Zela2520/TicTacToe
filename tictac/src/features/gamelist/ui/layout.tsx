export const GameListLayout = ({
    actions,
    children
}: {
    actions: React.ReactNode
    children: React.ReactNode
}) => {
    return (
        <div className="flex flex-col gap-1">
            <div className="flex flex-row justify-end gap-4">{actions}</div>
            <div className="grid grid-cols-2 gap-4">
                {children}
            </div>
        </div>
        
    )
}