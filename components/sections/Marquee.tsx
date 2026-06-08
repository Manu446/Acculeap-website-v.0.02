'use client'

import { motion } from 'framer-motion'
import {
  Calculator,
  TrendingDown,
  Layers,
  Shield,
  BarChart3,
  FileCheck,
  LineChart,
  Scale,
  type LucideIcon,
} from 'lucide-react'

const ifrs9Topics: { label: string; icon: LucideIcon }[] = [
  { label: 'Expected Credit Loss (ECL)', icon: Calculator },
  { label: 'Stage 1 · Stage 2 · Stage 3', icon: Layers },
  { label: 'Probability of Default (PD)', icon: TrendingDown },
  { label: 'Loss Given Default (LGD)', icon: Scale },
  { label: 'Exposure at Default (EAD)', icon: BarChart3 },
  { label: 'Significant Increase in Credit Risk', icon: Shield },
  { label: '12-Month ECL', icon: LineChart },
  { label: 'Lifetime ECL', icon: LineChart },
  { label: 'IFRS 9 Impairment Models', icon: Calculator },
  { label: 'Model Validation', icon: FileCheck },
  { label: 'Parallel Runs & Reconciliation', icon: FileCheck },
  { label: 'Forward-Looking Information', icon: TrendingDown },
]

export function Marquee() {
  const items = [...ifrs9Topics, ...ifrs9Topics, ...ifrs9Topics]

  return (
    <section className="py-10 border-y border-border bg-card overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-[120px] bg-gradient-to-r from-card to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-[120px] bg-gradient-to-l from-card to-transparent z-10 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="flex items-center gap-5 animate-marquee"
        style={{ width: 'max-content' }}
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2.5 shrink-0 px-5 py-2.5 rounded-full border border-border bg-background/80 text-sm font-semibold text-muted-foreground whitespace-nowrap transition-colors duration-300 hover:border-maroon/30 hover:text-foreground"
          >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-maroon/10 text-maroon">
              <item.icon className="w-3.5 h-3.5" />
            </span>
            {item.label}
          </div>
        ))}
      </motion.div>
    </section>
  )
}
