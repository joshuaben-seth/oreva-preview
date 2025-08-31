export default function UpdatesTab() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Latest Updates</h2>
      <div className="space-y-4">
        <div className="border-l-4 border-primary pl-6 py-4">
          <h3 className="font-semibold">MCP Integration Complete</h3>
          <p className="text-sm text-muted-foreground">Enhanced tool ecosystem with parallel processing capabilities</p>
          <span className="text-xs text-muted-foreground">2 days ago</span>
        </div>
        <div className="border-l-4 border-secondary pl-6 py-4">
          <h3 className="font-semibold">Voice Interface Beta</h3>
          <p className="text-sm text-muted-foreground">Speech-to-text and text-to-speech now available for testing</p>
          <span className="text-xs text-muted-foreground">1 week ago</span>
        </div>
      </div>
    </div>
  )
}