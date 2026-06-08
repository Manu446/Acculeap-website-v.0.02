'use client'

import { motion } from 'framer-motion'
import { Particles } from '@/components/animations/Particles'

interface PageHeroProps {
  title: string
  subtitle: string
  image: string
  badge?: string
}

export function PageHero({ title, subtitle, image, badge }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-hero-zoom">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${image}')` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background z-[1]" />
        <div className="absolute inset-0 z-[1] opacity-20 bg-[radial-gradient(circle_at_30%_40%,rgba(128,0,0,0.3)_0%,transparent_50%)]" />
        <Particles />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {badge && (
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-white/90 font-bold text-sm uppercase tracking-[0.15em] mb-4 px-4 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm"
          >
            {badge}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl lg:text-6xl font-sora font-extrabold text-white mb-4"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed"
        >
          {subtitle}
        </motion.p>
      </div>
    </section>
  )
}
