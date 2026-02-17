import { PrismaClient } from '@prisma/client'
import { hashPassword } from '../src/lib/auth'

const prisma = new PrismaClient()

async function main() {
  console.log('Starting database seed...')

  // Create admin user
  const adminUser = await prisma.user.create({
    data: {
      email: 'admin@redcedar.com',
      password: await hashPassword('admin123'),
      firstName: 'Admin',
      lastName: 'User',
      phone: '(864) 555-0100',
      role: 'GLOBAL_ADMIN',
      status: 'ACTIVE',
    },
  })

  console.log('✓ Created admin user')

  // Create teams
  const acquisitionsTeam = await prisma.team.create({
    data: {
      name: 'Acquisitions SC Team',
      description: 'South Carolina acquisitions team',
      members: {
        create: {
          userId: adminUser.id,
          role: 'Team Lead',
        },
      },
    },
  })

  console.log('✓ Created teams')

  // Create entities
  const oliveBrynn = await prisma.entity.create({
    data: {
      name: 'Olive Brynn LLC',
      useType: 'HOLDING_COMPANY',
      legalType: 'LLC',
      stateOfFormation: 'SC',
      status: 'Active',
    },
  })

  const fundI = await prisma.entity.create({
    data: {
      name: 'Red Cedar Scattered Lot Fund I',
      useType: 'FUND_SYNDICATION',
      legalType: 'LLC',
      parentId: oliveBrynn.id,
      stateOfFormation: 'SC',
      status: 'Active',
    },
  })

  const fundII = await prisma.entity.create({
    data: {
      name: 'Red Cedar Scattered Lot Fund II',
      useType: 'FUND_SYNDICATION',
      legalType: 'LLC',
      parentId: oliveBrynn.id,
      stateOfFormation: 'SC',
      status: 'Active',
    },
  })

  console.log('✓ Created entities')

  // Create floor plans
  const dogwood = await prisma.floorPlan.create({
    data: {
      name: 'Dogwood',
      type: 'SFH',
      heatedSF: 1541,
      bedrooms: 3,
      bathrooms: 2.5,
      garage: '2-Car',
      unheatedSF: 397,
      stories: 2,
      minLotWidth: 29,
      minLotDepth: 36,
      baseCost: 124030.98,
      totalCost: 137555.98,
      costPerSFBase: 80.49,
      costPerSFTotal: 89.26,
      classicUpgrade: 4000,
      eleganceUpgrade: 8300,
      status: 'Active',
    },
  })

  const magnolia = await prisma.floorPlan.create({
    data: {
      name: 'Magnolia',
      type: 'SFH',
      heatedSF: 2771,
      bedrooms: 4,
      bathrooms: 3,
      garage: '2-Car',
      unheatedSF: 440,
      stories: 2,
      minLotWidth: 38,
      minLotDepth: 40,
      baseCost: 178184,
      totalCost: 192709,
      costPerSFBase: 64.30,
      costPerSFTotal: 69.54,
      classicUpgrade: 4600,
      eleganceUpgrade: 11100,
      status: 'Active',
    },
  })

  const palmetto = await prisma.floorPlan.create({
    data: {
      name: 'Palmetto',
      type: 'TOWNHOME',
      heatedSF: 1304,
      bedrooms: 3,
      bathrooms: 2.5,
      garage: 'None',
      unheatedSF: 0,
      stories: 2,
      minLotWidth: 20,
      minLotDepth: 24,
      baseCost: 110043,
      totalCost: 123568,
      costPerSFBase: 84.39,
      costPerSFTotal: 94.76,
      classicUpgrade: 3900,
      eleganceUpgrade: 8200,
      status: 'Active',
    },
  })

  console.log('✓ Created floor plans')

  // Create municipalities
  const greenville = await prisma.municipality.create({
    data: {
      name: 'City of Greenville',
      state: 'SC',
      county: 'Greenville',
      waterTapFee: 2500,
      sewerTapFee: 2800,
      totalWSFees: 5300,
      meterCharges: 500,
      impactFees: 3200,
      permitFeeSchedule: 'Based on valuation',
    },
  })

  const greenvilleCounty = await prisma.municipality.create({
    data: {
      name: 'Greenville County',
      state: 'SC',
      county: 'Greenville',
      waterTapFee: 2200,
      sewerTapFee: 2500,
      totalWSFees: 4700,
      meterCharges: 450,
      impactFees: 2800,
      permitFeeSchedule: 'Based on valuation',
    },
  })

  console.log('✓ Created municipalities')

  // Create contacts
  const sellerContact = await prisma.contact.create({
    data: {
      firstName: 'Jane',
      lastName: 'Seller',
      email: 'jane.seller@email.com',
      phone: '(864) 555-0123',
      status: 'ACTIVE',
      contactTypes: {
        create: {
          type: 'SELLER',
        },
      },
    },
  })

  const attorneyContact = await prisma.contact.create({
    data: {
      firstName: 'Sarah',
      lastName: 'Attorney',
      company: 'Smith & Associates',
      email: 'sarah@smithlaw.com',
      phone: '(864) 555-0789',
      status: 'ACTIVE',
      contactTypes: {
        create: {
          type: 'ATTORNEY_LEGAL',
        },
      },
    },
  })

  const superintendentContact = await prisma.contact.create({
    data: {
      firstName: 'Mike',
      lastName: 'Davis',
      company: 'Red Cedar Homes',
      email: 'mdavis@redcedar.com',
      phone: '(864) 555-0234',
      status: 'ACTIVE',
      contactTypes: {
        create: [
          { type: 'SUPERINTENDENT' },
          { type: 'PROJECT_MANAGER' },
        ],
      },
    },
  })

  console.log('✓ Created contacts')

  // Create an opportunity
  const opportunity = await prisma.opportunity.create({
    data: {
      name: '142 Taylors Mill Rd',
      address: '142 Taylors Mill Rd',
      city: 'Taylors',
      county: 'Greenville',
      state: 'SC',
      zip: '29687',
      parcelNumber: '0512-05-24-9876',
      type: 'SCATTERED_LOT',
      stage: 'Under Contract',
      source: 'MLS',
      assignedToId: adminUser.id,
      entityId: fundI.id,
      housePlanId: dogwood.id,
      projectedPurchasePrice: 45000,
      projectedSalePrice: 375000,
      zoning: 'R-6',
      buildType: 'Single Family',
      waterAvailable: true,
      sewerAvailable: true,
      powerAvailable: true,
      lotWidth: 50,
      lotDepth: 120,
      lotSF: 6000,
      contacts: {
        create: [
          {
            contactId: sellerContact.id,
            role: 'Seller',
          },
          {
            contactId: attorneyContact.id,
            role: 'Closing Attorney',
          },
        ],
      },
    },
  })

  // Create deal analyzer for the opportunity
  const dealAnalyzer = await prisma.dealAnalyzer.create({
    data: {
      opportunityId: opportunity.id,
      floorPlanId: dogwood.id,
      upgradePackage: 'Classic',
      municipalityId: greenville.id,
      purchasePrice: 45000,
      siteWorkEstimate: 8500,
      verticalAdjustments: 0,
      assetSalePrice: 375000,
      sellingConcessions: 0,
      projectDuration: 120,
      sticksAndBricks: 124031,
      upgradesCost: 4000,
      lotPreparation: 8500,
      municipalitySoftCosts: 10875,
      builderFee: 25000,
      contingency: 10000,
      totalContractCost: 182406,
      fixedCosts: 6250,
      totalProjectCost: 233656,
      loanAmount: 198608,
      equityRequired: 35048,
      interestCost: 6540,
      costOfCapital: 1848,
      totalCarryCosts: 8388,
      totalAllInCost: 242044,
      totalRevenue: 375000,
      sellingCosts: 31875,
      netSalesProceeds: 343125,
      netProfit: 101081,
      netProfitMargin: 0.2695,
      verdict: 'STRONG_DEAL',
    },
  })

  console.log('✓ Created opportunity with deal analyzer')

  // Create a project (converted from opportunity)
  const project = await prisma.project.create({
    data: {
      projectNumber: '26-042',
      name: '142 Taylors Mill Rd',
      address: '142 Taylors Mill Rd',
      type: 'SCATTERED_LOT',
      status: 'CONSTRUCTION',
      ownerEntityId: fundI.id,
      assignedToId: adminUser.id,
      opportunityId: opportunity.id,
      floorPlanId: dogwood.id,
      upgradePackage: 'Classic',
      totalBudget: 233656,
      currentSpend: 145230,
      lotWidth: 50,
      lotDepth: 120,
      lotSF: 6000,
      zoning: 'R-6',
      foundationType: 'Slab',
      contacts: {
        create: [
          {
            contactId: attorneyContact.id,
            role: 'Closing Attorney',
          },
        ],
      },
    },
  })

  console.log('✓ Created project')

  // Create a construction job
  const job = await prisma.job.create({
    data: {
      jobNumber: '26-042',
      name: '142 Taylors Mill Rd',
      clientType: 'INTERNAL',
      clientId: fundI.id,
      projectId: project.id,
      contractType: 'COST_PLUS_FIXED_FEE',
      contractAmount: 182406,
      builderFee: 25000,
      status: 'ACTIVE',
      numberOfUnits: 1,
      state: 'SC',
      assignedToId: adminUser.id,
      superintendentId: superintendentContact.id,
      startDate: new Date('2026-01-22'),
      projectedCompletion: new Date('2026-05-21'),
      contacts: {
        create: [
          {
            contactId: superintendentContact.id,
            role: 'Superintendent',
          },
        ],
      },
    },
  })

  // Create a unit for the job
  const unit = await prisma.unit.create({
    data: {
      unitNumber: '26-042-01',
      jobId: job.id,
      address: '142 Taylors Mill Rd',
      floorPlanId: dogwood.id,
      upgradePackage: 'Classic',
      status: 'INSULATION',
      baseCost: 124031,
      upgradeCost: 4000,
      lotPrepCost: 8500,
      softCosts: 10875,
      builderFee: 25000,
      contingency: 10000,
      totalBudget: 182406,
      totalCommitted: 146590,
      totalActual: 112340,
      variance: 70066,
      permitIssued: new Date('2026-01-15'),
      constructionStart: new Date('2026-01-22'),
      projectedCompletion: new Date('2026-05-21'),
    },
  })

  console.log('✓ Created job and unit')

  console.log('')
  console.log('✅ Seed completed successfully!')
  console.log('')
  console.log('Login credentials:')
  console.log('  Email: admin@redcedar.com')
  console.log('  Password: admin123')
  console.log('')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
