import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export function LocationInput({ value, onChange, onGpsClick }) {
    return (
        <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-bold text-slate-900">
                Location
            </Label>
            <div className="flex gap-3">
                <Input
                    id="location"
                    placeholder="Street name or landmark"
                    value={value}
                    onChange={onChange}
                    className="h-11 rounded-xl bg-white border-slate-200 flex-1 focus-visible:ring-emerald-600"
                />
                <Button
                    type="button"
                    variant="outline"
                    onClick={onGpsClick}
                    className="h-11 border border-slate-200 hover:bg-slate-50 rounded-xl px-4 flex items-center gap-1.5 font-semibold text-slate-800 shrink-0"
                >
                    <MapPin className="w-4 h-4 text-slate-700" />
                    Use GPS
                </Button>
            </div>
        </div>
    )
}