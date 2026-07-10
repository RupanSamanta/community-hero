import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { Field, FieldGroup, FieldSet } from "../ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { AppSelect } from "./AppSelect"
import IssueCard from "./IssueCard";
import { CATEGORY_CONFIG, STATUS_CONFIG, SEVERITY_CONFIG } from "@/lib/constants";
import { getIssues } from "@/lib/storage.js";

export default function IssuesPage() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedStatus, setSelectedStatus] = useState("All");
    const [selectedSeverity, setSelectedSeverity] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const allIssues = getIssues();
    const filteredIssues = allIssues.filter((issue) => {
        const matchesCategory = selectedCategory.includes("All") || issue.category === selectedCategory.toLowerCase();
        const matchesStatus = selectedStatus.includes("All") || issue.status === selectedStatus.toLowerCase();
        const matchesSeverity = selectedSeverity.includes("All") || issue.severity === selectedSeverity.toLowerCase();

        const matchesSearch = issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            issue.description.toLowerCase().includes(searchQuery.toLowerCase())

        return matchesCategory && matchesStatus && matchesSeverity && matchesSearch
    });


    return (
        <>
            <title>Issues - Community Hero</title>

            <div className="pt-30 pb-12">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900">Issues</h1>
                    <p className="text-gray-500 text-sm mt-1">
                        <span>{filteredIssues.length}</span> of <span>{allIssues.length}</span> reports
                    </p>
                </div>
                <FieldSet>
                    <FieldGroup className="grid grid-cols-4 mt-6 *:*:p-3 *:*:py-4.5 *:*:border-2 *:*:focus-visible:border-emerald-600 *:*:focus:border-emerald-600 *:*:shadow-sm">
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
                        <Field>
                            <AppSelect
                                label="Severities"
                                placeholder="Filter by Severity"
                                options={Object.keys(SEVERITY_CONFIG)}
                                onValueChange={(val) => setSelectedSeverity(val)}
                            />
                        </Field>
                    </FieldGroup>
                    <FieldGroup className="grid grid-cols-3 items-stretch  *:*:h-full mt-6">
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