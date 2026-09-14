// Small reusable SVG symbol used next to the "conecta" wordmark.
// Kept as its own component so Header and Footer share exactly the same mark.
function LogoMark({ size = 22, color = 'currentColor' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <g stroke={color} strokeWidth="2" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="4.8" y1="4.8" x2="19.2" y2="19.2" />
        <line x1="19.2" y1="4.8" x2="4.8" y2="19.2" />
      </g>
    </svg>
  )
}

export default LogoMark
