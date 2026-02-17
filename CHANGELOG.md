# Changelog

All notable changes to the ATLAS Platform will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [3.0.0] - 2026-02-17

### 🎉 Initial Release

Complete rebuild of ATLAS platform with modern stack and comprehensive feature set.

### Added

#### Core Infrastructure
- Next.js 14 with App Router architecture
- TypeScript 5.3 for full type safety
- Prisma ORM with PostgreSQL database
- Complete database schema with 50+ models
- Authentication system with JWT tokens
- Role-based access control (RBAC)
- Database seed file with sample data

#### Module 1: Opportunities Management
- Opportunity creation and tracking
- Multiple opportunity types support:
  - Scattered Lot
  - Lot Development
  - Community Development
  - Lot Purchase
- Configurable stages and statuses
- Deal Analyzer with automatic financial calculations:
  - Builder fee calculation (max of $25k or 10%)
  - Contingency calculation (max of $10k or 5%)
  - LTC financing modeling (85% default)
  - Cost of capital calculations
  - Profit margin analysis with verdicts
- Workflow engine with milestones and tasks
- Contact management per opportunity
- Document attachments
- Notes and activity tracking

#### Module 2: Projects Management
- Project-level budget vs. actual tracking
- Multi-phase workflow management
- Draw request tracking
- Project expense management
- Lot tracking for development projects
- SharePoint folder auto-creation
- Integration with Construction Management module

#### Module 3: Construction Management
- Job and Unit structure for builds
- 16-phase construction milestone tracking:
  - Site Work, Foundation, Framing, Rough MEP
  - Windows/Doors, Insulation, Drywall, Interior Trim
  - Cabinets, Countertops, Flooring, Plumbing Fixtures
  - HVAC, Electrical, Painting, Final Items
- Purchase Order management with approval workflows
- Change Order processing with automatic markup:
  - Owner-initiated: 30% markup
  - Site condition: 10% markup
  - Contingency: No markup
- Selection/upgrade tracking by category
- Inspection scheduling and result tracking
- Warranty claim management
- Issue tracking with severity levels
- Cost analysis: Budget vs. Committed vs. Actual

#### Module 4: Admin Configuration
- Floor Plan Library (35 pre-loaded plans):
  - 18 Single-Family Home designs
  - 17 Townhome designs
  - Complete cost breakdowns
  - Multiple upgrade packages (Classic, Elegance, Harmony)
- Municipality configuration:
  - Tap fees, impact fees, soft costs
  - Permit fee schedules
- Entity hierarchy management:
  - Operating companies
  - Holding companies
  - Single purpose entities
  - Funds/syndications
- Team and permission management
- Integration settings dashboard
- System settings and thresholds

#### Module 5: Contacts Directory
- Global contacts management
- Multiple contact type support:
  - Sellers, Buyers, Real Estate Agents
  - Lenders, Attorneys, Title Companies
  - Subcontractors, Suppliers, Professionals
  - Superintendents, Project Managers, Team Members
- Contact search and filtering
- Company affiliations
- Status tracking (Active, Inactive, Archived)

#### UI Component Library
- Button, Input, Card, Table components
- Tabs, Label, Separator components
- Consistent design system with Tailwind CSS
- Radix UI for accessibility
- Responsive layouts

#### Utilities & Services
- Financial calculation engine
- Business day calculator
- Number generators (project, job, PO, CO numbers)
- Currency, date, and percentage formatters
- Password hashing utilities
- JWT token management

### Documentation
- Comprehensive README with quick start guide
- API documentation with all endpoints
- Deployment guide for multiple platforms
- Architecture documentation
- Environment variable template
- Database schema documentation
- Changelog (this file)

### Technical Features
- Server-side rendering (SSR) for fast page loads
- Type-safe API routes
- Prisma client generation
- Database migration support
- Seed data for development
- ESLint configuration
- TypeScript strict mode
- Modular code organization

---

## [Unreleased]

### Planned for 3.1.0

#### Accounting Module (Complete Implementation)
- Entity transaction management
- Chart of accounts per entity type
- Capital contribution tracking
- Investor waterfall distributions
- Loan and debt management
- Akaunting integration (one-way sync)
- Financial reports and statements

#### Calendar Module
- Company calendar view
- Personal calendar view
- Event types:
  - Closings, Hearings, Inspections
  - Milestones, Tasks, Meetings
- Microsoft 365 calendar sync
- Reminder notifications

#### Documents Module
- SharePoint integration UI
- Document upload and management
- Version history tracking
- Document linking to records
- Search and filtering

#### API Implementation
- RESTful API routes for all modules
- CRUD operations for all entities
- Business logic implementation
- Error handling and validation
- Rate limiting
- API authentication middleware

#### Workflow Engine Logic
- Template-based workflow creation
- Automatic milestone activation
- Task assignment logic
- Due date calculations
- Completion tracking
- Email notifications

### Planned for 3.2.0

#### SharePoint Integration (Tier 1)
- Microsoft Graph API client
- Automatic folder creation
- Document upload/download
- Folder templates by project type
- Azure AD authentication
- Embedded document viewer

#### Microsoft 365 Integration
- Outlook email integration
- Calendar synchronization
- Task integration
- Teams notifications (optional)

#### Akaunting Integration
- Transaction sync service
- Account mapping configuration
- Automated sync on approval
- Error handling and reconciliation

#### DocuSeal Integration
- E-signature workflow
- Document template management
- Status tracking
- Automatic filing to SharePoint
- Signing ceremony links

### Planned for 3.3.0

#### Advanced Features
- Custom reporting engine
- Data export tools (Excel, PDF)
- Bulk import utilities
- Advanced search across modules
- Dashboard customization
- Email notifications system
- SMS notifications (optional)

#### Mobile Enhancements
- Responsive design improvements
- Touch-optimized interfaces
- Mobile-specific views
- Photo upload from mobile

### Planned for 4.0.0

#### Next Generation Features
- Real-time collaboration (WebSockets)
- AI-powered deal analysis
- Predictive analytics
- Mobile apps (iOS/Android)
- Offline mode with sync
- Advanced workflow automation
- Custom module creation
- Plugin architecture

---

## Version History

### Version Numbering

ATLAS follows [Semantic Versioning](https://semver.org/):
- **MAJOR** version for incompatible API changes
- **MINOR** version for new functionality in a backwards compatible manner
- **PATCH** version for backwards compatible bug fixes

### Support Policy

- **Current version (3.x)**: Full support, active development
- **Previous major version**: Security fixes only for 6 months
- **Older versions**: No support

---

## Upgrade Guide

### From 2.x to 3.0.0

⚠️ **BREAKING CHANGES** — Version 3.0 is a complete rewrite.

**Migration Steps:**
1. Export all data from 2.x installation
2. Review new database schema
3. Create data migration scripts
4. Test in staging environment
5. Backup production database
6. Deploy 3.0.0
7. Run migration scripts
8. Verify data integrity
9. Update user training materials

**Not backwards compatible** — Fresh installation recommended.

---

## Contributing

We welcome contributions! Please follow these guidelines:

1. Create feature branch from `main`
2. Follow TypeScript best practices
3. Add tests for new features
4. Update documentation
5. Submit pull request

---

## Support

For questions or issues:
- Check [Documentation](../README.md)
- Review [API Docs](./API.md)
- Contact development team

---

**Maintained by:** Red Cedar Homes Development Team  
**License:** Proprietary — Red Cedar Homes / Olive Brynn LLC
