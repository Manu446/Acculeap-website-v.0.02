'use client'

import { useState, useEffect } from 'react'
import { StaticLink } from '@/lib/staticLink'
import { usePathname } from 'next/navigation'
import { useTheme } from '@/hooks/useTheme'
import { motion, AnimatePresence } from 'framer-motion'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Logo } from '@/components/Logo'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <>
      <div
        className="fixed top-0 left-0 h-0.5 bg-gradient-to-r from-maroon via-maroon-light to-maroon z-[60] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          scrolled
            ? 'bg-background/85 backdrop-blur-2xl border-b border-border shadow-sm'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 transition-all duration-300">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <StaticLink
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300',
                    pathname === link.href
                      ? 'text-foreground bg-maroon/5'
                      : 'text-muted-foreground hover:text-foreground hover:bg-maroon/5'
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-maroon rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </StaticLink>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center text-foreground transition-all duration-300 hover:border-maroon hover:rotate-[20deg] hover:scale-105 hover:shadow-lg hover:shadow-maroon/10"
                aria-label="Toggle theme"
              >
                <AnimatePresence mode="wait">
                  {theme === 'light' ? (
                    <motion.div
                      key="sun"
                      initial={{ y: 20, rotate: 90, opacity: 0 }}
                      animate={{ y: 0, rotate: 0, opacity: 1 }}
                      exit={{ y: -20, rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun className="w-[18px] h-[18px]" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="moon"
                      initial={{ y: 20, rotate: 90, opacity: 0 }}
                      animate={{ y: 0, rotate: 0, opacity: 1 }}
                      exit={{ y: -20, rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon className="w-[18px] h-[18px]" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>

              <StaticLink
                href="/contact"
                className="hidden sm:inline-flex h-10 px-5 items-center justify-center rounded-lg bg-gradient-to-br from-maroon to-maroon-light text-white text-sm font-sora font-bold shadow-lg shadow-maroon/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-maroon/30"
              >
                Get Started
              </StaticLink>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="md:hidden w-10 h-10 rounded-lg border border-border bg-card flex items-center justify-center transition-all duration-300 hover:border-maroon hover:text-maroon"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background md:hidden"
          >
            <div className="pt-28 px-8 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <StaticLink
                    href={link.href}
                    className={cn(
                      'flex items-center justify-between py-4 text-2xl font-sora font-bold border-b border-border transition-colors',
                      pathname === link.href
                        ? 'text-maroon'
                        : 'text-muted-foreground hover:text-maroon'
                    )}
                  >
                    {link.label}
                    <span className="text-maroon opacity-0 transition-all -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0">
                      →
                    </span>
                  </StaticLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
