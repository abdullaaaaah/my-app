import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"

export function PaymentForm() {
  return (
    <div className="bg-white rounded-lg p-4 space-y-4">
      <h2 className="text-lg font-semibold">Payment</h2>
      <div className="space-y-3">
        <div className="space-y-1.5">
          <Label htmlFor="currency" className="text-sm">Choose Currency</Label>
          <Select>
            <SelectTrigger id="currency" className="bg-white">
              <SelectValue placeholder="USD" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="usd">USD</SelectItem>
              <SelectItem value="eur">EUR</SelectItem>
              <SelectItem value="gbp">GBP</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-1.5">
          <Label className="text-sm">Payment Option</Label>
          <RadioGroup defaultValue="card" className="flex gap-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="text-sm">Cards</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash" className="text-sm">Cash on Delivery</Label>
            </div>
          </RadioGroup>
        </div>
        <div className="space-y-3">
          <div className="space-y-1.5">
            <Label htmlFor="cardHolder" className="text-sm">Card Holder Name</Label>
            <Input id="cardHolder" placeholder="Enter card holder name" className="bg-white" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cardNumber" className="text-sm">Card Number</Label>
            <Input id="cardNumber" placeholder="Enter card number" className="bg-white" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="month" className="text-sm">Month</Label>
              <Select>
                <SelectTrigger id="month" className="bg-white">
                  <SelectValue placeholder="Month" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 12 }, (_, i) => (
                    <SelectItem key={i + 1} value={String(i + 1).padStart(2, '0')}>
                      {String(i + 1).padStart(2, '0')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="year" className="text-sm">Year</Label>
              <Select>
                <SelectTrigger id="year" className="bg-white">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  {Array.from({ length: 10 }, (_, i) => (
                    <SelectItem key={i} value={String(new Date().getFullYear() + i)}>
                      {new Date().getFullYear() + i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cvc" className="text-sm">CVC</Label>
              <Input id="cvc" placeholder="CVC" maxLength={3} className="bg-white" />
            </div>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Switch id="save-card" />
          <Label htmlFor="save-card" className="text-sm">Save card data for future payments</Label>
        </div>
        <Button className="w-full bg-orange-500 hover:bg-orange-600">Pay with card</Button>
      </div>
    </div>
  )
}

