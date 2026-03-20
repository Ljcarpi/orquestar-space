import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const ROWS = [
  { before: 'Respuestas en 30–120 minutos', after: 'Respuesta instantánea, 24/7' },
  { before: 'Sin atención fuera del horario', after: 'Atención permanente, 365 días al año' },
  { before: '3+ horas/día respondiendo WhatsApp', after: '0 horas: el bot lo gestiona todo' },
  { before: 'Ventas perdidas por demora o ausencia', after: 'Ninguna consulta sin respuesta' },
  { before: 'Sin registro de conversaciones', after: 'Historial completo en el CRM' },
  { before: 'Precios y stock actualizados manualmente', after: 'Sincronización automática en tiempo real' },
  { before: 'Sin datos de comportamiento del cliente', after: 'Analytics con tendencias y comparativas' },
  { before: 'Proceso de cobro manual o por separado', after: 'MercadoPago integrado en la conversación' },
  { before: 'Escalabilidad limitada al equipo', after: 'Ilimitado: cientos de chats simultáneos' },
]

export function BeforeAfterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="py-24 px-4"
      style={{ background: '#0a0118' }}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            Sin OrquestAr vs.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #d4a843 0%, #e8c068 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Con OrquestAr
            </span>
          </h2>
          <p
            className="text-lg max-w-xl mx-auto text-center"
            style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif', textAlign: 'center' }}
          >
            La diferencia entre perder ventas y escalar sin límites.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="overflow-hidden rounded-2xl"
          style={{ border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Header row */}
          <div className="grid grid-cols-2">
            <div
              className="px-3 sm:px-5 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider"
              style={{
                background: 'rgba(239,68,68,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                borderRight: '1px solid rgba(255,255,255,0.07)',
                color: '#f87171',
                fontFamily: 'Syne, sans-serif',
              }}
            >
              ❌ Sin OrquestAr
            </div>
            <div
              className="px-3 sm:px-5 py-3 sm:py-4 text-center text-xs sm:text-sm font-bold uppercase tracking-wider"
              style={{
                background: 'rgba(212,168,67,0.08)',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                color: '#d4a843',
                fontFamily: 'Syne, sans-serif',
              }}
            >
              ✅ Con OrquestAr
            </div>
          </div>

          {/* Data rows */}
          {ROWS.map((row, i) => (
            <motion.div
              key={i}
              className="grid grid-cols-2"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.3 + i * 0.06 }}
            >
              <div
                className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
                style={{
                  background: i % 2 === 0 ? 'rgba(239,68,68,0.03)' : 'transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  borderRight: '1px solid rgba(255,255,255,0.07)',
                  color: '#9ca3af',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                <span className="text-red-400 flex-shrink-0">✗</span>
                {row.before}
              </div>
              <div
                className="px-3 sm:px-5 py-3 sm:py-4 text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2"
                style={{
                  background: i % 2 === 0 ? 'rgba(212,168,67,0.03)' : 'transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  color: '#f0e6d3',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                <span style={{ color: '#d4a843' }} className="flex-shrink-0">✓</span>
                {row.after}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
