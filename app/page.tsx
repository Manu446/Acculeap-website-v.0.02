import { Hero } from '@/components/sections/Hero'
import { Marquee } from '@/components/sections/Marquee'
import { Solutions } from '@/components/sections/Solutions'
import { HowWeWork } from '@/components/sections/HowWeWork'
import { WhyChooseUs } from '@/components/sections/WhyChooseUs'
import { TechStack } from '@/components/sections/TechStack'
import { Testimonials } from '@/components/sections/Testimonials'
import { CTA } from '@/components/sections/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Solutions />
      <HowWeWork />
      <WhyChooseUs />
      <TechStack />
      <Testimonials />
      <CTA />
    </>
  )
}
