# ATLAS Platform Deployment Guide

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Environment Setup](#environment-setup)
3. [Database Configuration](#database-configuration)
4. [Application Deployment](#application-deployment)
5. [Production Checklist](#production-checklist)
6. [Monitoring & Maintenance](#monitoring--maintenance)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### System Requirements

**Minimum:**
- CPU: 2 cores
- RAM: 4 GB
- Storage: 20 GB
- Node.js: 18.17.0 or higher
- PostgreSQL: 14 or higher

**Recommended for Production:**
- CPU: 4+ cores
- RAM: 8+ GB
- Storage: 50+ GB SSD
- PostgreSQL: 15 or higher with connection pooling
- Redis (for session storage)
- Load balancer (for high availability)

### Required Accounts

- [ ] PostgreSQL database (managed or self-hosted)
- [ ] Vercel account (recommended) OR Docker host
- [ ] Microsoft Azure AD (for SharePoint/Office 365)
- [ ] Akaunting instance (if using accounting integration)
- [ ] DocuSeal account (if using e-signature)

---

## Environment Setup

### 1. Clone and Install

```bash
git clone <repository-url>
cd New-Atlas
npm install
```

### 2. Configure Environment Variables

Create `.env.production` from the template:

```bash
cp .env.example .env.production
```

Edit `.env.production` with production values:

```bash
# Database - Use connection pooling for production
DATABASE_URL="postgresql://user:password@db.example.com:5432/atlas?schema=public&connection_limit=10&pool_timeout=20"

# NextAuth - MUST be your production domain
NEXTAUTH_URL="https://atlas.redcedar.com"
NEXTAUTH_SECRET="<generate-with-openssl-rand-base64-32>"

# JWT
JWT_SECRET="<generate-with-openssl-rand-base64-32>"

# SharePoint Integration
SHAREPOINT_TENANT_URL="https://redcedar.sharepoint.com"
SHAREPOINT_CLIENT_ID="<from-azure-ad-app-registration>"
SHAREPOINT_CLIENT_SECRET="<from-azure-ad-app-registration>"
SHAREPOINT_SITE_URL="https://redcedar.sharepoint.com/sites/ATLAS"

# Microsoft 365
MICROSOFT_CLIENT_ID="<from-azure-ad>"
MICROSOFT_CLIENT_SECRET="<from-azure-ad>"
MICROSOFT_TENANT_ID="<your-tenant-id>"

# Akaunting
AKAUNTING_URL="https://accounting.redcedar.com"
AKAUNTING_API_KEY="<from-akaunting-settings>"

# DocuSeal
DOCUSEAL_API_KEY="<from-docuseal>"
DOCUSEAL_URL="https://api.docuseal.co"

# Application
NODE_ENV="production"
PORT=3000

# Email (for notifications)
SMTP_HOST="smtp.office365.com"
SMTP_PORT=587
SMTP_USER="atlas@redcedar.com"
SMTP_PASSWORD="<app-password>"
SMTP_FROM="ATLAS Platform <atlas@redcedar.com>"
```

### Generate Secrets

```bash
# Generate NEXTAUTH_SECRET
openssl rand -base64 32

# Generate JWT_SECRET
openssl rand -base64 32
```

---

## Database Configuration

### Option 1: Managed PostgreSQL (Recommended)

**Providers:**
- **Vercel Postgres** (easiest with Vercel deployment)
- **AWS RDS**
- **Google Cloud SQL**
- **Azure Database for PostgreSQL**
- **DigitalOcean Managed Databases**

**Setup Steps:**
1. Create PostgreSQL 14+ instance
2. Enable SSL connections
3. Set connection limit to 20-50
4. Enable automated backups (daily minimum)
5. Copy connection string to `DATABASE_URL`

### Option 2: Self-Hosted PostgreSQL

```bash
# Install PostgreSQL 15
sudo apt update
sudo apt install postgresql-15 postgresql-contrib

# Create database and user
sudo -u postgres psql

CREATE DATABASE atlas;
CREATE USER atlasuser WITH ENCRYPTED PASSWORD 'secure-password-here';
GRANT ALL PRIVILEGES ON DATABASE atlas TO atlasuser;
\q

# Configure PostgreSQL for remote connections
sudo nano /etc/postgresql/15/main/postgresql.conf
# Set: listen_addresses = '*'

sudo nano /etc/postgresql/15/main/pg_hba.conf
# Add: host atlas atlasuser 0.0.0.0/0 scram-sha-256

sudo systemctl restart postgresql

# Configure firewall
sudo ufw allow 5432/tcp
```

### Initialize Database

```bash
# Generate Prisma client
npm run db:generate

# Push schema to database
npm run db:push

# Seed with initial data
npm run db:seed
```

**⚠️ IMPORTANT:** After seeding, immediately change the default admin password!

---

## Application Deployment

### Option 1: Vercel (Recommended)

**Advantages:**
- Zero-config deployment
- Automatic HTTPS
- Global CDN
- Built-in monitoring
- GitHub integration

**Steps:**

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Link to Vercel:**
   ```bash
   vercel login
   vercel link
   ```

3. **Add Environment Variables:**
   ```bash
   # Add each variable from .env.production
   vercel env add DATABASE_URL
   vercel env add NEXTAUTH_URL
   vercel env add NEXTAUTH_SECRET
   # ... repeat for all variables
   ```

   Or use Vercel Dashboard:
   - Go to Project Settings → Environment Variables
   - Add all variables from `.env.production`

4. **Deploy:**
   ```bash
   npm run build  # Test build locally first
   vercel --prod
   ```

5. **Configure Domain:**
   - Go to Project Settings → Domains
   - Add custom domain: `atlas.redcedar.com`
   - Update DNS records as instructed

### Option 2: Docker Deployment

**Create Dockerfile:**

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Generate Prisma Client
RUN npx prisma generate

# Build Next.js
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

**Create docker-compose.yml:**

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: atlas
      POSTGRES_USER: atlasuser
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"
    restart: unless-stopped

  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      DATABASE_URL: postgresql://atlasuser:${DB_PASSWORD}@postgres:5432/atlas?schema=public
      NEXTAUTH_URL: ${NEXTAUTH_URL}
      NEXTAUTH_SECRET: ${NEXTAUTH_SECRET}
      JWT_SECRET: ${JWT_SECRET}
    depends_on:
      - postgres
    restart: unless-stopped

volumes:
  postgres_data:
```

**Deploy:**

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f app

# Initialize database
docker-compose exec app npm run db:push
docker-compose exec app npm run db:seed
```

### Option 3: Traditional VPS (Ubuntu/Debian)

```bash
# Install Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Install PM2
sudo npm install -g pm2

# Clone and build
git clone <repository-url> /var/www/atlas
cd /var/www/atlas
npm install
npm run db:generate
npm run build

# Start with PM2
pm2 start npm --name "atlas" -- start
pm2 save
pm2 startup

# Configure Nginx reverse proxy
sudo nano /etc/nginx/sites-available/atlas
```

**Nginx configuration:**

```nginx
server {
    listen 80;
    server_name atlas.redcedar.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/atlas /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

# Install SSL certificate with Let's Encrypt
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d atlas.redcedar.com
```

---

## Production Checklist

### Security

- [ ] Change default admin password
- [ ] Generate strong `NEXTAUTH_SECRET` and `JWT_SECRET`
- [ ] Enable HTTPS/TLS (SSL certificate)
- [ ] Configure CORS for API endpoints
- [ ] Set up firewall rules (allow only 80, 443, 22)
- [ ] Disable database remote access (if app and DB on same server)
- [ ] Enable database SSL connections
- [ ] Set up rate limiting
- [ ] Configure CSP headers
- [ ] Enable HTTP security headers (HSTS, X-Frame-Options, etc.)

### Database

- [ ] Enable automated daily backups
- [ ] Set up backup retention policy (30 days recommended)
- [ ] Test database restore procedure
- [ ] Configure connection pooling (Prisma Accelerate or PgBouncer)
- [ ] Set up database monitoring
- [ ] Create read replicas (optional, for high traffic)

### Application

- [ ] Set `NODE_ENV=production`
- [ ] Disable source maps in production (for security)
- [ ] Configure logging (file-based or service like LogRocket)
- [ ] Set up error tracking (Sentry recommended)
- [ ] Configure monitoring (UptimeRobot, Pingdom, or DataDog)
- [ ] Set up alerts for errors and downtime
- [ ] Test all integrations (SharePoint, Akaunting, DocuSeal)
- [ ] Verify email sending works

### Performance

- [ ] Enable Next.js caching
- [ ] Configure CDN for static assets
- [ ] Set up image optimization
- [ ] Enable Gzip/Brotli compression
- [ ] Configure browser caching headers
- [ ] Monitor and optimize slow queries
- [ ] Set up Redis for session storage (optional)

### Compliance & Documentation

- [ ] Document deployment architecture
- [ ] Create runbook for common operations
- [ ] Set up incident response procedures
- [ ] Configure user access controls
- [ ] Document backup/restore procedures
- [ ] Create disaster recovery plan
- [ ] Set up audit logging

---

## Monitoring & Maintenance

### Application Monitoring

**Recommended Tools:**
- **Vercel Analytics** (if using Vercel)
- **New Relic** (comprehensive APM)
- **DataDog** (infrastructure + application)
- **Sentry** (error tracking)

**Key Metrics to Monitor:**
- Response time (API endpoints)
- Error rate
- Database query performance
- Memory usage
- CPU usage
- Disk usage
- Active users

### Database Maintenance

```bash
# Run vacuum weekly (if self-hosted)
sudo -u postgres psql atlas -c "VACUUM ANALYZE;"

# Check database size
sudo -u postgres psql atlas -c "SELECT pg_size_pretty(pg_database_size('atlas'));"

# List largest tables
sudo -u postgres psql atlas -c "
  SELECT nspname || '.' || relname AS relation,
         pg_size_pretty(pg_total_relation_size(C.oid)) AS total_size
  FROM pg_class C
  LEFT JOIN pg_namespace N ON (N.oid = C.relnamespace)
  WHERE nspname NOT IN ('pg_catalog', 'information_schema')
  ORDER BY pg_total_relation_size(C.oid) DESC
  LIMIT 10;
"
```

### Backup Strategy

**Automated Daily Backups:**

```bash
#!/bin/bash
# /usr/local/bin/atlas-backup.sh

BACKUP_DIR="/var/backups/atlas"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/atlas_$DATE.sql.gz"

# Create backup
pg_dump -h localhost -U atlasuser atlas | gzip > $BACKUP_FILE

# Keep only last 30 days
find $BACKUP_DIR -name "atlas_*.sql.gz" -mtime +30 -delete

# Upload to S3 (optional)
# aws s3 cp $BACKUP_FILE s3://your-bucket/atlas-backups/
```

**Cron schedule:**
```bash
sudo crontab -e
# Add: 0 2 * * * /usr/local/bin/atlas-backup.sh
```

### Updates

```bash
# Pull latest code
cd /var/www/atlas
git pull origin main

# Install dependencies
npm install

# Rebuild
npm run build

# Run database migrations (if any)
npm run db:push

# Restart application
pm2 restart atlas

# Or for Docker:
docker-compose pull
docker-compose up -d --build
```

---

## Troubleshooting

### Application Won't Start

**Check logs:**
```bash
# PM2
pm2 logs atlas

# Docker
docker-compose logs -f app

# Vercel
vercel logs
```

**Common issues:**
- Missing environment variables → Check `.env.production`
- Database connection failed → Verify `DATABASE_URL` and network access
- Port already in use → Change `PORT` or kill conflicting process

### Database Connection Issues

```bash
# Test connection
psql $DATABASE_URL

# Check PostgreSQL is running
sudo systemctl status postgresql

# Check logs
sudo tail -f /var/log/postgresql/postgresql-15-main.log
```

### High Memory Usage

```bash
# Check Next.js memory
pm2 monit

# Restart application
pm2 restart atlas

# Optimize Prisma connection pool
# Add to DATABASE_URL: ?connection_limit=5&pool_timeout=20
```

### Slow Queries

```sql
-- Enable slow query logging in PostgreSQL
ALTER SYSTEM SET log_min_duration_statement = 1000; -- Log queries > 1s
SELECT pg_reload_conf();

-- View slow queries
SELECT query, calls, total_time, mean_time
FROM pg_stat_statements
ORDER BY mean_time DESC
LIMIT 10;
```

### SharePoint Integration Not Working

1. Verify Azure AD app registration
2. Check client ID and secret
3. Verify API permissions granted
4. Check token expiration
5. Review SharePoint site permissions

---

## Scaling

### Horizontal Scaling (Multiple App Instances)

**Load Balancer Setup (Nginx):**

```nginx
upstream atlas_backend {
    least_conn;
    server app1.internal:3000;
    server app2.internal:3000;
    server app3.internal:3000;
}

server {
    listen 443 ssl http2;
    server_name atlas.redcedar.com;

    ssl_certificate /etc/letsencrypt/live/atlas.redcedar.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/atlas.redcedar.com/privkey.pem;

    location / {
        proxy_pass http://atlas_backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}
```

### Database Scaling

**Read Replicas:**
```typescript
// prisma/client.ts
import { PrismaClient } from '@prisma/client'

const prismaWrite = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL_PRIMARY } }
})

const prismaRead = new PrismaClient({
  datasources: { db: { url: process.env.DATABASE_URL_REPLICA } }
})

export { prismaWrite, prismaRead }
```

---

## Support

For deployment assistance:
- Review [README.md](../README.md)
- Check [API Documentation](./API.md)
- Contact DevOps team

---

**Last Updated:** February 17, 2026  
**Version:** 3.0.0
