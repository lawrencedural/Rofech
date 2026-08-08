const LogoMark = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="4.5"
    strokeLinejoin="round"
  >
    <path d="M50 12 L86 50 L64 50" />
    <path d="M50 12 L14 50 L36 50" />
    <path d="M50 12 L50 76" />
    <path d="M36 76 L50 58 L64 76 Z" />
  </svg>
);

export default LogoMark;
