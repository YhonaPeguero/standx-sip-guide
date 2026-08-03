const en = {
  topBar: {
    nav: {
      overview: 'Overview',
      simulator: 'Simulator',
      playbook: 'Yield Playbook',
      playbookShort: 'Playbook',
      vaults: 'Vaults',
      ariaLabel: 'Primary sections',
    },
    community: 'Community',
    language: {
      button: 'Language',
      buttonAria: 'Open language menu',
      menuAria: 'Language options',
    },
  },
  guide: {
    button: 'Guide Mode',
    prompt: 'New to StandX SIPs? Take the 60-second guide.',
    start: 'Start Guide',
    stepLabel: 'Step',
    back: 'Back',
    next: 'Next',
    skip: 'Skip',
    finish: 'Finish',
    narrated: 'Narrated guide',
    pause: 'Pause',
    resume: 'Resume',
    mute: 'Mute',
    voiceUnavailable:
      'Voice not available for this language on your browser. Text guide is still available.',
    steps: {
      dusd: {
        title: 'DUSD',
        text:
          'DUSD earns automatically while you hold it. This is always on — no staking, no toggle.',
      },
      sip2: {
        title: 'SIP #2 Position Yield',
        text:
          'This is the optional layer you control. Toggling SIP #2 adds yield on eligible open positions on top of the baseline.',
      },
      sip3: {
        title: 'SIP #3 DUSD Yield Expansion',
        text:
          'Like DUSD base yield, SIP #3 is always active — StandX trading activity routes into DUSD yield in the background.',
      },
      capital: {
        title: 'Capital',
        text:
          'Start here. Pick a preset or type any amount — 10k and 1.5m both work. Everything below recalculates from it.',
      },
      rates: {
        title: 'Yield rates',
        text:
          'You supply these. The first field is the whole DUSD assumption — its existing yield sources with SIP-3 already inside it — and SIP #2 is the optional layer on top. The specifications fix neither rate, so both fields start empty and carry the not fixed by SIP marker.',
      },
      output: {
        title: 'What your numbers produce',
        text:
          'The gain, the chart and the stats all read from what you entered above. With no rate typed, the gain is zero.',
      },
      vaults: {
        title: 'Community Vaults',
        text:
          'SIP-5B adds three kinds of vault — strategy, reward and shield. Each states its return source and how you get out.',
      },
      playbook: {
        title: 'Yield Playbook',
        text:
          'Short community flows for putting the SIPs to use, each one a few steps end to end.',
      },
    },
  },
  app: {
    skipToContent: 'Skip to main content',
    errors: {
      minAmount: 'Min amount: $100',
      maxAmount: 'Max amount: $1,000,000',
      minRate: 'Min rate: 0%',
      maxRate: 'Max rate: 100%',
    },
    footer: {
      disclaimer: 'Educational simulation only. Actual results may vary.',
      createdBy: 'Created by: Thisnotmeme,',
    },
  },
  hero: {
    title: {
      line1: 'Understand StandX SIPs,',
      line2: 'in real time',
    },
    subtitle:
      'An interactive, multilingual explainer. Simulate capital, visualize the yield loop, and learn how DUSD, Position Yield, and SIP #3 work together — without leaving the page.',
    primaryCta: 'Open simulator',
    secondaryCta: 'Learn the mechanics',
    features: {
      dusd: 'DUSD base yield',
      sip2: 'Position yield (SIP #2)',
      sip3: 'DUSD expansion (SIP #3)',
      multilingual: 'Five languages supported',
    },
    meta: {
      source: 'Source',
      sourceValue: 'docs.standx.com/sip',
      scope: 'Scope',
      languages: 'Languages',
      maintainer: 'Maintainer',
      maintainerValue: 'Thisnotmeme',
      builtBy: 'Built by',
      builtByValue: 'The StandX community',
    },
  },
  headline: {
    title: 'Earning in real-time',
  },
  microCopy: {
    on: 'All yield layers active — DUSD base + SIP #3 + SIP #2.',
    off: 'DUSD base + SIP #3 already earning. Turn on SIP #2 to layer position yield on top.',
  },
  statusChip: {
    on: 'SIP #2 Active',
    off: 'SIP #2 Off',
  },
  overview: {
    openSimulator: 'Open simulator',
    interactivePreview: 'Interactive Preview',
    previewActive:
      'All layers active. SIP #2 is now adding position yield on top of the baseline.',
    previewIdle:
      'Baseline yield is running from DUSD + SIP #3. Turn on SIP #2 to add position yield.',
    storyHint: 'The whole story plays out in three connected steps shown on the right.',
  },
  simulator: {
    tag: 'Yield Simulator',
    rangeHint: 'Educational projection. Enter your own rates, then adjust capital and horizon.',
    chartAriaLabel: 'Projected yield accrual over {horizon}, from the rates you entered.',
  },
  toggle: {
    ariaOn: 'Turn yield off',
    ariaOff: 'Turn yield on',
    on: 'ON',
    off: 'OFF',
    active: 'ACTIVE',
    idle: 'IDLE',
  },
  yieldLoop: {
    eyebrow: 'StandX Yield Loop',
    live: 'Loop Live',
    paused: 'Loop Paused',
    statusAlwaysActive: 'Always active',
    statusSip2On: 'SIP #2 on',
    statusSip2Off: 'SIP #2 off',
    summary:
      'DUSD base yield and SIP #3 run on their own. SIP #2 is the layer you toggle to add position yield on top.',
    nodes: {
      dusd: {
        label: 'Capital',
        title: 'DUSD',
        copy: 'Start with capital in DUSD, the base layer of the loop.',
      },
      sip2: {
        label: 'Active',
        title: 'SIP #2 Position Yield',
        copy: 'Eligible activity can keep earning while positions stay open.',
      },
      sip3: {
        label: 'Compounds',
        title: 'SIP #3 DUSD Yield Expansion',
        copy: 'Yield pathways can route value back into DUSD growth.',
      },
    },
  },
  education: {
    mechanics: {
      tag: 'Mechanics',
      eyebrow: 'Learn the Mechanics',
      title: 'A guided four-step path',
      description:
        'A simple loop you can run through in under a minute to understand how SIP works in practice.',
    },
    stepLabel: 'Step',
    flowSteps: {
      step1: {
        title: 'Choose your capital',
        copy: 'Pick a starting amount or use a quick preset.',
      },
      step2: {
        title: 'Turn SIP Switch ON',
        copy: 'Activate the loop and watch the simulator come alive.',
      },
      step3: {
        title: 'Preview earning behavior',
        copy: 'See how value can evolve across timeframes in real time.',
      },
      step4: {
        title: 'Learn which SIP powers it',
        copy: 'Understand which SIP drives each part of the experience.',
      },
    },
    sipOverview: {
      tag: 'SIP Overview',
      eyebrow: 'SIP Overview',
      title: 'The StandX SIPs',
      description:
        'Each SIP plays a focused role — from the implemented yield system (SIP #1–#4) to SIP #5, the work-in-progress framework shaping what comes next.',
    },
    sipStatus: {
      implemented: 'Implemented',
      review: 'In Review',
      wip: 'WIP',
      draft: 'Draft',
    },
    sipCards: {
      sip1: {
        title: 'Block Trades',
        copy: 'Makes larger trades easier to execute with less disruption in normal market flow.',
      },
      sip2: {
        title: 'Position Yield',
        copy: 'Lets eligible positions keep earning behavior active while users stay engaged in markets.',
      },
      sip3: {
        title: 'DUSD Native Yield Expansion',
        copy: 'Improves how capital can circulate so trading activity can reinforce DUSD yield pathways.',
      },
      sip4: {
        title: 'Block Options',
        copy: 'Option-like Take Profit & Stop Loss on top of Block Trade. Pay a small Reservation Fee for the right to exit — or enter — at a preset price any time before expiry.',
      },
      sip5: {
        title: 'Universal Markets Listing',
        copy: 'A work-in-progress framework for permissionless perp listing, now staged into sub-proposals. Expand to see what is already implemented (5A, 5B) and what is still a draft (5C).',
      },
      sip5a: {
        title: 'Community Maker Yield',
        copy: 'The first live piece of Universal Markets. It upgrades the Market Maker Uptime Program into a daily yield: makers quoting two-sided liquidity near the mark price accrue "Maker Hours" — weighted by price proximity and uptime — and split a daily DUSD/token reward pool, topped up by recycled trading fees.',
      },
      sip5b: {
        title: 'Community Vaults',
        copy: 'The capital layer of Universal Markets, in three community vault types: Strategy Vaults let depositors back a trader, Reward Vaults hold a pair’s maker budget, and Shield Vaults underwrite liquidation tail risk in front of ADL. A market cannot open until its Sponsor holds locked equity in one.',
      },
      sip5c: {
        // Placeholder title, verbatim from the official SIP index — no public document yet.
        title: 'Cooooooking',
      },
    },
    draftPlaceholderNote: 'Placeholder in the official SIP index — no public document yet.',
    readMore: 'Read more',
    openSection: 'Open section',
    showSubProposals: 'View sub-proposals',
    hideSubProposals: 'Hide sub-proposals',
    communityNote: 'Built by the community to help users understand StandX SIPs faster.',
  },
  blockOptions: {
    tag: 'SIP #4 · Now Live',
    title: 'Block Options: TP & SL as a reserved right',
    description:
      'StandX turns Take Profit and Stop Loss into Block Options. Instead of a mechanical trigger, your exit becomes a right that someone reserves for a fee — and the holder decides whether to execute before expiry.',
    intro:
      'A normal TP/SL just fires at a price. SIP-4 builds on Block Trade so exit intent becomes tradable: a counterparty pays or receives a Reservation Fee, the right is reserved until expiry, and execution stays a choice — not an automatic stop-out on the first ugly wick.',
    marginNote: 'Block Options currently work with Cross Margin positions only — not Isolated.',
    tp: {
      chip: 'Block Option TP',
      title: 'Monetize a planned exit',
      summary:
        'You were already willing to take profit at a target. Offer that exit as a tradable right and earn while you wait.',
      feeLabel: 'Reservation Fee',
      feeValue: 'You receive',
      steps: [
        'Open your position, select TP and choose “Community Hedge” Block Option mode.',
        'Set the TP price, the quantity to cover and the expiry, then confirm and sign.',
        'A counterparty pays you the Reservation Fee to reserve the right.',
        'If executed, you exit at your price; if it expires unused, you keep the fee and the position.',
      ],
    },
    sl: {
      chip: 'Block Option SL',
      title: 'Protection without losing control',
      summary:
        'A normal stop fires on the first touch — wicks included. Block SL gives you a reserved exit right you choose when to use.',
      feeLabel: 'Reservation Fee',
      feeValue: 'You pay',
      steps: [
        'Open your position, select SL and choose Block Option mode.',
        'Set the protection price, the quantity and the expiry, then confirm and sign.',
        'You pay a limited Reservation Fee and wait for the order to fill onchain.',
        'If the market keeps moving against you, press Execute before expiry — a wick that recovers won’t stop you out.',
      ],
    },
    terms: {
      items: [
        {
          term: 'Reservation Fee',
          copy: 'The payment to reserve the right. The TP seller receives it; the SL holder pays it.',
        },
        {
          term: 'Expiry',
          copy: 'Reserved rights stay exercisable until expiry. Unused, they cancel with no settlement.',
        },
        {
          term: 'Execute',
          copy: 'American-style: the holder may execute any time before expiry, at their discretion.',
        },
      ],
    },
    resourcesLabel: 'Learn more',
    links: {
      docs: 'Official docs',
      thread: 'StandX thread',
      intern: 'Deep-dive thread',
    },
  },
  vaults: {
    eyebrow: 'SIP #5B · Implemented',
    title: 'Community Vaults',
    description:
      'The capital layer of Universal Markets: three community vault types supplying the trading capital, maker budgets and insurance buffers that Universal Markets are built on.',
    intro:
      'Where SIP-5A activated the yield layer of Universal Markets, SIP-5B activates the capital layer. A vault’s type is fixed at creation, and each type carries its own economics, risk rules and exit rules.',
    meta: {
      status: 'Status',
      release: 'Release date',
    },
    metaValues: {
      status: 'Implemented',
      release: '2026-07-18',
    },
    docLink: 'Read SIP-5B',
    // Fixed markers — identical in every locale, and never attached to an invented number.
    illustrative: 'Illustrative — user-entered amounts, not StandX parameters.',
    notPublished: 'not published',
    types: {
      eyebrow: 'Three vault types',
      title: 'One standard, three products',
      description:
        'A vault’s type is set at creation, so depositors always know which product they are entering. Nature, return source and exit are the comparison the proposal draws in its Motivation.',
      columns: {
        nature: 'Nature',
        return: 'Return source',
        exit: 'Exit',
      },
      showDetail: 'What it is',
      hideDetail: 'Hide',
      strategy: {
        tag: 'Strategy',
        name: 'Community Strategy Vault',
        nature: 'Capital delegated to a trader',
        return: 'Trading PnL, DUSD yield',
        exit: 'Withdrawal processing window',
        detail:
          'Depositors fund the vault, the owner trades it on StandX Perps, and depositors hold LP tokens priced at the vault’s NAV. Owner and depositor capital sit in the same LP accounting at the same price, so gains and losses are borne proportionally; what the owner gives up is the ability to leave first.',
        params: [
          { label: 'Owner minimum share — protocol parameter at initial launch', value: '5%' },
          { label: 'Withdrawal processing window, normal conditions', value: 'max 4 days' },
        ],
      },
      reward: {
        tag: 'Reward',
        name: 'Community Reward Vault',
        nature: 'A market’s incentive budget',
        return: 'Fee share and Stand Mode recycling',
        exit: 'No free withdrawal',
        detail:
          'The maker incentive budget of a trading pair, mandatory when a Sponsor lists it. Its assets are designed to be spent — they flow to community makers daily through SIP-5A, so the vault issues no LP tokens and its balance is expected to decline. Stand Mode routes the Sponsor’s fee share back in, and community contributions carry no claim on the budget.',
      },
      shield: {
        tag: 'Shield',
        name: 'Community Shield Vault',
        nature: 'A market’s insurance capital',
        return: 'Liquidation fees, insurance premiums, position PnL',
        exit: 'Notice period',
        detail:
          'Insurance capital standing in front of ADL for the pairs it backs. Depositors hold LP tokens priced at NAV and underwrite tail risk in exchange for insurance income, with risk isolated per pair. A Shield Vault runs an insurance business, and it earns like one and loses like one.',
      },
    },
    gate: {
      eyebrow: 'Trading Gate',
      description:
        'A market moves from Bootstrapping to Live only when all four conditions hold.',
      conditions: {
        sponsorEquity:
          'The Sponsor’s locked equity in the associated Shield Vault meets required_sponsor_commitment.',
        shieldCapital:
          'The Shield Vault’s total underwriting capital meets the market’s risk requirement.',
        rewardBudget:
          'The market’s Reward Vault holds enough maker budget for its declared release schedule.',
        review: 'The oracle source, maker depth, OI cap and risk parameters pass review.',
      },
      footnote:
        'required_sponsor_commitment is set per market from its OI cap, maximum leverage, expected volatility, oracle quality and projected liquidation scale — markets do not share one fixed number.',
    },
    shield: {
      eyebrow: 'Shield Health',
      description:
        'Shield health keeps acting on the Sponsor’s income and the market’s state after launch. Step through the ladder to see what triggers each stage.',
      triggerLabel: 'Trigger',
      thresholdLabel: 'Threshold',
      footnote:
        'SIP-5B states what triggers each stage but publishes no threshold, replenishment window or coverage ratio, so none appears here. The ladder extends SIP-5’s health-conditional fee share down to the capital layer: Sponsors are paid for keeping their market solvent, not for having launched it.',
      stages: {
        escrow: {
          name: 'Fee share moves into escrow',
          trigger:
            'The Sponsor’s locked equity or the vault’s overall coverage falls below requirement, and a replenishment notice is issued.',
        },
        oiCut: {
          name: 'OI cap reduced, or demoted to Watchlist',
          trigger: 'The shortfall is not restored within the replenishment window.',
        },
        reduceOnly: {
          name: 'Market enters ReduceOnly',
          trigger: 'Coverage breaks the hard threshold, or stays impaired.',
        },
        sunset: {
          name: 'Market enters Sunset',
          trigger:
            'The shortfall cannot be repaired. The Sponsor’s shares unlock only after every position and liability settles.',
        },
      },
    },
    liquidation: {
      eyebrow: 'Liquidation flow',
      title: 'Order book, then Shield Vault, then ADL',
      description:
        'When the order book cannot absorb a liquidation at acceptable prices, the Shield Vault takes over the position at the liquidation price and receives the liquidation fee. ADL is reached only once the capacity reserved for that pair is exhausted. Enter your own amounts to walk the path.',
      inputs: {
        positionSize: 'Position size',
        reservedCapacity: 'Reserved capacity for the pair',
        liquidationFee: 'Liquidation fee',
      },
      nodes: {
        orderBook: {
          title: 'Order book',
          copy: 'The liquidation goes to the book first. What it cannot absorb at acceptable prices moves on.',
        },
        shield: {
          title: 'Shield Vault',
          copy: 'Takes over the position at the liquidation price and receives the liquidation fee, then unwinds or hedges at the owner’s discretion inside its own risk limits.',
        },
        adl: {
          title: 'ADL',
          copy: 'Reached only when the capacity reserved for this pair is exhausted. Every other pair’s protection stays intact.',
        },
      },
      results: {
        absorbed: 'Absorbed by the Shield Vault',
        fee: 'Liquidation fee to the vault',
        remaining: 'Reserved capacity left',
        adl: 'Reaches ADL',
      },
      states: {
        idle: 'Enter a position size to see where it lands.',
        covered:
          'The capacity reserved for this pair covers the position, so the Shield Vault absorbs it ahead of ADL.',
        adl: 'The position exceeds the capacity reserved for this pair, so the excess reaches ADL.',
      },
      isolationNote:
        'A Shield Vault may back several pairs, with each pair’s coverage isolated and its capital reserved exclusively: the same capital is never counted as coverage for two pairs at once. Takeover limits per event, unwind constraints and fee formulas are published with each pair’s association terms, not in SIP-5B.',
    },
  },
  playbook: {
    tag: 'Community Playbook',
    eyebrow: 'Community Yield Playbook',
    title: 'Practical paths to learn DUSD and SIP behavior quickly',
    description:
      'Short, opinionated cards built from how the community actually thinks about each flow.',
    strategyCard: 'Strategy card',
    benefitLabel: 'Benefit',
    disclaimer: 'Educational simulation only. Actual results may vary.',
    actions: {
      try: 'Try this flow',
      learn: 'Learn more',
    },
    cards: {
      holdDusd: {
        tag: 'Passive',
        title: 'Hold DUSD',
        headline: 'Earn passively without staking',
        copy: 'Keep DUSD ready while still participating in simulated yield behavior over time.',
        benefit: 'Capital stays liquid while yield stays visible.',
      },
      tradeAwareness: {
        tag: 'Active',
        title: 'Trade with awareness',
        headline: 'Eligible positions may earn through SIP #2',
        copy: 'Use SIP #2 as a lens to understand how activity and yield can work together.',
        benefit: 'Better timing decisions with less idle capital.',
      },
      understandLoop: {
        tag: 'System',
        title: 'Understand the loop',
        headline: 'SIP #3 routes activity back into DUSD yield',
        copy: 'Follow the loop view to see how different actions can feed into long-term growth.',
        benefit: 'Clearer mental model of how the system compounds.',
      },
      combineLayers: {
        tag: 'Strategy',
        title: 'Combine the layers',
        headline: 'DUSD base yield + active position yield',
        copy: 'Test different capital amounts and ranges to compare layered outcomes in one place.',
        benefit: 'Practical strategy planning with fast what-if checks.',
      },
    },
  },
  controlPanel: {
    eyebrow: 'Control Panel',
    title: 'SIP #2 Switch',
    description:
      'DUSD base yield and SIP #3 are always on. Toggle SIP #2 to layer position yield on top.',
    sip2Label: 'SIP #2 — Position Yield',
    sip2Hint:
      'SIP-3 is included in the DUSD rate. SIP-2 is an optional layer for eligible open positions.',
    breakdown: {
      base: 'DUSD · Base + SIP-3',
      sip2: 'SIP #2',
      applied: 'Applied estimate',
    },
    learnHowItWorks: 'Learn how it works',
  },
  protocolStatus: {
    alwaysActive: 'Always active',
    rows: {
      dusd: {
        title: 'DUSD base yield',
        copy: 'Earns automatically while you hold DUSD.',
      },
      sip3: {
        title: 'SIP #3 — DUSD expansion',
        copy: 'Routes trading activity into DUSD yield over time.',
      },
      sip2: {
        title: 'SIP #2 — Position Yield',
        copy: 'Optional layer for eligible open positions.',
      },
    },
  },
  capitalSimulator: {
    eyebrow: 'Capital Simulator',
    customAmount: 'Custom amount',
    rangeHint: 'Min {min} · Max {max}',
    note: 'Simulated example for educational purposes. Actual results may vary.',
    suffixHint: 'Shorthand: 10k = $10,000, 1.5m = $1,500,000.',
  },
  rangeSelector: {
    ariaLabel: 'Time range',
  },
  valueDisplay: {
    label: 'Estimated Gain',
  },
  rateInputs: {
    eyebrow: 'Yield Rates',
    baseLabel: 'DUSD yield — Base + SIP-3',
    baseHint:
      'Combined annual rate for DUSD’s existing yield sources and the SIP-3 fee-routing layer.',
    sip2Label: 'SIP #2 — effective annual rate',
    // Kept identical in every locale, like the two site-wide markers it sits beside.
    notFixedMarker: 'not fixed by SIP',
    placeholder: '0.00',
    rangeHint: 'Enter {min}–{max}%',
    sip2DisabledHint: 'Turn on SIP #2 to apply this rate.',
    note: 'The SIP specifications do not define fixed APYs. Enter your own assumptions. SIP-2 is modeled as an illustrative effective annual rate and does not reproduce the protocol’s complete fee-pool allocation formula.',
  },
  protocolStats: {
    initialCapital: 'Initial Capital',
    estimatedValue: 'Estimated Value',
    appliedRate: 'Rate Applied',
  },
  scenario: {
    eyebrow: 'Scenario Comparison',
    sipOff: 'SIP #2 Off',
    sipOn: 'SIP #2 On',
    idle: 'Baseline',
    active: 'Active',
    noGainIdle: 'Baseline yield from DUSD + SIP #3 keeps running in the background.',
  },
  footer: {
    brand: 'StandX SIP Guide',
    tagline:
      'A community-built explainer for the StandX SIP system.',
    disclaimer:
      'Educational simulation only. Numbers shown are illustrative — actual results may vary.',
    sectionsTitle: 'Sections',
    resourcesTitle: 'Resources',
    resources: {
      sipDocs: 'SIP documentation',
      website: 'StandX.com',
    },
    communityTitle: 'Community',
    community: {
      author: 'Created by Thisnotmeme',
      twitter: 'StandX on X',
    },
    copyright: '© 2026 Community guide',
    educational: 'For educational use only.',
  },
};

export default en;
