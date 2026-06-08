'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { ArrowRight, Clock, Shield, Users } from 'lucide-react'

const trustPoints = [
  { icon: Clock, label: '30-min discovery call' },
  { icon: Shield, label: 'No commitment required' },
  { icon: Users, label: 'Senior advisors only' },
]

export function CTA() {
  return (
    <section className="pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="relative rounded-3xl overflow-hidden p-12 lg:p-28 text-center">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 animate-cta-zoom">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80')`,
                  }}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-maroon/90 to-maroon-deep/95 z-[1]" />
              <div className="absolute inset-0 z-[1] opacity-30 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15)_0%,transparent_50%)]" />
            </div>

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-[3.2rem] font-sora font-extrabold text-white mb-5"
              >
                Ready to Modernize Your Finance Function?
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-white/85 text-lg max-w-lg mx-auto mb-9 leading-relaxed"
              >
                Book a free 30-minute discovery call with our advisory team. No commitment, just clarity.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-4 mb-10"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 h-14 px-8 rounded-lg bg-white text-maroon font-sora font-bold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl btn-shine"
                >
                  Schedule Your Call
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-2.5 h-14 px-8 rounded-lg bg-white/10 border border-white/25 text-white font-sora font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
                >
                  View Solutions
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6"
              >
                {trustPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                    <point.icon className="w-4 h-4 text-white/50" />
                    {point.label}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
