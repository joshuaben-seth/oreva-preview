import Button from '@/components/Button'

export default function AppTab() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Download Oreva</h2>
      <p className="text-muted-foreground">Available across all your devices</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary" size="lg">
          Download for Mac
        </Button>
        <Button variant="secondary" size="lg">
          Download for Windows
        </Button>
        <Button variant="secondary" size="lg">
          Web App
        </Button>
      </div>
      <p className="text-xs text-muted-foreground">
        Mobile apps coming soon to iOS and Android
      </p>
    </div>
  )
}