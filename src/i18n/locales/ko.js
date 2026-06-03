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
      sip5: {
        title: 'Universal Markets',
        copy: '무허가 퍼프(perp) 상장 제안입니다. 누구나 DUSD를 스테이킹해 마켓을 후원(Sponsor)하고, 커뮤니티 마켓메이커에 자금을 지원하며 수수료의 일부를 받을 수 있습니다.',
      },
    },
    readMore: '자세히 보기',
    communityNote: '사용자가 StandX SIP를 더 빠르게 이해할 수 있도록 커뮤니티가 만들었습니다.',
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
