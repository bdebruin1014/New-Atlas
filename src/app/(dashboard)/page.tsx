import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Building, Hammer, DollarSign, AlertCircle, CheckCircle } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to ATLAS - Red Cedar Homes Operating Platform
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Opportunities</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
            <p className="text-xs text-muted-foreground">
              $8.4M projected value
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Projects</CardTitle>
            <Building className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">
              $12.2M total budget
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
            <Hammer className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">
              45 units in production
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">YTD Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4.8M</div>
            <p className="text-xs text-muted-foreground">
              +18% from last year
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Pending Tasks</CardTitle>
            <CardDescription>Tasks requiring your attention</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Submit draw request - Job 26-042</p>
                  <p className="text-xs text-muted-foreground">Due in 2 days</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AlertCircle className="h-5 w-5 text-orange-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Review site analysis - Lot on Berea Rd</p>
                  <p className="text-xs text-muted-foreground">Due tomorrow</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <AlertCircle className="h-5 w-5 text-red-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Approve change order CO-26-1247</p>
                  <p className="text-xs text-muted-foreground">Overdue by 1 day</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Recent Completions</CardTitle>
            <CardDescription>Recently closed deals and milestones</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Lot closed - 142 Taylors Mill Rd</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Foundation complete - Unit 26-015-01</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Permit issued - Dogwood on Sulphur Springs</p>
                  <p className="text-xs text-muted-foreground">Yesterday</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Pipeline Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Deal Pipeline Overview</CardTitle>
          <CardDescription>Opportunities by stage</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Lead</span>
              <div className="flex items-center gap-4">
                <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '30%' }} />
                </div>
                <span className="text-sm font-medium w-12 text-right">8</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Under Contract</span>
              <div className="flex items-center gap-4">
                <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '45%' }} />
                </div>
                <span className="text-sm font-medium w-12 text-right">12</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Due Diligence</span>
              <div className="flex items-center gap-4">
                <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '25%' }} />
                </div>
                <span className="text-sm font-medium w-12 text-right">7</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm">Financing</span>
              <div className="flex items-center gap-4">
                <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 rounded-full" style={{ width: '15%' }} />
                </div>
                <span className="text-sm font-medium w-12 text-right">4</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
