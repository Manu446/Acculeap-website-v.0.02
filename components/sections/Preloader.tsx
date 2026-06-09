'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Logo } from '@/components/Logo'

const preloaderMessages: Record<string, { title: string; subtitle: string; status: string }> = {
  '/': {
    title: 'Welcome to Acculeap',
    subtitle: "Financial intelligence for East Africa's leading institutions.",
    status: 'Preparing your experience',
  },
  '/solutions': {
    title: 'Our Solutions',
    subtitle: 'IFRS advisory, risk management, and business intelligence.',
    status: 'Loading solutions',
  },
  '/about': {
    title: 'About Acculeap',
    subtitle: 'Actuaries, accountants, and data engineers for East Africa.',
    status: 'Loading our story',
  },
  '/insights': {
    title: 'Insights',
    subtitle: 'Guidance on IFRS, risk, and analytics across the region.',
    status: 'Loading insights',
  },
  '/contact': {
    title: 'Get in Touch',
    subtitle: "Let's start with a conversation about your finance function.",
    status: 'Loading contact',
  },
}

const fallbackMessage = {
  title: 'Acculeap Analytics',
  subtitle: 'Financial intelligence, made modern.',
  status: 'Loading page',
}

export function Preloader() {
  const pathname = usePathname()
  const message = preloaderMessages[pathname] ?? fallbackMessage
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setLoading(false), 500)
          return 100
        }
        return prev + Math.random() * 15 + 5
      })
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center"
        >
          {/* Background effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-[10%] left-[15%] w-[300px] h-[300px] rounded-full bg-maroon/5 animate-pulse-glow" />
            <div className="absolute top-[60%] right-[10%] w-[200px] h-[200px] rounded-full bg-maroon-light/5 animate-pulse-glow animation-delay-1000" />
            <div className="absolute bottom-[20%] left-[40%] w-[150px] h-[150px] rounded-full bg-maroon/5 animate-pulse-glow animation-delay-2000" />
          </div>

          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg viewBox=%270%200%20256%20256%27 xmlns=%27http://www.w3.org/2000/svg%27%3E%3Cfilter id=%27noise%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%274%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27100%25%27 height=%27100%25%27 filter=%27url(%23noise)%27/%3E%3C/svg%3E')] opacity-[0.04]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,0,0,0.03)_2px,rgba(0,0,0,0.03)_4px)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgba(0,0,0,0.5)_100%)]" />

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ scale: 0, rotate: -15, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              transition={{ duration: 1.4, ease: [0.34, 1.56, 0.64, 1] }}
              className="mx-auto mb-8"
            >
              <Logo size="lg" linked={false} className="brightness-0 invert" />
            </motion.div>

            <motion.h1
              key={message.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="font-sora font-extrabold text-2xl sm:text-3xl text-white mb-3"
            >
              {message.title}
            </motion.h1>

            <motion.p
              key={message.subtitle}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="font-sora text-sm sm:text-base text-white/60 max-w-sm mx-auto leading-relaxed mb-8"
            >
              {message.subtitle}
            </motion.p>

            <motion.div
              key={message.status}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              className="font-sora font-medium text-xs text-white/40 uppercase tracking-[0.4em] mb-8"
            >
              {message.status}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="w-[180px] h-[1.5px] bg-white/10 rounded-sm mx-auto relative overflow-hidden"
            >
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-maroon via-maroon-light to-maroon-bright rounded-sm"
                initial={{ width: '0%' }}
                animate={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="mt-6 font-sora font-semibold text-[0.7rem] text-white/30 tracking-[0.15em] tabular-nums"
            >
              {Math.min(Math.floor(progress), 100)}%
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[0.7rem] text-white/20 tracking-[0.1em]"
          >
            Acculeap Analytics — East Africa
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
