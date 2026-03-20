import { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { GlowingEffect } from '@/components/ui/glowing-effect'

interface Metric {
  value: number
  prefix?: string
  suffix: string
  label: string
  sub: string
  color: string
  icon: string
}

const METRICS: Metric[] = [
  {
    value: 5,
    prefix: '<',
    suffix: ' seg',
    label: 'Tiempo de respuesta',
    sub: 'A cualquier hora, 7 días a la semana',
    color: '#d4a843',
    icon: '⚡',
  },
  {
    value: 35,
    suffix: '%',
    prefix: '+',
    label: 'Más conversión',
    sub: 'Con respuesta inmediata vs. manual',
    color: '#34d399',
    icon: '📈',
  },
  {
    value: 66,
    suffix: ' hs',
    label: 'Ahorrás por mes',
    sub: 'En atención manual de WhatsApp',
    color: '#a78bfa',
    icon: '🕐',
  },
  {
    value: 100,
    suffix: '+',
    label: 'Chats simultáneos',
    sub: 'Sin costo adicional por volumen',
    color: '#f472b6',
    icon: '💬',
  },
]

function AnimatedNumber({ metric, start }: { metric: Metric; start: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return
    const duration = 1800
    const steps = 60
    const increment = metric.value / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= metric.value) {
        setCount(metric.value)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [start, metric.value])

  return (
    <span>
      {metric.prefix && <span style={{ fontSize: '0.75em' }}>{metric.prefix}</span>}
      {count}
      {metric.suffix}
    </span>
  )
}

export function MetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      className="py-24 px-4"
      style={{ background: '#070010' }}
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
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
            style={{
              background: 'rgba(212,168,67,0.1)',
              border: '1px solid rgba(212,168,67,0.25)',
              color: '#d4a843',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Los números que importan
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            Resultados medibles{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #d4a843 0%, #e8c068 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              desde el primer mes
            </span>
          </h2>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {METRICS.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.92 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="relative rounded-2xl px-5 py-7 flex flex-col items-center text-center gap-2"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: `1px solid ${metric.color}22`,
                boxShadow: `0 0 32px ${metric.color}0a`,
              }}
            >
              <GlowingEffect
                disabled={false}
                spread={65}
                blur={0}
                proximity={100}
                inactiveZone={0.01}
                borderWidth={2}
              />
              <span className="text-3xl mb-1">{metric.icon}</span>
              <div
                className="text-4xl md:text-5xl font-bold tabular-nums"
                style={{ fontFamily: 'Syne, sans-serif', color: metric.color }}
              >
                <AnimatedNumber metric={metric} start={isInView} />
              </div>
              <div
                className="font-semibold text-sm"
                style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
              >
                {metric.label}
              </div>
              <div
                className="text-xs leading-snug"
                style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
              >
                {metric.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* ROI callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="relative mt-10 rounded-2xl px-7 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left"
          style={{
            background: 'rgba(212,168,67,0.06)',
            border: '1px solid rgba(212,168,67,0.25)',
          }}
        >
          <GlowingEffect
            disabled={false}
            spread={80}
            blur={0}
            proximity={120}
            inactiveZone={0.01}
            borderWidth={2}
          />
          <span className="text-5xl flex-shrink-0">💡</span>
          <div>
            <p
              className="font-semibold text-base mb-1"
              style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
            >
              Cálculo real de ROI
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
            >
              Si tu negocio pierde 2 ventas por semana por consultas fuera de horario o sin respuesta, y cada venta promedia{' '}
              <span style={{ color: '#d4a843', fontWeight: 600 }}>$5.000</span>, eso representa{' '}
              <span style={{ color: '#d4a843', fontWeight: 600 }}>$40.000 mensuales</span> que van directo a la competencia.{' '}
              OrquestAr se paga solo con recuperar una fracción de esas ventas perdidas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
