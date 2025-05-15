import { Label } from "@/components/ui/label"
import { RadioGroupItem } from "@/components/ui/radio-group"

interface RadioItem {
    value: string
    name: string
}

export function RadioItem({ value, name }: RadioItem) {
    return (
        <div className="flex items-center space-x-2 ">
            <RadioGroupItem value={value} id={value} />
            <Label htmlFor={value}>{name}</Label>
        </div>
    )
}