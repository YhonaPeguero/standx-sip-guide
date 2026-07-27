// Arithmetic for the SIP-5B section. Every function here operates only on values the user
// typed in — SIP-5B publishes no liquidation fee formula and no capacity figures, so nothing
// is derived from a protocol parameter.

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
