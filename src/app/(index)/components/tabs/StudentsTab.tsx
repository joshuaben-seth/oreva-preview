import Button from '@/components/Button'

export default function StudentsTab() {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-3xl font-bold">Student Program</h2>
      <p className="text-muted-foreground">Special access for students and educational institutions</p>
      <div className="bg-muted/20 rounded-2xl p-8 max-w-md mx-auto">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Student Access</h3>
          <div className="text-4xl font-bold">Free Forever</div>
          <p className="text-sm text-muted-foreground">
            Full access to Oreva for verified students
          </p>
          <Button className="w-full">
            Verify Student Status
          </Button>
        </div>
      </div>
    </div>
  )
}