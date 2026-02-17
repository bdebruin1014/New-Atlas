# ATLAS — Red Cedar Homes Operating Platform
## Complete Enterprise Application v3.0

![ATLAS Platform](https://img.shields.io/badge/version-3.0.0-blue.svg)
![License](https://img.shields.io/badge/license-Proprietary-red.svg)
![Next.js](https://img.shields.io/badge/Next.js-14-black.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue.svg)
![Prisma](https://img.shields.io/badge/Prisma-5.10-2D3748.svg)

**ATLAS** is a comprehensive, enterprise-grade operating platform designed specifically for Red Cedar Homes (operated under Olive Brynn, LLC). It provides an end-to-end operating system for residential construction and development across scattered lot, lot development, community development, and lot purchase channels.

---

## 🏗️ Platform Overview

ATLAS serves Red Cedar Homes' internal operations and its client relationships (including SPEs, funds, and third-party owners) through six integrated modules:

1. **Opportunities** — Deal pipeline from identification through closing
2. **Projects** — Owner/developer-level tracking from contract through disposition
3. **Construction Management** — Red Cedar GC operating system (Jobs and Units)
4. **Accounting** — Multi-entity financial management
5. **Contacts** — Global contacts directory segregated by contact type
6. **Admin** — Configuration, permissions, integrations, templates

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17.0 or higher
- **PostgreSQL** 14 or higher
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd New-Atlas
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` and configure your database connection and other settings.

4. **Set up the database:**
   ```bash
   # Generate Prisma client
   npm run db:generate
   
   # Push schema to database
   npm run db:push
   
   # Seed with sample data
   npm run db:seed
   ```

5. **Start the development server:**
   ```bash
   npm run dev
   ```

6. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Default Login Credentials

```
Email: admin@redcedar.com
Password: admin123
```

**⚠️ IMPORTANT:** Change the default password immediately in production!

---

## 📁 Project Structure

```
New-Atlas/
├── prisma/
│   ├── schema.prisma          # Database schema
│   └── seed.ts                # Database seed file
├── src/
│   ├── app/
│   │   ├── (dashboard)/       # Main application pages
│   │   │   ├── opportunities/ # Opportunities module
│   │   │   ├── projects/      # Projects module
│   │   │   ├── construction/  # Construction management
│   │   │   ├── contacts/      # Contacts directory
│   │   │   ├── admin/         # Admin configuration
│   │   │   └── page.tsx       # Dashboard home
│   │   ├── globals.css        # Global styles
│   │   └── layout.tsx         # Root layout
│   ├── components/
│   │   ├── ui/                # Reusable UI components
│   │   └── layout/            # Layout components
│   └── lib/
│       ├── prisma.ts          # Prisma client
│       ├── auth.ts            # Authentication utilities
│       ├── calculations.ts    # Financial calculations
│       └── utils.ts           # Utility functions
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── README.md
```

---

## 🎯 Core Features

### Module 1: Opportunities

**Deal Pipeline Management**
- Multiple opportunity types: Scattered Lot, Lot Development, Community Development, Lot Purchase
- Configurable stages with Kanban and list views
- Comprehensive deal analyzer with automatic financial calculations
- Built-in comps tracking and underwriting
- Workflow engine with milestone and task management

**Deal Analyzer Features:**
- Automatic calculation of builder fees (greater of $25k or 10%)
- Contingency calculation (greater of $10k or 5%)
- LTC financing modeling (85% default)
- Cost of capital calculations
- Profit margin analysis with GO/MARGINAL/NO-GO verdicts
- Threshold-based color coding (>10% = STRONG, 7-10% = GOOD, etc.)

### Module 2: Projects

**Owner/Developer Tracking**
- Project-level budget vs. actual tracking
- Multi-phase workflow management
- Integration with Construction Management module
- Draw request tracking and lender coordination
- Project expense entry and reconciliation
- SharePoint folder auto-creation for document management

**Builder Contract Management:**
- Contract types: Cost-Plus Fixed Fee, Cost-Plus Percentage, Stipulated Sum
- 5-draw payment schedule tracking
- Change order management with markup rules
- Warranty tracking (1-year workmanship, 2-year systems, 5-year structural)
- Insurance certificate management

### Module 3: Construction Management

**GC Operating System**
- Job and Unit structure for internal and third-party builds
- 16-phase construction milestone tracking
- Purchase Order management with approval workflows
- Change order processing with automatic markup calculation
- Selection/upgrade tracking by category
- Inspection scheduling and result tracking
- Warranty claim management
- Issue tracking with severity levels

**Cost Management:**
- Per-Unit budget tracking: Base + Upgrades + Lot Prep + Soft Costs + Builder Fee + Contingency
- Committed vs. Actual cost analysis
- Variance reporting by trade category
- Retainage tracking (configurable 5-10%)
- Lien waiver management (Conditional/Unconditional)

### Module 4: Accounting

**Multi-Entity Financial Management**
- Entity hierarchy with parent-child relationships
- Chart of accounts templates per entity type
- Transaction entry with project/unit tagging
- Capital contribution and investor tracking
- Waterfall distribution calculations
- Loan and debt tracking with draw management
- Akaunting integration for accounting software sync

**Entity Types Supported:**
- Operating Company (Red Cedar Homes SC/NC LLC)
- Holding Company (Olive Brynn LLC)
- Single Purpose Entity (project-specific LLCs)
- Fund/Syndication (Red Cedar Scattered Lot Funds)

### Module 5: Admin

**Configuration & Templates**
- **Floor Plan Library:** Complete catalog with costs, specs, upgrade packages
- **Municipality Table:** Tap fees, impact fees, soft costs by jurisdiction
- **Budget Packages:** Automated cost structures per floor plan
- **Schedule Templates:** Standard durations per milestone
- **Contract Templates:** SC/NC construction agreements with merge fields
- **Teams & Permissions:** Role-based access control
- **Integration Settings:** SharePoint, Outlook, Akaunting, DocuSeal

**Pre-Loaded Floor Plans (35 total):**
- 18 Single-Family Home plans (Dogwood, Magnolia, Holly, etc.)
- 17 Townhome plans (Palmetto, Jasmine, Bayberry, etc.)
- Complete cost breakdowns with Classic/Elegance/Harmony upgrades

---

## 🔧 Technical Stack

### Frontend
- **Next.js 14** — React framework with App Router
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first styling
- **Shadcn UI** — High-quality component library
- **Radix UI** — Accessible component primitives
- **Recharts** — Data visualization

### Backend
- **Next.js API Routes** — Server-side endpoints
- **Prisma ORM** — Type-safe database access
- **PostgreSQL** — Relational database
- **JWT** — Authentication tokens
- **bcryptjs** — Password hashing

### Key Libraries
- **@tanstack/react-query** — Server state management
- **@tanstack/react-table** — Advanced table functionality
- **date-fns** — Date manipulation
- **zod** — Schema validation
- **zustand** — Client state management

---

## 🗄️ Database Schema

The application uses a comprehensive Prisma schema with 50+ models covering:

- **User Management:** Users, teams, permissions
- **Opportunities:** Deal pipeline, deal analyzer, comps
- **Projects:** Project tracking, lot management, expenses
- **Construction:** Jobs, units, milestones, POs, change orders, selections, inspections
- **Accounting:** Entities, accounts, transactions, investors, loans
- **Admin Data:** Floor plans, municipalities, workflow templates
- **Shared Services:** Contacts, documents, notes, activities, calendar events

### Key Relationships

```
Opportunities → Projects → Jobs → Units
                                    ↓
                              Milestones → Inspections
                                    ↓
                              Purchase Orders
                                    ↓
                              Change Orders
```

---

## 💰 Financial Calculations

### Deal Analyzer Formula

**Section 1 - Cost Summary:**
```
Construction Costs = S&B + Upgrades + Lot Prep + Site Adjustments + Soft Costs
Builder Fee = MAX($25,000, Construction Costs × 10%)
Contingency = MAX($10,000, Construction Costs × 5%)
Total Contract Cost = Construction Costs + Builder Fee + Contingency
```

**Section 3 - Total Project Cost:**
```
Total Project Cost = Purchase Price + Total Contract Cost + Fixed Costs
```

**Section 4 - Financing:**
```
Loan Amount = Total Project Cost × LTC (85%)
Equity Required = Total Project Cost - Loan Amount
Interest Cost = Loan Amount × Annual Rate × (Duration / 365)
Cost of Capital = Equity × 16% × (Duration / 365)
Total Carry Costs = Interest Cost + Cost of Capital
```

**Section 5 - Deal Results:**
```
Total All-In Cost = Total Project Cost + Total Carry Costs
Selling Costs = (ASP × 8.5%) + Concessions
Net Sales Proceeds = ASP - Selling Costs
Net Profit = Net Sales Proceeds - Total All-In Cost
Net Profit Margin = Net Profit / ASP
```

**Verdict Thresholds:**
- **STRONG DEAL (Green):** Margin > 10%
- **GOOD DEAL (Blue):** Margin 7-10%
- **MARGINAL (Yellow):** Margin 5-7%
- **NO GO (Red):** Margin < 5%

### Change Order Markup Rules

Per Red Cedar Construction Agreement:
- **Owner-initiated changes:** Actual cost + 30% markup
- **Site condition changes:** Actual cost + 10% markup
- **Contingency-funded changes:** No markup

---

## 📊 Workflow Engine

The platform includes a flexible workflow engine supporting:

**Hierarchy:** Workflow → Milestones → Task Lists → Tasks

**Features:**
- Template-based workflow creation
- Role-based task assignment
- Relative due date calculation (business days)
- Sequential milestone progression with override capability
- Manual or automatic milestone completion
- Task status tracking (Not Started → In Progress → Complete → Skipped)

**Pre-Configured Workflows:**
- Scattered Lot Acquisition (6 milestones, 40+ tasks)
- Lot Development Acquisition (4 milestones)
- Community Development (5 milestones)
- Lot Purchase Acquisition (3 milestones)
- 16-Phase Construction Schedule per unit

---

## 🔗 Integrations

### Microsoft SharePoint (Tier 1)
- Automatic folder creation on project/job creation
- Configurable folder templates per project type
- Document upload synchronization
- Embedded document access from Atlas records
- Azure AD authentication

### Microsoft Outlook
- Email logging linked to records
- Calendar synchronization for tasks and milestones
- Inspection, hearing, and closing scheduling

### Akaunting
- One-way transaction sync from Atlas Accounting
- Account mapping configuration
- Sync on transaction approval

### DocuSeal (Planned)
- E-signature for construction agreements
- PO and change order signing
- Investor subscription documents
- Status tracking and auto-filing

---

## 🛠️ Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run db:generate  # Generate Prisma client
npm run db:push      # Push schema to database
npm run db:studio    # Open Prisma Studio
npm run db:seed      # Seed database with sample data
```

### Database Management

```bash
# Open Prisma Studio (GUI database browser)
npm run db:studio

# Reset database (WARNING: Deletes all data)
npx prisma migrate reset

# Generate migration
npx prisma migrate dev --name your_migration_name
```

### Code Quality

The project uses:
- **TypeScript** for type safety
- **ESLint** for code linting
- **Prettier** (recommended) for code formatting
- **Prisma** for type-safe database access

---

## 🔐 Security Considerations

### Authentication
- JWT-based authentication with 7-day expiration
- bcrypt password hashing with salt rounds = 10
- Secure HTTP-only cookies (recommended for production)

### Authorization
- Role-based access control (Global Admin, Module Admin, Team Member, Read-Only)
- Record-level permissions via team assignments
- Action-level permissions (View, Create, Edit, Delete, Approve, Export)

### Production Checklist
- [ ] Change default admin password
- [ ] Set strong `JWT_SECRET` and `NEXTAUTH_SECRET`
- [ ] Enable HTTPS/TLS
- [ ] Configure CORS policies
- [ ] Set up environment-specific `.env` files
- [ ] Enable database connection pooling
- [ ] Configure rate limiting
- [ ] Set up logging and monitoring
- [ ] Regular database backups

---

## 📈 Deployment

### Recommended Platforms

**Vercel (Recommended for Next.js):**
```bash
npm run build
vercel --prod
```

**Docker (Self-hosted):**
```dockerfile
# Coming soon - Dockerfile included in future release
```

**Environment Variables Required:**
```
DATABASE_URL
NEXTAUTH_URL
NEXTAUTH_SECRET
JWT_SECRET
SHAREPOINT_TENANT_URL
SHAREPOINT_CLIENT_ID
SHAREPOINT_CLIENT_SECRET
```

---

## 🧪 Testing

```bash
# Run tests (when configured)
npm test

# Run tests in watch mode
npm run test:watch
```

**Note:** Test suite configuration coming in future releases.

---

## 📚 Documentation

### Additional Resources
- [Atlas Platform Specification v3.0](./Atlas-Platform-Specification-v3.md) - Complete specification document
- [Prisma Schema](./prisma/schema.prisma) - Database schema documentation
- [API Documentation](#) - Coming soon

### Support
For questions or support, contact the development team.

---

## 📝 License

**Proprietary** — Red Cedar Homes / Olive Brynn LLC

This software is proprietary and confidential. Unauthorized copying, distribution, or use is strictly prohibited.

---

## 🙏 Acknowledgments

Built with:
- **Next.js** by Vercel
- **Prisma** ORM
- **Tailwind CSS**
- **Shadcn UI**
- **Radix UI**

---

## 📞 Contact

**Red Cedar Homes**  
Operated under Olive Brynn, LLC

---

**Version:** 3.0.0  
**Last Updated:** February 17, 2026  
**Platform Owner:** Red Cedar Homes