"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  TrendingUp,
  Building,
  Hammer,
  Calculator,
  Users,
  Calendar,
  Settings,
  FileText,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Opportunities", href: "/opportunities", icon: TrendingUp },
  { name: "Projects", href: "/projects", icon: Building },
  { name: "Construction", href: "/construction", icon: Hammer },
  { name: "Accounting", href: "/accounting", icon: Calculator },
  { name: "Contacts", href: "/contacts", icon: Users },
  { name: "Calendar", href: "/calendar", icon: Calendar },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Admin", href: "/admin", icon: Settings },
]

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navigation.map((item) => {
        const Icon = item.icon
        const isActive = pathname === item.href || pathname?.startsWith(item.href + "/")
        
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              "flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary",
              isActive ? "text-primary" : "text-muted-foreground"
            )}
          >
            <Icon className="h-4 w-4" />
            <span className="hidden lg:inline">{item.name}</span>
          </Link>
        )
      })}
    </nav>
  )
}
