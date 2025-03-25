import { Github, Linkedin, Mail } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-sm border-t border-border">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/pogeku" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/firstpiece/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:samuelsantana778@gmail.com">
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
        </div>
        <p className="mt-4 text-center text-sm text-foreground">
          © {new Date().getFullYear()} Backend Developer Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

