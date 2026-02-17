# API Documentation

## Overview

The ATLAS platform provides RESTful API endpoints for managing all core resources. All endpoints require authentication via JWT tokens.

---

## Authentication

### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "admin@redcedar.com",
  "password": "your-password"
}
```

**Response:**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "email": "admin@redcedar.com",
    "firstName": "Admin",
    "lastName": "User",
    "role": "GLOBAL_ADMIN"
  }
}
```

### Using the Token

Include the JWT token in all subsequent requests:

```http
GET /api/opportunities
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

---

## Opportunities API

### List Opportunities
```http
GET /api/opportunities
```

**Query Parameters:**
- `page` (number): Page number (default: 1)
- `limit` (number): Items per page (default: 20)
- `stage` (string): Filter by stage
- `type` (string): Filter by type (SCATTERED_LOT, LOT_DEVELOPMENT, etc.)
- `status` (string): Filter by status
- `search` (string): Search in name and address

**Response:**
```json
{
  "opportunities": [
    {
      "id": 1,
      "name": "142 Taylors Mill Rd",
      "address": "142 Taylors Mill Rd",
      "city": "Taylors",
      "state": "SC",
      "type": "SCATTERED_LOT",
      "stage": "Under Contract",
      "projectedPurchasePrice": 45000,
      "projectedSalePrice": 375000,
      "assignedTo": {
        "id": 1,
        "firstName": "Admin",
        "lastName": "User"
      }
    }
  ],
  "pagination": {
    "total": 45,
    "page": 1,
    "limit": 20,
    "pages": 3
  }
}
```

### Get Opportunity
```http
GET /api/opportunities/:id
```

**Response:**
```json
{
  "id": 1,
  "name": "142 Taylors Mill Rd",
  "address": "142 Taylors Mill Rd",
  "city": "Taylors",
  "county": "Greenville",
  "state": "SC",
  "zip": "29687",
  "type": "SCATTERED_LOT",
  "stage": "Under Contract",
  "dealAnalyzer": {
    "id": 1,
    "purchasePrice": 45000,
    "totalProjectCost": 233656,
    "netProfit": 101081,
    "netProfitMargin": 0.2695,
    "verdict": "STRONG_DEAL"
  },
  "contacts": [
    {
      "contactId": 1,
      "role": "Seller",
      "contact": {
        "firstName": "Jane",
        "lastName": "Seller",
        "email": "jane.seller@email.com"
      }
    }
  ]
}
```

### Create Opportunity
```http
POST /api/opportunities
Content-Type: application/json

{
  "name": "123 Main Street",
  "address": "123 Main Street",
  "city": "Greenville",
  "county": "Greenville",
  "state": "SC",
  "zip": "29601",
  "type": "SCATTERED_LOT",
  "stage": "Identified",
  "source": "Broker",
  "projectedPurchasePrice": 50000,
  "projectedSalePrice": 400000,
  "assignedToId": 1,
  "entityId": 1
}
```

### Update Opportunity
```http
PUT /api/opportunities/:id
Content-Type: application/json

{
  "stage": "Under Contract",
  "projectedPurchasePrice": 48000
}
```

### Delete Opportunity
```http
DELETE /api/opportunities/:id
```

### Convert to Project
```http
POST /api/opportunities/:id/convert
Content-Type: application/json

{
  "projectNumber": "26-045",
  "closingDate": "2026-03-15",
  "purchasePrice": 48000
}
```

---

## Projects API

### List Projects
```http
GET /api/projects
```

**Query Parameters:**
- `page`, `limit`, `search` (same as opportunities)
- `status` (string): Filter by status (PLANNING, CONSTRUCTION, etc.)
- `type` (string): Filter by type

**Response:**
```json
{
  "projects": [
    {
      "id": 1,
      "projectNumber": "26-042",
      "name": "142 Taylors Mill Rd",
      "status": "CONSTRUCTION",
      "totalBudget": 233656,
      "currentSpend": 145230,
      "assignedTo": {
        "firstName": "Admin",
        "lastName": "User"
      }
    }
  ],
  "pagination": { ... }
}
```

### Get Project
```http
GET /api/projects/:id
```

### Create Project
```http
POST /api/projects
Content-Type: application/json

{
  "projectNumber": "26-045",
  "name": "123 Main Street",
  "type": "SCATTERED_LOT",
  "status": "PLANNING",
  "ownerEntityId": 1,
  "assignedToId": 1,
  "floorPlanId": 1,
  "totalBudget": 250000
}
```

### Update Project
```http
PUT /api/projects/:id
```

### Delete Project
```http
DELETE /api/projects/:id
```

---

## Construction API

### List Jobs
```http
GET /api/construction/jobs
```

### Get Job
```http
GET /api/construction/jobs/:id
```

**Response:**
```json
{
  "id": 1,
  "jobNumber": "26-042",
  "name": "142 Taylors Mill Rd",
  "status": "ACTIVE",
  "contractType": "COST_PLUS_FIXED_FEE",
  "contractAmount": 182406,
  "builderFee": 25000,
  "numberOfUnits": 1,
  "units": [
    {
      "id": 1,
      "unitNumber": "26-042-01",
      "status": "INSULATION",
      "totalBudget": 182406,
      "totalCommitted": 146590,
      "totalActual": 112340
    }
  ]
}
```

### Create Job
```http
POST /api/construction/jobs
Content-Type: application/json

{
  "jobNumber": "26-045",
  "name": "123 Main Street",
  "clientType": "INTERNAL",
  "clientId": 1,
  "projectId": 1,
  "contractType": "COST_PLUS_FIXED_FEE",
  "contractAmount": 200000,
  "builderFee": 25000,
  "numberOfUnits": 1,
  "assignedToId": 1,
  "superintendentId": 1
}
```

### Get Unit
```http
GET /api/construction/units/:id
```

### Update Unit Status
```http
PUT /api/construction/units/:id/status
Content-Type: application/json

{
  "status": "DRYWALL",
  "completedDate": "2026-03-20"
}
```

---

## Purchase Orders API

### List Purchase Orders
```http
GET /api/construction/purchase-orders
```

**Query Parameters:**
- `jobId` (number): Filter by job
- `unitId` (number): Filter by unit
- `status` (string): Filter by status

### Create Purchase Order
```http
POST /api/construction/purchase-orders
Content-Type: application/json

{
  "poNumber": "26-042-045",
  "jobId": 1,
  "unitId": 1,
  "vendorId": 1,
  "category": "FRAMING",
  "description": "Framing labor and materials",
  "amount": 15000,
  "tax": 450,
  "totalAmount": 15450,
  "requestedBy": 1,
  "vendorDueDate": "2026-03-01"
}
```

### Approve Purchase Order
```http
POST /api/construction/purchase-orders/:id/approve
Content-Type: application/json

{
  "approvedBy": 1,
  "notes": "Approved per budget"
}
```

---

## Change Orders API

### List Change Orders
```http
GET /api/construction/change-orders
```

### Create Change Order
```http
POST /api/construction/change-orders
Content-Type: application/json

{
  "coNumber": "26-042-CO-001",
  "jobId": 1,
  "unitId": 1,
  "description": "Add gable vent and trim",
  "reason": "Owner requested",
  "costImpact": 850,
  "scheduleImpact": 1,
  "initiatedBy": "OWNER",
  "requestedById": 1
}
```

**Automatic Markup Calculation:**
- Owner-initiated: 30% markup
- Site condition: 10% markup
- Contingency: No markup

### Approve Change Order
```http
POST /api/construction/change-orders/:id/approve
Content-Type: application/json

{
  "approvedBy": 1,
  "approvedAmount": 1105
}
```

---

## Contacts API

### List Contacts
```http
GET /api/contacts
```

**Query Parameters:**
- `type` (string): Filter by contact type
- `status` (string): Filter by status
- `search` (string): Search name, company, email

**Response:**
```json
{
  "contacts": [
    {
      "id": 1,
      "firstName": "Jane",
      "lastName": "Seller",
      "company": null,
      "email": "jane.seller@email.com",
      "phone": "(864) 555-0123",
      "status": "ACTIVE",
      "contactTypes": [
        { "type": "SELLER" }
      ]
    }
  ],
  "pagination": { ... }
}
```

### Create Contact
```http
POST /api/contacts
Content-Type: application/json

{
  "firstName": "John",
  "lastName": "Smith",
  "company": "ABC Construction",
  "email": "john@abc.com",
  "phone": "(864) 555-9999",
  "status": "ACTIVE",
  "contactTypes": ["SUBCONTRACTOR"]
}
```

---

## Admin API

### Floor Plans

#### List Floor Plans
```http
GET /api/admin/floor-plans
```

#### Get Floor Plan
```http
GET /api/admin/floor-plans/:id
```

#### Create Floor Plan
```http
POST /api/admin/floor-plans
Content-Type: application/json

{
  "name": "Dogwood",
  "type": "SFH",
  "heatedSF": 1541,
  "bedrooms": 3,
  "bathrooms": 2.5,
  "baseCost": 124031,
  "totalCost": 137556
}
```

### Municipalities

#### List Municipalities
```http
GET /api/admin/municipalities
```

#### Create Municipality
```http
POST /api/admin/municipalities
Content-Type: application/json

{
  "name": "City of Greenville",
  "state": "SC",
  "county": "Greenville",
  "waterTapFee": 2500,
  "sewerTapFee": 2800,
  "impactFees": 3200
}
```

---

## Error Responses

All endpoints return consistent error responses:

### 400 Bad Request
```json
{
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Invalid email format"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "error": "Authentication required"
}
```

### 403 Forbidden
```json
{
  "error": "Insufficient permissions"
}
```

### 404 Not Found
```json
{
  "error": "Resource not found"
}
```

### 500 Internal Server Error
```json
{
  "error": "Internal server error",
  "message": "An unexpected error occurred"
}
```

---

## Rate Limiting

- **Rate Limit:** 100 requests per minute per IP
- **Headers:**
  - `X-RateLimit-Limit`: Maximum requests allowed
  - `X-RateLimit-Remaining`: Requests remaining
  - `X-RateLimit-Reset`: Time when limit resets (Unix timestamp)

---

## Pagination

All list endpoints support pagination:

**Headers:**
```http
X-Total-Count: 45
X-Page: 1
X-Per-Page: 20
X-Total-Pages: 3
```

**Links:**
```http
Link: <http://localhost:3000/api/opportunities?page=2>; rel="next",
      <http://localhost:3000/api/opportunities?page=3>; rel="last"
```

---

## Webhooks (Coming Soon)

Subscribe to events:
- `opportunity.created`
- `opportunity.converted`
- `project.status_changed`
- `job.created`
- `purchase_order.approved`
- `change_order.approved`

---

## Support

For API support, contact the development team or refer to the [main documentation](../README.md).
