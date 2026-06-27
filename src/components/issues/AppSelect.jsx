import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function AppSelect({ label, options, placeholder, onValueChange, defaultValue="All" }) {
    const allOptions = ['All '.concat(label), ...options];
    return (
        <Select onValueChange={onValueChange} defaultValue={defaultValue}>
            <SelectTrigger className="w-45">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent position="popper">
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {allOptions.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}