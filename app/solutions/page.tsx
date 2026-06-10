'use client'

import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/animations/AnimatedSection'
import { CountUp } from '@/components/animations/CountUp'
import { PageHero } from '@/components/sections/PageHero'
import { CTA } from '@/components/sections/CTA'
import { CheckCircle2, ExternalLink, Calculator } from 'lucide-react'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const services = [
  {
    id: 'ifrs',
    tag: 'IFRS Advisory',
    title: 'Navigate Complexity with Confidence',
    description: 'We help banks, insurers, and SACCOs implement IFRS standards with validated models, clean parallel runs, and regulator-ready documentation.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    features: [
      'Expected Credit Loss (ECL) model build & validation',
      'Stage allocation frameworks & overlays',
      'IFRS 17 contract grouping & CSM calculations',
      'IFRS 16 lease capitalization & disclosure',
      'Parallel run support & reconciliation',
      'Regulatory submission packs (CBK, BOU, NBE)',
    ],
    reversed: false,
  },
  {
    id: 'risk',
    tag: 'Risk Management',
    title: 'See Risk Before It Sees You',
    description: 'From PD/LGD models to stress testing and ICAAP, we build risk frameworks that satisfy regulators and empower decision-makers.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80',
    features: [
      'PD, LGD, EAD model development',
      'Stress testing & scenario design',
      'ICAAP & ILAAP documentation',
      'Credit concentration monitoring',
      'Liquidity gap & LCR/NSFR reporting',
      'Board risk dashboard deployment',
    ],
    reversed: true,
  },
  {
    id: 'bi',
    tag: 'Business Intelligence',
    title: 'Turn Data into Decisions',
    description: 'We design and deploy modern BI architectures—from data warehouse modelling to executive dashboards—that automate your reporting burden.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    features: [
      'Data warehouse & lake architecture',
      'ETL pipeline design (Azure, AWS, on-prem)',
      'Power BI / Tableau dashboard development',
      'Regulatory reporting automation',
      'Python-based analytics & forecasting',
      'Self-service analytics enablement',
    ],
    reversed: false,
  },
]

const processSteps = [
  { num: '01', title: 'Discover', description: 'Deep-dive into your data, systems, and regulatory obligations to map the full scope.' },
  { num: '02', title: 'Design', description: 'Architect the solution—models, workflows, dashboards, and integration points.' },
  { num: '03', title: 'Build', description: 'Agile development with weekly sprints, transparent progress, and continuous testing.' },
  { num: '04', title: 'Transfer', description: 'Knowledge transfer, documentation, and handover so your team owns the solution.' },
]

const results = [
  { value: '8-12', label: 'Weeks average IFRS 9 go-live' },
  { value: '100%', label: 'Regulatory submission success' },
  { value: '40%', label: 'Reduction in reporting time' },
]

export default function SolutionsPage() {
  const lineRef = useRef(null)
  const lineInView = useInView(lineRef, { once: true, margin: '-80px' })

  return (
    <>
      <PageHero
        badge="Services"
        title="Our Solutions"
        subtitle="Comprehensive financial advisory and technology services designed for regulated institutions in East Africa."
        image="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80"
      />

      {/* Services */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, i) => (
              <AnimatedSection key={service.id}>
                <div id={service.id} className={`grid lg:grid-cols-2 gap-16 items-center ${service.reversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={service.reversed ? 'lg:order-2' : ''}>
                    <div className="relative group">
                      <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] bg-gradient-to-br from-maroon to-maroon-light rounded-2xl opacity-10 z-[-1]" />
                      <img
                        src={service.image}
                        alt={service.tag}
                        className="w-full rounded-2xl shadow-xl transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <div className={service.reversed ? 'lg:order-1' : ''}>
                    <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">{service.tag}</span>
                    <h2 className="text-2xl lg:text-[2rem] font-sora font-extrabold mb-4">{service.title}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-col gap-3.5">
                      {service.features.map((feature, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm">
                          <div className="w-[22px] h-[22px] rounded-full bg-maroon/10 text-maroon flex items-center justify-center flex-shrink-0 text-xs font-bold">
                            <CheckCircle2 className="w-3 h-3" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* IFRS 9 Platform */}
      <section id="ifrs9-platform" className="section-padding bg-muted/30 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="relative rounded-3xl overflow-hidden border border-border bg-card">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(128,0,0,0.08)_0%,transparent_50%)] pointer-events-none" />
              <div className="grid lg:grid-cols-2 gap-0 items-stretch relative">
                <div className="p-10 lg:p-16 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 w-fit px-4 py-1.5 rounded-full bg-maroon/10 text-maroon text-xs font-bold uppercase tracking-wider mb-6">
                    <Calculator className="w-3.5 h-3.5" />
                    Live Platform
                  </span>
                  <h2 className="text-3xl lg:text-[2.5rem] font-sora font-extrabold tracking-tight mb-4">
                    Try Our IFRS 9 System
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Explore MazeMatix — Acculeap&apos;s end-to-end IFRS 9 impairment platform. Run ECL calculations, stage allocations, and reporting workflows in a live environment built for East African institutions.
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[
                      'Expected Credit Loss (ECL) engine',
                      'Stage 1, 2 & 3 allocation workflows',
                      'Regulatory-ready reports & exports',
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-sm">
                        <div className="w-5 h-5 rounded-full bg-maroon/10 text-maroon flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3 h-3" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="https://mazematix.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 w-fit h-12 px-7 rounded-lg bg-gradient-to-br from-maroon to-maroon-light text-white font-sora font-bold shadow-lg shadow-maroon/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-maroon/30"
                  >
                    Try MazeMatix
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
                <div className="relative min-h-[280px] lg:min-h-0 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80"
                    alt="IFRS 9 analytics dashboard"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-card via-card/20 to-transparent lg:block hidden" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent lg:hidden" />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Our Process</span>
            <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold">How We Deliver</h2>
          </AnimatedSection>

          <div ref={lineRef} className="bg-card rounded-3xl p-8 lg:p-16 border border-border relative overflow-hidden mb-12">
            <div className="absolute -top-[50%] -right-[20%] w-[500px] h-[500px] bg-maroon/[0.06] rounded-full blur-3xl pointer-events-none" />
            <div className="hidden lg:block absolute top-[84px] left-[12.5%] right-[12.5%] h-0.5 bg-border overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={lineInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-maroon via-maroon-light to-maroon origin-left"
              />
            </div>
            <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative" staggerDelay={0.15}>
              {processSteps.map((step, i) => (
                <AnimatedItem key={i}>
                  <div className="text-center relative">
                    <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center mx-auto mb-5 font-sora font-extrabold text-xl text-maroon transition-all duration-300 hover:bg-maroon hover:text-white hover:border-maroon hover:scale-110">
                      {step.num}
                    </div>
                    <h4 className="font-sora font-bold text-lg mb-2">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>

          {/* Results */}
          <AnimatedStagger className="grid sm:grid-cols-3 gap-6" staggerDelay={0.1}>
            {results.map((result, i) => (
              <AnimatedItem key={i}>
                <div className="bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-maroon relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-maroon to-maroon-light origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                  <div className="font-sora text-[2.5rem] font-extrabold bg-gradient-to-br from-maroon to-maroon-light bg-clip-text text-transparent mb-2">
                    {result.value.includes('%') ? (
                      <>
                        <CountUp end={parseInt(result.value)} suffix="%" />
                      </>
                    ) : (
                      result.value
                    )}
                  </div>
                  <div className="text-muted-foreground text-sm">{result.label}</div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      <CTA />
    </>
  )
}
