"use client"

import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { MouseEvent, useCallback } from "react"
import { cn } from "@/lib/utils"

export function CinematicHero({ children, className }: { children: React.ReactNode, className?: string }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const handleMouseMove = useCallback(({ clientX, clientY, currentTarget }: MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }, [mouseX, mouseY])

  return (
    <div 
      className={cn("relative w-full overflow-hidden group", className)}
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              var(--primary) 0%,
              transparent 80%
            )
          `,
          opacity: 0.08, // Very subtle glow
        }}
      />

      {/* Film Grain Texture */}
      <div className="pointer-events-none absolute inset-0 z-50 opacity-[0.04] mix-blend-difference select-none">
        <svg className="h-full w-full">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
