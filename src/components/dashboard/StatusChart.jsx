import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts"

const statusData = [
    { status: "Verified", count: 1, fill: "#10b981" },
    { status: "In Progress", count: 1, fill: "#3b82f6" },
    { status: "Resolved", count: 1, fill: "#f59e0b" },
]

const statusChartConfig = {
    count: { label: "Issues", color: "#10b981" },
}

export function StatusChart() {
    return (
        <Card className="shadow-sm border-slate-200/80 rounded-2xl bg-white flex flex-col p-0 px-2">
            <CardHeader className="p-5 pb-0">
                <CardTitle className="text-base font-bold text-slate-900">Issues by status</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-6 flex-1 min-h-75">
                <ChartContainer config={statusChartConfig} className="w-full h-full min-h-60">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={statusData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                            <XAxis dataKey="status" axisLine={true} tickLine={false} className="text-xs text-slate-400 font-medium" />
                            <YAxis domain={[0, 4]} tickCount={5} axisLine={true} tickLine={false} className="text-xs text-slate-400 font-medium" />
                            <ChartTooltip content={<ChartTooltipContent />} />
                            <Bar
                                dataKey="count"
                                radius={[6, 6, 0, 0]}
                                maxBarSize={70}
                                shape={({ x, y, width, height, payload }) => (
                                    <rect
                                        x={x}
                                        y={y}
                                        width={width}
                                        height={height}
                                        rx={6}
                                        fill={payload?.fill ?? "var(--color-count)"}
                                    />
                                )}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}