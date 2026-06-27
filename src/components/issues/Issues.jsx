import Header from "../layout/Header"
import { Field, FieldGroup, FieldSet } from "../ui/field"
import { Input } from "../ui/input"
import { AppSelect } from "./AppSelect"
import { CATEGORY_CONFIG, STATUS_CONFIG } from "@/lib/constants";

export default function Issues() {
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
                            <Input id="search-bar" placeholder="Search issues..." />
                        </Field>
                        <Field>
                            <AppSelect
                                label="Category"
                                placeholder="Filter by Category"
                                options={Object.keys(CATEGORY_CONFIG)}
                                onValueChange={(val) => console.log("Category selected:", val)}
                            />
                        </Field>
                        <Field>
                            <AppSelect
                                label="Status"
                                placeholder="Filter by Status"
                                options={Object.keys(STATUS_CONFIG)}
                                onValueChange={(val) => console.log("Status selected:", val)}
                            />
                        </Field>
                    </FieldGroup>
                </FieldSet>
            </div>
        </>
    )
}