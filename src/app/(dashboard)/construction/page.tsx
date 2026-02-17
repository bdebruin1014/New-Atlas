import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Plus, Search } from "lucide-react"
import Link from "next/link"

export default function ConstructionPage() {
  const jobs = [
    {
      id: "1",
      jobNumber: "26-042",
      name: "142 Taylors Mill Rd",
      client: "Fund I (Internal)",
      status: "Active",
      units: 1,
      contractValue: "$182,406",
      costToDate: "$112,340",
      percentComplete: 62,
      superintendent: "Mike Davis",
    },
    {
      id: "2",
      jobNumber: "26-051",
      name: "Berea Commons Phase 2",
      client: "Fund II (Internal)",
      status: "Pre-Construction",
      units: 12,
      contractValue: "$2,188,872",
      costToDate: "$0",
      percentComplete: 0,
      superintendent: "Sarah Johnson",
    },
    {
      id: "3",
      jobNumber: "26-045",
      name: "Custom Build - Oak Street",
      client: "Johnson Family (Third-Party)",
      status: "Active",
      units: 1,
      contractValue: "$267,500",
      costToDate: "$156,230",
      percentComplete: 58,
      superintendent: "Mike Davis",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Construction Management</h1>
          <p className="text-muted-foreground">
            Red Cedar GC operating system - Jobs and Units
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Job
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32</div>
            <p className="text-xs text-muted-foreground">45 units in production</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Contract Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5.2M</div>
            <p className="text-xs text-muted-foreground">Active jobs</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open POs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">128</div>
            <p className="text-xs text-muted-foreground">$487K committed</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Pending Inspections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">14</div>
            <p className="text-xs text-muted-foreground">This week</p>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>All Jobs</CardTitle>
          <CardDescription>Search and filter construction jobs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by job number, name, or client..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">Filters</Button>
          </div>
        </CardContent>
      </Card>

      {/* Jobs Grid */}
      <div className="grid gap-4">
        {jobs.map((job) => (
          <Card key={job.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{job.jobNumber}</p>
                      <h3 className="text-lg font-semibold">{job.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">{job.client}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800">
                          {job.status}
                        </span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{job.units} unit{job.units > 1 ? 's' : ''}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">Super: {job.superintendent}</span>
                      </div>
                    </div>
                  </div>

                  {/* Progress */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Cost Progress</span>
                      <span className="font-medium">{job.costToDate} of {job.contractValue}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-green-500 rounded-full transition-all" 
                        style={{ width: `${job.percentComplete}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{job.percentComplete}% complete</p>
                  </div>
                </div>

                <div className="ml-4">
                  <Link href={`/construction/${job.id}`}>
                    <Button>View Job</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
