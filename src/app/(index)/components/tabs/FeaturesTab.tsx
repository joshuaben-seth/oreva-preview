export default function FeaturesTab() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold">Make better investments.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="bg-muted/20 rounded-xl p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              Split-Screen Layout
            </h3>
            <p className="text-sm text-muted-foreground">
              Dynamic visual canvas with conversation interface for seamless workflow management.
            </p>
          </div>
          <div className="bg-muted/20 rounded-xl p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              Voice & Text Chat
            </h3>
            <p className="text-sm text-muted-foreground">
              Natural language processing with voice input/output for hands-free productivity.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="bg-muted/20 rounded-xl p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              MCP Integration
            </h3>
            <p className="text-sm text-muted-foreground">
              Model Context Protocol enables unlimited extensibility with parallel tool processing.
            </p>
          </div>
          <div className="bg-muted/20 rounded-xl p-6">
            <h3 className="font-semibold mb-2 flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
              Smart UI Rendering
            </h3>
            <p className="text-sm text-muted-foreground">
              Context-aware UI components that adapt to your conversation and workflow needs.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}