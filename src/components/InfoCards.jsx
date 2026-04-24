const CARDS = [
  {
    id: 'capital',
    label: 'Locked Capital',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M4 9.5L12 5L20 9.5M6.5 10.75V19M12 10.75V19M17.5 10.75V19M4 19H20"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    id: 'pools',
    label: 'Assets Distributed',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden="true">
        <path
          d="M12 4L18.5 7.75V15.25L12 19L5.5 15.25V7.75L12 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path d="M12 8V12.5M9.75 10.5H14.25" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    ),
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" aria-hidden="true">
      <path
        d="M4 12L12 4M6.5 4H12V9.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function InfoCards({ lockedCapitalLabel, poolLabel }) {
  const values = {
    capital: lockedCapitalLabel,
    pools: poolLabel,
  };

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {CARDS.map((card) => (
        <article
          key={card.id}
          className="flex items-center justify-between rounded-[6px] border border-[var(--sx-border)] bg-[var(--sx-surface-2)] px-5 py-4"
        >
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-[4px] bg-[color:var(--sx-primary-soft)] text-[var(--sx-primary-bright)]">
              {card.icon}
            </div>

            <div>
              <p className="mono text-[10px] uppercase tracking-[0.16em] text-[var(--sx-muted)]">
                {card.label}
              </p>
              <p className="mono mt-1 text-[33px] font-semibold tracking-[-0.02em] text-[var(--sx-text)] sm:text-[29px]">
                {values[card.id]}
              </p>
            </div>
          </div>

          <div className="text-[var(--sx-muted)]">
            <ArrowIcon />
          </div>
        </article>
      ))}
    </div>
  );
}
