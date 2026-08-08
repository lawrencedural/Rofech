interface Credential {
  label: string;
  detail: string;
}

const credentials: Credential[] = [
  { label: 'PRC-Registered Architects', detail: 'Licensed under RA 9266' },
  { label: 'UAP Member Firm', detail: 'United Architects of the Philippines' },
  { label: 'DTI-Registered Practice', detail: 'Las Piñas, Philippines' },
  { label: 'Full Permitting Service', detail: 'Design through occupancy' },
];

const CredentialsBar = () => {
  return (
    <div className="bg-rofech-paper border-b border-rofech-ink/10">
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {credentials.map((c, i) => (
            <div
              key={c.label}
              className={`py-5 md:py-6 px-4 md:px-6 border-rofech-ink/10 ${
                i % 2 === 0 ? 'border-r' : ''
              } md:border-r md:last:border-r-0 border-b md:border-b-0 [&:nth-last-child(-n+2)]:border-b-0`}
            >
              <p className="font-mono text-[11px] uppercase tracking-widest2 text-rofech-ink leading-snug">
                {c.label}
              </p>
              <p className="text-[11px] text-rofech-concrete mt-1">{c.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CredentialsBar;
