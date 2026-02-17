import { Decimal } from '@prisma/client/runtime/library'

interface DealAnalyzerInputs {
  purchasePrice: number
  floorPlanBaseCost: number
  upgradePackageCost: number
  siteWorkEstimate: number
  municipalitySoftCosts: number
  siteAdjustments: number
  assetSalePrice: number
  sellingConcessions: number
  projectDuration: number // in days
  interestRate: number // annual rate as decimal
  ltcRatio: number // loan-to-cost as decimal
}

interface DealAnalyzerResults {
  // Section 1 - Cost Summary
  sticksAndBricks: number
  upgradesCost: number
  lotPreparation: number
  siteAdjustments: number
  municipalitySoftCosts: number
  builderFee: number
  contingency: number
  totalContractCost: number
  
  // Section 2 - Fixed Costs
  fixedCosts: number
  
  // Section 3 - Total Project Cost
  totalProjectCost: number
  
  // Section 4 - Financing
  loanAmount: number
  equityRequired: number
  interestCost: number
  costOfCapital: number
  totalCarryCosts: number
  
  // Section 5 - Deal Results
  totalAllInCost: number
  totalRevenue: number
  sellingCosts: number
  netSalesProceeds: number
  netProfit: number
  netProfitMargin: number
  verdict: 'STRONG_DEAL' | 'GOOD_DEAL' | 'MARGINAL' | 'NO_GO'
}

export function calculateDealAnalyzer(inputs: DealAnalyzerInputs): DealAnalyzerResults {
  // Section 1: Cost Summary
  const sticksAndBricks = inputs.floorPlanBaseCost
  const upgradesCost = inputs.upgradePackageCost
  const lotPreparation = inputs.siteWorkEstimate
  const siteAdjustments = inputs.siteAdjustments || 0
  const municipalitySoftCosts = inputs.municipalitySoftCosts
  
  const constructionCosts = sticksAndBricks + upgradesCost + lotPreparation + siteAdjustments + municipalitySoftCosts
  
  // Builder Fee: greater of $25,000 or 10%
  const builderFee = Math.max(25000, constructionCosts * 0.10)
  
  // Contingency: greater of $10,000 or 5%
  const contingency = Math.max(10000, constructionCosts * 0.05)
  
  const totalContractCost = constructionCosts + builderFee + contingency
  
  // Section 2: Fixed Per-House Costs
  // Builder warranty reserve, builder's risk insurance, closing costs (5% of purchase), utilities
  const fixedCosts = 2000 + 1500 + (inputs.purchasePrice * 0.05) + 500
  
  // Section 3: Total Project Cost (excluding carry)
  const totalProjectCost = inputs.purchasePrice + totalContractCost + fixedCosts
  
  // Section 4: Financing
  const loanAmount = totalProjectCost * inputs.ltcRatio
  const equityRequired = totalProjectCost - loanAmount
  
  // Interest on loan
  const interestCost = loanAmount * inputs.interestRate * (inputs.projectDuration / 365)
  
  // Cost of capital on equity (16% annual)
  const costOfCapital = equityRequired * 0.16 * (inputs.projectDuration / 365)
  
  const totalCarryCosts = interestCost + costOfCapital
  
  // Section 5: Deal Results
  const totalAllInCost = totalProjectCost + totalCarryCosts
  const totalRevenue = inputs.assetSalePrice
  
  // Selling costs: 8.5% default + concessions
  const sellingCosts = (totalRevenue * 0.085) + inputs.sellingConcessions
  
  const netSalesProceeds = totalRevenue - sellingCosts
  const netProfit = netSalesProceeds - totalAllInCost
  const netProfitMargin = netProfit / totalRevenue
  
  // Verdict
  let verdict: 'STRONG_DEAL' | 'GOOD_DEAL' | 'MARGINAL' | 'NO_GO'
  if (netProfitMargin > 0.10) {
    verdict = 'STRONG_DEAL'
  } else if (netProfitMargin >= 0.07) {
    verdict = 'GOOD_DEAL'
  } else if (netProfitMargin >= 0.05) {
    verdict = 'MARGINAL'
  } else {
    verdict = 'NO_GO'
  }
  
  return {
    sticksAndBricks,
    upgradesCost,
    lotPreparation,
    siteAdjustments,
    municipalitySoftCosts,
    builderFee,
    contingency,
    totalContractCost,
    fixedCosts,
    totalProjectCost,
    loanAmount,
    equityRequired,
    interestCost,
    costOfCapital,
    totalCarryCosts,
    totalAllInCost,
    totalRevenue,
    sellingCosts,
    netSalesProceeds,
    netProfit,
    netProfitMargin,
    verdict,
  }
}

export function calculateBuilderFee(constructionCosts: number): number {
  return Math.max(25000, constructionCosts * 0.10)
}

export function calculateContingency(constructionCosts: number): number {
  return Math.max(10000, constructionCosts * 0.05)
}

export function calculateChangeOrderMarkup(cost: number, reason: string): number {
  // Owner-initiated: 30% markup
  if (reason === 'OWNER_REQUEST') {
    return cost * 0.30
  }
  // Site condition: 10% markup
  if (reason === 'FIELD_CONDITION') {
    return cost * 0.10
  }
  // Contingency-funded: no markup
  return 0
}
