import { lazy, Suspense } from 'react'
import { Navbar } from '@/components/landing/Navbar'
import { HeroSection } from '@/components/landing/HeroSection'
import { CostSection } from '@/components/landing/CostSection'
import { HowItWorksSection } from '@/components/landing/HowItWorksSection'
import { BeforeAfterSection } from '@/components/landing/BeforeAfterSection'
import { MetricsSection } from '@/components/landing/MetricsSection'
import { IndustriesSection } from '@/components/landing/IndustriesSection'
import { PricingSection } from '@/components/landing/PricingSection'
import { FaqSection } from '@/components/landing/FaqSection'
import { CtaSection } from '@/components/landing/CtaSection'
import { Footer } from '@/components/landing/Footer'
import { FloatingButtons } from '@/components/landing/FloatingButtons'

// Heavy sections loaded lazily
const WebGLSection = lazy(() =>
  import('@/components/landing/WebGLSection').then(m => ({ default: m.WebGLSection }))
)
const ChatSection = lazy(() =>
  import('@/components/landing/ChatSection').then(m => ({ default: m.ChatSection }))
)
const FeaturesSection = lazy(() =>
  import('@/components/landing/FeaturesSection').then(m => ({ default: m.FeaturesSection }))
)

function SectionLoader() {
  return (
    <div
      className="flex items-center justify-center py-32"
      style={{ background: '#0a0118' }}
    >
      <div
        className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
        style={{ borderColor: 'rgba(212,168,67,0.4)', borderTopColor: 'transparent' }}
      />
    </div>
  )
}

export default function App() {
  return (
    <div
      className="min-h-screen"
      style={{
        background: '#0a0118',
        fontFamily: 'DM Sans, sans-serif',
      }}
    >
      <Navbar />

      <main>
        {/* Hero — shader + rotating words */}
        <HeroSection />

        {/* WebGL — qué es OrquestAr */}
        <Suspense fallback={<SectionLoader />}>
          <WebGLSection />
        </Suspense>

        {/* El costo de no automatizar — glowing cards */}
        <CostSection />

        {/* Chat simulation — WhatsApp en vivo */}
        <Suspense fallback={<SectionLoader />}>
          <ChatSection />
        </Suspense>

        {/* Features — todo lo que hace */}
        <Suspense fallback={<SectionLoader />}>
          <FeaturesSection />
        </Suspense>

        {/* Timeline — cómo funciona */}
        <HowItWorksSection />

        {/* Antes vs Después */}
        <BeforeAfterSection />

        {/* Métricas animadas */}
        <MetricsSection />

        {/* Industrias */}
        <IndustriesSection />

        {/* Precios */}
        <PricingSection />

        {/* FAQ */}
        <FaqSection />

        {/* CTA final */}
        <CtaSection />
      </main>

      <Footer />

      {/* Botones flotantes */}
      <FloatingButtons />
    </div>
  )
}
