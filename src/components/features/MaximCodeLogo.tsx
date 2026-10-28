// MAXIM CODE SVG Logo Component
const MaximCodeLogo = ({ size = 48 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="80" height="80" rx="12" fill="#0f2d5e" />
    <text x="8" y="48" fontFamily="Georgia, serif" fontSize="28" fontWeight="700" fill="#c8a84b" letterSpacing="1">MC</text>
    <rect x="8" y="52" width="64" height="2" fill="#c8a84b" opacity="0.7" />
    <text x="8" y="65" fontFamily="Arial, sans-serif" fontSize="7" fontWeight="600" fill="#ffffff" letterSpacing="1.5">MAXIM CODE</text>
  </svg>
);

export default MaximCodeLogo;
