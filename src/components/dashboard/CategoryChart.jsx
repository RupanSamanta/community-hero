import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { PieChart, Pie, ResponsiveContainer } from "recharts"

const categoryData = [
    { category: "pothole", value: 1, fill: "var(--color-pothole)" },
    { category: "streetlight", value: 1, fill: "var(--color-streetlight)" },
    { category: "waste", value: 1, fill: "var(--color-waste)" },
]

const categoryChartConfig = {
    value: { label: "Issues" },
    pothole: { label: "Pothole", color: "#10b981" },
    streetlight: { label: "Streetlight", color: "#3b82f6" },
    waste: { label: "Waste", color: "#f59e0b" },
}

export function CategoryChart() {
    return (
        <Card className="shadow-sm border-slate-200/80 rounded-2xl bg-white flex flex-col p-0 px-2">
            <CardHeader className="p-5 pb-0">
                <CardTitle className="text-base font-bold text-slate-900">Issues by category</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-2 flex-1 flex flex-col items-center justify-center min-h-75">
                <ChartContainer config={categoryChartConfig} className="w-full max-w-[320px] aspect-square">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                            <Pie
                                data={categoryData}
                                dataKey="value"
                                nameKey="category"
                                outerRadius={80}
                                label={({ value }) => `${value}`}
                            />
                            <ChartLegend content={<ChartLegendContent className="flex justify-center gap-4 mt-4 text-xs font-medium" />} />
                        </PieChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}