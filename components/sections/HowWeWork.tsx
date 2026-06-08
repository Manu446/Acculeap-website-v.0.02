'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/animations/AnimatedSection'
import { Search, PenTool, Hammer, GraduationCap } from 'lucide-react'

const steps = [
  {
    icon: Search,
    num: '01',
    title: 'Discover',
    description: 'We audit your data landscape, regulatory obligations, and existing systems to map the full scope.',
    detail: '2–3 week assessment',
  },
  {
    icon: PenTool,
    num: '02',
    title: 'Design',
    description: 'Architecture for models, workflows, dashboards, and integration points — validated with your team.',
    detail: 'Blueprint & sign-off',
  },
  {
    icon: Hammer,
    num: '03',
    title: 'Build',
    description: 'Agile sprints with weekly demos, transparent progress tracking, and continuous model testing.',
    detail: '6–10 week delivery',
  },
  {
    icon: GraduationCap,
    num: '04',
    title: 'Transfer',
    description: 'Hands-on training, documentation, and handover so your team fully owns the solution.',
    detail: 'Knowledge transfer',
  },
]

export function HowWeWork() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })

  return (
    <section className="section-padding bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-maroon/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-maroon font-bold text-sm uppercase tracking-[0.15em] mb-4 block relative pl-5 mx-auto w-fit">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-maroon rounded-full" />
            How We Work
          </span>
          <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold tracking-tight mb-5">
            From Discovery to Delivery
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A proven four-phase methodology that keeps projects on track, on budget, and regulator-ready.
          </p>
        </AnimatedSection>

        <div ref={lineRef} className="relative">
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-border overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-gradient-to-r from-maroon via-maroon-light to-maroon origin-left"
            />
          </div>

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.15}>
            {steps.map((step, i) => (
              <AnimatedItem key={i}>
                <div className="group relative bg-card border border-border rounded-2xl p-7 h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:border-maroon/20">
                  <div className="w-14 h-14 rounded-2xl bg-maroon/10 border border-border flex items-center justify-center mb-5 mx-auto lg:mx-0 transition-all duration-300 group-hover:bg-maroon group-hover:border-maroon group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-maroon/20">
                    <step.icon className="w-6 h-6 text-maroon transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <span className="font-sora font-extrabold text-xs text-maroon/60 tracking-widest mb-2 block">
                    STEP {step.num}
                  </span>
                  <h3 className="font-sora font-bold text-lg mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{step.description}</p>
                  <span className="inline-block text-xs font-semibold text-maroon bg-maroon/5 px-3 py-1 rounded-full">
                    {step.detail}
                  </span>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  )
}
