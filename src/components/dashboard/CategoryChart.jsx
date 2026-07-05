import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent, ChartLegend, ChartLegendContent } from "@/components/ui/chart"
import { PieChart, Pie } from "recharts"
import { categories } from "@/data/categoriesStatuses"
import { CATEGORY_COLORS } from "@/lib/constants"

const categoryChartConfig = {
    value: { label: "Issues" },
    Pothole: { label: "Pothole", color: CATEGORY_COLORS["pothole"] },
    "Water Leak": { label: "Water Leak", color: CATEGORY_COLORS["water leak"] },
    Streetlight: { label: "Streetlight", color: CATEGORY_COLORS["streetlight"] },
    Waste: { label: "Waste", color: CATEGORY_COLORS["waste"] },
    Infrastructure: { label: "Infrastructure", color: CATEGORY_COLORS["infrastructure"] },
    Other: { label: "Other", color: CATEGORY_COLORS["other"] },
}

const normalizeCategory = (category) => category.toLowerCase();

export function CategoryChart({ issues }) {
    const categoryData = categories
        .map((category) => ({
            category,
            value: issues.filter((issue) => normalizeCategory(issue.category) === normalizeCategory(category)).length,
            fill: CATEGORY_COLORS[normalizeCategory(category)],
        }))
        .filter((category) => category.value > 0);

    return (
        <Card className="shadow-sm border-slate-200/80 rounded-2xl bg-white flex flex-col p-0 px-2">
            <CardHeader className="p-5 pb-0">
                <CardTitle className="text-base font-bold text-slate-900">Issues by category</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-2 flex-1 flex flex-col items-center justify-center min-h-75">
                <ChartContainer config={categoryChartConfig} className="w-full max-w-[320px] aspect-square">
                    <PieChart>
                        <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                        <Pie
                            data={categoryData}
                            dataKey="value"
                            nameKey="category"
                            outerRadius={80}
                            label={({ value }) => `${value}`}
                        />
                        <ChartLegend content={<ChartLegendContent nameKey="category" className="flex justify-center gap-4 mt-4 text-xs font-medium" />} />
                    </PieChart>
                </ChartContainer>
            </CardContent>
        </Card>
    )
}
