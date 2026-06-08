'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { CheckCircle2 } from 'lucide-react'

const features = [
  {
    title: 'Regulatory Aligned',
    description: 'Direct experience with CBK, BOU, NBE, and BOT reporting standards.',
  },
  {
    title: 'Fast Implementation',
    description: 'Typical IFRS 9 projects go live in 8–12 weeks, not quarters.',
  },
  {
    title: 'Knowledge Transfer',
    description: 'We train your teams so you remain self-sufficient after we leave.',
  },
]

const progressBars = [
  { label: 'IFRS 9 Delivery Rate', value: 94 },
  { label: 'Risk Model Accuracy', value: 87 },
  { label: 'BI Adoption Rate', value: 91 },
]

export function WhyChooseUs() {
  const progressRef = useRef(null)
  const isInView = useInView(progressRef, { once: true, margin: '-100px' })

  return (
    <section className="pb-24 lg:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-muted/50 rounded-3xl p-8 md:p-12 lg:p-20 border border-border relative overflow-hidden">
          {/* Background decorations */}
          <div className="absolute -top-[30%] -right-[15%] w-[600px] h-[600px] bg-maroon/[0.06] rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[400px] h-[400px] bg-maroon-light/[0.04] rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center relative">
            {/* Content */}
            <div>
              <AnimatedSection>
                <span className="text-maroon font-bold text-sm uppercase tracking-[0.15em] mb-4 block relative pl-5">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-maroon rounded-full" />
                  Why Acculeap
                </span>
                <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold tracking-tight mb-5">
                  Deep Expertise.
                  <br />
                  Local Context.
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-9">
                  We combine global standards with regional regulatory knowledge to deliver solutions that actually work in East African markets.
                </p>
              </AnimatedSection>

              <div className="flex flex-col gap-4">
                {features.map((feature, i) => (
                  <AnimatedSection key={i} delay={0.1 * (i + 1)}>
                    <div className="flex gap-4 items-start p-5 rounded-xl transition-all duration-300 hover:bg-card hover:border hover:border-border hover:shadow-md hover:translate-x-1 group">
                      <div className="w-7 h-7 rounded-full bg-maroon/10 text-maroon flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300 group-hover:bg-maroon group-hover:text-white group-hover:scale-110">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h4 className="font-sora font-bold text-base mb-1.5">{feature.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              {/* Progress Bars */}
              <div ref={progressRef} className="mt-9 flex flex-col gap-5">
                {progressBars.map((bar, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-semibold">{bar.label}</span>
                      <span className="font-sora font-bold text-maroon">{bar.value}%</span>
                    </div>
                    <div className="h-1.5 bg-muted-foreground/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                        transition={{ duration: 1.5, delay: 0.3 + i * 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full bg-gradient-to-r from-maroon to-maroon-light rounded-full origin-left"
                        style={{ width: `${bar.value}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <AnimatedSection delay={0.5} className="mt-8 flex flex-wrap gap-2">
                {['CBK', 'BOU', 'NBE', 'BOT', 'BNR'].map((reg) => (
                  <span
                    key={reg}
                    className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-maroon bg-maroon/5 border border-maroon/10 rounded-full"
                  >
                    {reg} Aligned
                  </span>
                ))}
              </AnimatedSection>
            </div>

            {/* Image */}
            <AnimatedSection direction="right" delay={0.3}>
              <div className="relative group">
                <div className="absolute top-6 left-6 right-[-24px] bottom-[-24px] bg-gradient-to-br from-maroon to-maroon-light rounded-2xl opacity-10 transition-all duration-300 group-hover:opacity-15 group-hover:translate-x-1 group-hover:translate-y-1" />
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                  alt="Analytics Dashboard"
                  className="w-full rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_32px_64px_rgba(0,0,0,0.15)]"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
