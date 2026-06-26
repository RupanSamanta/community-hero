import { Card, CardDescription, CardTitle } from "../ui/card"

function CardDetails({ icon, title, desc }) {
    return (
        <Card size="md" className="p-4 gap-0 shadow-md shadow-neutral-400/20">
            <div className="size-10 bg-green-100 text-green rounded-md grid place-items-center *:size-5">
                {icon}
            </div>
            <CardTitle className="mt-3">{title}</CardTitle>
            <CardDescription>{desc}</CardDescription>
        </Card>
    )
}

export default CardDetails