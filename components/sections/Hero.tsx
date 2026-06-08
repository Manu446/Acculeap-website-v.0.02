'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Particles } from '@/components/animations/Particles'
import { CountUp } from '@/components/animations/CountUp'
import { ArrowRight, BarChart3, Shield, LayoutDashboard } from 'lucide-react'

const floatingCards = [
  {
    icon: BarChart3,
    title: 'IFRS 9 Ready',
    text: 'Impairment models aligned with regional regulations',
    stat: '94%',
    label: 'On-time delivery',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    position: 'top-[5%] left-0',
    delay: '0s',
  },
  {
    icon: Shield,
    title: 'Risk Scored',
    text: 'Real-time credit & liquidity monitoring',
    stat: '24/7',
    label: 'Live monitoring',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    position: 'top-[35%] right-[-5%]',
    delay: '2.3s',
  },
  {
    icon: LayoutDashboard,
    title: 'Live Dashboards',
    text: 'Power BI & Tableau integration',
    stat: '40%',
    label: 'Faster reporting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    position: 'bottom-[5%] left-[10%]',
    delay: '4.6s',
  },
]

const stats = [
  { value: 50, suffix: '+', label: 'Institutions Served' },
  { value: 98, suffix: '%', label: 'Client Retention' },
  { value: 7, suffix: '', label: 'Countries Covered' },
]

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20 pb-24">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 animate-hero-zoom">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80')`,
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/85 via-black/50 to-maroon/20 z-[1]" />
        <div className="absolute inset-0 z-[1] opacity-30 bg-[radial-gradient(circle_at_20%_50%,rgba(128,0,0,0.25)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(165,42,42,0.15)_0%,transparent_50%)] animate-mesh-move" />
        <Particles />
        <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-background to-transparent z-[2]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center gap-2.5 px-5 py-2.5 border border-white/15 rounded-full text-white/90 text-xs font-semibold uppercase tracking-[0.2em] bg-maroon/25 backdrop-blur-xl mb-7 animate-pulse-glow"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              East Africa's IFRS & Risk Partner
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-[4.5rem] font-sora font-extrabold text-white leading-[1.05] tracking-tight mb-7"
            >
              Financial Intelligence,
              <br />
              <span className="text-gradient">Made Modern</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="text-white/75 text-lg leading-relaxed max-w-lg mb-9"
            >
              IFRS advisory, risk management, and business intelligence built for East Africa's financial institutions. Fast implementation. Trusted results.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-wrap gap-4 mb-14"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2.5 h-14 px-8 rounded-lg bg-gradient-to-br from-maroon to-maroon-light text-white font-sora font-bold shadow-lg shadow-maroon/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-maroon/40 btn-shine"
              >
                Book a Call
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/solutions"
                className="inline-flex items-center gap-2.5 h-14 px-8 rounded-lg bg-white/10 border border-white/20 text-white font-sora font-bold backdrop-blur-sm transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
              >
                Explore Solutions
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="grid grid-cols-3 gap-10 pt-9 border-t border-white/10"
            >
              {stats.map((stat, i) => (
                <div key={i} className="relative">
                  {i < stats.length - 1 && (
                    <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-px h-10 bg-white/10" />
                  )}
                  <div className="font-sora text-3xl lg:text-[2.4rem] font-extrabold text-white leading-none">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-white/50 text-sm mt-2.5 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Floating Cards */}
          <div className="hidden lg:block relative h-[520px]">
            {floatingCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1.2 + i * 0.2 }}
                className={`absolute ${card.position} w-[260px] bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-2xl p-5 shadow-[0_20px_60px_rgba(0,0,0,0.3)] animate-float`}
                style={{ animationDelay: card.delay }}
              >
                <div className="relative w-full h-[110px] rounded-lg overflow-hidden mb-3.5">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover"
                    sizes="260px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-maroon/20" />
                  <div className="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-lg bg-maroon/30 backdrop-blur-md border border-white/10 flex items-center justify-center">
                    <card.icon className="w-4 h-4 text-maroon-light" />
                  </div>
                </div>
                <h3 className="font-sora font-bold text-white text-sm mb-1">
                  {card.title}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed mb-3">
                  {card.text}
                </p>
                <div className="flex items-baseline gap-1.5 pt-2.5 border-t border-white/[0.08]">
                  <span className="font-sora font-extrabold text-maroon-light text-lg">
                    {card.stat}
                  </span>
                  <span className="text-white/40 text-[0.7rem] uppercase tracking-wider">
                    {card.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[0.65rem] text-white/40 uppercase tracking-[0.2em]">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-white/50 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/80 to-transparent animate-scroll-line" />
        </div>
      </motion.div>
    </section>
  )
}
