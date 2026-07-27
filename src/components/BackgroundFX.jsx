// The StandX rule grid, matching the treatment on standx-stats.vercel.app: a fine white
// grid, a coarse green grid at 5× its pitch, and a green dot on the coarse intersections.
// Anchored at 52px rather than the reference's 42px.
//
// Flat base, no washes, no vignette, no radial mask — the ground is one value everywhere,
// so no region reads as deeper than another. background-attachment: fixed keeps the grid
// still under the scroll, which is what stops it reading as texture stuck to the content.
const FINE = 52;
const COARSE = FINE * 5;

const GRID_STYLE = {
  backgroundColor: 'var(--sx-bg)',
  backgroundImage: [
    // Dot on each coarse intersection
    'radial-gradient(circle, rgba(0, 255, 135, 0.16) 1px, transparent 1.8px)',
    // Coarse green grid
    'linear-gradient(rgba(0, 255, 135, 0.05) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(0, 255, 135, 0.05) 1px, transparent 1px)',
    // Fine white grid
    'linear-gradient(rgba(255, 255, 255, 0.032) 1px, transparent 1px)',
    'linear-gradient(90deg, rgba(255, 255, 255, 0.032) 1px, transparent 1px)',
  ].join(','),
  backgroundSize: [
    `${COARSE}px ${COARSE}px`,
    `${COARSE}px ${COARSE}px`,
    `${COARSE}px ${COARSE}px`,
    `${FINE}px ${FINE}px`,
    `${FINE}px ${FINE}px`,
  ].join(','),
  // The dot layer is offset by half a cell so it lands on the coarse crossings.
  backgroundPosition: [
    `calc(50% + ${COARSE / 2}px) ${-COARSE / 2}px`,
    'center top',
    'center top',
    'center top',
    'center top',
  ].join(','),
  backgroundAttachment: 'fixed',
};

export default function BackgroundFX() {
  return <div className="pointer-events-none fixed inset-0" aria-hidden="true" style={GRID_STYLE} />;
}
