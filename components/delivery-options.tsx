import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DeliveryOptions() {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Delivery options</h3>
      <RadioGroup defaultValue="standard" className="flex gap-6">
        {/* Standard Shipping */}
        <div className="flex items-center space-x-4 rounded-lg border p-6 bg-white peer-checked:border-black hover:border-gray-500 hover:bg-gray-50">
          <RadioGroupItem value="standard" id="standard" className="peer" />
          <Label htmlFor="standard" className="flex-1">
            <div className="font-medium text-lg">Standard Shipping</div>
            <div className="text-sm text-muted-foreground">3-5 business days</div>
          </Label>
        </div>
        
        {/* Express Shipping */}
        <div className="flex items-center space-x-4 rounded-lg border p-6 bg-white peer-checked:border-black hover:border-gray-500 hover:bg-gray-50">
          <RadioGroupItem value="express" id="express" className="peer" />
          <Label htmlFor="express" className="flex-1">
            <div className="font-medium text-lg">Express Shipping</div>
            <div className="text-sm text-muted-foreground">1-2 business days</div>
          </Label>
        </div>

        {/* Same Day Delivery */}
        <div className="flex items-center space-x-4 rounded-lg border p-6 bg-white peer-checked:border-black hover:border-gray-500 hover:bg-gray-50">
          <RadioGroupItem value="same-day" id="same-day" className="peer" />
          <Label htmlFor="same-day" className="flex-1">
            <div className="font-medium text-lg">Same Day Delivery</div>
            <div className="text-sm text-muted-foreground">Same day delivery</div>
          </Label>
        </div>
      </RadioGroup>
    </div>
  )
}
