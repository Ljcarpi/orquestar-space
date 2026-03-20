import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

interface Message {
  from: 'user' | 'bot'
  text: string
  time: string
  hasLink?: boolean
  pdfName?: string
}

interface Chat {
  business: string
  type: string
  avatar: string
  color: string
  messages: Message[]
}

const CHATS: Chat[] = [
  {
    business: 'Ferretería El Bulón',
    type: 'Ferretería',
    avatar: '🔧',
    color: '#d4a843',
    messages: [
      { from: 'user', text: 'Hola, tienen tarraja para caño de 1/2?', time: '22:14' },
      {
        from: 'bot',
        text: 'Uy, justo esa no nos queda en stock 😕\n\nPero tenemos el Macho de roscar 1/2" que es muy similar y hace exactamente lo mismo. ¿Te sirve?\n\n📦 Stock: 6 unidades\n💰 Precio: $3.800 c/u',
        time: '22:14',
      },
      { from: 'user', text: 'Dale, sirve igual. Dame 2', time: '22:15' },
      {
        from: 'bot',
        text: 'Perfecto! Para armar el pedido necesito:\n\n💳 ¿Cómo pagás? (efectivo, transferencia o MercadoPago)\n👤 Tu nombre y apellido\n🏪 ¿Retirás por el local o querés envío?',
        time: '22:15',
      },
      {
        from: 'user',
        text: 'Juan García, pago con mercadopago y paso a buscarlo yo',
        time: '22:15',
      },
      {
        from: 'bot',
        text: '✅ Perfecto, Juan!\n\n📋 Resumen:\n2× Macho de roscar 1/2" = $7.600\n💳 MercadoPago · Retiro en local\n\nTu link de pago:',
        time: '22:16',
        hasLink: true,
      },
      { from: 'user', text: 'Listo, ya pagué!', time: '22:16' },
      {
        from: 'bot',
        text: '✅ ¡Pago confirmado, Juan! La factura ya te llegó por acá. Tu pedido está listo para retirar cuando quieras. ¡Gracias, che! 🙌',
        time: '22:17',
        pdfName: 'Factura-0847.pdf',
      },
    ],
  },
  {
    business: 'Almacén La Esquina',
    type: 'Almacén',
    avatar: '🛒',
    color: '#34d399',
    messages: [
      { from: 'user', text: 'Buenas, cuánto vale el aceite girasol 1.5l?', time: '11:03' },
      {
        from: 'bot',
        text: '¡Buenas! 🛒\n\nAceite girasol 1.5L → $1.850\n📦 Stock: 24 unidades disponibles.\n\n¿Te armo el pedido?',
        time: '11:03',
      },
      { from: 'user', text: 'Dale, 3 botellas', time: '11:04' },
      {
        from: 'bot',
        text: 'Anotado! Para confirmar el pedido decime:\n\n💳 ¿Cómo abonás? (efectivo, transferencia o MercadoPago)\n👤 Nombre y apellido\n🚚 ¿Pasás a buscar o enviamos a domicilio?',
        time: '11:04',
      },
      {
        from: 'user',
        text: 'María López, pago con transferencia. Envío a Av. San Martín 1240, Ramos Mejía',
        time: '11:04',
      },
      {
        from: 'bot',
        text: '📋 Pedido de María:\n3× Aceite girasol 1.5L = $5.550\n🏦 Transferencia · Envío a domicilio\n📍 Av. San Martín 1240, Ramos Mejía\n\nTu link de pago:',
        time: '11:05',
        hasLink: true,
      },
      { from: 'user', text: 'Ahí hice la transferencia!', time: '11:05' },
      {
        from: 'bot',
        text: '✅ ¡Pago recibido, María! La factura ya está en el chat. Tu pedido sale para entrega hoy. Te avisamos cuando el repartidor esté en camino. ¡Hasta la próxima! 🛒',
        time: '11:06',
        pdfName: 'Factura-0848.pdf',
      },
    ],
  },
  {
    business: 'Moda Joven',
    type: 'Indumentaria',
    avatar: '👗',
    color: '#f472b6',
    messages: [
      { from: 'user', text: 'Tienen jean tiro alto talle 38?', time: '20:47' },
      {
        from: 'bot',
        text: '¡Hola! 👖 Jean tiro alto talle 38 disponible en:\n\n• Negro ✅\n• Azul oscuro ✅\n• Gris ❌ (sin stock)\n\n¿Con cuál te quedás?',
        time: '20:47',
      },
      { from: 'user', text: 'El negro porfa!', time: '20:48' },
      {
        from: 'bot',
        text: '¿Lo reservo ahora? En negro quedan pocas unidades 🖤',
        time: '20:48',
      },
      { from: 'user', text: 'Sí, reservámelo!', time: '20:48' },
      {
        from: 'bot',
        text: 'Buena elección! Para confirmar te pido:\n\n💳 ¿Cómo pagás? (efectivo, transferencia o MercadoPago)\n👤 Tu nombre y apellido\n📦 ¿Retirás o te lo enviamos?',
        time: '20:48',
      },
      {
        from: 'user',
        text: 'Valentina Torres! pago con mercadopago, mandámelo a Mitre 567 piso 3 dto A, Palermo',
        time: '20:49',
      },
      {
        from: 'bot',
        text: '✨ Todo listo, Vale!\n\nJean tiro alto Negro T38 → $28.900\n💳 MercadoPago · Envío a domicilio\n📍 Mitre 567 3°A, Palermo\n\nTu link de pago:',
        time: '20:49',
        hasLink: true,
      },
      { from: 'user', text: 'Pago hecho! 🖤', time: '20:50' },
      {
        from: 'bot',
        text: '💳 ¡Pago confirmado, Vale! Tu factura ya está acá abajo. Estamos preparando tu pedido y te avisamos cuando salga para Palermo. ¡Que lo disfrutes mucho! ✨',
        time: '20:50',
        pdfName: 'Factura-0849.pdf',
      },
    ],
  },
]

function TypingIndicator() {
  return (
    <motion.div
      className="flex justify-start mb-2"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 4 }}
      transition={{ duration: 0.2 }}
    >
      <div
        className="px-4 py-3 rounded-2xl"
        style={{ background: '#1f2937', borderTopLeftRadius: 4 }}
      >
        <div className="flex gap-1 items-center">
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'inline-block',
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#6b7280',
                animation: `typingBounce 1.1s ease-in-out ${i * 0.18}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function ChatBubble({ msg, accent }: { msg: Message; accent: string }) {
  const isBot = msg.from === 'bot'

  return (
    <motion.div
      className={`flex ${isBot ? 'justify-start' : 'justify-end'} mb-2`}
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      <div style={{ maxWidth: '82%' }}>
        <div
          className="px-3.5 py-2.5 rounded-2xl text-sm leading-snug whitespace-pre-line"
          style={
            isBot
              ? { background: '#1f2937', color: '#f3f4f6', borderTopLeftRadius: 4, fontFamily: 'DM Sans, sans-serif' }
              : { background: '#075e54', color: '#fff', borderTopRightRadius: 4, fontFamily: 'DM Sans, sans-serif' }
          }
        >
          {msg.text}
          {msg.hasLink && (
            <div
              className="mt-2 px-3 py-2 rounded-xl flex items-center gap-2 cursor-pointer"
              style={{ background: accent + '22', border: `1px solid ${accent}55` }}
            >
              <span style={{ color: accent, fontSize: 18 }}>💳</span>
              <div>
                <div style={{ color: accent, fontWeight: 600, fontSize: 12 }}>Pagar con MercadoPago</div>
                <div style={{ color: '#9ca3af', fontSize: 12 }}>mp.me/orquestar/...</div>
              </div>
            </div>
          )}
          {msg.pdfName && (
            <div
              className="mt-2 px-3 py-2.5 rounded-xl flex items-center gap-2.5 cursor-pointer"
              style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}
            >
              {/* PDF icon */}
              <div
                className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: '#ef4444' }}
              >
                <span style={{ color: '#fff', fontSize: 11, fontWeight: 800, letterSpacing: '-0.3px' }}>PDF</span>
              </div>
              <div className="flex-1 min-w-0">
                <div
                  className="text-xs font-medium truncate"
                  style={{ color: '#f3f4f6', fontFamily: 'DM Sans, sans-serif' }}
                >
                  {msg.pdfName}
                </div>
                <div style={{ color: '#6b7280', fontSize: 11 }}>Factura electrónica · 48 KB</div>
              </div>
            </div>
          )}
        </div>
        <div
          className={`text-[11px] mt-0.5 ${isBot ? 'text-left pl-1' : 'text-right pr-1'}`}
          style={{ color: '#6b7280' }}
        >
          {msg.time} {!isBot && '✓✓'}
        </div>
      </div>
    </motion.div>
  )
}

function ChatCard({ chat, isVisible }: { chat: Chat; isVisible: boolean }) {
  const [shownMessages, setShownMessages] = useState<Message[]>([])
  const [showTyping, setShowTyping] = useState(false)
  const [fading, setFading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const userScrolled = useRef(false)

  // Track if user manually scrolled up
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    const onScroll = () => {
      const atBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 40
      userScrolled.current = !atBottom
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-scroll to bottom only if user hasn't scrolled up
  useEffect(() => {
    if (!userScrolled.current && scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [shownMessages, showTyping])

  useEffect(() => {
    if (!isVisible) {
      setShownMessages([])
      setShowTyping(false)
      setFading(false)
      return
    }

    const timers: ReturnType<typeof setTimeout>[] = []
    let active = true

    function schedule(fn: () => void, delay: number) {
      const id = setTimeout(() => { if (active) fn() }, delay)
      timers.push(id)
    }

    function runLoop() {
      setShownMessages([])
      setShowTyping(false)
      setFading(false)
      userScrolled.current = false

      let t = 700

      for (const msg of chat.messages) {
        if (msg.from === 'user') {
          const m = msg
          schedule(() => setShownMessages(prev => [...prev, m]), t)
          t += 1300
        } else {
          const m = msg
          schedule(() => setShowTyping(true), t)
          t += 1700
          schedule(() => {
            setShowTyping(false)
            setShownMessages(prev => [...prev, m])
          }, t)
          t += 1500
        }
      }

      // Pause on completed conversation, then fade out and restart
      schedule(() => setFading(true), t + 13000)
      schedule(runLoop, t + 15000)
    }

    runLoop()

    return () => {
      active = false
      timers.forEach(clearTimeout)
    }
  }, [isVisible, chat.messages])

  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col w-full"
      style={{
        background: '#111827',
        border: `1px solid ${chat.color}22`,
        boxShadow: `0 4px 32px ${chat.color}15`,
      }}
    >
      {/* Header — always visible */}
      <div
        className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
        style={{ background: '#0f172a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
      >
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: chat.color + '22' }}
        >
          {chat.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <div
            className="font-semibold text-sm truncate"
            style={{ color: '#f3f4f6', fontFamily: 'DM Sans, sans-serif' }}
          >
            {chat.business}
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#34d399' }} />
            <span className="text-xs" style={{ color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}>
              OrquestAr Bot 🤖 · en línea
            </span>
          </div>
        </div>
        <div style={{ color: '#6b7280', fontSize: 12, fontFamily: 'DM Sans' }}>
          {chat.type}
        </div>
      </div>

      {/* Messages area with fade animation */}
      <motion.div
        ref={scrollRef}
        animate={{ opacity: fading ? 0 : 1 }}
        transition={{ duration: 0.9 }}
        className="flex-1 px-3 py-3 overflow-y-auto min-h-[320px] max-h-[320px] md:min-h-[420px] md:max-h-[420px]"
      >
        <AnimatePresence mode="popLayout">
          {shownMessages.map((msg, i) => (
            <ChatBubble key={i} msg={msg} accent={chat.color} />
          ))}
          {showTyping && <TypingIndicator key="typing" />}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export function ChatSection() {
  const ref = useRef(null)
  // once: false so the animation restarts if user scrolls away and back
  const isInView = useInView(ref, { once: false, margin: '-80px' })

  return (
    <section
      id="demo"
      className="py-24 px-4"
      style={{ background: '#070010' }}
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
              background: 'rgba(52,211,153,0.1)',
              border: '1px solid rgba(52,211,153,0.25)',
              color: '#34d399',
              fontFamily: 'DM Sans, sans-serif',
            }}
          >
            Ejemplos rápidos
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
          >
            Así trabaja OrquestAr{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #d4a843 0%, #e8c068 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              en tu negocio
            </span>
          </h2>
          <div style={{ textAlign: 'center', width: '100%' }}>
            <p
              className="text-lg"
              style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif', textAlign: 'center', margin: '0 auto', maxWidth: '672px' }}
            >
              Conversaciones reales, respuestas instantáneas. Mirá cómo el asistente cierra ventas sin que vos tengas que hacer nada.
            </p>
          </div>
        </motion.div>

        {/* Chat cards — all animate in parallel */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center md:items-start flex-wrap">
          {CHATS.map((chat, i) => (
            <motion.div
              key={chat.business}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="w-full flex justify-center max-w-full md:max-w-[340px]"
            >
              <ChatCard chat={chat} isVisible={isInView} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
