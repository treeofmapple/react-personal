import Link from 'next/link'
import { cn } from '@/libs/utils'

export const NavLink = ({
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
        "px-4 sm:px-6 text-sm sm:text-base rounded-full transition-all duration-300",
        "bg-gradient-to-r from-purple-600 to-indigo-600",
        "text-primary-foreground font-medium",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]",
        "hover:from-purple-700 hover:to-indigo-700",
        "hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2)]",
        "hover:shadow-lg hover:-translate-y-0.5",
        active && "from-purple-700 to-indigo-700",
        "max-w-[8rem] h-10 flex items-center justify-center"
      )}
    >
      {children}
    </Link>
  )