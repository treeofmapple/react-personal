import type { Metadata } from "next";
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'
import { SnowAnimation } from '@/components/SnowAnimation'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: "Portfolio Samuel Pereira",
  description: "Professional Porfolio for FullStack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed inset-0 -z-10 animate-gradient bg-gradient-to-br from-background via-background/80 to-background"></div>
          <SnowAnimation />
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}

