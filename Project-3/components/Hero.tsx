"use client"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Github, Linkedin } from 'lucide-react'

const Hero = () =>{

    return (
        <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto md:w-100 md:h-100 rounded-3xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl"
            style={{ margin: '-3px' }}></div>
            <Image
              src={`/user.jpg`}
              alt="Developer Profile"
              width={450}
              height={450}
              className="rounded-2xl shadow-2xl relative z-10"
              priority
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center md:text-left"
          >
            <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
              <h1 className="text-3xl md:text-5xl font-bold">
                Hi, I am <span className="text-primary">Samuel Pereira</span>
              </h1>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  <Link href="https://github.com/pogeku" target="_blank" rel="noopener noreferrer">
                    <Github className="h-6 w-6 text-primary-foreground" />
                    <span className="sr-only">GitHub</span>
                  </Link>
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  asChild
                  className="rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                >
                  <Link href="https://www.linkedin.com/in/firstpiece/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-6 w-6 text-primary-foreground" />
                    <span className="sr-only">LinkedIn</span>
                  </Link>
                </Button>
              </div>
            </div>
            <h2 className="text-4xl md:text-7xl font-bold mb-6">
              Backend Developer
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Crafting robust and scalable server-side solutions with a passion for clean code and optimal performance.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Button
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg hover:-translate-y-0.5 rounded-full transition-all duration-300"
              >
                <Link href="#projects">View Projects</Link>
              </Button>
              <Button asChild className="bg-transparent hover:shadow-lg hover:-translate-y-0.5 rounded-full transition-all duration-300">
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    )
}

export default Hero