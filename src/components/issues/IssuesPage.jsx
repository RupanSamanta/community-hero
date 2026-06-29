import { useState } from "react";
import { SearchIcon } from "lucide-react";
import Header from "../layout/Header"
import { Field, FieldGroup, FieldSet } from "../ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { AppSelect } from "./AppSelect"
import { CATEGORY_CONFIG, STATUS_CONFIG } from "@/lib/constants";
import IssueCard from "./IssueCard";

export default function IssuesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All")
    const [selectedStatus, setSelectedStatus] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const issues = [
        {
            id: 1,
            title: "Large pothole on Main Street",
            description: "Deep pothole near the bus stop, dangerous for two-wheelers.",
            category: "Pothole",
            status: "Verified",
            severity: "high severity",
            location: "Main St & 4th Ave",
            upvotes: 3
        },
        {
            id: 2,
            title: "Streetlight out near park",
            description: "The lamp by the playground has been dark for a week.",
            category: "Streetlight",
            status: "In Progress",
            severity: "medium severity",
            location: "Greenfield Park",
            upvotes: 4
        },
        {
            id: 3,
            title: "Overflowing garbage bin",
            description: "Bin near market hasn't been collected in days.",
            category: "Waste",
            status: "Resolved",
            severity: "medium severity",
            location: "Central Market",
            upvotes: 3
        }
    ];

    const filteredIssues = issues.filter((issue) => {
        const matchesCategory = selectedCategory.includes("All") || issue.category === selectedCategory
        const matchesStatus = selectedStatus.includes("All") || issue.status === selectedStatus

        const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            issue.description.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesCategory && matchesStatus && matchesSearch
    });


    return (
        <>
            <Header />
            <div className="pt-30 pb-12">
                <div>
                    <div className="text text-3xl font-bold">Issues</div>
                    <div className="text-gray-600">
                        <span>{filteredIssues.length}</span> of <span>{issues.length}</span> reports
                    </div>
                </div>
                <FieldSet>
                    <FieldGroup className="grid grid-cols-3 mt-6 *:*:p-3 *:*:py-4.5 *:*:border-2 *:*:focus-visible:border-emerald-600 *:*:focus:border-emerald-600 *:*:shadow-sm">
                        <Field>
                            <InputGroup className="border-gray-200! focus-within:border-emerald-600! focus-within:ring-0! focus-within:ring-offset-0! transition-colors">
                                <InputGroupInput
                                    placeholder="Search issues..."
                                    className="bg-white focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:outline-none!"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                                <InputGroupAddon align="inline-start" className="p-0">
                                    <SearchIcon />
                                </InputGroupAddon>
                            </InputGroup>
                        </Field>
                        <Field>
                            <AppSelect
                                label="Categories"
                                placeholder="Filter by Category"
                                options={Object.keys(CATEGORY_CONFIG)}
                                onValueChange={(val) => setSelectedCategory(val)}
                            />
                        </Field>
                        <Field>
                            <AppSelect
                                label="Statuses"
                                placeholder="Filter by Status"
                                options={Object.keys(STATUS_CONFIG)}
                                onValueChange={(val) => setSelectedStatus(val)}
                            />
                        </Field>
                    </FieldGroup>
                    <FieldGroup className="grid grid-cols-3 items-stretch *:*:h-full mt-6">
                        {filteredIssues.map((issue, key) => (
                            <Field key={key}>
                                <IssueCard key={issue.id} issue={issue} />
                            </Field>
                        ))}
                        {filteredIssues.length === 0 && (
                            <div className="col-span-3 h-40 flex justify-center items-center text-slate-500 rounded-lg border-dashed border border-gray-300">
                                No issues found matching those filters.
                            </div>
                        )}
                    </FieldGroup>
                </FieldSet>
            </div>
        </>
    )
}