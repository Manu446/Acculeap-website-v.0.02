'use client'

import { motion, useInView, Variants } from 'framer-motion'
import { useRef, ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
  duration?: number
  once?: boolean
}

const variants: Record<string, Variants> = {
  up: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.8,
  once = true,
}: AnimatedSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants[direction]}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedStagger({
  children,
  className = '',
  staggerDelay = 0.1,
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  staggerDelay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function AnimatedItem({
  children,
  className = '',
  direction = 'up',
}: {
  children: ReactNode
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale'
}) {
  return (
    <motion.div
      variants={variants[direction]}
      transition={{
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
}: {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
