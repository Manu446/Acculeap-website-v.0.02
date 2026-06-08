'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/animations/AnimatedSection'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    text: "Acculeap reduced our IFRS 9 implementation timeline by 60%. Their understanding of CBK guidelines was exceptional.",
    name: 'James Kariuki',
    role: 'CFO, Tier 1 Bank — Nairobi',
    company: 'Kenya Commercial Bank',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
  },
  {
    text: "The risk dashboards they built gave our board real-time visibility into credit concentration we never had before.",
    name: 'Sarah Nantongo',
    role: 'Head of Risk — Kampala',
    company: 'Stanbic Uganda',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
  },
  {
    text: "Professional, responsive, and deeply knowledgeable about East African regulatory nuances. Highly recommended.",
    name: 'David Mwijage',
    role: 'Finance Director — Dar es Salaam',
    company: 'CRDB Bank',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
  },
  {
    text: "They didn't just deliver software—they transformed how we think about data-driven decision making.",
    name: 'Claire Ingabire',
    role: 'CEO, Microfinance — Kigali',
    company: 'Urwego Finance',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const next = useCallback(() => {
    setDirection(1)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const current = testimonials[currentIndex]

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 80 : -80, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -80 : 80, opacity: 0, scale: 0.95 }),
  }

  return (
    <section className="section-padding overflow-hidden bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-xl mb-16">
          <span className="text-maroon font-bold text-sm uppercase tracking-[0.15em] mb-4 block relative pl-5">
            <span className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-maroon rounded-full" />
            Testimonials
          </span>
          <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold tracking-tight">
            Trusted by Finance Leaders
          </h2>
        </AnimatedSection>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full bg-maroon/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-maroon/5 blur-3xl pointer-events-none" />

          <div className="relative min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="w-full bg-card border border-border rounded-3xl p-8 md:p-12 shadow-xl relative overflow-hidden"
              >
                <Quote className="absolute top-6 right-8 w-16 h-16 text-maroon/[0.06]" />

                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-maroon-light text-maroon-light" />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed mb-8 text-lg md:text-xl font-medium">
                  &ldquo;{current.text}&rdquo;
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-maroon/20">
                      <img src={current.avatar} alt={current.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-sora font-bold">{current.name}</div>
                      <div className="text-muted-foreground text-sm">{current.role}</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-maroon bg-maroon/5 px-4 py-2 rounded-full">
                    {current.company}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center transition-all duration-300 hover:bg-maroon hover:text-white hover:border-maroon hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > currentIndex ? 1 : -1)
                    setCurrentIndex(i)
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-maroon' : 'w-2 bg-border hover:bg-maroon/40'
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border bg-card flex items-center justify-center transition-all duration-300 hover:bg-maroon hover:text-white hover:border-maroon hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
