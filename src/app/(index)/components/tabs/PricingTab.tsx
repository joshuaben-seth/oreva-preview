import Button from '@/components/Button'

export default function PricingTab() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Simple, Transparent Pricing</h2>
      <p className="text-muted-foreground">Get started with our early access program</p>
      <div className="bg-muted/20 rounded-2xl p-8 max-w-md mx-auto">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Early Access</h3>
          <div className="text-4xl font-bold">Free</div>
          <p className="text-sm text-muted-foreground">
            Get exclusive access to Oreva during our beta phase
          </p>
          <Button className="w-full">
            Join waitlist
          </Button>
        </div>
      </div>
    </div>
  )
}