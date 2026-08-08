interface BrandSealProps {
  className?: string;
  variant?: 'ink' | 'limewash';
}

// A circular practice mark in the spirit of an architect's personal
// seal — used as a signature element, not a claim of certification.
const BrandSeal = ({ className = '', variant = 'ink' }: BrandSealProps) => {
  const stroke = variant === 'ink' ? '#000000' : '#FFFFFF';

  return (
    <svg viewBox="0 0 160 160" className={className} fill="none">
      <circle cx="80" cy="80" r="76" stroke={stroke} strokeWidth="1" />
      <circle cx="80" cy="80" r="66" stroke={stroke} strokeWidth="1" />
      <path
        id="sealTextPathTop"
        d="M 80,14 A 66,66 0 0 1 146,80"
        fill="none"
      />
      <text fontSize="9.5" letterSpacing="2.5" fill={stroke} fontFamily="'IBM Plex Mono', monospace">
        <textPath href="#sealTextPathTop" startOffset="2">
          ROFECH DESIGN &amp; DEVELOPMENT
        </textPath>
      </text>
      <path
        id="sealTextPathBottom"
        d="M 146,80 A 66,66 0 0 1 80,146"
        fill="none"
      />
      <path
        id="sealTextPathBottom2"
        d="M 14,80 A 66,66 0 0 1 80,14"
        fill="none"
      />
      <text fontSize="9.5" letterSpacing="2.5" fill={stroke} fontFamily="'IBM Plex Mono', monospace">
        <textPath href="#sealTextPathBottom2" startOffset="2">
          EST. 2009 · METRO MANILA, PH
        </textPath>
      </text>
      <line x1="46" y1="80" x2="114" y2="80" stroke={stroke} strokeWidth="0.75" />
      <text
        x="80"
        y="72"
        textAnchor="middle"
        fontSize="20"
        fill={stroke}
        fontFamily="Fraunces, serif"
        fontStyle="italic"
      >
        R
      </text>
      <text
        x="80"
        y="98"
        textAnchor="middle"
        fontSize="8"
        letterSpacing="2"
        fill={stroke}
        fontFamily="'IBM Plex Mono', monospace"
      >
        ARCHITECTURE
      </text>
    </svg>
  );
};

export default BrandSeal;
