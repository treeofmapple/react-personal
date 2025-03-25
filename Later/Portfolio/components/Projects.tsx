"use client"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Github, ExternalLink } from 'lucide-react'
import { projectsInfo } from '@/data/projectsInfo'

const Projectss = () => {
    return (
        <section className="container mx-auto px-4 py-20" id="projects">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 gap-8">
        {projectsInfo.map((project, index) => (
            <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            >
            <div className="relative p-0.5 bg-gradient-to-br from-purple-400 to-indigo-900">
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:bg-gray-800 bg-background">
                <div className="grid md:grid-cols-2 gap-6">
                    <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    />
                    <div className="p-6 flex flex-col">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-6 flex-grow">{project.description}</p>
                    <div className="flex gap-4 justify-end">
                        <Button asChild className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                        <Link href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" /> GitHub
                        </Link>
                        </Button>
                        <Button asChild>
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                        </Link>
                        </Button>
                    </div>
                    </div>
                </div>
                </Card>
            </div>
            </motion.div>
        ))}
        </div>
    </section>
    )
}

export default Projectss