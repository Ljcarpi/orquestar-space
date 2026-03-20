import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const FEATURES = [
  {
    icon: '💬',
    title: 'Atención al cliente 24/7',
    desc: 'Responde en menos de 5 segundos a cualquier hora, sin importar el volumen de consultas simultáneas. No se cansa, no tiene días libres, no comete errores por distracción.',
    highlight: '< 5 seg',
  },
  {
    icon: '📦',
    title: 'Stock y precios en tiempo real',
    desc: 'El asistente accede directamente a tu inventario actualizado. Nunca inventa ni estima: informa solo lo que está disponible. Si no hay stock, ofrece alternativas al instante.',
    highlight: 'Sync en vivo',
  },
  {
    icon: '🛒',
    title: 'Cierre de ventas completo',
    desc: 'Guía al cliente desde la consulta hasta el pago en un solo hilo de conversación. Toma el pedido, confirma datos de entrega y genera el link de pago con MercadoPago solo.',
    highlight: 'Cobro automático',
  },
  {
    icon: '🎙️',
    title: 'Entiende texto, audio e imágenes',
    desc: 'El cliente puede mandar una nota de voz preguntando por un producto o una foto de lo que necesita. El asistente lo procesa y responde igual de bien que si escribiera.',
    highlight: 'Multimodal',
  },
  {
    icon: '🔄',
    title: 'Alternativas automáticas',
    desc: 'Si el producto no está disponible, OrquestAr busca opciones similares y las presenta de inmediato. No deja ir al cliente con las manos vacías. Nunca.',
    highlight: 'Sin pérdidas',
  },
  {
    icon: '👤',
    title: 'Derivación inteligente a humano',
    desc: 'Si el cliente pide hablar con una persona o la consulta es compleja, el asistente notifica al equipo al instante y hace la transición sin fricción.',
    highlight: 'Escalado suave',
  },
  {
    icon: '📊',
    title: 'CRM centralizado en tiempo real',
    desc: 'Cada conversación, pedido e interacción queda registrada automáticamente. Visualizá clientes "calientes", historial de compras, métricas y tendencias en un solo panel.',
    highlight: 'Todo registrado',
  },
  {
    icon: '📱',
    title: 'App Móvil incluida',
    desc: 'Gestioná tu negocio desde el celular. Revisá conversaciones activas, actualizá precios y stock, monitoreá ventas y respondé alertas en tiempo real desde cualquier lugar.',
    highlight: 'iOS & Android',
  },
  {
    icon: '🧾',
    title: 'Facturación automática',
    desc: 'El asistente genera y envía la factura automáticamente al completar una venta. Tu cliente la recibe sin que tengas que hacer nada. Integración con tu sistema de facturación.',
    highlight: 'Cero fricción',
  },
]

export function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="beneficios"
      className="py-24 px-4"
      style={{ background: '#0a0118' }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto">
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
              background: 'rgba(212,168,67,0.1)',
              border: '1px solid rgba(212,168,67,0.25)',
              color: '#d4a843',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Todo lo que hace por vos
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            No es un chatbot.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #d4a843 0%, #e8c068 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Es tu vendedor ideal.
            </span>
          </h2>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p
              className="text-lg"
              style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif', textAlign: 'center', margin: '0 auto', maxWidth: '672px' }}
            >
              Un vendedor inteligente que trabaja solo, conoce tu catálogo a fondo y nunca deja a un cliente sin respuesta.
            </p>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat, i) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="relative rounded-2xl p-6 flex flex-col gap-3"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(255,255,255,0.07)',
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

              <div className="flex items-start justify-between gap-3">
                <span className="text-3xl">{feat.icon}</span>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full flex-shrink-0"
                  style={{
                    background: 'rgba(212,168,67,0.1)',
                    color: '#d4a843',
                    fontFamily: 'DM Sans, sans-serif',
                  }}
                >
                  {feat.highlight}
                </span>
              </div>
              <h3
                className="font-semibold text-base leading-snug"
                style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
              >
                {feat.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
              >
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
