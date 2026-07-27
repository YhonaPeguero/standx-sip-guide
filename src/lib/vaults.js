// Arithmetic for the SIP-5B section. Every function here operates only on values the user
// typed in — SIP-5B publishes no bps bands, no liquidation fee formula and no capacity
// figures, so nothing is derived from a protocol parameter.

// Reward tier shares are summed in tenths of a percent as integers: the documented rule is
// that tiers must sum to *exactly* 100%, and float addition cannot state that exactly
// (12.5 + 87.5 is safe, 10.1 + 89.9 is not).
export const TIER_PRECISION = 10;

export function toTenths(value) {
  const parsed = typeof value === 'number' ? value : Number.parseFloat(value);

  if (!Number.isFinite(parsed) || parsed < 0) {
    return 0;
  }

  return Math.round(parsed * TIER_PRECISION);
}

export function fromTenths(tenths) {
  return tenths / TIER_PRECISION;
}

export function sumTierTenths(tiers) {
  return tiers.reduce((total, tier) => total + toTenths(tier.share), 0);
}

// Exactly 100% and nothing else — the one hard rule SIP-5B states for tier configuration.
export function isTierSetValid(tiers) {
  return sumTierTenths(tiers) === 100 * TIER_PRECISION;
}

export function tierSharePercent(tier, totalTenths) {
  if (totalTenths <= 0) {
    return 0;
  }

  return (toTenths(tier.share) / totalTenths) * 100;
}

// A liquidation the order book cannot absorb goes to the Shield Vault, which can take it on
// up to the capacity reserved for that pair; whatever exceeds that reserve is what reaches
// ADL. Both numbers come from the user.
export function splitLiquidation({ positionSize, reservedCapacity }) {
  const size = Number.isFinite(positionSize) && positionSize > 0 ? positionSize : 0;
  const capacity = Number.isFinite(reservedCapacity) && reservedCapacity > 0 ? reservedCapacity : 0;

  const absorbedByShield = Math.min(size, capacity);
  const reachesAdl = Math.max(0, size - capacity);

  return {
    absorbedByShield,
    reachesAdl,
    remainingCapacity: Math.max(0, capacity - absorbedByShield),
    capacityExhausted: size >= capacity && capacity > 0,
  };
}
