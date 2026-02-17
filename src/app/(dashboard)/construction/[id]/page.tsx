import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Link from "next/link"
import { ArrowLeft, DollarSign, AlertCircle, CheckCircle } from "lucide-react"

export default function JobDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/construction">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Job 26-042: 142 Taylors Mill Rd</h1>
            <p className="text-muted-foreground">Fund I (Internal) • Active • 1 Unit</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Edit Job</Button>
          <Button>Submit Draw</Button>
        </div>
      </div>

      {/* Job Dashboard */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Contract Value</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$182,406</div>
            <p className="text-xs text-muted-foreground">Cost-Plus Fixed Fee</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Cost to Date</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$112,340</div>
            <p className="text-xs text-muted-foreground">62% of contract</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Open POs</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">$34,250 committed</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Milestone</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-xl font-bold">Drywall</div>
            <p className="text-xs text-muted-foreground">Starts in 3 days</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="units" className="space-y-4">
        <TabsList>
          <TabsTrigger value="units">Units</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="pos">Purchase Orders</TabsTrigger>
          <TabsTrigger value="change-orders">Change Orders</TabsTrigger>
          <TabsTrigger value="inspections">Inspections</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="units" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Unit 26-042-01</CardTitle>
              <CardDescription>142 Taylors Mill Rd • Dogwood Plan (1,541 SF) • Classic Upgrade</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Budget Summary */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Budget Summary</h3>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Base Sticks & Bricks</TableCell>
                      <TableCell className="text-right">$124,031</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Upgrade Cost (Classic)</TableCell>
                      <TableCell className="text-right">$4,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Lot Preparation</TableCell>
                      <TableCell className="text-right">$8,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Soft Costs</TableCell>
                      <TableCell className="text-right">$10,875</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Builder Fee</TableCell>
                      <TableCell className="text-right">$25,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Contingency</TableCell>
                      <TableCell className="text-right">$10,000</TableCell>
                    </TableRow>
                    <TableRow className="font-bold border-t">
                      <TableCell>Total Budget</TableCell>
                      <TableCell className="text-right">$182,406</TableCell>
                    </TableRow>
                    <TableRow className="text-blue-600">
                      <TableCell>Total Committed (POs)</TableCell>
                      <TableCell className="text-right">$146,590</TableCell>
                    </TableRow>
                    <TableRow className="text-green-600">
                      <TableCell>Total Actual (Paid)</TableCell>
                      <TableCell className="text-right">$112,340</TableCell>
                    </TableRow>
                    <TableRow className="font-bold">
                      <TableCell>Variance (Budget - Actual)</TableCell>
                      <TableCell className="text-right">$70,066</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Key Dates */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Key Dates</h3>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Permit Issued</p>
                    <p className="font-medium">Jan 15, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Construction Start</p>
                    <p className="font-medium">Jan 22, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Projected Completion</p>
                    <p className="font-medium">May 21, 2026</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Warranty Expiration</p>
                    <p className="font-medium">May 21, 2027</p>
                  </div>
                </div>
              </div>

              {/* Current Milestone */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Current Milestone: Phase 9 - Insulation</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span>Progress</span>
                    <span className="font-medium">80% Complete</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full" style={{ width: '80%' }} />
                  </div>
                  <div className="grid gap-2 mt-4">
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Planned Start: Feb 10, 2026</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      <span>Actual Start: Feb 10, 2026</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 text-blue-500 mr-2" />
                      <span>Planned End: Feb 13, 2026</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <AlertCircle className="h-4 w-4 text-orange-500 mr-2" />
                      <span>Required Inspection: Insulation Inspection - Scheduled for Feb 13</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          <Card>
            <CardHeader>
              <CardTitle>Construction Schedule - Unit 26-042-01</CardTitle>
              <CardDescription>16-Phase milestone progression</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Phase</TableHead>
                    <TableHead>Milestone</TableHead>
                    <TableHead>Planned Start</TableHead>
                    <TableHead>Planned End</TableHead>
                    <TableHead>Actual Start</TableHead>
                    <TableHead>Actual End</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Pre-Construction</TableCell>
                    <TableCell>Jan 15</TableCell>
                    <TableCell>Jan 22</TableCell>
                    <TableCell>Jan 15</TableCell>
                    <TableCell>Jan 20</TableCell>
                    <TableCell><span className="text-green-600">✓ Complete</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Site Work</TableCell>
                    <TableCell>Jan 23</TableCell>
                    <TableCell>Jan 30</TableCell>
                    <TableCell>Jan 23</TableCell>
                    <TableCell>Jan 29</TableCell>
                    <TableCell><span className="text-green-600">✓ Complete</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>3</TableCell>
                    <TableCell>Foundation</TableCell>
                    <TableCell>Jan 31</TableCell>
                    <TableCell>Feb 7</TableCell>
                    <TableCell>Jan 31</TableCell>
                    <TableCell>Feb 6</TableCell>
                    <TableCell><span className="text-green-600">✓ Complete</span></TableCell>
                  </TableRow>
                  <TableRow className="bg-blue-50">
                    <TableCell>9</TableCell>
                    <TableCell>Insulation</TableCell>
                    <TableCell>Feb 10</TableCell>
                    <TableCell>Feb 13</TableCell>
                    <TableCell>Feb 10</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell><span className="text-blue-600">→ In Progress</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>10</TableCell>
                    <TableCell>Drywall</TableCell>
                    <TableCell>Feb 14</TableCell>
                    <TableCell>Feb 24</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell><span className="text-gray-600">Not Started</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>11</TableCell>
                    <TableCell>Trim & Interior Finish</TableCell>
                    <TableCell>Feb 25</TableCell>
                    <TableCell>Mar 9</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell><span className="text-gray-600">Not Started</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="pos">
          <Card>
            <CardHeader>
              <CardTitle>Purchase Orders</CardTitle>
              <CardDescription>All POs for this job</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>PO Number</TableHead>
                    <TableHead>Trade Category</TableHead>
                    <TableHead>Vendor</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Lien Waiver</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>PO-26-0421</TableCell>
                    <TableCell>Foundation</TableCell>
                    <TableCell>ABC Concrete</TableCell>
                    <TableCell>$18,500</TableCell>
                    <TableCell><span className="text-green-600">Paid</span></TableCell>
                    <TableCell><span className="text-green-600">Unconditional</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>PO-26-0422</TableCell>
                    <TableCell>Framing Labor</TableCell>
                    <TableCell>XYZ Framing</TableCell>
                    <TableCell>$24,800</TableCell>
                    <TableCell><span className="text-green-600">Paid</span></TableCell>
                    <TableCell><span className="text-green-600">Unconditional</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>PO-26-0423</TableCell>
                    <TableCell>Insulation</TableCell>
                    <TableCell>Insul-Pro</TableCell>
                    <TableCell>$6,200</TableCell>
                    <TableCell><span className="text-blue-600">Work Complete</span></TableCell>
                    <TableCell><span className="text-orange-600">Conditional</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>PO-26-0424</TableCell>
                    <TableCell>Drywall Material</TableCell>
                    <TableCell>Drywall Supply Co</TableCell>
                    <TableCell>$8,400</TableCell>
                    <TableCell><span className="text-gray-600">Issued</span></TableCell>
                    <TableCell><span className="text-gray-600">None</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="change-orders">
          <Card>
            <CardHeader>
              <CardTitle>Change Orders</CardTitle>
              <CardDescription>All change orders for this job</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>CO Number</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Reason</TableHead>
                    <TableHead>Cost Impact</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>CO-26-1247</TableCell>
                    <TableCell>Upgrade to granite countertops</TableCell>
                    <TableCell>Owner Request</TableCell>
                    <TableCell>+$3,250</TableCell>
                    <TableCell><span className="text-green-600">Approved</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>CO-26-1248</TableCell>
                    <TableCell>Additional foundation waterproofing</TableCell>
                    <TableCell>Field Condition</TableCell>
                    <TableCell>+$1,800</TableCell>
                    <TableCell><span className="text-orange-600">Under Review</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="inspections">
          <Card>
            <CardHeader>
              <CardTitle>Inspections</CardTitle>
              <CardDescription>Inspection history and schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Type</TableHead>
                    <TableHead>Scheduled Date</TableHead>
                    <TableHead>Actual Date</TableHead>
                    <TableHead>Inspector</TableHead>
                    <TableHead>Result</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Footer/Foundation</TableCell>
                    <TableCell>Feb 5, 2026</TableCell>
                    <TableCell>Feb 5, 2026</TableCell>
                    <TableCell>City of Greenville</TableCell>
                    <TableCell><span className="text-green-600">✓ Pass</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Framing</TableCell>
                    <TableCell>Feb 8, 2026</TableCell>
                    <TableCell>Feb 8, 2026</TableCell>
                    <TableCell>City of Greenville</TableCell>
                    <TableCell><span className="text-green-600">✓ Pass</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Insulation</TableCell>
                    <TableCell>Feb 13, 2026</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell>City of Greenville</TableCell>
                    <TableCell><span className="text-orange-600">Scheduled</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="documents">
          <Card>
            <CardHeader>
              <CardTitle>Documents</CardTitle>
              <CardDescription>All documents for this job</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">Construction Agreement - Signed.pdf</p>
                    <p className="text-sm text-muted-foreground">Uploaded Jan 12, 2026</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">Plot Plan - Approved.pdf</p>
                    <p className="text-sm text-muted-foreground">Uploaded Jan 10, 2026</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">Building Permit.pdf</p>
                    <p className="text-sm text-muted-foreground">Uploaded Jan 15, 2026</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
