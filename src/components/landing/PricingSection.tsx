import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GradientButton } from '@/components/ui/gradient-button'

const WA_URL = 'https://wa.me/5491162857653?text=Hola%2C%20quiero%20una%20demo%20de%20OrquestAr'

const PERKS = [
  { icon: '✓', text: 'Configuración personalizada incluida' },
  { icon: '✓', text: 'Sin tarjeta de crédito requerida' },
  { icon: '✓', text: 'Te respondemos en menos de 24 hs' },
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="precios"
      className="py-28 px-4"
      style={{ background: '#070010' }}
      ref={ref}
    >
      <div className="max-w-3xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
            style={{
              background: 'rgba(212,168,67,0.1)',
              border: '1px solid rgba(212,168,67,0.25)',
              color: '#d4a843',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Empezá hoy
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3', textAlign: 'center' }}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Probalo gratis{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #d4a843 0%, #e8c068 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            en tu negocio
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-center"
          style={{
            color: '#a89ec4',
            fontFamily: 'DM Sans, sans-serif',
            textAlign: 'center',
            maxWidth: '560px',
            margin: '0 auto 3rem',
            lineHeight: 1.65,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          Configuramos OrquestAr a medida para tu comercio.{' '}
          <span style={{ color: '#f0e6d3' }}>
            Sin compromiso, sin tarjeta, sin letra chica.
          </span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mb-10"
        >
          <a href={WA_URL} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <GradientButton
              className="w-full sm:w-auto text-base md:text-lg px-10 py-4"
            >
              💬 Solicitar mi prueba gratuita
            </GradientButton>
          </a>
        </motion.div>

        {/* Perks */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          {PERKS.map((perk) => (
            <span
              key={perk.text}
              className="flex items-center gap-2 text-sm"
              style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
            >
              <span style={{ color: '#d4a843', fontWeight: 700 }}>{perk.icon}</span>
              {perk.text}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
