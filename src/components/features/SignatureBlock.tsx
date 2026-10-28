// Founder Signature Block
const SignatureBlock = ({ compact = false }: { compact?: boolean }) => (
  <div className={compact ? "text-left" : "text-left"}>
    {/* Signature SVG */}
    <svg width={compact ? 120 : 150} height={compact ? 40 : 50} viewBox="0 0 150 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 38 C20 10, 35 5, 45 20 C52 30, 48 35, 55 28 C65 18, 72 12, 80 22 C88 32, 85 40, 92 30 C100 18, 110 15, 120 25 C128 33, 125 42, 135 35"
        stroke="#1a3a6b"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M18 42 C30 44, 45 44, 60 42"
        stroke="#1a3a6b"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
    <div className={`border-t border-gray-400 ${compact ? "w-32 mt-0" : "w-40 mt-0"}`} />
    <p className={`font-bold text-gray-900 ${compact ? "text-xs mt-1" : "text-sm mt-1"}`}>B. Guhan</p>
    <p className={`text-gray-600 ${compact ? "text-[10px]" : "text-xs"}`}>CEO &amp; Founder</p>
    <p className={`text-gray-600 ${compact ? "text-[10px]" : "text-xs"}`}>Maxim Code</p>
  </div>
);

export default SignatureBlock;
