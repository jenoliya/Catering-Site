import type { ServiceId } from '../data/content'

// Every picture on the site is hand-built SVG, so there are no photos to license
// and nothing copied from any other website.

export function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 460" className="h-auto w-full" role="img" aria-label="Illustration of a steaming serving pot with vegetables and a ladle">
      <defs>
        <linearGradient id="potGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2f7a57" />
          <stop offset="1" stopColor="#12301f" />
        </linearGradient>
        <radialGradient id="glow" cx="50%" cy="50%" r="50%">
          <stop offset="0" stopColor="#f8cf62" stopOpacity="0.55" />
          <stop offset="1" stopColor="#f8cf62" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="260" cy="230" r="215" fill="url(#glow)" />
      <ellipse cx="260" cy="410" rx="170" ry="20" fill="#12301f" opacity="0.18" />
      {/* steam */}
      <g stroke="#fbf7ef" strokeWidth="7" strokeLinecap="round" fill="none">
        <path className="animate-steam" style={{ animationDelay: '0s' }} d="M210 150c-14-18 14-30 0-52" />
        <path className="animate-steam" style={{ animationDelay: '0.9s' }} d="M260 140c-14-18 14-30 0-52" />
        <path className="animate-steam" style={{ animationDelay: '1.8s' }} d="M310 150c-14-18 14-30 0-52" />
      </g>
      <g className="animate-float">
        {/* handles */}
        <rect x="70" y="228" width="60" height="22" rx="11" fill="#12301f" />
        <rect x="390" y="228" width="60" height="22" rx="11" fill="#12301f" />
        {/* pot */}
        <path d="M105 200h310v110a110 110 0 0 1-110 110h-90A110 110 0 0 1 105 310z" fill="url(#potGrad)" />
        <rect x="95" y="182" width="330" height="30" rx="15" fill="#f2a900" />
        <rect x="95" y="182" width="330" height="10" rx="5" fill="#f8cf62" />
        {/* pattern band */}
        <g fill="#f8cf62" opacity="0.85">
          {Array.from({ length: 9 }).map((_, i) => (
            <circle key={i} cx={150 + i * 27} cy={290} r="7" />
          ))}
        </g>
        <path d="M130 330h260" stroke="#f8cf62" strokeWidth="3" strokeDasharray="2 10" strokeLinecap="round" opacity="0.7" />
        {/* ladle */}
        <g transform="rotate(24 360 160)">
          <rect x="352" y="40" width="10" height="150" rx="5" fill="#fbf7ef" />
          <path d="M330 190a32 32 0 0 0 64 0z" fill="#fbf7ef" />
        </g>
      </g>
      {/* floating ingredients */}
      <g>
        <circle cx="62" cy="120" r="22" fill="#d1573a" />
        <path d="M62 98c4-10 14-12 18-10" stroke="#2f7a57" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path d="M455 120c-26 0-34 28-12 42 22 14 40-6 34-26-2-10-10-16-22-16z" fill="#f2a900" />
        <ellipse cx="440" cy="355" rx="18" ry="30" fill="#e8892b" transform="rotate(25 440 355)" />
        <path d="M452 322c4-10 12-14 18-12" stroke="#2f7a57" strokeWidth="5" strokeLinecap="round" fill="none" />
        <g transform="translate(40 330) rotate(-20)">
          <ellipse cx="0" cy="0" rx="26" ry="14" fill="#2f7a57" />
          <path d="M-22 0h44" stroke="#d6eadd" strokeWidth="3" />
        </g>
      </g>
    </svg>
  )
}

function Frame({ bg, children, label }: { bg: string; children: React.ReactNode; label: string }) {
  return (
    <svg viewBox="0 0 400 260" className="h-full w-full" role="img" aria-label={label} preserveAspectRatio="xMidYMid slice">
      <rect width="400" height="260" fill={bg} />
      {children}
    </svg>
  )
}

export function ServiceIllustration({ id }: { id: ServiceId }) {
  switch (id) {
    case 'industrial':
      return (
        <Frame bg="#fdeebb" label="Factory building with chimney and a serving tray">
          <rect x="40" y="120" width="220" height="110" fill="#1f4d3a" />
          <path d="M40 120l55-40v40zM95 120l55-40v40zM150 120l55-40v40zM205 120l55-40v40z" fill="#2f7a57" />
          <rect x="225" y="40" width="26" height="80" fill="#12301f" />
          <circle cx="245" cy="30" r="12" fill="#fbf7ef" opacity="0.8" />
          <circle cx="262" cy="14" r="9" fill="#fbf7ef" opacity="0.6" />
          {[70, 120, 170].map((x) => (
            <rect key={x} x={x} y="160" width="28" height="26" rx="3" fill="#f8cf62" />
          ))}
          <ellipse cx="320" cy="205" rx="62" ry="14" fill="#12301f" opacity="0.2" />
          <ellipse cx="320" cy="190" rx="62" ry="18" fill="#fbf7ef" />
          <ellipse cx="320" cy="186" rx="42" ry="10" fill="#f2a900" />
        </Frame>
      )
    case 'institutional':
      return (
        <Frame bg="#d6eadd" label="School building with a flag and an apple">
          <rect x="60" y="110" width="200" height="120" fill="#fbf7ef" />
          <path d="M45 112L160 50l115 62z" fill="#1f4d3a" />
          <rect x="135" y="160" width="50" height="70" fill="#2f7a57" />
          {[85, 215].map((x) => (
            <rect key={x} x={x} y="140" width="32" height="32" rx="3" fill="#f5bb2e" />
          ))}
          <rect x="158" y="14" width="4" height="40" fill="#12301f" />
          <path d="M162 14h30l-8 9 8 9h-30z" fill="#d1573a" />
          <circle cx="330" cy="180" r="38" fill="#d1573a" />
          <path d="M330 142c0-14 10-22 22-22" stroke="#12301f" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M338 136c10-14 26-12 30-8-4 12-18 16-30 8z" fill="#2f7a57" />
        </Frame>
      )
    case 'corporate':
      return (
        <Frame bg="#fbe4dc" label="Office towers with a lunch box">
          {[
            [50, 70, 70],
            [130, 40, 100],
            [210, 90, 50],
          ].map(([x, y, w], i) => (
            <g key={i}>
              <rect x={x} y={y} width={w} height={230 - y} fill={i === 1 ? '#1f4d3a' : '#2f7a57'} />
              {Array.from({ length: 5 }).map((_, r) =>
                Array.from({ length: Math.floor(w / 24) }).map((_, c) => (
                  <rect key={`${r}${c}`} x={x + 8 + c * 22} y={y + 12 + r * 24} width="12" height="12" fill="#f8cf62" opacity="0.85" />
                )),
              )}
            </g>
          ))}
          <rect x="285" y="150" width="90" height="62" rx="10" fill="#f2a900" />
          <rect x="285" y="150" width="90" height="16" rx="8" fill="#d18e00" />
          <path d="M310 150v-12h40v12" stroke="#12301f" strokeWidth="5" fill="none" strokeLinecap="round" />
          <circle cx="330" cy="188" r="10" fill="#fbf7ef" />
        </Frame>
      )
    case 'healthcare':
      return (
        <Frame bg="#d9ecf6" label="Hospital cross above a meal tray">
          <rect x="70" y="40" width="200" height="140" rx="14" fill="#fbf7ef" />
          <rect x="150" y="62" width="40" height="96" rx="6" fill="#3a7ca5" />
          <rect x="122" y="90" width="96" height="40" rx="6" fill="#3a7ca5" />
          <rect x="60" y="200" width="280" height="26" rx="13" fill="#1f4d3a" />
          <circle cx="130" cy="190" r="26" fill="#fbf7ef" stroke="#1f4d3a" strokeWidth="4" />
          <circle cx="130" cy="190" r="14" fill="#7bbf6a" />
          <circle cx="205" cy="190" r="26" fill="#fbf7ef" stroke="#1f4d3a" strokeWidth="4" />
          <circle cx="205" cy="190" r="14" fill="#f2a900" />
          <rect x="250" y="168" width="40" height="30" rx="6" fill="#fbf7ef" stroke="#1f4d3a" strokeWidth="4" />
        </Frame>
      )
    case 'events':
      return (
        <Frame bg="#ead9f1" label="Festive banquet table with string lights">
          <path d="M0 40q100 50 200 0t200 0" stroke="#12301f" strokeWidth="3" fill="none" />
          {[30, 90, 150, 210, 270, 330].map((x, i) => (
            <circle key={x} cx={x + 8} cy={i % 2 ? 60 : 56} r="9" fill={i % 2 ? '#f2a900' : '#d1573a'} />
          ))}
          <rect x="30" y="170" width="340" height="16" rx="8" fill="#1f4d3a" />
          <rect x="60" y="186" width="10" height="50" fill="#12301f" />
          <rect x="330" y="186" width="10" height="50" fill="#12301f" />
          {[90, 160, 230, 300].map((x, i) => (
            <g key={x}>
              <ellipse cx={x} cy="160" rx="28" ry="10" fill="#fbf7ef" />
              <path d={`M${x - 20} 160a20 20 0 0 1 40 0z`} fill={['#f2a900', '#d1573a', '#2f7a57', '#8a4fa0'][i]} />
            </g>
          ))}
        </Frame>
      )
  }
}

/** Abstract tile used by the gallery. */
export function GalleryTile({ variant }: { variant: number }) {
  const palettes = [
    ['#1f4d3a', '#f2a900', '#fbf7ef'],
    ['#d1573a', '#fbf7ef', '#f2a900'],
    ['#2f7a57', '#f8cf62', '#12301f'],
    ['#f2a900', '#1f4d3a', '#fbf7ef'],
    ['#3a7ca5', '#fbf7ef', '#f8cf62'],
    ['#8a4fa0', '#f8cf62', '#fbf7ef'],
  ]
  const [bg, a, b] = palettes[variant % palettes.length]
  return (
    <svg viewBox="0 0 300 300" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <rect width="300" height="300" fill={bg} />
      <circle cx="150" cy="150" r="96" fill={a} />
      <circle cx="150" cy="150" r="70" fill={bg} opacity="0.35" />
      <circle cx="150" cy="150" r="52" fill={b} />
      {variant % 3 === 0 && (
        <g fill={bg}>
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx={150 + Math.cos((i * Math.PI) / 4) * 34} cy={150 + Math.sin((i * Math.PI) / 4) * 34} r="6" />
          ))}
        </g>
      )}
      {variant % 3 === 1 && <path d="M110 150h80M150 110v80" stroke={bg} strokeWidth="10" strokeLinecap="round" />}
      {variant % 3 === 2 && <path d="M115 175c10-40 60-40 70 0" stroke={bg} strokeWidth="10" strokeLinecap="round" fill="none" />}
      <circle cx="40" cy="40" r="14" fill={b} opacity="0.7" />
      <circle cx="262" cy="258" r="18" fill={a} opacity="0.7" />
    </svg>
  )
}

export function SafetyIcon({ index }: { index: number }) {
  const common = { stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, fill: 'none' }
  const icons = [
    <path key="0" {...common} d="M7 21v-2a5 5 0 0 1 10 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />,
    <path key="1" {...common} d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5-4.9-2.6-4.9 2.6.9-5.5-4-3.9 5.5-.8z" />,
    <path key="2" {...common} d="M14 14.8V4a2 2 0 0 0-4 0v10.8a4 4 0 1 0 4 0z" />,
    <path key="3" {...common} d="M12 3l8 3v6c0 5-3.4 8-8 9-4.6-1-8-4-8-9V6z" />,
    <path key="4" {...common} d="M4 8l8-4 8 4v10l-8 4-8-4zM4 8l8 4 8-4M12 12v10" />,
    <path key="5" {...common} d="M12 8v5M12 17h.01M10.3 3.9L2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z" />,
  ]
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      {icons[index % icons.length]}
    </svg>
  )
}
