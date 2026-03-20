import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { GlowingEffect } from '@/components/ui/glowing-effect'

const COSTS = [
  {
    icon: '⏰',
    stat: '3 horas',
    statLabel: 'promedio diario',
    title: 'Tiempo destruido en tareas repetitivas',
    desc: '"¿Tienen stock de X?" · "¿Cuánto sale Y?" · "¿Cómo hago el pedido?" — las mismas preguntas, decenas de veces por día. Tu equipo pierde más de 66 horas mensuales en esto.',
    color: '#e8c068',
  },
  {
    icon: '💸',
    stat: '$50.000+',
    statLabel: 'mensuales perdidos',
    title: 'Ventas que se escapan sin retorno',
    desc: '2 ventas perdidas por semana a $6.000 cada una = $50.000/mes que va directo a la competencia. Clientes que escriben a las 11 PM y no reciben respuesta, simplemente compran en otro lado. Y dependiendo del rubro, ese número puede ser mucho mayor.',
    color: '#f87171',
  },
  {
    icon: '📉',
    stat: '10×',
    statLabel: 'menos conversión',
    title: 'Demoras que matan el interés de compra',
    desc: 'Un cliente esperando respuesta más de 5 minutos tiene 10 veces menos chances de completar la compra. Sin respuesta instantánea, el interés se enfría y el carrito se abandona.',
    color: '#a78bfa',
  },
]

export function CostSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="problema"
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
              background: 'rgba(248,113,113,0.1)',
              border: '1px solid rgba(248,113,113,0.25)',
              color: '#f87171',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            El costo de no automatizar
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            Cada día sin OrquestAr{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #f87171 0%, #fbbf24 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              te cuesta dinero real
            </span>
          </h2>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p
              className="text-lg"
              style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif', textAlign: 'center', margin: '0 auto', maxWidth: '672px' }}
            >
              No son hipótesis. Son los números de tu negocio operando sin automatización.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {COSTS.map((cost, i) => (
            <motion.div
              key={cost.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="relative rounded-2xl p-7 flex flex-col gap-4"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <GlowingEffect
                disabled={false}
                spread={70}
                blur={0}
                proximity={120}
                inactiveZone={0.01}
                borderWidth={2}
              />

              {/* Icon + stat */}
              <div className="flex items-start justify-between">
                <span className="text-4xl">{cost.icon}</span>
                <div className="text-right">
                  <div
                    className="text-2xl font-bold"
                    style={{ fontFamily: 'Syne, sans-serif', color: cost.color }}
                  >
                    {cost.stat}
                  </div>
                  <div
                    className="text-xs"
                    style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {cost.statLabel}
                  </div>
                </div>
              </div>

              <h3
                className="text-lg font-semibold leading-snug"
                style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
              >
                {cost.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
              >
                {cost.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
