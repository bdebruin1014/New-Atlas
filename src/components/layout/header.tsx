"use client"

import { MainNav } from "./main-nav"
import { UserNav } from "./user-nav"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8 flex items-center space-x-2">
          <span className="font-bold text-xl bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            ATLAS
          </span>
          <span className="text-sm text-muted-foreground hidden md:inline">
            Red Cedar Homes
          </span>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <MainNav />
          <UserNav />
        </div>
      </div>
    </header>
  )
}
