// MSME Emblem styled component
const MSMELogo = ({ scale = 1 }: { scale?: number }) => {
  const w = Math.round(120 * scale);
  const h = Math.round(100 * scale);
  return (
    <svg width={w} height={h} viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ashoka Pillar silhouette */}
      <g transform="translate(60,0)">
        {/* Crown / Lion capital */}
        <ellipse cx="0" cy="14" rx="14" ry="5" fill="#c8a84b" />
        <rect x="-3" y="14" width="6" height="18" fill="#c8a84b" />
        <rect x="-7" y="30" width="14" height="4" rx="1" fill="#c8a84b" />
        {/* Abacus */}
        <rect x="-10" y="34" width="20" height="3" rx="1" fill="#a8842a" />
        {/* Dharma Chakra rings */}
        <circle cx="0" cy="44" r="10" stroke="#c8a84b" strokeWidth="2" fill="none" />
        <circle cx="0" cy="44" r="6" stroke="#c8a84b" strokeWidth="1" fill="none" />
        {/* Spokes */}
        {[0,45,90,135,180,225,270,315].map((angle, i) => (
          <line
            key={i}
            x1={Math.cos((angle * Math.PI) / 180) * 3}
            y1={44 + Math.sin((angle * Math.PI) / 180) * 3}
            x2={Math.cos((angle * Math.PI) / 180) * 9}
            y2={44 + Math.sin((angle * Math.PI) / 180) * 9}
            stroke="#c8a84b"
            strokeWidth="1"
          />
        ))}
        {/* Pillar shaft */}
        <rect x="-3.5" y="54" width="7" height="10" fill="#c8a84b" />
        {/* Base */}
        <rect x="-12" y="62" width="24" height="4" rx="1" fill="#a8842a" />
      </g>

      {/* MSME text */}
      <text x="60" y="82" textAnchor="middle" fontFamily="Arial Black, sans-serif" fontSize="14" fontWeight="900" fill="#1a1a1a" letterSpacing="3">MSME</text>
      <line x1="10" y1="86" x2="110" y2="86" stroke="#1a1a1a" strokeWidth="1" />
      <text x="60" y="94" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5.5" fontWeight="700" fill="#1a1a1a" letterSpacing="0.5">MICRO, SMALL &amp; MEDIUM ENTERPRISES</text>
    </svg>
  );
};

export default MSMELogo;
