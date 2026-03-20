const WA_URL = 'https://wa.me/5491162857653?text=Hola%2C%20quiero%20una%20demo%20de%20OrquestAr'

export function Footer() {
  return (
    <footer
      className="px-4 pt-16 pb-8"
      style={{ background: '#050010', borderTop: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="OrquestAr" className="h-9 w-auto" />
              <span
                className="text-xl font-bold"
                style={{ fontFamily: 'Syne, sans-serif', color: '#f0e6d3' }}
              >
                OrquestAr
              </span>
            </div>
            <p
              className="text-sm leading-relaxed mb-4 max-w-xs"
              style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
            >
              Automatizá tu atención por WhatsApp con IA. Responde consultas, cierra ventas y gestiona tu negocio las 24 horas, sin intervención humana.
            </p>
            <p
              className="text-xs"
              style={{ color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}
            >
              Automatizá tu negocio. Vendé sin límites.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: '#f0e6d3', fontFamily: 'Syne, sans-serif' }}
            >
              Producto
            </h4>
            <ul className="flex flex-col gap-2.5">
              {[
                { label: 'Solución', href: '#solucion' },
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Beneficios', href: '#beneficios' },
                { label: 'Precios', href: '#precios' },
                { label: 'FAQ', href: '#faq' },
              ].map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
                    onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#d4a843')}
                    onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#a89ec4')}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-semibold text-sm uppercase tracking-wider mb-4"
              style={{ color: '#f0e6d3', fontFamily: 'Syne, sans-serif' }}
            >
              Contacto
            </h4>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#d4a843')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#a89ec4')}
                >
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="mailto:contacto@orquestar.space"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#d4a843')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#a89ec4')}
                >
                  📧 contacto@orquestar.space
                </a>
              </li>
              <li>
                <a
                  href="tel:+5491162857653"
                  className="flex items-center gap-2 text-sm transition-colors"
                  style={{ color: '#a89ec4', fontFamily: 'DM Sans, sans-serif' }}
                  onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#d4a843')}
                  onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.color = '#a89ec4')}
                >
                  📞 +54 9 11 6285-7653
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            className="text-xs"
            style={{ color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}
          >
            © {new Date().getFullYear()} OrquestAr. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-5">
            {[
              { label: 'Términos de uso', href: '/terminos' },
              { label: 'Privacidad', href: '/privacidad' },
            ].map(l => (
              <a
                key={l.label}
                href={l.href}
                className="text-xs transition-colors"
                style={{ color: '#6b7280', fontFamily: 'DM Sans, sans-serif' }}
                onMouseEnter={e => ((e.target as HTMLAnchorElement).style.color = '#a89ec4')}
                onMouseLeave={e => ((e.target as HTMLAnchorElement).style.color = '#6b7280')}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
