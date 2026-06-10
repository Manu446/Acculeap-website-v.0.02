'use client'

import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/animations/AnimatedSection'
import { CountUp } from '@/components/animations/CountUp'
import { PageHero } from '@/components/sections/PageHero'
import { CoverageCard } from '@/components/sections/CoverageCard'
import { Building2, Shield, BarChart3, Globe2 } from 'lucide-react'

const stats = [
  { value: 50, suffix: '+', label: 'Clients Served' },
  { value: 35, suffix: '', label: 'Team Members' },
  { value: 7, suffix: '', label: 'Countries' },
  { value: 98, suffix: '%', label: 'Retention Rate' },
]

const values = [
  { icon: '🔍', title: 'Precision', description: 'Every model, every report, every line of code is reviewed to the highest standard.' },
  { icon: '🤝', title: 'Partnership', description: 'We embed with your team. Your success is our success, long after we leave.' },
  { icon: '🚀', title: 'Velocity', description: 'We deliver in weeks what others quote in quarters—without cutting corners.' },
  { icon: '📚', title: 'Transfer', description: 'We document and train obsessively so you own every solution we build.' },
]

const expertise = [
  {
    icon: Building2,
    title: 'Regulatory Fluency',
    description: 'Former central bank supervisors and Big Four consultants aligned with CBK, BOU, NBE, and BNR requirements.',
  },
  {
    icon: Shield,
    title: 'IFRS & Risk Depth',
    description: 'Actuaries and risk specialists across IFRS 9, 17, and 16 — from ECL models to ICAAP documentation.',
  },
  {
    icon: BarChart3,
    title: 'Analytics Engineering',
    description: 'Data engineers and BI architects building Power BI, Python, and cloud pipelines that scale with your institution.',
  },
  {
    icon: Globe2,
    title: 'Regional Reach',
    description: 'On-the-ground teams in Nairobi, Kampala, Dar es Salaam, and Kigali serving banks, insurers, and SACCOs.',
  },
]

const locations = [
  { city: 'Nairobi', country: '🇰🇪', tag: 'Headquarters', address: 'AACC Building\n4th Floor, Waiyaki Way. Nairobi, Kenya', phone: '+254 747 145 779', image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80' },
  { city: 'Kampala', country: '🇺🇬', tag: 'Regional Hub', address: 'Kololo Heights\nPlot 14, Hannington Road', phone: '+256 772 000 000', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=800&q=80' },
  { city: 'Dar es Salaam', country: '🇹🇿', tag: 'Coastal Office', address: 'Masaki Commercial Centre\nHaile Selassie Road', phone: '+255 744 000 000', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80' },
  { city: 'Kigali', country: '🇷🇼', tag: 'East Africa Office', address: 'Kigali Heights\nKN 5 Road, Remera', phone: '+250 788 442 579', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&q=80' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        badge="Our Story"
        title="About Acculeap"
        subtitle="We are a team of actuaries, accountants, and data engineers building the financial infrastructure East Africa deserves."
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80"
      />

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Our Story</span>
              <h2 className="text-3xl lg:text-[2.2rem] font-sora font-extrabold mb-5">
                From Spreadsheets to Strategic Intelligence
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>Founded in Nairobi by former Big Four consultants and central bank supervisors, Acculeap was born from a simple frustration: global advisory firms didn't understand the data, regulatory, and technological realities of East African financial markets.</p>
                <p>We set out to change that. Today, we serve banks, insurers, microfinance institutions, and SACCOs across Kenya, Uganda, Tanzania, Rwanda, Burundi, South Sudan, and Ethiopia.</p>
                <p>Our mission is to democratize access to world-class financial analytics—without the global firm price tag or timeline.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={0.2}>
              <div className="relative group">
                <div className="absolute top-5 left-5 right-[-20px] bottom-[-20px] bg-gradient-to-br from-maroon to-maroon-light rounded-2xl opacity-10 z-[-1]" />
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Office meeting"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </AnimatedSection>
          </div>

          {/* Uganda spotlight */}
          <AnimatedSection delay={0.3} className="mt-20">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center bg-card border border-border rounded-3xl overflow-hidden shadow-sm">
              <div className="relative h-[280px] lg:h-full min-h-[280px] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=900&q=80"
                  alt="Kampala, Uganda skyline"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-white text-gray-900 text-sm font-sora font-bold shadow-lg">
                  🇺🇬 Kampala, Uganda
                </span>
              </div>
              <div className="p-8 lg:p-12">
                <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Regional Hub</span>
                <h3 className="text-2xl lg:text-3xl font-sora font-extrabold mb-4">
                  Serving Uganda&apos;s Financial Sector
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  From our Kampala office at Kololo Heights, we support banks, microfinance institutions, and SACCOs with IFRS 9 implementation, BOU-aligned risk frameworks, and regulatory reporting automation.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Kololo Heights, Plot 14, Hannington Road · +256 772 000 000
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="font-sora text-4xl lg:text-[2.5rem] font-extrabold bg-gradient-to-br from-maroon to-maroon-light bg-clip-text text-transparent">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-muted-foreground text-sm mt-2">{stat.label}</div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Our Values</span>
            <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold">What Drives Us</h2>
          </AnimatedSection>

          <div className="bg-muted/50 rounded-3xl p-8 lg:p-16 border border-border relative overflow-hidden">
            <div className="absolute -top-[30%] -right-[10%] w-[400px] h-[400px] bg-maroon/[0.06] rounded-full blur-3xl pointer-events-none" />
            <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative" staggerDelay={0.1}>
              {values.map((value, i) => (
                <AnimatedItem key={i}>
                  <div className="bg-card border border-border rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-maroon group">
                    <span className="text-4xl mb-4 block">{value.icon}</span>
                    <h4 className="font-sora font-bold text-lg mb-2">{value.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14 max-w-2xl mx-auto">
            <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Our Strength</span>
            <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold mb-4">Depth You Can Trust</h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              A multidisciplinary bench of actuaries, accountants, risk specialists, and data engineers — built for regulated African financial markets.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
            <AnimatedSection direction="left" className="lg:col-span-2">
              <div className="relative h-[320px] lg:h-full min-h-[320px] rounded-3xl overflow-hidden border border-border shadow-xl group">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&q=80"
                  alt="Acculeap team collaboration"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-white/70 text-xs uppercase tracking-[0.2em] mb-2">Combined Experience</p>
                  <p className="font-sora font-extrabold text-3xl text-white">150+ Years</p>
                  <p className="text-white/80 text-sm mt-1">Across IFRS, risk, and analytics</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedStagger className="lg:col-span-3 grid sm:grid-cols-2 gap-6" staggerDelay={0.1}>
              {expertise.map((item, i) => (
                <AnimatedItem key={i}>
                  <div className="h-full bg-card border border-border rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-maroon group">
                    <div className="w-12 h-12 rounded-xl bg-maroon/10 text-maroon flex items-center justify-center mb-5 transition-colors group-hover:bg-maroon group-hover:text-white">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-sora font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Coverage</span>
            <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold">Where We Work</h2>
          </AnimatedSection>

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start" staggerDelay={0.1}>
            {locations.map((loc, i) => (
              <AnimatedItem key={i}>
                <CoverageCard location={loc} />
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>
    </>
  )
}
