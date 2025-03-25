'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail, ExternalLink, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [aboutRef, aboutInView] = useInView({ triggerOnce: true });
  const [projectsRef, projectsInView] = useInView({ triggerOnce: true });
  const [contactRef, contactInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-background">
      <section
        ref={heroRef}
        className="container flex min-h-screen items-center justify-center py-24"
      >
        <motion.div
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Hi, I'm John Doe
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Full Stack Developer & Software Engineer
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Github className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="outline" size="icon">
                    <Mail className="h-5 w-5" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Email</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </motion.div>
      </section>

      <section
        id="about"
        ref={aboutRef}
        className="container py-24"
      >
        <motion.div
          initial="hidden"
          animate={aboutInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-3xl font-bold tracking-tight">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                I'm a passionate Full Stack Developer with over 5 years of experience
                building web applications. I specialize in React, Node.js, and
                modern web technologies.
              </p>
              <p className="text-muted-foreground">
                My journey in software development started when I built my first
                website at 15. Since then, I've worked with startups and
                enterprises, delivering scalable solutions and exceptional user
                experiences.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4">
                <Code2 className="mb-2 h-6 w-6" />
                <h3 className="font-semibold">Frontend</h3>
                <p className="text-sm text-muted-foreground">
                  React, Next.js, TypeScript
                </p>
              </Card>
              <Card className="p-4">
                <Code2 className="mb-2 h-6 w-6" />
                <h3 className="font-semibold">Backend</h3>
                <p className="text-sm text-muted-foreground">
                  Node.js, Python, PostgreSQL
                </p>
              </Card>
            </div>
          </div>
        </motion.div>
      </section>

      <section
        id="projects"
        ref={projectsRef}
        className="container py-24"
      >
        <motion.div
          initial="hidden"
          animate={projectsInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-12 text-3xl font-bold tracking-tight">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((project) => (
              <Card key={project} className="overflow-hidden">
                <div className="aspect-video bg-muted" />
                <div className="p-6">
                  <h3 className="font-semibold">Project {project}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    A brief description of the project and its key features.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <Button variant="outline" size="sm">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </section>

      <section
        id="contact"
        ref={contactRef}
        className="container py-24"
      >
        <motion.div
          initial="hidden"
          animate={contactInView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-3xl font-bold tracking-tight">Get in Touch</h2>
          <p className="mb-8 text-muted-foreground">
            I'm always open to new opportunities and collaborations.
          </p>
          <Button size="lg">
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
        </motion.div>
      </section>
    </div>
  );
}