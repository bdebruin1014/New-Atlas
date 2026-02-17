# ATLAS Platform Architecture

## Overview

ATLAS is a full-stack Next.js application built with a modern, scalable architecture designed for enterprise construction management operations.

---

## Technology Stack

### Frontend Layer
```
┌─────────────────────────────────────────┐
│         User Interface (Browser)        │
│  Next.js 14 + React 18 + TypeScript     │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│          Component Library              │
│  Radix UI + Tailwind CSS + Shadcn       │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│          State Management               │
│  React Query + Zustand                  │
└─────────────────────────────────────────┘
```

**Key Technologies:**
- **Next.js 14** — App Router, Server Components, API Routes
- **TypeScript 5.3** — Type safety across entire stack
- **Tailwind CSS 3** — Utility-first styling
- **Radix UI** — Accessible component primitives
- **React Query** — Server state synchronization
- **Zustand** — Client-side state management
- **Recharts** — Data visualization
- **React Hook Form** — Form handling with validation

### Backend Layer
```
┌─────────────────────────────────────────┐
│          Next.js API Routes             │
│    RESTful endpoints + business logic   │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│          Prisma ORM Layer               │
│    Type-safe database queries           │
└─────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────┐
│         PostgreSQL Database             │
│    Relational data + complex queries    │
└─────────────────────────────────────────┘
```

**Key Technologies:**
- **Next.js API Routes** — Serverless API endpoints
- **Prisma ORM 5.10** — Type-safe database access with migrations
- **PostgreSQL 14+** — Primary data store
- **JWT + bcryptjs** — Authentication and security
- **Zod** — Runtime validation

### Integration Layer
```
┌──────────────────┐  ┌──────────────────┐
│   SharePoint     │  │  Microsoft 365   │
│   (Documents)    │  │  (Email/Calendar)│
└──────────────────┘  └──────────────────┘
         ↓                     ↓
┌─────────────────────────────────────────┐
│        ATLAS Integration Layer          │
└─────────────────────────────────────────┘
         ↓                     ↓
┌──────────────────┐  ┌──────────────────┐
│    Akaunting     │  │    DocuSeal      │
│  (Accounting)    │  │  (E-Signature)   │
└──────────────────┘  └──────────────────┘
```

---

## Application Architecture

### Directory Structure

```
New-Atlas/
├── prisma/
│   ├── schema.prisma           # Database schema
│   └── seed.ts                 # Initial data
│
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (dashboard)/        # Authenticated routes
│   │   │   ├── layout.tsx      # Dashboard layout with nav
│   │   │   ├── page.tsx        # Dashboard home
│   │   │   ├── opportunities/  # Module pages
│   │   │   ├── projects/
│   │   │   ├── construction/
│   │   │   ├── accounting/
│   │   │   ├── contacts/
│   │   │   ├── calendar/
│   │   │   └── admin/
│   │   │
│   │   ├── api/                # API endpoints
│   │   │   ├── auth/           # Authentication
│   │   │   ├── opportunities/
│   │   │   ├── projects/
│   │   │   ├── construction/
│   │   │   ├── accounting/
│   │   │   ├── contacts/
│   │   │   └── admin/
│   │   │
│   │   ├── layout.tsx          # Root layout
│   │   └── globals.css         # Global styles
│   │
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── ...
│   │   │
│   │   └── layout/             # Layout components
│   │       ├── sidebar.tsx
│   │       ├── header.tsx
│   │       └── ...
│   │
│   ├── lib/
│   │   ├── prisma.ts           # Prisma client singleton
│   │   ├── auth.ts             # Auth utilities
│   │   ├── calculations.ts     # Business calculations
│   │   ├── utils.ts            # General utilities
│   │   ├── validators.ts       # Zod schemas
│   │   └── integrations/       # External integrations
│   │       ├── sharepoint.ts
│   │       ├── akaunting.ts
│   │       └── docuseal.ts
│   │
│   └── types/
│       ├── index.ts            # Shared types
│       └── api.ts              # API types
│
├── docs/
│   ├── API.md                  # API documentation
│   ├── DEPLOYMENT.md           # Deployment guide
│   └── ARCHITECTURE.md         # This file
│
├── .env.example                # Environment template
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── README.md
```

---

## Data Model

### Entity Relationship Overview

```
┌─────────────┐
│    User     │────┐
└─────────────┘    │
                   │ assignedTo
                   ↓
┌─────────────┐  ┌──────────────┐  ┌─────────────┐
│   Entity    │  │ Opportunity  │  │  Contact    │
└─────────────┘  └──────────────┘  └─────────────┘
      │                 │                  │
      │ ownerEntity     │ opportunity      │ contacts
      ↓                 ↓                  ↓
┌─────────────┐  ┌──────────────┐  ┌─────────────┐
│   Project   │──│ DealAnalyzer │  │OpportunityContact│
└─────────────┘  └──────────────┘  └─────────────┘
      │
      │ project
      ↓
┌─────────────┐  ┌──────────────┐
│     Job     │──│   Workflow   │
└─────────────┘  └──────────────┘
      │
      │ job
      ↓
┌─────────────┐  ┌──────────────┐
│    Unit     │──│  FloorPlan   │
└─────────────┘  └──────────────┘
      │
      │ unit
      ├───────────────┬──────────────┬─────────────┐
      ↓               ↓              ↓             ↓
┌─────────────┐ ┌──────────┐ ┌─────────────┐ ┌──────────┐
│  Milestone  │ │    PO    │ │ ChangeOrder │ │Selection │
└─────────────┘ └──────────┘ └─────────────┘ └──────────┘
      │
      ↓
┌─────────────┐
│ Inspection  │
└─────────────┘
```

### Core Models

**User Management:**
- `User` — Application users
- `Team` — Organizational teams
- `TeamMember` — User-team relationships
- `Permission` — Access control

**Opportunities Module:**
- `Opportunity` — Deal pipeline
- `DealAnalyzer` — Financial analysis
- `OpportunityWorkflow` — Milestone tracking
- `Comp` — Comparable properties

**Projects Module:**
- `Project` — Owner/developer tracking
- `Lot` — Individual lots in projects
- `ProjectExpense` — Budget items
- `DrawRequest` — Lender draws

**Construction Module:**
- `Job` — Construction contracts
- `Unit` — Individual units being built
- `Milestone` — 16-phase schedule
- `PurchaseOrder` — Vendor commitments
- `ChangeOrder` — Contract modifications
- `Selection` — Buyer selections
- `Inspection` — Quality control
- `WarrantyClaim` — Post-construction issues
- `Issue` — Problem tracking

**Accounting Module:**
- `Entity` — Legal entities
- `Account` — Chart of accounts
- `Transaction` — Financial transactions
- `InvestorCapital` — Capital contributions
- `Loan` — Debt tracking
- `LoanDraw` — Draw requests

**Admin Module:**
- `FloorPlan` — Product catalog
- `Municipality` — Soft cost library
- `BudgetPackage` — Cost templates
- `ScheduleTemplate` — Duration templates
- `WorkflowTemplate` — Process templates

**Shared Services:**
- `Contact` — Global directory
- `Document` — File attachments
- `Note` — Comments/annotations
- `Activity` — Audit trail
- `CalendarEvent` — Scheduling

---

## Key Design Patterns

### 1. Server-Side Rendering (SSR)

```typescript
// app/(dashboard)/opportunities/page.tsx
export default async function OpportunitiesPage() {
  // Fetch data server-side
  const opportunities = await prisma.opportunity.findMany({
    include: { assignedTo: true, entity: true }
  })
  
  return <OpportunitiesList opportunities={opportunities} />
}
```

**Benefits:**
- Faster initial page load
- Better SEO
- Reduced client-side data fetching

### 2. API Route Handlers

```typescript
// app/api/opportunities/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') || '20')
  
  const opportunities = await prisma.opportunity.findMany({
    skip: (page - 1) * limit,
    take: limit,
  })
  
  return NextResponse.json({ opportunities })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  const opportunity = await prisma.opportunity.create({
    data: body
  })
  
  return NextResponse.json(opportunity, { status: 201 })
}
```

### 3. Type-Safe Database Access

```typescript
// Type safety from Prisma schema
const opportunity = await prisma.opportunity.findUnique({
  where: { id: 1 },
  include: {
    assignedTo: true,        // TypeScript knows these exist
    entity: true,
    dealAnalyzer: true,
    contacts: {
      include: {
        contact: true
      }
    }
  }
})

// opportunity.assignedTo.firstName — fully typed!
```

### 4. Business Logic Encapsulation

```typescript
// lib/calculations.ts
export function calculateDealAnalyzer(input: DealInput): DealOutput {
  const constructionCosts = 
    input.sticksAndBricks + 
    input.upgrades + 
    input.lotPrep + 
    input.siteAdjustments + 
    input.softCosts
  
  const builderFee = Math.max(
    25000,
    constructionCosts * 0.10
  )
  
  const contingency = Math.max(
    10000,
    constructionCosts * 0.05
  )
  
  // ... more calculations
  
  return {
    builderFee,
    contingency,
    netProfit,
    netProfitMargin,
    verdict: determineVerdict(netProfitMargin)
  }
}
```

### 5. Component Composition

```typescript
// components/ui/card.tsx
export function Card({ children, className }: CardProps) {
  return (
    <div className={cn("rounded-lg border bg-white", className)}>
      {children}
    </div>
  )
}

export function CardHeader({ children }: CardHeaderProps) {
  return <div className="p-6 pb-3">{children}</div>
}

export function CardContent({ children }: CardContentProps) {
  return <div className="p-6 pt-0">{children}</div>
}

// Usage:
<Card>
  <CardHeader>
    <h2>Opportunity Details</h2>
  </CardHeader>
  <CardContent>
    <p>Content here</p>
  </CardContent>
</Card>
```

### 6. Data Validation with Zod

```typescript
// lib/validators.ts
import { z } from 'zod'

export const opportunitySchema = z.object({
  name: z.string().min(1, "Name is required"),
  address: z.string().min(1, "Address is required"),
  type: z.enum(['SCATTERED_LOT', 'LOT_DEVELOPMENT', 'COMMUNITY_DEVELOPMENT']),
  projectedPurchasePrice: z.number().positive(),
  projectedSalePrice: z.number().positive(),
})

// Usage in API:
const parsed = opportunitySchema.parse(body)
```

---

## Authentication Flow

```
┌─────────┐
│  Login  │
│  Page   │
└────┬────┘
     │
     ↓ POST /api/auth/login
┌─────────────────┐
│  Auth API       │
│  - Verify email │
│  - Check pass   │
│  - Generate JWT │
└────┬────────────┘
     │
     ↓ JWT Token
┌─────────────────┐
│   Client        │
│   (stores token)│
└────┬────────────┘
     │
     ↓ All requests include: Authorization: Bearer <token>
┌─────────────────┐
│  Protected API  │
│  - Verify token │
│  - Check perms  │
│  - Return data  │
└─────────────────┘
```

**Implementation:**

```typescript
// lib/auth.ts
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 10)
}

export async function verifyPassword(
  password: string, 
  hashedPassword: string
): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword)
}

export function generateToken(userId: number): string {
  return jwt.sign(
    { userId },
    process.env.JWT_SECRET!,
    { expiresIn: '7d' }
  )
}

export function verifyToken(token: string): { userId: number } {
  return jwt.verify(token, process.env.JWT_SECRET!) as { userId: number }
}

// Middleware
export async function requireAuth(request: NextRequest) {
  const authHeader = request.headers.get('authorization')
  
  if (!authHeader?.startsWith('Bearer ')) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    )
  }
  
  const token = authHeader.substring(7)
  
  try {
    const { userId } = verifyToken(token)
    const user = await prisma.user.findUnique({ where: { id: userId } })
    
    if (!user || user.status !== 'ACTIVE') {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      )
    }
    
    return user
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid token' },
      { status: 401 }
    )
  }
}
```

---

## Workflow Engine Architecture

### Workflow Hierarchy

```
WorkflowTemplate (e.g., "Scattered Lot Acquisition")
  └─ MilestoneTemplate (e.g., "Under Contract")
      └─ TaskListTemplate (e.g., "Due Diligence")
          └─ TaskTemplate (e.g., "Order Survey")
```

**Runtime Instances:**

```
WorkflowInstance (linked to Opportunity/Project/Job)
  └─ Milestone
      └─ Task
```

### Execution Logic

```typescript
// Workflow creation
async function createWorkflowFromTemplate(
  entityId: number,
  entityType: 'OPPORTUNITY' | 'PROJECT' | 'JOB',
  templateId: number
) {
  const template = await prisma.workflowTemplate.findUnique({
    where: { id: templateId },
    include: {
      milestones: {
        include: {
          taskLists: {
            include: { tasks: true }
          }
        }
      }
    }
  })
  
  // Create workflow instance
  const workflow = await prisma.workflowInstance.create({
    data: {
      name: template.name,
      opportunityId: entityType === 'OPPORTUNITY' ? entityId : undefined,
      // ...
    }
  })
  
  // Create milestone instances in order
  for (const milestoneTemplate of template.milestones) {
    const milestone = await prisma.milestone.create({
      data: {
        name: milestoneTemplate.name,
        workflowInstanceId: workflow.id,
        order: milestoneTemplate.order,
        status: milestoneTemplate.order === 1 ? 'IN_PROGRESS' : 'NOT_STARTED',
        // ...
      }
    })
    
    // Create tasks
    for (const taskTemplate of milestoneTemplate.taskLists.flatMap(tl => tl.tasks)) {
      await prisma.task.create({
        data: {
          title: taskTemplate.title,
          milestoneId: milestone.id,
          assignedToId: taskTemplate.defaultAssigneeRole 
            ? await getTeamMemberByRole(taskTemplate.defaultAssigneeRole) 
            : null,
          dueDays: taskTemplate.dueDays,
          // ...
        }
      })
    }
  }
}

// Milestone progression
async function completeMilestone(milestoneId: number) {
  await prisma.milestone.update({
    where: { id: milestoneId },
    data: {
      status: 'COMPLETED',
      completedDate: new Date()
    }
  })
  
  // Activate next milestone
  const nextMilestone = await prisma.milestone.findFirst({
    where: {
      workflowInstanceId: workflow.id,
      order: currentMilestone.order + 1
    }
  })
  
  if (nextMilestone) {
    await prisma.milestone.update({
      where: { id: nextMilestone.id },
      data: { status: 'IN_PROGRESS' }
    })
  }
}
```

---

## Integration Architecture

### SharePoint Integration

```typescript
// lib/integrations/sharepoint.ts
import { Client } from '@microsoft/microsoft-graph-client'

export class SharePointService {
  private client: Client
  
  constructor() {
    this.client = Client.init({
      authProvider: (done) => {
        // Get access token
        done(null, accessToken)
      }
    })
  }
  
  async createProjectFolder(projectNumber: string, projectName: string) {
    const siteId = process.env.SHAREPOINT_SITE_ID
    const driveId = process.env.SHAREPOINT_DRIVE_ID
    
    // Create main project folder
    const folder = await this.client
      .api(`/sites/${siteId}/drives/${driveId}/root/children`)
      .post({
        name: `${projectNumber} - ${projectName}`,
        folder: {},
        '@microsoft.graph.conflictBehavior': 'fail'
      })
    
    // Create subfolders
    const subfolders = [
      'Contracts',
      'Permits',
      'Plans',
      'Inspections',
      'Photos',
      'Warranties'
    ]
    
    for (const subfolder of subfolders) {
      await this.client
        .api(`/sites/${siteId}/drives/${driveId}/items/${folder.id}/children`)
        .post({
          name: subfolder,
          folder: {}
        })
    }
    
    return folder
  }
  
  async uploadDocument(
    folderId: string,
    fileName: string,
    fileContent: Buffer
  ) {
    const uploadSession = await this.client
      .api(`/drives/${driveId}/items/${folderId}:/${fileName}:/createUploadSession`)
      .post({})
    
    // Upload file (simplified - production would handle large files)
    return await this.client
      .api(uploadSession.uploadUrl)
      .put(fileContent)
  }
}
```

---

## Performance Optimization

### 1. Database Indexing

```prisma
model Opportunity {
  id        Int      @id @default(autoincrement())
  name      String
  address   String
  stage     Stage
  createdAt DateTime @default(now())
  
  @@index([stage])
  @@index([createdAt])
  @@index([assignedToId])
}
```

### 2. Query Optimization

```typescript
// Bad: N+1 query problem
const opportunities = await prisma.opportunity.findMany()
for (const opp of opportunities) {
  const assignedUser = await prisma.user.findUnique({
    where: { id: opp.assignedToId }
  })
}

// Good: Include related data
const opportunities = await prisma.opportunity.findMany({
  include: {
    assignedTo: true,
    entity: true
  }
})
```

### 3. React Query Caching

```typescript
// components/opportunities-list.tsx
import { useQuery } from '@tanstack/react-query'

export function OpportunitiesList() {
  const { data, isLoading } = useQuery({
    queryKey: ['opportunities'],
    queryFn: () => fetch('/api/opportunities').then(r => r.json()),
    staleTime: 5 * 60 * 1000, // 5 minutes
  })
  
  // ...
}
```

### 4. Pagination

```typescript
// app/api/opportunities/route.ts
export async function GET(request: NextRequest) {
  const page = parseInt(searchParams.get('page') || '1')
  const limit = parseInt(searchParams.get('limit') ||' 20')
  
  const [opportunities, total] = await prisma.$transaction([
    prisma.opportunity.findMany({
      skip: (page - 1) * limit,
      take: limit,
      orderBy: { createdAt: 'desc' }
    }),
    prisma.opportunity.count()
  ])
  
  return NextResponse.json({
    opportunities,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  })
}
```

---

## Security Considerations

### 1. Authentication & Authorization

- JWT tokens with 7-day expiration
- bcrypt password hashing (10 salt rounds)
- Role-based access control
- Record-level permissions via team assignments

### 2. Input Validation

- All API inputs validated with Zod schemas
- SQL injection prevention via Prisma (parameterized queries)
- XSS prevention via React's automatic escaping

### 3. Environment Variables

- Secrets never committed to git
- `.env.example` template without sensitive data
- Different configs for dev/staging/production

### 4. HTTPS/TLS

- Enforce HTTPS in production
- HSTS headers
- Secure cookies with httpOnly flag

---

## Monitoring & Observability

### Application Metrics

- Response time per endpoint
- Error rate
- Active users
- Database query performance

### Logging Strategy

```typescript
// lib/logger.ts
export const logger = {
  info: (message: string, meta?: any) => {
    console.log(JSON.stringify({ level: 'info', message, meta, timestamp: new Date() }))
  },
  error: (message: string, error?: Error, meta?: any) => {
    console.error(JSON.stringify({ 
      level: 'error', 
      message, 
      error: error?.message,
      stack: error?.stack,
      meta, 
      timestamp: new Date() 
    }))
  }
}

// Usage:
logger.info('Opportunity created', { opportunityId: 123 })
logger.error('Failed to create opportunity', error, { data: body })
```

---

## Testing Strategy (Future)

### Unit Tests
- Business logic (calculations.ts)
- Utility functions
- Validation schemas

### Integration Tests
- API endpoints
- Database operations
- Authentication flow

### E2E Tests
- Critical user journeys
- Opportunity creation → conversion → project tracking

---

## Future Enhancements

### Phase 2 Features
- Mobile responsive design improvements
- Real-time collaboration (WebSockets)
- Advanced reporting and analytics
- Custom dashboard widgets
- Bulk import/export tools

### Phase 3 Features
- Mobile apps (iOS/Android)
- Offline mode with sync
- AI-powered deal analysis
- Predictive analytics
- Advanced workflow automation

---

## Support & Resources

- **Main Documentation:** [README.md](../README.md)
- **API Reference:** [API.md](./API.md)
- **Deployment Guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

**Version:** 3.0.0  
**Last Updated:** February 17, 2026  
**Maintained By:** Red Cedar Homes Development Team
