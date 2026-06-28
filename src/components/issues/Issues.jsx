import { SearchIcon } from "lucide-react";
import Header from "../layout/Header"
import { Field, FieldGroup, FieldSet } from "../ui/field"
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { AppSelect } from "./AppSelect"
import { CATEGORY_CONFIG, STATUS_CONFIG } from "@/lib/constants";
import IssueCard from "./IssueCard";

export default function Issues() {
    const mockIssues = [
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
        },
        {
            id: 4,
            title: "Overflowing garbage bin",
            description: "Bin near market hasn't been collected in days.",
            category: "Waste",
            status: "Resolved",
            severity: "medium severity",
            location: "Central Market",
            upvotes: 3
        }
    ]
    return (
        <>
            <Header />
            <div className="pt-30">
                <div>
                    <div className="text text-3xl font-bold">Issues</div>
                    <div className="text-gray-600">
                        <span>3</span> of <span>3</span> reports
                    </div>
                </div>
                <FieldSet>
                    <FieldGroup className="grid grid-cols-3 mt-6 *:*:p-3 *:*:py-4.5 *:*:border-2 *:*:focus-visible:border-emerald-600 *:*:focus:border-emerald-600 *:*:shadow-sm">
                        <Field>
                            <InputGroup className="border-gray-200! focus-within:border-emerald-600! focus-within:ring-0! focus-within:ring-offset-0! transition-colors">
                                <InputGroupInput
                                    placeholder="Search issues..."
                                    className="bg-white focus-visible:ring-0! focus-visible:ring-offset-0! focus-visible:outline-none!"
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
                                onValueChange={(val) => console.log("Category selected:", val)}
                            />
                        </Field>
                        <Field>
                            <AppSelect
                                label="Statuses"
                                placeholder="Filter by Status"
                                options={Object.keys(STATUS_CONFIG)}
                                onValueChange={(val) => console.log("Status selected:", val)}
                            />
                        </Field>
                    </FieldGroup>
                    <FieldGroup className="grid grid-cols-3 items-stretch *:*:h-full mt-6">
                        {mockIssues.map((issue, key) => (
                            <Field key={key}>
                                <IssueCard key={issue.id} issue={issue} />
                            </Field>
                        ))}
                    </FieldGroup>
                </FieldSet>
            </div>
        </>
    )
}