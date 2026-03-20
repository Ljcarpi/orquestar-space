import { useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: '¿Necesito cambiar mi número de WhatsApp?',
    a: 'No. OrquestAr se integra con tu número de WhatsApp Business existente. El cliente sigue escribiendo al mismo número de siempre, sin notar ningún cambio en la experiencia.',
  },
  {
    q: '¿Cómo carga el sistema mis productos y precios?',
    a: 'Durante el onboarding, cargamos tu catálogo completo: nombre, código, marca, categoría, precio y stock. Podés editarlo en cualquier momento desde el panel CRM o la app móvil. Los cambios se reflejan en el asistente en tiempo real.',
  },
  {
    q: '¿Qué pasa si el cliente quiere hablar con una persona?',
    a: 'Si el cliente lo pide o la consulta supera la lógica del bot, el asistente notifica al equipo al instante y hace la transición sin fricción. El historial de la conversación queda visible para quien retome el chat.',
  },
  {
    q: '¿Funciona con cualquier plan de MercadoPago?',
    a: 'Sí. La integración con MercadoPago funciona con cualquier cuenta vendedor. El asistente genera links de pago personalizados y hace el seguimiento del estado (aprobado, pendiente, rechazado) automáticamente.',
  },
  {
    q: '¿Cuánto tarda la implementación?',
    a: 'El proceso típico dura entre 3 y 7 días hábiles. Incluye relevamiento de tu negocio, carga del catálogo, configuración de flujos, un período de testing y el lanzamiento con soporte continuo.',
  },
  {
    q: '¿Puedo atender cientos de clientes al mismo tiempo?',
    a: 'Sí. El asistente puede manejar cientos de conversaciones simultáneamente sin degradar la calidad de respuesta. No hay límite de chats concurrentes en ningún plan.',
  },
  {
    q: '¿El asistente habla con la voz de mi marca?',
    a: 'Exacto. Configuramos el tono, personalidad y vocabulario según cómo querés que hable tu negocio: formal, amigable, técnico o descontracturado. El bot habla como vos.',
  },
]

function FaqItem({ faq, index }: { faq: typeof FAQS[0]; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="rounded-xl overflow-hidden"
      style={{ border: '1px solid rgba(255,255,255,0.08)' }}
    >
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors"
        style={{
          background: open ? 'rgba(212,168,67,0.05)' : 'rgba(255,255,255,0.02)',
          cursor: 'pointer',
        }}
        onClick={() => setOpen(!open)}
      >
        <span
          className="font-semibold text-sm md:text-base pr-4"
          style={{ fontFamily: 'DM Sans, sans-serif', color: '#f0e6d3' }}
        >
          {faq.q}
        </span>
        <ChevronDown
          className="flex-shrink-0 w-5 h-5 transition-transform duration-300"
          style={{
            color: '#d4a843',
            transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <div
              className="px-5 py-4 text-sm leading-relaxed"
              style={{
                color: '#a89ec4',
                fontFamily: 'DM Sans, sans-serif',
                background: 'rgba(212,168,67,0.03)',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export function FaqSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="faq"
      className="py-24 px-4"
      style={{ background: '#0a0118' }}
      ref={ref}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
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
            Preguntas frecuentes
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            Tus dudas,{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #d4a843 0%, #e8c068 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              respondidas
            </span>
          </h2>
        </motion.div>

        {/* FAQ list */}
        {isInView && (
          <div className="flex flex-col gap-3">
            {FAQS.map((faq, i) => (
              <FaqItem key={faq.q} faq={faq} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
