import { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const WebGLShader = lazy(() =>
  import('@/components/web-gl-shader').then(m => ({ default: m.WebGLShader }))
)

export function WebGLSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="solucion"
      className="relative overflow-hidden webgl-section min-h-[420px] md:min-h-[560px]"
      ref={ref}
    >
      {/* Shader background */}
      <Suspense fallback={<div style={{ background: '#0a0118', position: 'absolute', inset: 0 }} />}>
        <WebGLShader />
      </Suspense>

      {/* Dark overlay for readability */}
      <div
        className="absolute inset-0 z-10"
        style={{ background: 'rgba(10,1,24,0.72)' }}
      />

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center min-h-[420px] md:min-h-[560px] px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="flex justify-center mb-8">
              <span
                className="px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-widest"
                style={{
                  background: 'rgba(212,168,67,0.1)',
                  border: '1px solid rgba(212,168,67,0.3)',
                  color: '#d4a843',
                  fontFamily: 'DM Sans, sans-serif',
                }}
              >
                ¿Qué es OrquestAr?
              </span>
            </div>

            <p
              className="text-xl md:text-2xl lg:text-3xl leading-relaxed font-light"
              style={{ color: '#f0e6d3', fontFamily: 'DM Sans, sans-serif' }}
            >
              OrquestAr combina{' '}
              <span style={{ color: '#d4a843', fontWeight: 600 }}>automatización, inteligencia artificial y lógica de negocio</span>
              {' '}para actuar como un verdadero asistente de ventas digital. Responde mensajes, interpreta lo que el cliente necesita, sugiere productos de forma automática, cierra ventas, genera link de pago y genera factura —
              {' '}
              <span style={{ color: '#d4a843', fontWeight: 600 }}>
                mientras toda la información se organiza en un CRM centralizado.
              </span>
            </p>

            <p
              className="mt-6 text-lg md:text-xl leading-relaxed"
              style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
            >
              Accedé a todo desde la{' '}
              <span style={{ color: '#f0e6d3', fontWeight: 500 }}>app móvil</span>
              {' '}y gestioná tu operación en tiempo real, sin importar dónde estés.
            </p>

            {/* Feature pills */}
            <motion.div
              className="flex flex-wrap justify-center gap-3 mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {[
                '💬 Responde al instante',
                '📦 Stock en tiempo real',
                '💳 Cobro con MercadoPago',
                '📊 CRM centralizado',
                '📱 App Móvil',
                '🧾 Facturación automática',
              ].map(pill => (
                <span
                  key={pill}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    color: '#f0e6d3',
                    fontFamily: 'DM Sans, sans-serif',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  {pill}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
