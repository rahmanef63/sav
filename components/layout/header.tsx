"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { Menu, X, Home, Users, Image, BookOpen, UserPlus, Palette, Workflow } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  
  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Users },
    { name: "Portfolio", href: "/portfolio", icon: Image },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: UserPlus },
    { name: "service", href: "/services", icon: Workflow },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Palette className="h-6 w-6" />
          <span className="text-xl font-bold">SAV Atelier</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="mx-6 hidden md:flex items-center space-x-4 lg:space-x-6">
          {navigation.map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary relative py-2",
                  isActive ? "text-primary" : "text-muted-foreground"
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeTab"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        <div className="ml-auto flex items-center space-x-4">
          <Button variant="outline" size="sm" className="hidden md:flex" asChild>
            <Link href="/partner" className="flex items-center space-x-2">
              <UserPlus className="h-4 w-4" />
              <span>Become a Partner</span>
            </Link>
          </Button>
          
          <ModeToggle />

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 py-4">
                {navigation.map((item) => {
                  const Icon = item.icon
                  const isActive = pathname === item.href
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center space-x-2 text-sm font-medium transition-colors hover:text-primary p-2 rounded-md",
                        isActive ? "bg-secondary text-primary" : "text-muted-foreground"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </Link>
                  )
                })}
                <Button asChild className="mt-4">
                  <Link href="/partner" onClick={() => setIsOpen(false)}>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Become a Partner
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}