import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import AnimatedShaderHero from '@/components/animated-shader-hero'

const WA_URL = 'https://wa.me/5491162857653?text=Hola%2C%20quiero%20una%20demo%20de%20OrquestAr'

const ROTATING_WORDS = ['automático', 'inteligente', 'eficaz', 'incansable', 'digital']

function RotatingWord() {
  const [index, setIndex] = useState(0)
  const words = useMemo(() => ROTATING_WORDS, [])

  useEffect(() => {
    const id = setTimeout(() => {
      setIndex(i => (i + 1) % words.length)
    }, 2200)
    return () => clearTimeout(id)
  }, [index, words])

  const gradientStyle = {
    background: 'linear-gradient(135deg, #d4a843 0%, #e8c068 50%, #d4a843 100%)',
    WebkitBackgroundClip: 'text' as const,
    WebkitTextFillColor: 'transparent' as const,
    backgroundClip: 'text' as const,
    fontFamily: 'Syne, sans-serif',
    fontWeight: 800,
    whiteSpace: 'nowrap' as const,
  }

  return (
    <span
      className="relative inline-block"
      style={{ verticalAlign: 'bottom', overflow: 'visible' }}
    >
      {/* Invisible placeholder — widest word sets the container size */}
      <span style={{ ...gradientStyle, visibility: 'hidden' }} aria-hidden>
        automático
      </span>
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="absolute inset-0 flex items-center justify-center"
          style={gradientStyle}
          initial={{ opacity: 0, y: 60 }}
          animate={
            index === i
              ? { y: 0, opacity: 1 }
              : { y: index > i ? -60 : 60, opacity: 0 }
          }
          transition={{ type: 'spring', stiffness: 60, damping: 18 }}
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative" id="inicio">
      <AnimatedShaderHero
        headline={{
          line1: 'Tu mejor vendedor,',
          line2: (
            <span>
              ahora es{' '}
              <RotatingWord />
            </span>
          ),
        }}
        subtitle={
          <span>
            Desde el primer mensaje hasta el cierre:{' '}
            <span style={{ color: '#f0e6d3', fontWeight: 500 }}>OrquestAr responde consultas, recomienda productos y convierte consultas en ventas reales.</span>
            {' '}Desde la consulta, hasta el cobro y la generación y envío de factura.
          </span>
        }
        buttons={{
          primary: {
            text: '🚀 Quiero mi demo gratis',
            onClick: () => window.open(WA_URL, '_blank'),
          },
          secondary: {
            text: 'Ver cómo funciona',
            onClick: () => {
              document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' })
            },
          },
        }}
      />
    </section>
  )
}
