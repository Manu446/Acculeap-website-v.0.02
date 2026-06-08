import type { Metadata } from 'next'
import { ThemeProvider } from '@/hooks/useTheme'
import { ThemeScript } from '@/components/ThemeScript'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Preloader } from '@/components/sections/Preloader'
import { BackToTop } from '@/components/sections/BackToTop'
import './globals.css'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

export const metadata: Metadata = {
  title: 'Acculeap Analytics — Financial Intelligence, Made Modern',
  description: "Advanced IFRS advisory, risk analytics, and business intelligence for East Africa's financial institutions.",
  keywords: ['IFRS', 'risk management', 'business intelligence', 'East Africa', 'financial advisory'],
  authors: [{ name: 'Acculeap Analytics' }],
  openGraph: {
    title: 'Acculeap Analytics',
    description: 'Financial Intelligence, Made Modern',
    type: 'website',
  },
  icons: {
    icon: `${basePath}/favicon.png`,
    apple: `${basePath}/favicon.png`,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ThemeScript />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider>
          <Preloader />
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}
