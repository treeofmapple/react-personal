'use client'

import Link from 'next/link'
import { cn } from '@/libs/utils'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className="w-full px-4 py-6 flex justify-center">
      <nav className="mx-auto inline-flex rounded-full bg-gradient-to-b from-background/80 to-background/60 backdrop-blur-lg border border-border/50 shadow-lg p-2">
        <div className="inline-flex items-center space-x-2">
          {[
            { href: '/', label: 'Home' },
            { href: '#services', label: 'Services' },
            { href: '#projects', label: 'Projects' },
            { href: '#contact', label: 'Contact' },
          ].map(({ href, label }) => (
            <NavLink key={href} href={href} active={pathname === href}>
              {label}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  )
}

const NavLink = ({ 
  href, 
  children, 
  active 
}: { 
  href: string
  children: React.ReactNode
  active?: boolean
}) => (
  <Link
    href={href}
    className={cn(
      "px-6 py-2 rounded-full transition-all duration-300",
      "bg-gradient-to-r from-purple-600 to-indigo-600",
      "text-primary-foreground font-medium",
      "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
      "hover:from-purple-700 hover:to-indigo-700",
      "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]",
      "hover:shadow-lg hover:-translate-y-0.5",
      active && "from-purple-700 to-indigo-700"
    )}
  >
    {children}
  </Link>
)

export default Navbar
