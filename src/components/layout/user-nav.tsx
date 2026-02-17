"use client"

import { User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function UserNav() {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
          <User className="h-4 w-4 text-primary" />
        </div>
        <div className="hidden md:block">
          <p className="text-sm font-medium">Admin User</p>
          <p className="text-xs text-muted-foreground">admin@redcedar.com</p>
        </div>
      </div>
      <Button variant="ghost" size="icon">
        <LogOut className="h-4 w-4" />
      </Button>
    </div>
  )
}
