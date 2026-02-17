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

export default function ProjectsPage() {
  const projects = [
    {
      id: "1",
      projectNumber: "26-042",
      name: "142 Taylors Mill Rd",
      type: "Scattered Lot",
      status: "Construction",
      ownerEntity: "Fund I",
      totalBudget: "$233,656",
      currentSpend: "$145,230",
      percentComplete: 62,
    },
    {
      id: "2",
      projectNumber: "26-038",
      name: "Oak Ridge Development",
      type: "Lot Development",
      status: "Active",
      ownerEntity: "Oslo Development LLC",
      totalBudget: "$3,200,000",
      currentSpend: "$1,876,450",
      percentComplete: 59,
    },
    {
      id: "3",
      projectNumber: "26-051",
      name: "Berea Commons Phase 2",
      type: "Community Development",
      status: "Pre-Construction",
      ownerEntity: "Fund II",
      totalBudget: "$5,400,000",
      currentSpend: "$0",
      percentComplete: 0,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground">
            Owner/developer-level tracking from contract through disposition
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Active Projects</CardTitle>
          <CardDescription>Filter and search projects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by project number, name, or address..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">Filters</Button>
          </div>
        </CardContent>
      </Card>

      {/* Projects Grid */}
      <div className="grid gap-4">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-4">
                    <div>
                      <p className="text-sm text-muted-foreground">{project.projectNumber}</p>
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-sm text-muted-foreground">{project.type}</span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800">
                          {project.status}
                        </span>
                        <span className="text-sm text-muted-foreground">•</span>
                        <span className="text-sm text-muted-foreground">{project.ownerEntity}</span>
                      </div>
                    </div>
                  </div>

                  {/* Budget Progress */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Budget Progress</span>
                      <span className="font-medium">{project.currentSpend} of {project.totalBudget}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all" 
                        style={{ width: `${project.percentComplete}%` }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">{project.percentComplete}% complete</p>
                  </div>
                </div>

                <div className="ml-4">
                  <Link href={`/projects/${project.id}`}>
                    <Button>View Details</Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$8.8M</div>
            <p className="text-xs text-muted-foreground">Across all active projects</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Total Spend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$2.0M</div>
            <p className="text-xs text-muted-foreground">Year to date</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Avg Completion</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">40%</div>
            <p className="text-xs text-muted-foreground">Average across all projects</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
