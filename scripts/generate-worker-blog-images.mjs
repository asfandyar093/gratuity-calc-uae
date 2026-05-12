import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const WIDTH = 1200
const HEIGHT = 630

const out = (name) => path.join('public', 'images', 'blog', name)
const real = (name) => path.join('public', 'images', 'blog', 'real', name)

const esc = (value) =>
  String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')

const person = ({ x, y, coat = '#0f766e', skin = '#b8794f', accent = '#134e4a', scale = 1, hair = '#1f2937' }) => `
  <g transform="translate(${x} ${y}) scale(${scale})">
    <circle cx="0" cy="-82" r="30" fill="${skin}"/>
    <path d="M-28-88c8-28 47-31 58-7 0 0-15-10-32-4-15 5-26 11-26 11z" fill="${hair}"/>
    <path d="M-44-32c6-33 20-50 44-50s38 17 44 50l15 92h-118z" fill="${coat}"/>
    <path d="M-19-72l19 25 19-25" fill="none" stroke="#fff" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
    <rect x="-55" y="-12" width="28" height="104" rx="14" fill="${skin}"/>
    <rect x="27" y="-12" width="28" height="104" rx="14" fill="${skin}"/>
    <path d="M-31 60h62" stroke="${accent}" stroke-width="10" stroke-linecap="round"/>
  </g>`

const documentStack = (x, y, color = '#2563eb') => `
  <g transform="translate(${x} ${y})">
    <rect x="0" y="0" width="180" height="126" rx="10" fill="#fff" stroke="#dbe4ee" stroke-width="4"/>
    <rect x="18" y="22" width="70" height="10" rx="5" fill="${color}"/>
    <rect x="18" y="48" width="140" height="8" rx="4" fill="#cbd5e1"/>
    <rect x="18" y="72" width="116" height="8" rx="4" fill="#cbd5e1"/>
    <rect x="18" y="96" width="132" height="8" rx="4" fill="#cbd5e1"/>
  </g>`

const calculator = (x, y) => `
  <g transform="translate(${x} ${y})">
    <rect width="108" height="142" rx="16" fill="#111827"/>
    <rect x="14" y="15" width="80" height="28" rx="6" fill="#d1fae5"/>
    ${[0, 1, 2, 3].map((row) => [0, 1, 2].map((col) =>
      `<rect x="${16 + col * 27}" y="${58 + row * 19}" width="18" height="13" rx="4" fill="${row === 3 && col === 2 ? '#ef4444' : '#e5e7eb'}"/>`).join('')).join('')}
  </g>`

const scene = ({ title, subtitle, palette, skyline = false, body }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <defs>
    <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
      <stop offset="0" stop-color="${palette.bg1}"/>
      <stop offset="1" stop-color="${palette.bg2}"/>
    </linearGradient>
    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#0f172a" flood-opacity=".16"/>
    </filter>
  </defs>
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>
  ${skyline ? `
    <g opacity=".2" fill="${palette.dark}">
      <rect x="55" y="108" width="42" height="178" rx="8"/><rect x="118" y="62" width="62" height="224" rx="10"/>
      <rect x="206" y="132" width="46" height="154" rx="8"/><rect x="914" y="88" width="52" height="198" rx="8"/>
      <rect x="990" y="124" width="74" height="162" rx="10"/><rect x="1084" y="68" width="44" height="218" rx="8"/>
    </g>` : ''}
  <rect x="0" y="470" width="${WIDTH}" height="160" fill="${palette.ground}"/>
  <g filter="url(#shadow)">${body}</g>
  <g>
    <rect x="64" y="50" width="430" height="120" rx="24" fill="#ffffff" opacity=".9"/>
    <text x="96" y="104" font-family="Arial, sans-serif" font-size="34" font-weight="800" fill="${palette.dark}">${esc(title)}</text>
    <text x="96" y="142" font-family="Arial, sans-serif" font-size="21" font-weight="700" fill="${palette.mid}">${esc(subtitle)}</text>
  </g>
</svg>`

const images = [
  {
    file: real('uae-healthcare-workers-gratuity.png'),
    svg: scene({
      title: 'Healthcare gratuity',
      subtitle: 'Nurses, doctors and clinic staff',
      palette: { bg1: '#e0f2fe', bg2: '#ccfbf1', ground: '#d9f99d', dark: '#115e59', mid: '#0f766e' },
      body: `
        <rect x="642" y="256" width="330" height="138" rx="26" fill="#fff" stroke="#bae6fd" stroke-width="8"/>
        <rect x="686" y="226" width="112" height="50" rx="18" fill="#38bdf8"/>
        <rect x="850" y="284" width="84" height="52" rx="12" fill="#e0f2fe"/>
        <path d="M682 394h300M712 394l-38 74M930 394l38 74" stroke="#64748b" stroke-width="12" stroke-linecap="round"/>
        <rect x="262" y="262" width="112" height="160" rx="20" fill="#fff" stroke="#94a3b8" stroke-width="8"/>
        <path d="M292 332h52M318 306v52" stroke="#ef4444" stroke-width="14" stroke-linecap="round"/>
        ${person({ x: 460, y: 428, coat: '#ffffff', accent: '#0f766e', scale: 1.18 })}
        ${person({ x: 610, y: 438, coat: '#14b8a6', accent: '#0f766e', scale: .98, skin: '#8d5524' })}
        ${documentStack(820, 430, '#0f766e')}
      `,
    }),
  },
  {
    file: real('uae-teachers-gratuity-calculator.png'),
    svg: scene({
      title: 'Teacher gratuity',
      subtitle: 'Classrooms and school contracts',
      palette: { bg1: '#fef3c7', bg2: '#dbeafe', ground: '#fde68a', dark: '#92400e', mid: '#2563eb' },
      body: `
        <rect x="560" y="150" width="470" height="250" rx="22" fill="#064e3b"/>
        <text x="604" y="218" font-family="Arial" font-size="36" font-weight="800" fill="#ecfccb">Basic salary</text>
        <path d="M604 258h340M604 304h260M604 350h300" stroke="#a7f3d0" stroke-width="12" stroke-linecap="round"/>
        ${person({ x: 460, y: 438, coat: '#2563eb', accent: '#1d4ed8', scale: 1.1 })}
        ${person({ x: 742, y: 512, coat: '#f97316', accent: '#9a3412', scale: .72, skin: '#8d5524' })}
        ${person({ x: 886, y: 512, coat: '#22c55e', accent: '#15803d', scale: .72 })}
        <rect x="670" y="448" width="110" height="58" rx="12" fill="#fff7ed"/>
        <rect x="816" y="448" width="110" height="58" rx="12" fill="#fff7ed"/>
        ${documentStack(190, 420, '#f97316')}
      `,
    }),
  },
  {
    file: real('uae-hospitality-workers-gratuity.png'),
    svg: scene({
      title: 'Hospitality gratuity',
      subtitle: 'Hotels, restaurants and F&B teams',
      palette: { bg1: '#fff7ed', bg2: '#fee2e2', ground: '#fed7aa', dark: '#7c2d12', mid: '#b45309' },
      body: `
        <rect x="628" y="210" width="360" height="210" rx="32" fill="#fff" stroke="#fdba74" stroke-width="8"/>
        <rect x="672" y="252" width="120" height="120" rx="60" fill="#fef3c7"/>
        <path d="M708 310h48M732 286v48" stroke="#f97316" stroke-width="10" stroke-linecap="round"/>
        <rect x="820" y="268" width="116" height="28" rx="14" fill="#f97316"/>
        <rect x="820" y="318" width="116" height="20" rx="10" fill="#fdba74"/>
        ${person({ x: 442, y: 440, coat: '#7c2d12', accent: '#431407', scale: 1.05 })}
        <ellipse cx="546" cy="340" rx="78" ry="18" fill="#78350f"/>
        <rect x="492" y="316" width="44" height="26" rx="8" fill="#fff"/>
        <circle cx="582" cy="320" r="24" fill="#facc15"/>
        ${person({ x: 276, y: 452, coat: '#f8fafc', accent: '#9a3412', scale: .82, skin: '#8d5524' })}
        ${documentStack(785, 428, '#b45309')}
      `,
    }),
  },
  {
    file: real('uae-gratuity-part-time-workers.png'),
    svg: scene({
      title: 'Part-time workers',
      subtitle: 'Retail, cafe and delivery shifts',
      palette: { bg1: '#ecfeff', bg2: '#fef9c3', ground: '#a7f3d0', dark: '#155e75', mid: '#0e7490' },
      body: `
        <rect x="642" y="244" width="300" height="160" rx="28" fill="#fff" stroke="#67e8f9" stroke-width="8"/>
        <rect x="692" y="292" width="88" height="74" rx="14" fill="#cffafe"/>
        <rect x="804" y="282" width="84" height="84" rx="42" fill="#fde68a"/>
        ${person({ x: 330, y: 446, coat: '#0891b2', accent: '#155e75', scale: .96 })}
        ${person({ x: 490, y: 446, coat: '#f59e0b', accent: '#92400e', scale: .92, skin: '#8d5524' })}
        <circle cx="1032" cy="448" r="46" fill="#111827"/>
        <circle cx="1032" cy="448" r="24" fill="#e5e7eb"/>
        <path d="M936 372h84l44 76M936 372l-42 76M936 372l36-58" stroke="#0f172a" stroke-width="14" stroke-linecap="round"/>
        <rect x="880" y="304" width="74" height="52" rx="12" fill="#ef4444"/>
        ${documentStack(132, 430, '#0e7490')}
      `,
    }),
  },
  {
    file: out('gratuity-for-domestic-workers-uae.png'),
    svg: scene({
      title: 'Domestic workers',
      subtitle: 'Home staff, nannies and drivers',
      palette: { bg1: '#fdf2f8', bg2: '#dcfce7', ground: '#bbf7d0', dark: '#166534', mid: '#be185d' },
      body: `
        <rect x="650" y="188" width="310" height="244" rx="28" fill="#fff" stroke="#86efac" stroke-width="8"/>
        <rect x="704" y="244" width="86" height="128" rx="14" fill="#dbeafe"/>
        <rect x="822" y="244" width="86" height="128" rx="14" fill="#fce7f3"/>
        <path d="M702 404h220" stroke="#16a34a" stroke-width="14" stroke-linecap="round"/>
        ${person({ x: 438, y: 448, coat: '#be185d', accent: '#831843', scale: 1.0 })}
        <path d="M502 396c58 26 86 26 132 0" stroke="#94a3b8" stroke-width="12" stroke-linecap="round"/>
        <path d="M632 392l30 80" stroke="#94a3b8" stroke-width="12" stroke-linecap="round"/>
        ${person({ x: 284, y: 478, coat: '#facc15', accent: '#a16207', scale: .66, skin: '#8d5524' })}
        ${documentStack(780, 442, '#be185d')}
      `,
    }),
  },
  {
    file: real('uae-repatriation-ticket-final-settlement.png'),
    svg: scene({
      title: 'Repatriation ticket',
      subtitle: 'Airport travel and final dues',
      palette: { bg1: '#e0f2fe', bg2: '#f8fafc', ground: '#cbd5e1', dark: '#1e3a8a', mid: '#2563eb' },
      body: `
        <path d="M694 214l336 70c35 7 40 54 6 68l-146 60-108 126-56-26 52-112-162-28-74 58-44-20 82-108 2-98z" fill="#fff" stroke="#60a5fa" stroke-width="10"/>
        <rect x="676" y="410" width="120" height="140" rx="18" fill="#1d4ed8"/>
        <path d="M706 410v-30h60v30" stroke="#1e3a8a" stroke-width="12" fill="none"/>
        ${person({ x: 430, y: 454, coat: '#2563eb', accent: '#1e40af', scale: 1.0, skin: '#8d5524' })}
        ${person({ x: 555, y: 466, coat: '#0f766e', accent: '#134e4a', scale: .84 })}
        ${documentStack(170, 430, '#2563eb')}
      `,
    }),
  },
  {
    file: out('free-zone-gratuity-calculator-uae.png'),
    svg: scene({
      title: 'Free zone gratuity',
      subtitle: 'Ports, warehouses and business hubs',
      palette: { bg1: '#eff6ff', bg2: '#fef3c7', ground: '#dbeafe', dark: '#1d4ed8', mid: '#0369a1' },
      skyline: true,
      body: `
        <rect x="640" y="276" width="430" height="146" rx="18" fill="#fff" stroke="#93c5fd" stroke-width="8"/>
        <rect x="680" y="316" width="108" height="78" fill="#ef4444"/><rect x="806" y="316" width="108" height="78" fill="#2563eb"/><rect x="932" y="316" width="94" height="78" fill="#f59e0b"/>
        <path d="M226 410h246l54 54H330z" fill="#facc15"/>
        <circle cx="300" cy="478" r="34" fill="#111827"/><circle cx="496" cy="478" r="34" fill="#111827"/>
        <rect x="312" y="348" width="104" height="62" rx="8" fill="#fbbf24"/>
        ${person({ x: 570, y: 450, coat: '#f97316', accent: '#9a3412', scale: .9, skin: '#8d5524' })}
        ${documentStack(770, 440, '#1d4ed8')}
      `,
    }),
  },
  {
    file: out('jafza-gratuity-calculator-guide.png'),
    svg: scene({
      title: 'JAFZA gratuity',
      subtitle: 'Jebel Ali logistics workers',
      palette: { bg1: '#f0fdfa', bg2: '#e0f2fe', ground: '#99f6e4', dark: '#134e4a', mid: '#0f766e' },
      body: `
        <rect x="650" y="202" width="370" height="226" rx="18" fill="#ecfeff" stroke="#2dd4bf" stroke-width="8"/>
        <text x="706" y="274" font-family="Arial" font-size="48" font-weight="900" fill="#0f766e">JAFZA</text>
        <rect x="706" y="316" width="250" height="80" fill="#14b8a6"/>
        <rect x="210" y="340" width="300" height="94" rx="16" fill="#fff" stroke="#5eead4" stroke-width="8"/>
        <rect x="240" y="378" width="76" height="56" fill="#ef4444"/><rect x="326" y="378" width="76" height="56" fill="#f59e0b"/><rect x="412" y="378" width="68" height="56" fill="#2563eb"/>
        ${person({ x: 560, y: 466, coat: '#f97316', accent: '#9a3412', scale: .86 })}
        ${calculator(838, 432)}
      `,
    }),
  },
  {
    file: out('sharjah-airport-free-zone-gratuity.png'),
    svg: scene({
      title: 'SAIF Zone gratuity',
      subtitle: 'Airport cargo and export teams',
      palette: { bg1: '#eef2ff', bg2: '#cffafe', ground: '#bfdbfe', dark: '#312e81', mid: '#0891b2' },
      body: `
        <path d="M626 244h276l188 92-32 44-166-34-78 106-54-18 32-98h-166z" fill="#fff" stroke="#818cf8" stroke-width="10"/>
        <rect x="246" y="356" width="284" height="92" rx="16" fill="#f59e0b"/>
        <rect x="274" y="388" width="70" height="60" fill="#fef3c7"/><rect x="358" y="388" width="70" height="60" fill="#fef3c7"/>
        ${person({ x: 558, y: 462, coat: '#0891b2', accent: '#155e75', scale: .92, skin: '#8d5524' })}
        ${person({ x: 688, y: 470, coat: '#4f46e5', accent: '#312e81', scale: .78 })}
        ${documentStack(820, 438, '#4f46e5')}
      `,
    }),
  },
  {
    file: out('how-to-dispute-gratuity-uae.png'),
    svg: scene({
      title: 'Dispute a gratuity',
      subtitle: 'Worker, HR and settlement review',
      palette: { bg1: '#fff1f2', bg2: '#f8fafc', ground: '#fecdd3', dark: '#9f1239', mid: '#be123c' },
      body: `
        <rect x="536" y="294" width="420" height="128" rx="24" fill="#fff" stroke="#fda4af" stroke-width="8"/>
        ${person({ x: 406, y: 456, coat: '#be123c', accent: '#881337', scale: .94 })}
        ${person({ x: 754, y: 456, coat: '#334155', accent: '#0f172a', scale: .94, skin: '#8d5524' })}
        <rect x="570" y="326" width="138" height="74" rx="12" fill="#fff7ed" stroke="#fed7aa" stroke-width="6"/>
        <path d="M590 352h80M590 376h56" stroke="#fb7185" stroke-width="10" stroke-linecap="round"/>
        ${calculator(862, 330)}
        ${documentStack(176, 430, '#be123c')}
      `,
    }),
  },
  {
    file: real('how-to-file-mohre-complaint.png'),
    svg: scene({
      title: 'MOHRE complaint',
      subtitle: 'Service counter and case evidence',
      palette: { bg1: '#f8fafc', bg2: '#dcfce7', ground: '#bbf7d0', dark: '#14532d', mid: '#16a34a' },
      body: `
        <rect x="620" y="210" width="360" height="210" rx="28" fill="#fff" stroke="#86efac" stroke-width="8"/>
        <text x="684" y="284" font-family="Arial" font-size="42" font-weight="900" fill="#16a34a">MOHRE</text>
        <rect x="666" y="326" width="260" height="56" rx="12" fill="#dcfce7"/>
        ${person({ x: 430, y: 456, coat: '#16a34a', accent: '#166534', scale: .96, skin: '#8d5524' })}
        ${person({ x: 796, y: 456, coat: '#0f766e', accent: '#134e4a', scale: .86 })}
        ${documentStack(188, 430, '#16a34a')}
        ${calculator(980, 420)}
      `,
    }),
  },
]

await mkdir(path.join('public', 'images', 'blog', 'real'), { recursive: true })

for (const image of images) {
  await sharp(Buffer.from(image.svg)).resize(WIDTH, HEIGHT).png({ compressionLevel: 9 }).toFile(image.file)
  console.log(`Generated ${image.file}`)
}
