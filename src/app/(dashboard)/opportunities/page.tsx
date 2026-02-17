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

export default function OpportunitiesPage() {
  const opportunities = [
    {
      id: "1",
      name: "142 Taylors Mill Rd",
      type: "Scattered Lot",
      stage: "Under Contract",
      assignedTo: "John Smith",
      entity: "Fund I",
      projectedValue: "$245,000",
      daysInStage: 12,
    },
    {
      id: "2",
      name: "Lot 5 Berea Commons",
      type: "Lot Purchase",
      stage: "Due Diligence",
      assignedTo: "Sarah Johnson",
      entity: "Fund II",
      projectedValue: "$189,000",
      daysInStage: 8,
    },
    {
      id: "3",
      name: "Oak Ridge Development",
      type: "Lot Development",
      stage: "Feasibility",
      assignedTo: "Mike Davis",
      entity: "Oslo Development LLC",
      projectedValue: "$3,200,000",
      daysInStage: 45,
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Opportunities</h1>
          <p className="text-muted-foreground">
            Manage your deal pipeline from identification through closing
          </p>
        </div>
        <Link href="/opportunities/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Opportunity
          </Button>
        </Link>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardHeader>
          <CardTitle>Pipeline Overview</CardTitle>
          <CardDescription>Filter and search opportunities</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by address, type, or stage..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">Filters</Button>
            <Button variant="outline">Kanban View</Button>
          </div>
        </CardContent>
      </Card>

      {/* Opportunities Table */}
      <Card>
        <CardHeader>
          <CardTitle>Active Opportunities</CardTitle>
          <CardDescription>All opportunities in active stages</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Stage</TableHead>
                <TableHead>Assigned To</TableHead>
                <TableHead>Entity</TableHead>
                <TableHead>Projected Value</TableHead>
                <TableHead>Days in Stage</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {opportunities.map((opp) => (
                <TableRow key={opp.id}>
                  <TableCell className="font-medium">{opp.name}</TableCell>
                  <TableCell>{opp.type}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-blue-100 text-blue-800">
                      {opp.stage}
                    </span>
                  </TableCell>
                  <TableCell>{opp.assignedTo}</TableCell>
                  <TableCell>{opp.entity}</TableCell>
                  <TableCell>{opp.projectedValue}</TableCell>
                  <TableCell>{opp.daysInStage}</TableCell>
                  <TableCell>
                    <Link href={`/opportunities/${opp.id}`}>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Analytics */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Pipeline Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">$8.4M</div>
            <p className="text-xs text-muted-foreground">Total projected value</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Conversion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">68%</div>
            <p className="text-xs text-muted-foreground">Opportunities to projects</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Avg Days to Close</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">Scattered lot average</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
