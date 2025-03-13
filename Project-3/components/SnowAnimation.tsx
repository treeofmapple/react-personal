'use client'

import { useEffect, useRef } from 'react'
import { useTheme } from 'next-themes'

export const SnowAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const colors = theme === 'light' 
      ? ['rgba(147, 51, 234, 0.5)', 'rgba(59, 130, 246, 0.5)', 'rgba(139, 92, 246, 0.5)']
      : ['rgba(255, 255, 255, 0.5)']

    const particles: Array<{
      x: number
      y: number
      radius: number
      speed: number
      wind: number
      color: string
    }> = []

    const createParticles = () => {
      const particleCount = 100
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speed: Math.random() * 1 + 0.5,
          wind: Math.random() * 0.5 - 0.25,
          color: colors[Math.floor(Math.random() * colors.length)]
        })
      }
    }
    createParticles()

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      
      particles.forEach(particle => {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        particle.y += particle.speed
        particle.x += particle.wind

        if (particle.y > canvas.height) {
          particle.y = -5
          particle.x = Math.random() * canvas.width
        }
        if (particle.x > canvas.width) {
          particle.x = 0
        }
        if (particle.x < 0) {
          particle.x = canvas.width
        }
      })

      requestAnimationFrame(animate)
    }
    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  )
}

