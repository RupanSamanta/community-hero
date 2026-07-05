import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis } from "recharts"
import { statuses } from "@/data/categoriesStatuses"
import { STATUS_COLORS } from "@/lib/constants"

const statusChartConfig = {
    count: { label: "Issues", color: "#10b981" },
}

const normalizeStatus = (status) => status.toLowerCase();

export function StatusChart({ issues }) {
    const statusData = statuses.map((status) => ({
        status,
        count: issues.filter((issue) => normalizeStatus(issue.status) === normalizeStatus(status)).length,
        fill: STATUS_COLORS[normalizeStatus(status)],
    }));

    const maxCount = Math.max(...statusData.map((item) => item.count), 1);

    return (
        <Card className="shadow-sm border-slate-200/80 rounded-2xl bg-white flex flex-col p-0 px-2">
            <CardHeader className="p-5 pb-0">
                <CardTitle className="text-base font-bold text-slate-900">Issues by status</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-6 flex-1 min-h-75">
                <ChartContainer config={statusChartConfig} className="w-full h-full min-h-60">
                    <BarChart data={statusData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                        <XAxis dataKey="status" axisLine={true} tickLine={false} className="text-xs text-slate-400 font-medium" />
                        <YAxis domain={[0, maxCount]} allowDecimals={false} tickCount={maxCount + 1} axisLine={true} tickLine={false} className="text-xs text-slate-400 font-medium" />
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
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
