import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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
import { ArrowLeft, DollarSign, TrendingUp, AlertCircle } from "lucide-react"

export default function OpportunityDetailPage({ params }: { params: { id: string } }) {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/opportunities">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold">142 Taylors Mill Rd</h1>
            <p className="text-muted-foreground">Scattered Lot • Under Contract</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Edit</Button>
          <Button>Convert to Project</Button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Purchase Price</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,000</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">ARV</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$375,000</div>
            <p className="text-xs text-muted-foreground">After renovation value</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Deal Verdict</CardTitle>
            <AlertCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">STRONG</div>
            <p className="text-xs text-muted-foreground">11.2% projected margin</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Days in Stage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Under Contract</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="deal-analyzer">Deal Analyzer</TabsTrigger>
          <TabsTrigger value="workflow">Workflow</TabsTrigger>
          <TabsTrigger value="contacts">Contacts</TabsTrigger>
          <TabsTrigger value="documents">Documents</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Property Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>Address</Label>
                <p className="text-sm font-medium">142 Taylors Mill Rd</p>
              </div>
              <div>
                <Label>City, State, Zip</Label>
                <p className="text-sm font-medium">Taylors, SC 29687</p>
              </div>
              <div>
                <Label>County</Label>
                <p className="text-sm font-medium">Greenville</p>
              </div>
              <div>
                <Label>Parcel/TMS Number</Label>
                <p className="text-sm font-medium">0512-05-24-9876</p>
              </div>
              <div>
                <Label>Zoning</Label>
                <p className="text-sm font-medium">R-6</p>
              </div>
              <div>
                <Label>Build Type</Label>
                <p className="text-sm font-medium">Single Family</p>
              </div>
              <div>
                <Label>Lot Dimensions</Label>
                <p className="text-sm font-medium">50' × 120' (6,000 SF)</p>
              </div>
              <div>
                <Label>Utilities</Label>
                <p className="text-sm font-medium">Water ✓ Sewer ✓ Power ✓</p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Deal Information</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div>
                <Label>Opportunity Type</Label>
                <p className="text-sm font-medium">Scattered Lot</p>
              </div>
              <div>
                <Label>Source</Label>
                <p className="text-sm font-medium">MLS</p>
              </div>
              <div>
                <Label>Assigned To</Label>
                <p className="text-sm font-medium">John Smith</p>
              </div>
              <div>
                <Label>Owner Entity</Label>
                <p className="text-sm font-medium">Red Cedar Scattered Lot Fund I</p>
              </div>
              <div>
                <Label>Floor Plan</Label>
                <p className="text-sm font-medium">Dogwood (1,541 SF, 3/2.5)</p>
              </div>
              <div>
                <Label>Upgrade Package</Label>
                <p className="text-sm font-medium">Classic</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deal-analyzer" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Deal Analyzer Results</CardTitle>
              <CardDescription>Complete financial analysis for this opportunity</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Cost Summary */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Section 1 - Cost Summary</h3>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Sticks & Bricks</TableCell>
                      <TableCell className="text-right">$124,031</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Upgrades (Classic)</TableCell>
                      <TableCell className="text-right">$4,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Lot Preparation</TableCell>
                      <TableCell className="text-right">$8,500</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Municipality Soft Costs</TableCell>
                      <TableCell className="text-right">$10,875</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Builder Fee (10%)</TableCell>
                      <TableCell className="text-right">$25,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Contingency (5%)</TableCell>
                      <TableCell className="text-right">$10,000</TableCell>
                    </TableRow>
                    <TableRow className="font-bold border-t">
                      <TableCell>Total Contract Cost</TableCell>
                      <TableCell className="text-right">$182,406</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Project Cost */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Section 3 - Total Project Cost</h3>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Purchase Price</TableCell>
                      <TableCell className="text-right">$45,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Contract Cost</TableCell>
                      <TableCell className="text-right">$182,406</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Fixed Costs</TableCell>
                      <TableCell className="text-right">$6,250</TableCell>
                    </TableRow>
                    <TableRow className="font-bold border-t">
                      <TableCell>Total Project Cost</TableCell>
                      <TableCell className="text-right">$233,656</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>

              {/* Deal Results */}
              <div>
                <h3 className="text-lg font-semibold mb-3">Section 5 - Deal Results</h3>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell>Total All-In Cost</TableCell>
                      <TableCell className="text-right">$245,234</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Total Revenue (ARV)</TableCell>
                      <TableCell className="text-right">$375,000</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Selling Costs (8.5%)</TableCell>
                      <TableCell className="text-right">$31,875</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Net Sales Proceeds</TableCell>
                      <TableCell className="text-right">$343,125</TableCell>
                    </TableRow>
                    <TableRow className="font-bold text-green-600 border-t">
                      <TableCell>Net Profit</TableCell>
                      <TableCell className="text-right">$97,891</TableCell>
                    </TableRow>
                    <TableRow className="font-bold text-green-600">
                      <TableCell>Net Profit Margin</TableCell>
                      <TableCell className="text-right">26.1%</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-lg font-bold text-green-800">VERDICT: STRONG DEAL</p>
                  <p className="text-sm text-green-600">Margin above 10% threshold</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="workflow" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Scattered Lot Workflow</CardTitle>
              <CardDescription>Current milestone: MILESTONE 3 - Under Contract - Due Diligence</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-600">✓ Milestone 1: Pre-Offer Complete</h4>
                  <p className="text-sm text-muted-foreground">Completed 15 days ago</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-green-600">✓ Milestone 2: Offer and Negotiation Complete</h4>
                  <p className="text-sm text-muted-foreground">Completed 12 days ago</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-blue-600">→ Milestone 3: Due Diligence (Active)</h4>
                  <p className="text-sm text-muted-foreground">7 of 10 tasks complete • 2 days remaining</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-sm">✓ Verify comparable sales</p>
                    <p className="text-sm">✓ Obtain sales team sign-off</p>
                    <p className="text-sm">✓ Send survey request</p>
                    <p className="text-sm">→ Review title commitment (in progress)</p>
                    <p className="text-sm text-muted-foreground">○ Environmental review</p>
                  </div>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-600">Milestone 4: Financing</h4>
                  <p className="text-sm text-muted-foreground">Not started</p>
                </div>
                <div className="border-l-4 border-gray-300 pl-4">
                  <h4 className="font-semibold text-gray-600">Milestone 5: Closing Preparation</h4>
                  <p className="text-sm text-muted-foreground">Not started</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="contacts">
          <Card>
            <CardHeader>
              <CardTitle>Assigned Contacts</CardTitle>
              <CardDescription>Contacts and roles for this opportunity</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Company</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Email</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Jane Seller</TableCell>
                    <TableCell>Seller</TableCell>
                    <TableCell>—</TableCell>
                    <TableCell>(864) 555-0123</TableCell>
                    <TableCell>jane.seller@email.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Bob Agent</TableCell>
                    <TableCell>Listing Agent</TableCell>
                    <TableCell>Keller Williams</TableCell>
                    <TableCell>(864) 555-0456</TableCell>
                    <TableCell>bob@kw.com</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Sarah Attorney</TableCell>
                    <TableCell>Closing Attorney</TableCell>
                    <TableCell>Smith & Associates</TableCell>
                    <TableCell>(864) 555-0789</TableCell>
                    <TableCell>sarah@smithlaw.com</TableCell>
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
              <CardDescription>All documents for this opportunity</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">Purchase Contract.pdf</p>
                    <p className="text-sm text-muted-foreground">Uploaded 12 days ago</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">Site Analysis Packet.pdf</p>
                    <p className="text-sm text-muted-foreground">Uploaded 15 days ago</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
                <div className="flex items-center justify-between p-3 border rounded">
                  <div>
                    <p className="font-medium">Comparable Sales.xlsx</p>
                    <p className="text-sm text-muted-foreground">Uploaded 15 days ago</p>
                  </div>
                  <Button variant="ghost" size="sm">View</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notes">
          <Card>
            <CardHeader>
              <CardTitle>Notes & Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-sm font-medium">John Smith added a note</p>
                  <p className="text-sm text-muted-foreground">2 hours ago</p>
                  <p className="text-sm mt-1">Survey request sent to ABC Surveying. Expecting results within 7 days.</p>
                </div>
                <div className="border-l-2 border-green-500 pl-4">
                  <p className="text-sm font-medium">Task completed: Verify comparable sales</p>
                  <p className="text-sm text-muted-foreground">1 day ago</p>
                  <p className="text-sm mt-1">Confirmed ARV of $375,000 based on 5 recent comps.</p>
                </div>
                <div className="border-l-2 border-blue-500 pl-4">
                  <p className="text-sm font-medium">Stage changed to Under Contract</p>
                  <p className="text-sm text-muted-foreground">12 days ago</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
