const ko = {
  topBar: {
    nav: {
      overview: '개요',
      simulator: '시뮬레이터',
      playbook: '수익 플레이북',
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
        text: 'DUSD는 보유만 해도 자동으로 수익이 발생하며, 스테이킹이 필요하지 않습니다.',
      },
      sip2: {
        title: 'SIP #2 포지션 수익',
        text: '조건을 충족한 오픈 포지션은 활성 상태를 유지하는 동안 계속 수익을 낼 수 있습니다.',
      },
      sip3: {
        title: 'SIP #3 DUSD 네이티브 수익 확장',
        text: 'StandX의 거래 활동은 시간이 지날수록 DUSD 수익을 강화하는 데 도움을 줄 수 있습니다.',
      },
      simulator: {
        title: '시뮬레이터',
        text: '자본 금액과 기간을 바꿔가며 수익 레이어가 어떻게 동작할지 미리 확인해 보세요.',
      },
      playbook: {
        title: '수익 플레이북',
        text: 'StandX SIP를 이해하고 활용하기 위한 커뮤니티 기반의 간단한 흐름을 살펴보세요.',
      },
    },
  },
  app: {
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
  headline: {
    title: '실시간 수익',
  },
  microCopy: {
    on: '당신의 자본, 수익 창출 중.',
    off: '당신의 자본, 유휴 상태.',
  },
  statusChip: {
    on: '프로토콜 활성',
    off: '프로토콜 유휴',
  },
  overview: {
    openSimulator: '시뮬레이터 열기',
    interactivePreview: '인터랙티브 미리보기',
    previewActive: '활성 상태에서는 자본이 수익 레이어 사이를 계속 순환하는 모습을 시뮬레이션합니다.',
    previewIdle: '시간에 따른 수익 루프를 보려면 SIP를 켜세요.',
    storyHint: '전체 흐름은 오른쪽의 3단계 연결 구조로 표시됩니다.',
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
    summary: '자본은 DUSD를 거쳐 SIP #2로 활성화되고 SIP #3로 강화되어 루프를 지속합니다.',
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
      eyebrow: 'SIP 개요',
      title: '함께 작동하는 3개의 SIP',
      description: '각 SIP는 역할이 다르며, 함께 StandX 수익 루프의 동작을 형성합니다.',
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
    },
    readMore: '자세히 보기',
    communityNote: '사용자가 StandX SIP를 더 빠르게 이해할 수 있도록 커뮤니티가 만들었습니다.',
  },
  playbook: {
    eyebrow: '커뮤니티 수익 플레이북',
    title: 'DUSD와 SIP 동작을 빠르게 익히는 실전 경로',
    description: '커뮤니티가 실제로 생각하는 흐름을 바탕으로 만든 짧고 명확한 카드입니다.',
    strategyCard: '전략 카드',
    benefitLabel: '효과:',
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
    title: 'SIP Switch',
    description: '활성 자본이 시간에 따라 어떻게 수익을 만들 수 있는지 시각화합니다.',
    learnHowItWorks: '작동 방식 보기',
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
  scenario: {
    eyebrow: '시나리오 비교',
    sipOff: 'SIP 꺼짐',
    sipOn: 'SIP 켜짐',
    idle: '유휴',
    active: '활성',
    noGainIdle: '유휴 상태에서는 예상 이익이 없습니다.',
  },
};

export default ko;
