'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/animations/AnimatedSection'
import { ClipboardList, Shield, BarChart3, ArrowRight } from 'lucide-react'

const solutions = [
  {
    icon: ClipboardList,
    tag: 'Advisory',
    title: 'IFRS Advisory',
    description: 'IFRS 9, 17, and 16 implementation with model validation, parallel runs, and regulatory submission support.',
    highlights: ['ECL model build', 'Parallel runs', 'CBK / BOU / NBE packs'],
    stat: '8–12 wks',
    statLabel: 'avg. go-live',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    href: '/solutions#ifrs',
  },
  {
    icon: Shield,
    tag: 'Risk',
    title: 'Risk Management',
    description: 'Credit risk, liquidity, market risk, and stress testing frameworks aligned with regional regulations.',
    highlights: ['PD / LGD / EAD models', 'Stress testing', 'ICAAP documentation'],
    stat: '24/7',
    statLabel: 'monitoring',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    href: '/solutions#risk',
  },
  {
    icon: BarChart3,
    tag: 'Analytics',
    title: 'Business Intelligence',
    description: 'Automated dashboards, regulatory reporting pipelines, and data warehouse architecture.',
    highlights: ['Power BI / Tableau', 'ETL pipelines', 'Regulatory automation'],
    stat: '40%',
    statLabel: 'faster reporting',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    href: '/solutions#bi',
  },
]

export function Solutions() {
  return (
    <section id="solutions" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-xl mb-16">
          <span className="text-maroon font-bold text-sm uppercase tracking-[0.15em] mb-4 block relative pl-5">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-maroon rounded-full" />
            Our Solutions
          </span>
          <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold tracking-tight mb-5">
            Built for Complexity,
            <br />
            Designed for Clarity
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            End-to-end financial advisory and technology solutions tailored for regulated institutions across East Africa.
          </p>
        </AnimatedSection>

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-7" staggerDelay={0.15}>
          {solutions.map((solution, i) => (
            <AnimatedItem key={i}>
              <div className="group bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-transparent relative h-full flex flex-col">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-maroon to-maroon-light origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

                <div className="h-[220px] overflow-hidden relative">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3.5 py-1.5 bg-maroon/90 text-white text-[0.7rem] font-bold uppercase tracking-wider rounded-lg backdrop-blur-sm">
                    {solution.tag}
                  </span>
                  <div className="absolute bottom-4 right-4 text-right">
                    <div className="font-sora font-extrabold text-white text-xl">{solution.stat}</div>
                    <div className="text-white/60 text-[0.65rem] uppercase tracking-wider">{solution.statLabel}</div>
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="w-[52px] h-[52px] rounded-xl bg-maroon/5 border border-border flex items-center justify-center mb-6 text-2xl transition-all duration-300 group-hover:bg-maroon group-hover:text-white group-hover:scale-110 group-hover:rotate-[-8deg] group-hover:shadow-lg group-hover:shadow-maroon/20">
                    <solution.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-sora font-bold text-xl mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {solution.description}
                  </p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {solution.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="w-1 h-1 rounded-full bg-maroon shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={solution.href}
                    className="inline-flex items-center gap-2 text-maroon font-bold text-sm transition-all duration-300 group-hover:gap-3.5"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </AnimatedItem>
          ))}
        </AnimatedStagger>
      </div>
    </section>
  )
}
