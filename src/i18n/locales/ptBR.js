const ptBR = {
  topBar: {
    nav: {
      overview: 'Visão Geral',
      simulator: 'Simulador',
      playbook: 'Playbook de Yield',
    },
    community: 'Comunidade',
    language: {
      button: 'Idioma',
      buttonAria: 'Abrir menu de idiomas',
      menuAria: 'Opções de idioma',
    },
  },
  app: {
    errors: {
      minAmount: 'Valor mínimo: $100',
      maxAmount: 'Valor máximo: $1,000,000',
    },
    chartMarkers: ['12 out', '26 out', '09 nov', 'Ativo'],
    footer: {
      disclaimer: 'Simulação educacional. Os resultados reais podem variar.',
      createdBy: 'Criado por: Thisnotmeme,',
    },
  },
  headline: {
    title: 'Rendimento em tempo real',
  },
  microCopy: {
    on: 'Seu capital, rendendo.',
    off: 'Seu capital, parado.',
  },
  statusChip: {
    on: 'Protocolo Ativo',
    off: 'Protocolo Inativo',
  },
  overview: {
    openSimulator: 'Abrir simulador',
    interactivePreview: 'Prévia interativa',
    previewActive:
      'Quando ativo, o loop simula como o capital pode continuar circulando entre camadas de yield.',
    previewIdle: 'Ative o SIP para visualizar como o loop de yield pode funcionar ao longo do tempo.',
    storyHint: 'Toda a história acontece em três etapas conectadas mostradas à direita.',
  },
  toggle: {
    ariaOn: 'Desativar rendimento',
    ariaOff: 'Ativar rendimento',
    on: 'LIGADO',
    off: 'DESLIGADO',
    active: 'ATIVO',
    idle: 'INATIVO',
  },
  yieldLoop: {
    eyebrow: 'Loop de Yield StandX',
    live: 'Loop Ativo',
    paused: 'Loop em Pausa',
    summary:
      'O capital flui pelo DUSD, é ativado pelo SIP #2 e reforçado pelo SIP #3 para manter o loop funcionando.',
    nodes: {
      dusd: {
        label: 'Capital',
        title: 'DUSD',
        copy: 'Comece com capital em DUSD, a camada base do loop.',
      },
      sip2: {
        label: 'Ativo',
        title: 'SIP #2 Yield de Posição',
        copy: 'Atividades elegíveis podem continuar rendendo enquanto as posições permanecem abertas.',
      },
      sip3: {
        label: 'Composto',
        title: 'SIP #3 Expansão de Yield Nativo DUSD',
        copy: 'As rotas de yield podem devolver valor para o crescimento do DUSD.',
      },
    },
  },
  education: {
    mechanics: {
      eyebrow: 'Entenda a mecânica',
      title: 'Um caminho guiado em quatro etapas',
      description:
        'Um loop simples que você percorre em menos de um minuto para entender como o SIP funciona na prática.',
    },
    stepLabel: 'Etapa',
    flowSteps: {
      step1: {
        title: 'Escolha seu capital',
        copy: 'Escolha um valor inicial ou use um preset rápido.',
      },
      step2: {
        title: 'Ative o SIP Switch',
        copy: 'Ative o loop e veja o simulador ganhar vida.',
      },
      step3: {
        title: 'Visualize o comportamento',
        copy: 'Veja como o valor pode evoluir em diferentes períodos em tempo real.',
      },
      step4: {
        title: 'Entenda qual SIP impulsiona',
        copy: 'Entenda qual SIP impulsiona cada parte da experiência.',
      },
    },
    sipOverview: {
      eyebrow: 'Visão Geral SIP',
      title: 'Três SIPs trabalhando juntos',
      description:
        'Cada SIP tem um papel específico. Juntos, eles moldam como o loop de yield da StandX se comporta.',
    },
    sipCards: {
      sip1: {
        title: 'Block Trades',
        copy: 'Facilita a execução de operações maiores com menos impacto no fluxo normal do mercado.',
      },
      sip2: {
        title: 'Position Yield',
        copy: 'Permite que posições elegíveis mantenham o rendimento ativo enquanto os usuários operam no mercado.',
      },
      sip3: {
        title: 'DUSD Native Yield Expansion',
        copy: 'Melhora como o capital pode circular para reforçar os caminhos de rendimento do DUSD.',
      },
    },
    readMore: 'Ler mais',
    communityNote: 'Construído pela comunidade para ajudar usuários a entender os SIPs da StandX mais rápido.',
  },
  playbook: {
    eyebrow: 'Playbook de Yield da Comunidade',
    title: 'Caminhos práticos para aprender rápido o comportamento de DUSD e SIP',
    description:
      'Cards curtos e objetivos, baseados em como a comunidade realmente pensa cada fluxo.',
    strategyCard: 'Card de estratégia',
    benefitLabel: 'Benefício:',
    disclaimer: 'Simulação educacional. Os resultados reais podem variar.',
    actions: {
      try: 'Testar este fluxo',
      learn: 'Saiba mais',
    },
    cards: {
      holdDusd: {
        tag: 'Passivo',
        title: 'Manter DUSD',
        headline: 'Ganhe passivamente sem staking',
        copy: 'Mantenha DUSD pronto enquanto participa do comportamento de yield simulado ao longo do tempo.',
        benefit: 'O capital permanece líquido enquanto o rendimento continua visível.',
      },
      tradeAwareness: {
        tag: 'Ativo',
        title: 'Opere com consciência',
        headline: 'Posições elegíveis podem render via SIP #2',
        copy: 'Use o SIP #2 para entender como atividade e rendimento podem funcionar juntos.',
        benefit: 'Melhores decisões de timing com menos capital parado.',
      },
      understandLoop: {
        tag: 'Sistema',
        title: 'Entenda o loop',
        headline: 'O SIP #3 direciona atividade de volta ao yield do DUSD',
        copy: 'Acompanhe a visão do loop para ver como ações diferentes podem alimentar o crescimento no longo prazo.',
        benefit: 'Modelo mental mais claro de como o sistema compõe.',
      },
      combineLayers: {
        tag: 'Estratégia',
        title: 'Combine as camadas',
        headline: 'Yield base de DUSD + yield de posição ativa',
        copy: 'Teste diferentes valores de capital e prazos para comparar resultados em camadas em um único lugar.',
        benefit: 'Planejamento prático de estratégia com comparações rápidas de cenários.',
      },
    },
  },
  controlPanel: {
    eyebrow: 'Painel de Controle',
    title: 'SIP Switch',
    description: 'Visualize como o capital ativo pode render ao longo do tempo.',
    learnHowItWorks: 'Entender como funciona',
  },
  capitalSimulator: {
    eyebrow: 'Simulador de Capital',
    customAmount: 'Valor personalizado',
    rangeHint: 'Mín {min} · Máx {max}',
    note: 'Exemplo simulado para fins educacionais. Os resultados reais podem variar.',
  },
  rangeSelector: {
    ariaLabel: 'Intervalo de tempo',
  },
  valueDisplay: {
    label: 'Yield total gerado',
  },
  protocolStats: {
    initialCapital: 'Capital Inicial',
    estimatedValue: 'Valor Estimado',
    estimatedGain: 'Ganho Estimado',
    yieldPct: 'Yield %',
  },
  scenario: {
    eyebrow: 'Comparação de Cenários',
    sipOff: 'SIP Desligado',
    sipOn: 'SIP Ligado',
    idle: 'Inativo',
    active: 'Ativo',
    noGainIdle: 'Sem ganho projetado enquanto estiver inativo.',
  },
};

export default ptBR;
