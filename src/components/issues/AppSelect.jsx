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
    const allOptions = ['All '.concat(label), ...options]
        .map(option => option.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' '));
    return (
        <Select onValueChange={onValueChange}>
            <SelectTrigger className="w-45 bg-white">
                <SelectValue placeholder={placeholder} />
            </SelectTrigger>
            <SelectContent position="popper">
                <SelectGroup>
                    <SelectLabel>{label}</SelectLabel>
                    {allOptions.map((option) => (
                        <SelectItem key={option} value={option} className="capitalize">
                            {option}
                        </SelectItem>
                    ))}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}