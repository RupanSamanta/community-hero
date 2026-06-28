import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export function AppSelect({ label, options, placeholder, onValueChange }) {
    const allOptions = ['All '.concat(label), ...options];
    return (
        <Select onValueChange={onValueChange}>
            <SelectTrigger className="w-45 bg-white">
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