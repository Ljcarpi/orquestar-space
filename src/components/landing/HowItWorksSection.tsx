import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const STEPS = [
  {
    number: '01',
    icon: '📱',
    title: 'Cliente escribe por WhatsApp',
    desc: 'El cliente envía su consulta al número de tu negocio. No necesita descargar nada ni registrarse.',
  },
  {
    number: '02',
    icon: '🧠',
    title: 'La IA interpreta la consulta',
    desc: 'El asistente entiende qué necesita el cliente: producto, cantidad, variante, disponibilidad. Incluso si escribe con errores o abreviaciones.',
  },
  {
    number: '03',
    icon: '📦',
    title: 'Responde con stock, precios y cierra la venta',
    desc: 'El bot consulta tu inventario en tiempo real, le muestra opciones con precio y disponibilidad, y lo guía para confirmar la compra. Todo en la misma conversación.',
  },
  {
    number: '04',
    icon: '💳',
    title: 'Genera el link de pago',
    desc: 'Una vez confirmado el pedido, el asistente genera automáticamente un link de MercadoPago y se lo envía al cliente por el mismo chat.',
  },
  {
    number: '05',
    icon: '📊',
    title: 'Pago confirmado → Factura + CRM actualizados',
    desc: 'Cuando el cliente paga, pasan 3 cosas automáticamente: la venta se registra en el CRM (y vos recibís la notificación), se genera la factura y se le envía al comprador por WhatsApp. Sin que toques nada.',
  },
]

export function HowItWorksSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="como-funciona"
      className="py-24 px-4"
      style={{ background: '#070010' }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: 'rgba(139,92,246,0.1)',
              border: '1px solid rgba(139,92,246,0.25)',
              color: '#a78bfa',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Cómo funciona
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            Del mensaje al cobro,{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #a78bfa 0%, #d4a843 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              todo automático
            </span>
          </h2>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p
              className="text-lg"
              style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif', textAlign: 'center', margin: '0 auto', maxWidth: '672px' }}
            >
              El flujo es simple y completamente autónomo. Vos no tenés que hacer nada.
            </p>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 md:left-8 top-8 bottom-8 w-px hidden sm:block"
            style={{ background: 'linear-gradient(to bottom, #d4a843 0%, rgba(212,168,67,0.05) 100%)' }}
          />

          <div className="flex flex-col gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.13 }}
                className="flex gap-5 md:gap-8"
              >
                {/* Number circle */}
                <div className="flex-shrink-0 relative z-10">
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center text-lg md:text-2xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(212,168,67,0.15) 0%, rgba(212,168,67,0.05) 100%)',
                      border: '1px solid rgba(212,168,67,0.35)',
                    }}
                  >
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div
                  className="relative flex-1 pb-6 rounded-2xl px-5 py-4"
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <GlowingEffect
                    disabled={false}
                    spread={60}
                    blur={0}
                    proximity={100}
                    inactiveZone={0.01}
                    borderWidth={2}
                  />
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="text-xs font-bold"
                      style={{
                        color: '#d4a843',
                        fontFamily: 'Syne, sans-serif',
                        letterSpacing: '0.1em',
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="font-semibold text-base"
                      style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
