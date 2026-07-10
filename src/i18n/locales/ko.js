const ko = {
  topBar: {
    nav: {
      overview: '개요',
      simulator: '시뮬레이터',
      playbook: '수익 플레이북',
      ariaLabel: '주요 섹션',
    },
    community: '커뮤니티',
    language: {
      button: '언어',
      buttonAria: '언어 메뉴 열기',
      menuAria: '언어 옵션',
    },
  },
  guide: {
    button: '가이드 모드',
    prompt: 'StandX SIPs가 처음인가요? 60초 가이드를 시작해 보세요.',
    start: '가이드 시작',
    stepLabel: '단계',
    back: '이전',
    next: '다음',
    skip: '건너뛰기',
    finish: '완료',
    narrated: '음성 가이드',
    pause: '일시정지',
    resume: '계속',
    mute: '음소거',
    voiceUnavailable:
      '브라우저에서 이 언어의 음성을 사용할 수 없습니다. 텍스트 가이드는 계속 이용할 수 있습니다.',
    steps: {
      dusd: {
        title: 'DUSD',
        text: 'DUSD는 보유만 해도 자동으로 수익이 발생합니다. 항상 켜져 있으며, 스테이킹이나 전환 스위치가 필요 없습니다.',
      },
      sip2: {
        title: 'SIP #2 포지션 수익',
        text: '이것은 사용자가 직접 제어하는 선택 레이어입니다. SIP #2를 켜면 기준 위에 적격 오픈 포지션의 수익이 더해집니다.',
      },
      sip3: {
        title: 'SIP #3 DUSD 네이티브 수익 확장',
        text: 'DUSD 기본 수익처럼 SIP #3도 항상 활성 상태입니다 — StandX의 거래 활동이 백그라운드에서 DUSD 수익으로 연결됩니다.',
      },
      protocolLayers: {
        title: '레이어가 쌓이는 방식',
        text: 'DUSD와 SIP #3은 스스로 작동합니다. SIP #2는 사용자가 켜는 레이어입니다. 컨트롤 패널이 무엇이 자동이고 무엇을 사용자가 켜는지 보여줍니다.',
      },
      simulator: {
        title: '시뮬레이터',
        text: '자본 금액, 기간, 참고 시나리오를 바꿔가며 각 레이어가 어떻게 동작할지 미리 확인해 보세요.',
      },
      playbook: {
        title: '수익 플레이북',
        text: 'StandX SIP를 이해하고 활용하기 위한 커뮤니티 기반의 간단한 흐름을 살펴보세요.',
      },
    },
  },
  app: {
    skipToContent: '본문 바로 가기',
    errors: {
      minAmount: '최소 금액: $100',
      maxAmount: '최대 금액: $1,000,000',
    },
    chartMarkers: ['10월 12일', '10월 26일', '11월 09일', '활성'],
    footer: {
      disclaimer: '교육용 시뮬레이션입니다. 실제 결과는 달라질 수 있습니다.',
      createdBy: '제작: Thisnotmeme,',
    },
  },
  hero: {
    tag: '커뮤니티 제작',
    title: {
      line1: 'StandX SIP,',
      line2: '실시간으로 이해',
    },
    subtitle:
      '인터랙티브한 다국어 설명서입니다. 자본을 시뮬레이션하고 수익 루프를 시각화하며, DUSD, Position Yield, SIP #3이 어떻게 함께 작동하는지 페이지 안에서 배워보세요.',
    primaryCta: '시뮬레이터 열기',
    secondaryCta: '작동 원리 배우기',
    features: {
      dusd: 'DUSD 기본 수익',
      sip2: '포지션 수익 (SIP #2)',
      sip3: 'DUSD 확장 (SIP #3)',
      multilingual: '5개 언어 지원',
    },
  },
  headline: {
    title: '실시간 수익',
  },
  microCopy: {
    on: '모든 수익 레이어 활성: DUSD 기본 + SIP #3 + SIP #2.',
    off: 'DUSD 기본 + SIP #3은 이미 수익을 만들고 있습니다. SIP #2를 켜서 포지션 수익을 더하세요.',
  },
  statusChip: {
    on: 'SIP #2 활성',
    off: 'SIP #2 꺼짐',
  },
  overview: {
    openSimulator: '시뮬레이터 열기',
    interactivePreview: '인터랙티브 미리보기',
    previewActive: '모든 레이어가 활성 상태입니다. SIP #2가 기준 위에 포지션 수익을 더하고 있습니다.',
    previewIdle: 'DUSD + SIP #3 기준 수익이 이미 실행 중입니다. SIP #2를 켜서 포지션 수익을 더하세요.',
    storyHint: '전체 흐름은 오른쪽의 3단계 연결 구조로 표시됩니다.',
  },
  simulator: {
    tag: '수익 시뮬레이터',
    rangeHint: '교육용 시뮬레이션입니다. 자본과 기간을 조정해 동작을 미리 보세요.',
  },
  toggle: {
    ariaOn: '수익 끄기',
    ariaOff: '수익 켜기',
    on: '켜짐',
    off: '꺼짐',
    active: '활성',
    idle: '유휴',
  },
  yieldLoop: {
    eyebrow: 'StandX 수익 루프',
    live: '루프 활성',
    paused: '루프 일시정지',
    statusAlwaysActive: '항상 활성',
    statusSip2On: 'SIP #2 켜짐',
    statusSip2Off: 'SIP #2 꺼짐',
    summary: 'DUSD 기본 수익과 SIP #3은 스스로 작동합니다. SIP #2는 사용자가 켜서 포지션 수익을 더하는 레이어입니다.',
    nodes: {
      dusd: {
        label: '자본',
        title: 'DUSD',
        copy: '루프의 기본 레이어인 DUSD 자본으로 시작합니다.',
      },
      sip2: {
        label: '활성',
        title: 'SIP #2 포지션 수익',
        copy: '조건을 충족한 활동은 포지션이 열려 있는 동안 계속 수익을 생성할 수 있습니다.',
      },
      sip3: {
        label: '복리',
        title: 'SIP #3 DUSD 네이티브 수익 확장',
        copy: '수익 경로가 다시 DUSD 성장으로 가치를 환류할 수 있습니다.',
      },
    },
  },
  education: {
    mechanics: {
      tag: '메커니즘',
      eyebrow: '작동 원리 학습',
      title: '4단계 가이드 경로',
      description: '1분 이내에 SIP가 실제로 어떻게 작동하는지 이해할 수 있는 간단한 루프입니다.',
    },
    stepLabel: '단계',
    flowSteps: {
      step1: {
        title: '자본 선택',
        copy: '시작 금액을 고르거나 빠른 프리셋을 사용하세요.',
      },
      step2: {
        title: 'SIP Switch 켜기',
        copy: '루프를 활성화하고 시뮬레이터가 동작하는 모습을 확인하세요.',
      },
      step3: {
        title: '수익 동작 미리보기',
        copy: '기간별로 가치가 어떻게 변할 수 있는지 실시간으로 확인하세요.',
      },
      step4: {
        title: '어떤 SIP가 작동하는지 학습',
        copy: '경험의 각 부분을 어떤 SIP가 구동하는지 이해하세요.',
      },
    },
    sipOverview: {
      tag: 'SIP 개요',
      eyebrow: 'SIP 개요',
      title: 'StandX의 SIP들',
      description: '각 SIP는 고유한 역할을 합니다 — 현재 운영 중인 수익 시스템(SIP #1–#3)부터 다음 단계를 그리는 새로운 제안(SIP #4–#5)까지.',
    },
    sipStatus: {
      live: '운영 중',
      review: '검토 중',
      wip: '개발 중', // TODO: needs native review
      draft: '초안',
    },
    sipCards: {
      sip1: {
        title: 'Block Trades',
        copy: '대규모 거래를 일반 시장 흐름에 덜 영향을 주며 실행하기 쉽게 만듭니다.',
      },
      sip2: {
        title: 'Position Yield',
        copy: '조건을 충족한 포지션이 시장 활동 중에도 수익을 지속하도록 돕습니다.',
      },
      sip3: {
        title: 'DUSD Native Yield Expansion',
        copy: '자본 순환을 개선하여 DUSD 수익 경로가 강화되도록 합니다.',
      },
      sip4: {
        title: 'Block Options',
        copy: 'Block Trade 위에 얹는 옵션형 Take Profit·Stop Loss입니다. 소액의 Reservation Fee를 내면 만기 전 언제든 정해진 가격에 청산하거나 진입할 권리를 얻습니다.',
      },
      // TODO: needs native review (ko) — sip5 / sip5a / sip5b
      sip5: {
        title: 'Universal Markets Listing',
        copy: '무허가 퍼프(perp) 상장을 위한 개발 중(WIP) 프레임워크로, 이제 단계별 하위 제안으로 나뉩니다. 펼쳐서 무엇이 운영 중(5A)이고 무엇이 예정(5B)인지 확인하세요.',
      },
      sip5a: {
        title: 'Community Maker Yield',
        copy: 'Universal Markets의 첫 번째 운영 요소입니다. Market Maker Uptime Program을 일일 yield로 업그레이드합니다: mark price 근처에서 양방향 order book 유동성을 제시하는 maker는 "Maker Hours"(가격 근접도와 uptime으로 가중)를 적립하고, 재활용된 트레이딩 수수료로 보강되는 일일 DUSD/token 리워드 풀을 나눠 가집니다.',
      },
      sip5b: {
        title: 'Universal Markets — 다음 단계',
        copy: 'Universal Markets의 다음 단계로, 무허가 상장 프레임워크를 확장합니다. 초안 — 세부 내용은 곧 공개됩니다.',
      },
    },
    readMore: '자세히 보기',
    showSubProposals: '하위 제안 보기', // TODO: needs native review
    hideSubProposals: '하위 제안 숨기기', // TODO: needs native review
    communityNote: '사용자가 StandX SIP를 더 빠르게 이해할 수 있도록 커뮤니티가 만들었습니다.',
  },
  // TODO: needs native review (ko) — blockOptions
  blockOptions: {
    tag: 'SIP #4 · 운영 중',
    title: 'Block Options: 예약된 권리로서의 TP & SL',
    description:
      'StandX는 Take Profit과 Stop Loss를 Block Options로 바꿉니다. 기계적인 트리거 대신, 청산은 누군가 수수료를 내고 예약하는 권리가 되고, 보유자가 만기 전에 실행할지 직접 결정합니다.',
    intro:
      '일반 TP/SL은 정해진 가격에서 그냥 발동됩니다. SIP-4는 Block Trade 위에서 청산 의사를 거래 가능하게 만듭니다: 상대방이 Reservation Fee를 지불하거나 수령하고, 권리는 만기까지 예약되며, 실행은 여전히 선택으로 남습니다 — 첫 급격한 꼬리(wick)에 자동으로 청산되지 않습니다.',
    marginNote: 'Block Options는 현재 Cross Margin 포지션에서만 작동하며, Isolated에서는 사용할 수 없습니다.',
    tp: {
      chip: 'Block Option TP',
      title: '계획된 청산을 수익화',
      summary:
        '어차피 목표가에서 이익을 실현할 생각이었다면, 그 청산을 거래 가능한 권리로 제공하고 기다리는 동안 수익을 얻으세요.',
      feeLabel: 'Reservation Fee',
      feeValue: '수령',
      steps: [
        '포지션을 열고 TP를 선택한 뒤 “Community Hedge” Block Option 모드를 고릅니다.',
        'TP 가격, 커버할 수량, 만기를 설정한 뒤 확인하고 서명합니다.',
        '상대방이 권리를 예약하기 위해 Reservation Fee를 지불합니다.',
        '실행되면 원하는 가격에 청산되고, 사용되지 않고 만기되면 수수료와 포지션을 모두 유지합니다.',
      ],
    },
    sl: {
      chip: 'Block Option SL',
      title: '통제력을 잃지 않는 보호',
      summary:
        '일반 스탑은 첫 터치에 발동됩니다 — 꼬리(wick)도 포함해서요. Block SL은 언제 사용할지 직접 선택하는 예약된 청산 권리를 제공합니다.',
      feeLabel: 'Reservation Fee',
      feeValue: '지불',
      steps: [
        '포지션을 열고 SL을 선택한 뒤 Block Option 모드를 고릅니다.',
        '보호 가격, 수량, 만기를 설정한 뒤 확인하고 서명합니다.',
        '제한된 Reservation Fee를 지불하고 주문이 온체인에서 체결되기를 기다립니다.',
        '시장이 계속 불리하게 움직이면 만기 전에 Execute를 누르세요 — 회복되는 꼬리에는 청산당하지 않습니다.',
      ],
    },
    terms: {
      items: [
        {
          term: 'Reservation Fee',
          copy: '권리를 예약하기 위한 지불금입니다. TP 판매자는 수령하고, SL 보유자는 지불합니다.',
        },
        {
          term: '만기 (Expiry)',
          copy: '예약된 권리는 만기까지 행사할 수 있습니다. 사용하지 않으면 정산 없이 취소됩니다.',
        },
        {
          term: 'Execute',
          copy: '아메리칸 스타일: 보유자는 만기 전 언제든 자신의 판단으로 실행할 수 있습니다.',
        },
      ],
    },
    resourcesLabel: '더 알아보기',
    links: {
      docs: '공식 문서',
      thread: 'StandX 스레드',
      intern: '심층 분석 스레드',
    },
  },
  playbook: {
    tag: '커뮤니티 플레이북',
    eyebrow: '커뮤니티 수익 플레이북',
    title: 'DUSD와 SIP 동작을 빠르게 익히는 실전 경로',
    description: '커뮤니티가 실제로 생각하는 흐름을 바탕으로 만든 짧고 명확한 카드입니다.',
    strategyCard: '전략 카드',
    benefitLabel: '효과',
    disclaimer: '교육용 시뮬레이션입니다. 실제 결과는 달라질 수 있습니다.',
    actions: {
      try: '이 흐름 시도하기',
      learn: '더 알아보기',
    },
    cards: {
      holdDusd: {
        tag: '패시브',
        title: 'DUSD 보유',
        headline: '스테이킹 없이 패시브 수익',
        copy: '시간에 따라 시뮬레이션된 수익 동작에 참여하면서도 DUSD를 준비된 상태로 유지하세요.',
        benefit: '자본 유동성은 유지하고 수익 가시성은 확보합니다.',
      },
      tradeAwareness: {
        tag: '액티브',
        title: '인사이트 기반 거래',
        headline: '조건을 충족한 포지션은 SIP #2를 통해 수익 가능',
        copy: 'SIP #2를 통해 활동과 수익이 함께 작동하는 방식을 이해해 보세요.',
        benefit: '유휴 자본을 줄이면서 더 나은 타이밍 결정.',
      },
      understandLoop: {
        tag: '시스템',
        title: '루프 이해하기',
        headline: 'SIP #3는 활동을 DUSD 수익으로 환류',
        copy: '루프 보기를 통해 다양한 행동이 장기 성장으로 이어지는 방식을 확인하세요.',
        benefit: '시스템 복리 구조를 더 명확하게 이해할 수 있습니다.',
      },
      combineLayers: {
        tag: '전략',
        title: '레이어 결합',
        headline: 'DUSD 기본 수익 + 액티브 포지션 수익',
        copy: '자본 금액과 기간을 바꿔 한 곳에서 레이어별 결과를 비교해 보세요.',
        benefit: '빠른 가정 시나리오 비교로 실전 전략 수립.',
      },
    },
  },
  controlPanel: {
    eyebrow: '컨트롤 패널',
    title: 'SIP #2 스위치',
    description:
      'DUSD 기본 수익과 SIP #3은 항상 활성 상태입니다. SIP #2를 켜서 포지션 수익을 더해보세요.',
    sip2Label: 'SIP #2 — 포지션 수익',
    sip2Hint: '선택 레이어. 적격 오픈 포지션에 대해 수익을 활성화합니다.',
    learnHowItWorks: '작동 방식 보기',
  },
  protocolStatus: {
    alwaysActive: '항상 활성',
    rows: {
      dusd: {
        title: 'DUSD 기본 수익',
        copy: 'DUSD를 보유하는 동안 자동으로 수익이 발생합니다.',
      },
      sip3: {
        title: 'SIP #3 — DUSD 확장',
        copy: '거래 활동을 시간이 지나며 DUSD 수익으로 연결합니다.',
      },
      sip2: {
        title: 'SIP #2 — 포지션 수익',
        copy: '적격 오픈 포지션을 위한 선택 레이어입니다.',
      },
    },
  },
  capitalSimulator: {
    eyebrow: '자본 시뮬레이터',
    customAmount: '직접 입력 금액',
    rangeHint: '최소 {min} · 최대 {max}',
    note: '교육 목적의 시뮬레이션 예시입니다. 실제 결과는 달라질 수 있습니다.',
  },
  rangeSelector: {
    ariaLabel: '기간 범위',
  },
  valueDisplay: {
    label: '총 생성 수익',
  },
  protocolStats: {
    initialCapital: '초기 자본',
    estimatedValue: '예상 가치',
    estimatedGain: '예상 이익',
    yieldPct: '수익률 %',
  },
  scenarioSelector: {
    label: 'SIP #2 참고 시나리오',
    illustrative: '예시일 뿐입니다. 실제 비율은 프로토콜이 결정합니다.',
    hint: '시나리오는 교육 목적으로 SIP #2의 동작 범위를 예시로 보여줍니다. 실제 SIP #2 수익률은 사용자가 아닌 프로토콜에 의해 결정됩니다. DUSD 기본과 SIP #3은 영향을 받지 않습니다.',
    disabledHint: '선택한 시나리오를 적용하려면 SIP #2를 켜세요.',
    conservative: '보수적',
    base: '기본',
    optimistic: '낙관적',
  },
  scenario: {
    eyebrow: '시나리오 비교',
    sipOff: 'SIP #2 꺼짐',
    sipOn: 'SIP #2 켜짐',
    idle: '기준',
    active: '활성',
    noGainIdle: 'DUSD + SIP #3의 기준 수익은 백그라운드에서 계속 발생합니다.',
  },
  footer: {
    brand: 'StandX SIP 가이드',
    tagline:
      'StandX의 SIP 시스템을 위한 커뮤니티 기반 설명서입니다. StandX 팀과 공식적인 연관은 없습니다.',
    disclaimer:
      '교육 목적의 시뮬레이션입니다. 표시되는 수치는 예시이며, 실제 결과는 다를 수 있습니다.',
    resourcesTitle: '리소스',
    resources: {
      docs: 'StandX 문서',
      website: 'StandX.com',
      sip1: 'SIP #1 — Block Trades',
      sip2: 'SIP #2 — Position Yield',
      sip3: 'SIP #3 — DUSD Native Yield',
      sip4: 'SIP #4 — Block Options',
      sip5: 'SIP #5 — Universal Markets',
    },
    communityTitle: '커뮤니티',
    community: {
      author: '제작: Thisnotmeme',
      twitter: 'X의 StandX',
    },
    copyright: '© 2026 커뮤니티 가이드',
    educational: '교육 용도로만 사용하세요.',
  },
};

export default ko;
