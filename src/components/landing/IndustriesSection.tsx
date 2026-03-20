import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const INDUSTRIES = [
  { icon: '🔧', name: 'Ferreterías', sub: 'y materiales de construcción' },
  { icon: '👗', name: 'Indumentaria', sub: 'y calzado' },
  { icon: '🍕', name: 'Gastronomía', sub: 'y delivery' },
  { icon: '🌿', name: 'Dietéticas', sub: 'y salud natural' },
  { icon: '🖥️', name: 'Tecnología', sub: 'e informática' },
  { icon: '🏠', name: 'Hogar', sub: 'y decoración' },
  { icon: '💄', name: 'Cosmética', sub: 'y belleza' },
  { icon: '⚽', name: 'Deportes', sub: 'y artículos' },
  { icon: '📚', name: 'Librerías', sub: 'y papelerías' },
  { icon: '🏪', name: 'Almacenes', sub: 'y comercio minorista' },
  { icon: '🏭', name: 'Mayoristas', sub: 'y distribuidores' },
  { icon: '🛠️', name: 'Servicios', sub: 'y profesionales' },
]

export function IndustriesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      className="py-20 px-4"
      style={{ background: '#0a0118' }}
      ref={ref}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold mb-3"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            ¿Para quién es OrquestAr?
          </h2>
          <p
            className="text-base text-center"
            style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif', textAlign: 'center', maxWidth: '36rem', margin: '0 auto' }}
          >
            Funciona para cualquier negocio que use WhatsApp para comunicarse con sus clientes.
          </p>
        </motion.div>

        {/* Industry pills */}
        <div className="flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="flex items-center gap-3 px-5 py-3 rounded-xl cursor-default"
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(255,255,255,0.08)',
                transition: 'border-color 0.2s, background 0.2s',
              }}
              whileHover={{
                borderColor: 'rgba(212,168,67,0.35)',
                background: 'rgba(212,168,67,0.05)',
              }}
            >
              <span className="text-2xl">{ind.icon}</span>
              <div>
                <div
                  className="font-semibold text-sm"
                  style={{ fontFamily: 'DM Sans, sans-serif', color: '#f0e6d3' }}
                >
                  {ind.name}
                </div>
                <div
                  className="text-xs"
                  style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {ind.sub}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.7 }}
          className="text-center mt-10 text-sm"
          style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
        >
          ¿Tu rubro no está en la lista?{' '}
          <a
            href="https://wa.me/5491162857653?text=Hola%2C%20quiero%20una%20demo%20de%20OrquestAr"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#d4a843', fontWeight: 600 }}
          >
            Consultanos — seguro OrquestAr se adapta.
          </a>
        </motion.p>
      </div>
    </section>
  )
}
