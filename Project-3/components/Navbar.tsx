'use client'

import { NavLink } from '@/components/ui/Navlink'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()

  return (
    <div className="sticky top-0 z-50 flex justify-center py-2 sm:py-4 bg-background">
      {/* Limited width to fit content naturally */}
      <div className="rounded-full border-[2px] px-3 py-2">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
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
      </div>
    </div>
  )
}

export default Navbar