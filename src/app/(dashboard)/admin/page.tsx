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
import { Plus } from "lucide-react"

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Admin</h1>
          <p className="text-muted-foreground">
            Configuration, permissions, integrations, templates
          </p>
        </div>
      </div>

      <Tabs defaultValue="floor-plans" className="space-y-4">
        <TabsList>
          <TabsTrigger value="floor-plans">Floor Plans</TabsTrigger>
          <TabsTrigger value="municipalities">Municipalities</TabsTrigger>
          <TabsTrigger value="entities">Entities</TabsTrigger>
          <TabsTrigger value="teams">Teams</TabsTrigger>
          <TabsTrigger value="integrations">Integrations</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="floor-plans" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Floor Plan Library</CardTitle>
              <CardDescription>Complete library of available floor plans</CardDescription>
              <Button className="ml-auto">
                <Plus className="mr-2 h-4 w-4" />
                Add Floor Plan
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Plan Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>SF</TableHead>
                    <TableHead>Bed/Bath</TableHead>
                    <TableHead>Base Cost</TableHead>
                    <TableHead>Classic</TableHead>
                    <TableHead>Elegance</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Dogwood</TableCell>
                    <TableCell>SFH</TableCell>
                    <TableCell>1,541</TableCell>
                    <TableCell>3/2.5</TableCell>
                    <TableCell>$124,031</TableCell>
                    <TableCell>+$4,000</TableCell>
                    <TableCell>+$8,300</TableCell>
                    <TableCell><span className="text-green-600">Active</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Magnolia</TableCell>
                    <TableCell>SFH</TableCell>
                    <TableCell>2,771</TableCell>
                    <TableCell>4/3</TableCell>
                    <TableCell>$178,184</TableCell>
                    <TableCell>+$4,600</TableCell>
                    <TableCell>+$11,100</TableCell>
                    <TableCell><span className="text-green-600">Active</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Palmetto</TableCell>
                    <TableCell>Townhome</TableCell>
                    <TableCell>1,304</TableCell>
                    <TableCell>3/2.5</TableCell>
                    <TableCell>$110,043</TableCell>
                    <TableCell>+$3,900</TableCell>
                    <TableCell>+$8,200</TableCell>
                    <TableCell><span className="text-green-600">Active</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Jasmine</TableCell>
                    <TableCell>Townhome</TableCell>
                    <TableCell>1,500</TableCell>
                    <TableCell>3/2.5</TableCell>
                    <TableCell>$127,142</TableCell>
                    <TableCell>+$3,800</TableCell>
                    <TableCell>+$8,000</TableCell>
                    <TableCell><span className="text-green-600">Active</span></TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Holly</TableCell>
                    <TableCell>SFH</TableCell>
                    <TableCell>2,000</TableCell>
                    <TableCell>4/2.5</TableCell>
                    <TableCell>$144,355</TableCell>
                    <TableCell>+$4,000</TableCell>
                    <TableCell>+$8,500</TableCell>
                    <TableCell><span className="text-green-600">Active</span></TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="municipalities">
          <Card>
            <CardHeader>
              <CardTitle>Municipality / Jurisdiction Table</CardTitle>
              <CardDescription>Soft costs and fees by municipality</CardDescription>
              <Button className="ml-auto">
                <Plus className="mr-2 h-4 w-4" />
                Add Municipality
              </Button>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>State</TableHead>
                    <TableHead>Water Tap</TableHead>
                    <TableHead>Sewer Tap</TableHead>
                    <TableHead>Total W/S Fees</TableHead>
                    <TableHead>Impact Fees</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>City of Greenville</TableCell>
                    <TableCell>SC</TableCell>
                    <TableCell>$2,500</TableCell>
                    <TableCell>$2,800</TableCell>
                    <TableCell>$5,300</TableCell>
                    <TableCell>$3,200</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Greenville County</TableCell>
                    <TableCell>SC</TableCell>
                    <TableCell>$2,200</TableCell>
                    <TableCell>$2,500</TableCell>
                    <TableCell>$4,700</TableCell>
                    <TableCell>$2,800</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>City of Spartanburg</TableCell>
                    <TableCell>SC</TableCell>
                    <TableCell>$2,400</TableCell>
                    <TableCell>$2,600</TableCell>
                    <TableCell>$5,000</TableCell>
                    <TableCell>$3,000</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Town of Travelers Rest</TableCell>
                    <TableCell>SC</TableCell>
                    <TableCell>$2,300</TableCell>
                    <TableCell>$2,700</TableCell>
                    <TableCell>$5,000</TableCell>
                    <TableCell>$2,500</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="entities">
          <Card>
            <CardHeader>
              <CardTitle>Entity Hierarchy</CardTitle>
              <CardDescription>Organizational structure and entities</CardDescription>
              <Button className="ml-auto">
                <Plus className="mr-2 h-4 w-4" />
                Add Entity
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-700 pl-4">
                  <h4 className="font-semibold">Olive Brynn LLC</h4>
                  <p className="text-sm text-muted-foreground">Holding Company • LLC</p>
                  
                  <div className="mt-2 ml-4 space-y-2">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Red Cedar Homes SC LLC</h4>
                      <p className="text-sm text-muted-foreground">Operating Company • LLC</p>
                    </div>
                    
                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold">Red Cedar Homes NC LLC</h4>
                      <p className="text-sm text-muted-foreground">Operating Company • LLC</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Red Cedar Scattered Lot Fund I</h4>
                      <p className="text-sm text-muted-foreground">Fund/Syndication • LLC</p>
                    </div>
                    
                    <div className="border-l-4 border-green-500 pl-4">
                      <h4 className="font-semibold">Red Cedar Scattered Lot Fund II</h4>
                      <p className="text-sm text-muted-foreground">Fund/Syndication • LLC</p>
                    </div>
                    
                    <div className="border-l-4 border-purple-500 pl-4">
                      <h4 className="font-semibold">Oslo Development LLC</h4>
                      <p className="text-sm text-muted-foreground">Single Purpose Entity • LLC</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="teams">
          <Card>
            <CardHeader>
              <CardTitle>Teams</CardTitle>
              <CardDescription>User groups and team assignments</CardDescription>
              <Button className="ml-auto">
                <Plus className="mr-2 h-4 w-4" />
                Create Team
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Acquisitions SC Team</h4>
                    <p className="text-sm text-muted-foreground">5 members</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Red Cedar PM Team</h4>
                    <p className="text-sm text-muted-foreground">8 members</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-semibold">Accounting Team</h4>
                    <p className="text-sm text-muted-foreground">3 members</p>
                  </div>
                  <Button variant="outline" size="sm">Manage</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="integrations">
          <Card>
            <CardHeader>
              <CardTitle>Integrations</CardTitle>
              <CardDescription>Third-party integrations and API connections</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">Microsoft SharePoint</h4>
                  <p className="text-sm text-muted-foreground">Document management and storage</p>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800 mt-2">
                    Connected
                  </span>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">Microsoft Outlook</h4>
                  <p className="text-sm text-muted-foreground">Email and calendar synchronization</p>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-green-100 text-green-800 mt-2">
                    Connected
                  </span>
                </div>
                <Button variant="outline">Configure</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">Akaunting</h4>
                  <p className="text-sm text-muted-foreground">Accounting software integration</p>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 mt-2">
                    Not Connected
                  </span>
                </div>
                <Button variant="outline">Setup</Button>
              </div>
              
              <div className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h4 className="font-semibold">DocuSeal</h4>
                  <p className="text-sm text-muted-foreground">E-signature platform</p>
                  <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 mt-2">
                    Not Connected
                  </span>
                </div>
                <Button variant="outline">Setup</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Organization Settings</CardTitle>
              <CardDescription>System-wide configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-2">Company Information</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Company Name</p>
                    <p className="font-medium">Red Cedar Homes</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Default Entity</p>
                    <p className="font-medium">Olive Brynn LLC</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Timezone</p>
                    <p className="font-medium">Eastern Time (ET)</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Fiscal Year Start</p>
                    <p className="font-medium">January 1</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Deal Analyzer Thresholds</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Strong Deal (Green)</p>
                    <p className="font-medium">&gt; 10% Margin</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Good Deal (Blue)</p>
                    <p className="font-medium">7% - 10% Margin</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Marginal (Yellow)</p>
                    <p className="font-medium">5% - 7% Margin</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">No-Go (Red)</p>
                    <p className="font-medium">&lt; 5% Margin</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Default Financial Assumptions</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <div>
                    <p className="text-sm text-muted-foreground">LTC Ratio</p>
                    <p className="font-medium">85%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Construction Period</p>
                    <p className="font-medium">120 days</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Default Selling Costs</p>
                    <p className="font-medium">8.5%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cost of Capital Rate</p>
                    <p className="font-medium">16% annual</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Default Retainage</p>
                    <p className="font-medium">10%</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">PO Approval Threshold</p>
                    <p className="font-medium">$5,000</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
