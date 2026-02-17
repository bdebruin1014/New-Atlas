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

export default function ContactsPage() {
  const contacts = [
    {
      id: "1",
      name: "Sarah Attorney",
      company: "Smith & Associates",
      types: ["Attorney/Legal"],
      email: "sarah@smithlaw.com",
      phone: "(864) 555-0789",
      status: "Active",
    },
    {
      id: "2",
      name: "Mike Davis",
      company: "Red Cedar Homes",
      types: ["Superintendent", "Project Manager"],
      email: "mdavis@redcedar.com",
      phone: "(864) 555-0234",
      status: "Active",
    },
    {
      id: "3",
      name: "ABC Surveying",
      company: "ABC Surveying Inc.",
      types: ["Surveyor"],
      email: "info@abcsurveying.com",
      phone: "(864) 555-0456",
      status: "Active",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Contacts</h1>
          <p className="text-muted-foreground">
            Global contacts directory segregated by contact type
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Contact
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>All Contacts</CardTitle>
          <CardDescription>Search and filter contacts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by name, company, or contact type..."
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">Filter by Type</Button>
            <Button variant="outline">Filter by Status</Button>
          </div>
        </CardContent>
      </Card>

      {/* Contacts Table */}
      <Card>
        <CardHeader>
          <CardTitle>Contact Directory</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Company</TableHead>
                <TableHead>Contact Types</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead>Status</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {contacts.map((contact) => (
                <TableRow key={contact.id}>
                  <TableCell className="font-medium">{contact.name}</TableCell>
                  <TableCell>{contact.company}</TableCell>
                  <TableCell>
                    <div className="flex gap-1 flex-wrap">
                      {contact.types.map((type, i) => (
                        <span 
                          key={i}
                          className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </TableCell>
                  <TableCell>{contact.email}</TableCell>
                  <TableCell>{contact.phone}</TableCell>
                  <TableCell>
                    <span className="inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium bg-green-100 text-green-800">
                      {contact.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm">
                      View
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader>
            <CardTitle>Total Contacts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">247</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Subcontractors</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">89</div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Professionals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">42</div>
            <p className="text-xs text-muted-foreground">Attorneys, Engineers, etc.</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Active</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">94.7% of total</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
