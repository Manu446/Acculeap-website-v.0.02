'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedSection } from '@/components/animations/AnimatedSection'

const countries = [
  { name: 'Kenya', code: 'ke', regulator: 'CBK' },
  { name: 'Uganda', code: 'ug', regulator: 'BOU' },
  { name: 'Ethiopia', code: 'et', regulator: 'NBE' },
  { name: 'Tanzania', code: 'tz', regulator: 'BOT' },
  { name: 'Rwanda', code: 'rw', regulator: 'BNR' },
  { name: 'Burundi', code: 'bi', regulator: 'BRB' },
  { name: 'South Sudan', code: 'ss', regulator: 'BOSS' },
]

const technologies = [
  'Power BI',
  'Tableau',
  'Python',
  'R',
  'SQL Server',
  'Azure',
  'AWS',
  'PostgreSQL',
  'Databricks',
  'Excel VBA',
  'SAS',
  'Spark',
]

function FlagMarquee() {
  const items = [...countries, ...countries, ...countries]

  return (
    <div className="flex gap-8 animate-marquee" style={{ width: 'max-content' }}>
      {items.map((country, i) => (
        <div
          key={`${country.code}-${i}`}
          className="shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:border-maroon/30 hover:shadow-md hover:-translate-y-0.5"
        >
          <div className="relative w-10 h-7 rounded-md overflow-hidden shadow-sm ring-1 ring-black/5">
            <Image
              src={`https://flagcdn.com/w80/${country.code}.png`}
              alt={`${country.name} flag`}
              fill
              className="object-cover"
              unoptimized
            />
          </div>
          <div className="flex flex-col">
            <span className="font-sora font-bold text-sm text-foreground leading-tight">
              {country.name}
            </span>
            <span className="text-[0.65rem] font-semibold uppercase tracking-wider text-maroon">
              {country.regulator}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
}

function TechMarquee() {
  const items = [...technologies, ...technologies, ...technologies]

  return (
    <div className="flex gap-6 animate-marquee-reverse" style={{ width: 'max-content' }}>
      {items.map((item, i) => (
        <span
          key={i}
          className="shrink-0 px-6 py-3 rounded-xl border border-border bg-background text-sm font-sora font-bold text-foreground/80 whitespace-nowrap transition-colors duration-300 hover:border-maroon/30 hover:text-maroon"
        >
          {item}
        </span>
      ))}
    </div>
  )
}

export function TechStack() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <AnimatedSection className="text-center max-w-2xl mx-auto">
          <span className="text-maroon font-bold text-sm uppercase tracking-[0.15em] mb-4 block relative pl-5 mx-auto w-fit">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-maroon rounded-full" />
            Expertise & Tools
          </span>
          <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold tracking-tight mb-5">
            Built on Proven Standards
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Regulator-aligned across seven East African markets, powered by modern analytics technology.
          </p>
        </AnimatedSection>
      </div>

      <div className="space-y-6">
        <div className="relative overflow-hidden py-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <FlagMarquee />
          </motion.div>
        </div>

        <div className="relative overflow-hidden py-4 bg-muted/30 border-y border-border">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-muted/30 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-muted/30 to-transparent z-10 pointer-events-none" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <TechMarquee />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
