"use client"

import { useEffect, useRef } from "react"

interface MorphingBackgroundProps {
  className?: string
}

export default function MorphingBackground({ className = "" }: MorphingBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions to match window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Animation variables
    let animationFrameId: number
    let progress = 0
    const animationDuration = 10000 // 10 seconds for a full cycle

    // Draw the morphing shape
    const drawMorphingShape = (progress: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Calculate center position
      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Size based on screen dimensions
      const size = Math.min(canvas.width, canvas.height) * 0.4
      const thickness = size * 0.15

      // Draw with Portal style
      ctx.strokeStyle = "rgba(0, 0, 0, 0.15)"
      ctx.lineWidth = thickness
      ctx.lineCap = "round"

      // Morphing factor (0 = circle, 1 = infinity)
      const t = (Math.sin(progress * Math.PI * 2) + 1) / 2

      // Draw the morphing shape
      ctx.beginPath()

      // When t is 0, draw a circle (0 shape)
      // When t is 1, draw infinity symbol
      // In between, interpolate between the two

      const points = 100
      for (let i = 0; i <= points; i++) {
        const angle = (i / points) * Math.PI * 2

        // Circle coordinates
        const circleX = centerX + (Math.cos(angle) * size) / 2
        const circleY = centerY + (Math.sin(angle) * size) / 2

        // Infinity coordinates (parametric equation)
        const a = size / 2
        const b = size / 4
        const infinityParam = (i / points) * Math.PI * 2
        const infinityX =
          centerX + (a * Math.sin(infinityParam)) / (1 + Math.cos(infinityParam) * Math.cos(infinityParam))
        const infinityY =
          centerY +
          (b * Math.sin(infinityParam) * Math.cos(infinityParam)) /
            (1 + Math.cos(infinityParam) * Math.cos(infinityParam))

        // Interpolate between circle and infinity
        const x = circleX * (1 - t) + infinityX * t
        const y = circleY * (1 - t) + infinityY * t

        if (i === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }

      ctx.stroke()
    }

    // Animation loop
    const animate = (timestamp: number) => {
      progress = (timestamp % animationDuration) / animationDuration
      drawMorphingShape(progress)
      animationFrameId = requestAnimationFrame(animate)
    }

    animationFrameId = requestAnimationFrame(animate)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className={`fixed top-0 left-0 w-full h-full ${className}`} aria-hidden="true" />
}
