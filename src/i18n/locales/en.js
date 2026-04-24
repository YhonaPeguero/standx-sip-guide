const en = {
  topBar: {
    nav: {
      overview: 'Overview',
      simulator: 'Simulator',
      playbook: 'Yield Playbook',
    },
    community: 'Community',
    language: {
      button: 'Language',
      buttonAria: 'Open language menu',
      menuAria: 'Language options',
    },
  },
  app: {
    errors: {
      minAmount: 'Min amount: $100',
      maxAmount: 'Max amount: $1,000,000',
    },
    chartMarkers: ['Oct 12', 'Oct 26', 'Nov 09', 'Active'],
    footer: {
      disclaimer: 'Educational simulation only. Actual results may vary.',
      createdBy: 'Created by: Thisnotmeme,',
    },
  },
  headline: {
    title: 'Earning in real-time',
  },
  microCopy: {
    on: 'Your capital, earning.',
    off: 'Your capital, idle.',
  },
  statusChip: {
    on: 'Active Protocol',
    off: 'Protocol Idle',
  },
  overview: {
    openSimulator: 'Open simulator',
    interactivePreview: 'Interactive Preview',
    previewActive: 'When active, the loop simulates how capital can keep moving through yield layers.',
    previewIdle: 'Turn SIP on to preview how the yield loop can work over time.',
    storyHint: 'The whole story plays out in three connected steps shown on the right.',
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
    summary:
      'Capital flows through DUSD, gets activated by SIP #2, and is reinforced by SIP #3 to keep the loop running.',
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
      eyebrow: 'SIP Overview',
      title: 'Three SIPs working together',
      description:
        'Each SIP plays a focused role. Together they shape how the StandX yield loop behaves.',
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
    },
    readMore: 'Read more',
    communityNote: 'Built by the community to help users understand StandX SIPs faster.',
  },
  playbook: {
    eyebrow: 'Community Yield Playbook',
    title: 'Practical paths to learn DUSD and SIP behavior quickly',
    description:
      'Short, opinionated cards built from how the community actually thinks about each flow.',
    strategyCard: 'Strategy card',
    benefitLabel: 'Benefit:',
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
    title: 'SIP Switch',
    description: 'Visualize how active capital can earn over time.',
    learnHowItWorks: 'Learn how it works',
  },
  capitalSimulator: {
    eyebrow: 'Capital Simulator',
    customAmount: 'Custom amount',
    rangeHint: 'Min {min} · Max {max}',
    note: 'Simulated example for educational purposes. Actual results may vary.',
  },
  rangeSelector: {
    ariaLabel: 'Time range',
  },
  valueDisplay: {
    label: 'Total Yield Generated',
  },
  protocolStats: {
    initialCapital: 'Initial Capital',
    estimatedValue: 'Estimated Value',
    estimatedGain: 'Estimated Gain',
    yieldPct: 'Yield %',
  },
  scenario: {
    eyebrow: 'Scenario Comparison',
    sipOff: 'SIP Off',
    sipOn: 'SIP On',
    idle: 'Idle',
    active: 'Active',
    noGainIdle: 'No projected gain while idle.',
  },
};

export default en;
