'use client'

import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/animations/AnimatedSection'
import { CountUp } from '@/components/animations/CountUp'
import { PageHero } from '@/components/sections/PageHero'

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

const team = [
  { name: 'David Ochieng', role: 'Managing Partner', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: 'Amina Hassan', role: 'Head of IFRS Advisory', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: 'Peter Mugisha', role: 'Head of Risk Analytics', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80' },
  { name: 'Grace Ingabire', role: 'Head of BI & Engineering', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
]

const locations = [
  { city: 'Nairobi', country: '🇰🇪', address: 'AACC Building\n4th Floor, Waiyaki Way. Nairobi, Kenya', phone: '+254 747 145 779', image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&q=80' },
  { city: 'Kampala', country: '🇺🇬', address: 'Kololo Heights\nPlot 14, Hannington Road', phone: '+256 772 000 000', image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?w=600&q=80' },
  { city: 'Dar es Salaam', country: '🇹🇿', address: 'Masaki Commercial Centre\nHaile Selassie Road', phone: '+255 744 000 000', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80' },
  { city: 'Kigali', country: '🇷🇼', address: 'Kigali Heights\nKN 5 Road, Remera', phone: '+250 788 442 579', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=400&q=80' },
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
                <span className="absolute bottom-4 left-4 px-3 py-1.5 rounded-lg bg-white/90 text-sm font-sora font-bold text-foreground backdrop-blur-sm">
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

      {/* Team */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-14">
            <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Leadership</span>
            <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold">Meet the Team</h2>
          </AnimatedSection>

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {team.map((member, i) => (
              <AnimatedItem key={i}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-400 hover:-translate-y-2 hover:shadow-xl hover:border-maroon group">
                  <div className="h-[280px] overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-sora font-bold text-base mb-1">{member.name}</h4>
                    <p className="text-muted-foreground text-sm mb-4">{member.role}</p>
                    <div className="flex gap-2">
                      <a href="#" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground text-xs transition-all hover:bg-maroon hover:text-white hover:border-maroon">
                        in
                      </a>
                      <a href="#" className="w-8 h-8 rounded-lg border border-border flex items-center justify-center text-muted-foreground text-xs transition-all hover:bg-maroon hover:text-white hover:border-maroon">
                        @
                      </a>
                    </div>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Coverage</span>
            <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold">Where We Work</h2>
          </AnimatedSection>

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {locations.map((loc, i) => (
              <AnimatedItem key={i}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-maroon group">
                  <div className={`overflow-hidden ${loc.city === 'Kampala' ? 'h-[160px]' : 'h-[140px]'}`}>
                    <img
                      src={loc.image}
                      alt={loc.city}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-sora font-bold text-lg mb-2 flex items-center gap-2">
                      <span>{loc.country}</span> {loc.city}
                    </h4>
                    <p className="text-muted-foreground text-sm whitespace-pre-line mb-3">{loc.address}</p>
                    <a href={`tel:${loc.phone.replace(/\s/g, '')}`} className="text-maroon font-semibold text-sm">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>
    </>
  )
}
