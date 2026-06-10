'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/animations/AnimatedSection'
import { PageHero } from '@/components/sections/PageHero'
import { Phone, Mail, MapPin, ChevronDown, Send } from 'lucide-react'

const contactMethods = [
  {
    icon: Phone,
    title: 'Phone',
    content: '+254 747 145 779',
    href: 'tel:+254747145779',
    subtext: 'Mon–Fri, 8am–6pm EAT',
  },
  {
    icon: Phone,
    title: 'Rwanda',
    content: '+250 788 442 579',
    href: 'tel:+250788442579',
    subtext: 'Kigali office',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'info@acculeap-analytics.com',
    href: 'mailto:info@acculeap-analytics.com',
    subtext: 'We reply within 24 hours',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    content: 'AACC Building, 4th Floor, Waiyaki Way, Nairobi',
    href: '#',
    subtext: 'Regional offices in Kampala, Dar, & Kigali',
  },
]

const locations = [
  { city: 'Nairobi', flag: '🇰🇪', address: 'AACC Building', detail: '4th Floor, Waiyaki Way. Nairobi, Kenya', phone: '+254 747 145 779', image: 'https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=400&q=80' },
  { city: 'Kampala', flag: '🇺🇬', address: 'Kololo Heights', detail: 'Plot 14, Hannington Road', phone: '+256 772 000 000', image: 'https://images.unsplash.com/photo-1598890777032-bde83547d93c?w=400&q=80' },
  { city: 'Dar es Salaam', flag: '🇹🇿', address: 'Masaki Commercial Centre', detail: 'Haile Selassie Road', phone: '+255 744 000 000', image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=400&q=80' },
  { city: 'Kigali', flag: '🇷🇼', address: 'Kigali Heights', detail: 'KN 5 Road, Remera', phone: '+250 788 442 579', image: 'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=400&q=80' },
]

const faqs = [
  {
    question: 'How long does an IFRS 9 implementation take?',
    answer: 'Most of our IFRS 9 projects go live in 8–12 weeks, depending on data quality and system complexity. We use an agile sprint model with weekly deliverables.',
  },
  {
    question: 'Do you work with SACCOs and smaller banks?',
    answer: "Absolutely. We have tailored packages for SACCOs, microfinance institutions, and Tier 3 banks that don't require enterprise-scale budgets.",
  },
  {
    question: 'Can you support remote or hybrid engagements?',
    answer: 'Yes. While we prefer initial on-site discovery, much of our build and validation work can be done remotely through secure VPN and cloud environments.',
  },
  {
    question: 'What technology stacks do you support?',
    answer: 'We work with Power BI, Tableau, Python, R, SQL Server, Azure, AWS, and on-premise setups. We adapt to your existing infrastructure.',
  },
  {
    question: 'Do you provide training and documentation?',
    answer: 'Knowledge transfer is core to our model. Every engagement includes comprehensive documentation and hands-on training for your team.',
  },
]

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    setTimeout(() => setFormStatus('success'), 1500)
  }

  return (
    <>
      <PageHero
        badge="Contact"
        title="Get in Touch"
        subtitle="Ready to transform your finance function? Let's start with a conversation."
        image="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80"
      />

      {/* Contact Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <AnimatedSection>
              <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Contact</span>
              <h2 className="text-2xl lg:text-[2rem] font-sora font-extrabold mb-4">
                Let's Build Something Great Together
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Whether you're navigating IFRS implementation, building risk models, or modernizing your analytics stack, we'd love to hear from you.
              </p>

              <div className="flex flex-col gap-7">
                {contactMethods.map((method, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-12 h-12 rounded-xl bg-maroon/10 text-maroon flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-sora font-bold text-sm mb-1">{method.title}</h4>
                      <a href={method.href} className="text-maroon font-semibold text-sm transition-opacity hover:opacity-70">
                        {method.content}
                      </a>
                      <p className="text-muted-foreground text-xs mt-1">{method.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Form */}
            <AnimatedSection direction="right" delay={0.2}>
              <div className="bg-card border border-border rounded-2xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-maroon to-maroon-light" />

                {formStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-4">
                      <Send className="w-7 h-7" />
                    </div>
                    <h3 className="font-sora font-bold text-xl mb-2">Thank you!</h3>
                    <p className="text-muted-foreground">We will be in touch within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted text-foreground text-sm outline-none transition-all focus:border-maroon focus:bg-maroon/5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted text-foreground text-sm outline-none transition-all focus:border-maroon focus:bg-maroon/5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        placeholder="Your bank or institution"
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted text-foreground text-sm outline-none transition-all focus:border-maroon focus:bg-maroon/5"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Service Interest
                      </label>
                      <select className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted text-foreground text-sm outline-none transition-all focus:border-maroon focus:bg-maroon/5 appearance-none cursor-pointer">
                        <option value="">Select a service...</option>
                        <option value="ifrs">IFRS Advisory</option>
                        <option value="risk">Risk Management</option>
                        <option value="bi">Business Intelligence</option>
                        <option value="other">Other / General</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        placeholder="Tell us about your project, timeline, and goals..."
                        required
                        rows={4}
                        className="w-full px-4 py-3.5 rounded-xl border border-border bg-muted text-foreground text-sm outline-none transition-all focus:border-maroon focus:bg-maroon/5 resize-y min-h-[120px]"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === 'sending'}
                      className="w-full h-14 rounded-xl bg-gradient-to-br from-maroon to-maroon-light text-white font-sora font-bold shadow-lg shadow-maroon/25 transition-all hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">Offices</span>
            <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold">Where to Find Us</h2>
          </AnimatedSection>

          <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.1}>
            {locations.map((loc, i) => (
              <AnimatedItem key={i}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-maroon group">
                  <div className="h-[120px] overflow-hidden -m-6 mb-5">
                    <img
                      src={loc.image}
                      alt={loc.city}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6 pt-0">
                    <h4 className="font-sora font-bold text-lg mb-2 flex items-center gap-2">
                      <span>{loc.flag}</span> {loc.city}
                    </h4>
                    <p className="text-muted-foreground text-sm">{loc.address}</p>
                    <p className="text-muted-foreground text-sm">{loc.detail}</p>
                    <a href={`tel:${loc.phone.replace(/ /g, '')}`} className="text-maroon font-semibold text-sm mt-3 inline-block">
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </AnimatedStagger>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-10">
            <span className="text-maroon font-bold text-sm uppercase tracking-[0.1em] mb-3 block">FAQ</span>
            <h2 className="text-3xl lg:text-[2.8rem] font-sora font-extrabold">Common Questions</h2>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:border-maroon">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full px-7 py-6 flex items-center justify-between text-left transition-colors hover:text-maroon"
                  >
                    <span className="font-sora font-bold text-base pr-4">{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-maroon flex-shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
