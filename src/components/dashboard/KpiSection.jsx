import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const kpiData = [
    { title: "Total reports", value: "3", color: "text-slate-900" },
    { title: "Open", value: "2", color: "text-slate-900" },
    { title: "In progress", value: "1", color: "text-slate-900" },
    { title: "Resolved", value: "1", color: "text-emerald-600" },
]

export function KpiSection() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiData.map((kpi, idx) => (
                <Card key={idx} className="shadow-sm border-slate-200/80 rounded-2xl bg-white p-0 px-2">
                    <CardHeader className="p-4 pb-2 space-y-0">
                        <CardTitle className="text-sm font-normal text-slate-500">
                            {kpi.title}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-4 pt-0">
                        <span className={`text-3xl font-bold tracking-tight ${kpi.color}`}>
                            {kpi.value}
                        </span>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}