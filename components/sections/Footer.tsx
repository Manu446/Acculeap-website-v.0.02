'use client'

import { StaticLink } from '@/lib/staticLink'
import { Linkedin, Mail } from 'lucide-react'
import { Logo } from '@/components/Logo'
import { AnimatedSection, AnimatedStagger, AnimatedItem } from '@/components/animations/AnimatedSection'

const solutions = [
  { href: '/solutions#ifrs', label: 'IFRS Advisory' },
  { href: '/solutions#risk', label: 'Risk Management' },
  { href: '/solutions#bi', label: 'Business Intelligence' },
  { href: '/solutions', label: 'View All' },
]

const company = [
  { href: '/about', label: 'About Us' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Careers' },
  { href: '/contact', label: 'Contact' },
]

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      className={className}
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

const socialLinks = [
  { Icon: Linkedin, label: 'LinkedIn' },
  { Icon: XIcon, label: 'X' },
  { Icon: Mail, label: 'Email' },
]

export function Footer() {
  return (
    <footer className="border-t border-border relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-maroon to-transparent opacity-30" />
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-maroon/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
        <AnimatedStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-12 mb-16" staggerDelay={0.08}>
          <AnimatedItem>
            <Logo size="sm" className="mb-5" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Advanced IFRS advisory, risk analytics, and business intelligence for East Africa&apos;s financial institutions.
            </p>
            <div className="flex gap-3 mt-7">
              {socialLinks.map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  className="w-11 h-11 rounded-xl border border-border bg-card flex items-center justify-center text-muted-foreground transition-all duration-300 hover:bg-maroon hover:text-white hover:border-maroon hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-maroon/20"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <h4 className="font-sora font-bold text-sm uppercase tracking-widest mb-6 relative pb-3">
              Solutions
              <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-maroon rounded-full" />
            </h4>
            <div className="flex flex-col gap-2">
              {solutions.map((link) => (
                <StaticLink
                  key={link.href + link.label}
                  href={link.href}
                  className="text-muted-foreground text-sm py-2 transition-all duration-300 hover:text-maroon hover:pl-2 relative group"
                >
                  <span className="absolute left-0 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-maroon text-xs">
                    →
                  </span>
                  {link.label}
                </StaticLink>
              ))}
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <h4 className="font-sora font-bold text-sm uppercase tracking-widest mb-6 relative pb-3">
              Company
              <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-maroon rounded-full" />
            </h4>
            <div className="flex flex-col gap-2">
              {company.map((link) => (
                <StaticLink
                  key={link.href + link.label}
                  href={link.href}
                  className="text-muted-foreground text-sm py-2 transition-all duration-300 hover:text-maroon hover:pl-2 relative group"
                >
                  <span className="absolute left-0 opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-maroon text-xs">
                    →
                  </span>
                  {link.label}
                </StaticLink>
              ))}
            </div>
          </AnimatedItem>

          <AnimatedItem>
            <h4 className="font-sora font-bold text-sm uppercase tracking-widest mb-6 relative pb-3">
              Contact
              <span className="absolute bottom-0 left-0 w-6 h-0.5 bg-maroon rounded-full" />
            </h4>
            <div className="flex flex-col gap-2">
              <a href="tel:+254747145779" className="text-muted-foreground text-sm py-2 transition-colors hover:text-maroon">
                +254 747 145 779
              </a>
              <a href="tel:+250788442579" className="text-muted-foreground text-sm py-2 transition-colors hover:text-maroon">
                +250 788 442 579 <span className="text-muted-foreground/70">(Rwanda)</span>
              </a>
              <a href="mailto:info@acculeap-analytics.com" className="text-muted-foreground text-sm py-2 transition-colors hover:text-maroon">
                info@acculeap-analytics.com
              </a>
              <span className="text-muted-foreground text-sm py-2">
                Nairobi • Kampala • Dar es Salaam • Kigali
              </span>
            </div>
          </AnimatedItem>
        </AnimatedStagger>

        <AnimatedSection delay={0.3}>
          <div className="pt-7 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <span>© 2026 Acculeap Analytics. All rights reserved.</span>
            <span>Designed for East Africa&apos;s financial future.</span>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  )
}
