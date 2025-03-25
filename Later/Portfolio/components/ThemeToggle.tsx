"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="p-2 rounded-full transition-all duration-300
                 bg-gradient-to-r from-purple-600 to-indigo-600
                 text-primary-foreground
                 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)]
                 hover:from-purple-700 hover:to-indigo-700
                 hover:shadow-lg hover:-translate-y-0.5"
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </button>
  )
}

