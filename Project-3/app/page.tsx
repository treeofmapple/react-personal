"use client"

import Contactoss from "@/components/Contact"
import Projectss from '@/components/Projects'
import Servicess from '@/components/Services'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Servicess />
      <Projectss />
      <Contactoss />
    </div>
  )
}

