'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/animations/AnimatedSection'
import { PageHero } from '@/components/sections/PageHero'
import { Clock, BookOpen } from 'lucide-react'

const filters = [
  { id: 'all', label: 'All' },
  { id: 'ifrs', label: 'IFRS' },
  { id: 'risk', label: 'Risk' },
  { id: 'analytics', label: 'Analytics' },
  { id: 'regulation', label: 'Regulation' },
]

const articles = [
  {
    category: 'ifrs',
    tag: 'IFRS',
    title: 'IFRS 9 ECL Modelling: A Practical Guide for East African Banks',
    description: 'Building compliant expected credit loss models that satisfy both international standards and local regulatory expectations.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
    date: 'Jan 15, 2026',
    readTime: '8 min read',
  },
  {
    category: 'risk',
    tag: 'Risk',
    title: 'Stress Testing Frameworks Under BOU Guidelines',
    description: 'How to design macroeconomic scenarios and reverse stress tests that meet Bank of Uganda supervisory expectations.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80',
    date: 'Jan 8, 2026',
    readTime: '6 min read',
  },
  {
    category: 'analytics',
    tag: 'Analytics',
    title: 'Automating CBK Returns with Power BI',
    description: 'Reducing manual reporting time by 70% through automated data pipelines and standardized dashboard templates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    date: 'Dec 22, 2025',
    readTime: '5 min read',
  },
  {
    category: 'regulation',
    tag: 'Regulation',
    title: "NBE's New Capital Adequacy Reporting Requirements",
    description: "A breakdown of the National Bank of Ethiopia's revised CAR guidelines and what they mean for foreign bank branches.",
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
    date: 'Dec 10, 2025',
    readTime: '7 min read',
  },
  {
    category: 'ifrs',
    tag: 'IFRS',
    title: 'IFRS 17 Implementation Roadmap for Insurers',
    description: 'Contract grouping, CSM allocation, and transition approaches for general and life insurers in the region.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
    date: 'Nov 28, 2025',
    readTime: '10 min read',
  },
  {
    category: 'analytics',
    tag: 'Analytics',
    title: 'Python for Financial Forecasting in SACCOs',
    description: 'How smaller institutions can leverage open-source tools for cash flow forecasting and liquidity planning.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80',
    date: 'Nov 15, 2025',
    readTime: '6 min read',
  },
]

export default function InsightsPage() {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredArticles = activeFilter === 'all'
    ? articles
    : articles.filter(a => a.category === activeFilter)

  return (
    <>
      <PageHero
        badge="Knowledge Hub"
        title="Insights"
        subtitle="Analysis, guidance, and thought leadership on IFRS, risk, and analytics in East Africa."
        image="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=1920&q=80"
      />

      {/* Articles */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Bar */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-10">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2.5 rounded-full border text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-maroon text-white border-maroon shadow-lg shadow-maroon/20'
                    : 'bg-card text-muted-foreground border-border hover:border-maroon hover:text-maroon'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </AnimatedSection>

          {/* Articles Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article, i) => (
                <motion.article
                  key={article.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-xl group flex flex-col"
                >
                  <div className="h-[220px] overflow-hidden relative">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <span className="inline-block px-3.5 py-1.5 bg-maroon/10 text-maroon text-[0.75rem] font-bold uppercase tracking-wider rounded-full w-fit mb-3">
                      {article.tag}
                    </span>
                    <h3 className="font-sora font-bold text-base mb-3 leading-snug group-hover:text-maroon transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                      {article.description}
                    </p>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground pt-4 border-t border-border">
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" />
                        {article.readTime}
                      </span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-card rounded-3xl p-10 lg:p-16 border border-border text-center max-w-2xl mx-auto relative overflow-hidden">
              <div className="absolute -top-[50%] -left-[20%] w-[400px] h-[400px] bg-maroon/[0.08] rounded-full blur-3xl pointer-events-none" />
              <div className="relative">
                <h2 className="text-2xl lg:text-[1.8rem] font-sora font-extrabold mb-3">
                  Stay Ahead of Regulatory Change
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get monthly insights on IFRS updates, risk frameworks, and analytics best practices.
                </p>
                <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="email"
                    placeholder="you@company.com"
                    className="flex-1 px-5 py-3.5 rounded-xl border border-border bg-background text-foreground font-inherit text-sm outline-none transition-all focus:border-maroon focus:bg-maroon/5"
                  />
                  <button
                    type="submit"
                    className="h-12 px-7 rounded-xl bg-gradient-to-br from-maroon to-maroon-light text-white font-sora font-bold text-sm shadow-lg shadow-maroon/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
