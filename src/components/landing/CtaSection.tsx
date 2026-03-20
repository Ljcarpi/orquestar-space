import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GradientButton } from '@/components/ui/gradient-button'

const WA_URL = 'https://wa.me/5491162857653?text=Hola%2C%20quiero%20una%20demo%20de%20OrquestAr'

export function CtaSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="py-28 px-4 relative overflow-hidden"
      style={{ background: '#0a0118' }}
      ref={ref}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,168,67,0.1) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#d4a843', fontFamily: 'DM Sans, sans-serif' }}
          >
            El próximo paso
          </p>
          <h2
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            Dejá de perder clientes{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #d4a843 0%, #e8c068 50%, #d4a843 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                backgroundSize: '200% 100%',
              }}
            >
              fuera de horario.
            </span>
          </h2>
          <p
            className="text-lg md:text-xl mb-10 leading-relaxed text-center"
            style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}
          >
            La automatización inteligente ya no es una ventaja competitiva — es una necesidad para cualquier negocio que quiera crecer sin perder calidad de atención.{' '}
            <span style={{ color: '#f0e6d3' }}>Empezá hoy con una demo gratuita.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WA_URL} target="_blank" rel="noopener noreferrer">
              <GradientButton className="text-base px-10 py-5">
                🚀 Pedí tu demo gratuita
              </GradientButton>
            </a>
            <a
              href="mailto:contacto@orquestar.space"
              className="px-10 py-4 rounded-[11px] font-semibold text-base transition-all duration-200 flex items-center justify-center gap-2"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: '#f0e6d3',
                fontFamily: 'DM Sans, sans-serif',
              }}
            >
              📧 Escribinos por email
            </a>
          </div>

          <p
            className="mt-8 text-sm text-center"
            style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}
          >
            Sin compromiso · Implementación en menos de una semana · Soporte continuo incluido
          </p>
        </motion.div>
      </div>
    </section>
  )
}
