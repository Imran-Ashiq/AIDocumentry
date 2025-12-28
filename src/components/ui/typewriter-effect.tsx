"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface TypewriterEffectProps {
  text: string
  speed?: number
  delay?: number
  className?: string
  cursor?: boolean
}

export function TypewriterEffect({ 
  text, 
  speed = 30, 
  delay = 0, 
  className = "",
  cursor = true 
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("")
  const [started, setStarted] = useState(false)

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    setDisplayedText("")
  }, [text])

  useEffect(() => {
    if (!started) return

    let i = 0
    setDisplayedText("") // Ensure we start clean
    
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1))
        i++
      } else {
        clearInterval(interval)
      }
    }, speed)

    return () => clearInterval(interval)
  }, [text, speed, started])

  return (
    <span className={className}>
      {displayedText}
      {cursor && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
          className="inline-block w-[2px] h-[1em] bg-primary ml-1 align-middle"
        />
      )}
    </span>
  )
}
