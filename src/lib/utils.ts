import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatCurrency(amount: number | string): string {
  const num = typeof amount === 'string' ? parseFloat(amount) : amount
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(num)
}

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  }).format(d)
}

export function formatPercent(value: number | string): string {
  const num = typeof value === 'string' ? parseFloat(value) : value
  return `${(num * 100).toFixed(2)}%`
}

export function calculateBusinessDays(startDate: Date, days: number): Date {
  let count = 0
  const current = new Date(startDate)
  
  while (count < days) {
    current.setDate(current.getDate() + 1)
    const dayOfWeek = current.getDay()
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      count++
    }
  }
  
  return current
}

export function generateProjectNumber(): string {
  const year = new Date().getFullYear().toString().slice(-2)
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0')
  return `${year}-${random}`
}

export function generateJobNumber(): string {
  return generateProjectNumber()
}

export function generatePONumber(): string {
  const year = new Date().getFullYear().toString().slice(-2)
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `PO-${year}-${random}`
}

export function generateCONumber(): string {
  const year = new Date().getFullYear().toString().slice(-2)
  const random = Math.floor(Math.random() * 10000).toString().padStart(4, '0')
  return `CO-${year}-${random}`
}
