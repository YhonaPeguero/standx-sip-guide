const ptBR = {
  topBar: {
    nav: {
      overview: 'Visão Geral',
      simulator: 'Simulador',
      playbook: 'Playbook de Yield',
      ariaLabel: 'Seções principais',
    },
    community: 'Comunidade',
    language: {
      button: 'Idioma',
      buttonAria: 'Abrir menu de idiomas',
      menuAria: 'Opções de idioma',
    },
  },
  guide: {
    button: 'Modo Guia',
    prompt: 'Novo nos SIPs da StandX? Faça o guia de 60 segundos.',
    start: 'Iniciar guia',
    stepLabel: 'Etapa',
    back: 'Voltar',
    next: 'Próximo',
    skip: 'Pular',
    finish: 'Concluir',
    narrated: 'Guia narrado',
    pause: 'Pausar',
    resume: 'Retomar',
    mute: 'Silenciar',
    voiceUnavailable:
      'Voz não disponível para este idioma no seu navegador. O guia em texto continua disponível.',
    steps: {
      dusd: {
        title: 'DUSD',
        text: 'O DUSD rende automaticamente enquanto você o mantém. Está sempre ativo — sem staking, sem interruptor.',
      },
      sip2: {
        title: 'SIP #2 Yield de Posição',
        text: 'Essa é a camada opcional que você controla. Ativar o SIP #2 soma yield em posições abertas elegíveis acima do baseline.',
      },
      sip3: {
        title: 'SIP #3 Expansão de Yield Nativo DUSD',
        text: 'Como o yield base do DUSD, o SIP #3 também está sempre ativo — a atividade de trading na StandX é direcionada ao yield do DUSD em segundo plano.',
      },
      protocolLayers: {
        title: 'Como as camadas se empilham',
        text: 'DUSD e SIP #3 funcionam sozinhos. O SIP #2 é a camada que você decide ligar. O painel de controle mostra o que é passivo e o que você ativa.',
      },
      simulator: {
        title: 'Simulador',
        text: 'Teste valores de capital, períodos e cenários de referência para visualizar como cada camada pode se comportar.',
      },
      playbook: {
        title: 'Playbook de Yield',
        text: 'Explore fluxos simples da comunidade para entender e usar os SIPs da StandX.',
      },
    },
  },
  app: {
    skipToContent: 'Pular para o conteúdo principal',
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
  hero: {
    tag: 'Feito pela comunidade',
    title: {
      line1: 'Entenda os SIPs da StandX,',
      line2: 'em tempo real',
    },
    subtitle:
      'Um explicador interativo e multilíngue. Simule capital, visualize o loop de yield e entenda como DUSD, Position Yield e SIP #3 funcionam juntos — sem sair da página.',
    primaryCta: 'Abrir simulador',
    secondaryCta: 'Conhecer a mecânica',
    features: {
      dusd: 'Yield base do DUSD',
      sip2: 'Yield de posição (SIP #2)',
      sip3: 'Expansão DUSD (SIP #3)',
      multilingual: 'Cinco idiomas suportados',
    },
  },
  headline: {
    title: 'Rendimento em tempo real',
  },
  microCopy: {
    on: 'Todas as camadas ativas: DUSD base + SIP #3 + SIP #2.',
    off: 'DUSD base + SIP #3 já estão rendendo. Ative o SIP #2 para somar o yield de posições.',
  },
  statusChip: {
    on: 'SIP #2 Ativo',
    off: 'SIP #2 Desligado',
  },
  overview: {
    openSimulator: 'Abrir simulador',
    interactivePreview: 'Prévia interativa',
    previewActive:
      'Todas as camadas ativas. O SIP #2 agora soma yield de posições sobre o baseline.',
    previewIdle:
      'O yield base de DUSD + SIP #3 já está rodando. Ative o SIP #2 para somar yield de posições.',
    storyHint: 'Toda a história acontece em três etapas conectadas mostradas à direita.',
  },
  simulator: {
    tag: 'Simulador de Yield',
    rangeHint:
      'Simulação educacional. Ajuste capital e período para visualizar o comportamento.',
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
    statusAlwaysActive: 'Sempre ativo',
    statusSip2On: 'SIP #2 ativo',
    statusSip2Off: 'SIP #2 desligado',
    summary:
      'O yield base do DUSD e o SIP #3 funcionam sozinhos. O SIP #2 é a camada que você ativa para somar o yield de posições.',
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
      tag: 'Mecânica',
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
      tag: 'Visão Geral SIP',
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
    communityNote:
      'Construído pela comunidade para ajudar usuários a entender os SIPs da StandX mais rápido.',
  },
  playbook: {
    tag: 'Playbook da Comunidade',
    eyebrow: 'Playbook de Yield da Comunidade',
    title: 'Caminhos práticos para aprender rápido o comportamento de DUSD e SIP',
    description:
      'Cards curtos e objetivos, baseados em como a comunidade realmente pensa cada fluxo.',
    strategyCard: 'Card de estratégia',
    benefitLabel: 'Benefício',
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
    title: 'Interruptor SIP #2',
    description:
      'O yield base de DUSD e o SIP #3 estão sempre ativos. Acione o SIP #2 para somar o yield de posições.',
    sip2Label: 'SIP #2 — Position Yield',
    sip2Hint: 'Camada opcional. Ativa o yield em posições abertas elegíveis.',
    learnHowItWorks: 'Entender como funciona',
  },
  protocolStatus: {
    alwaysActive: 'Sempre ativo',
    rows: {
      dusd: {
        title: 'Yield base do DUSD',
        copy: 'Rende automaticamente enquanto você mantém DUSD.',
      },
      sip3: {
        title: 'SIP #3 — Expansão do DUSD',
        copy: 'Direciona a atividade de trading para o yield do DUSD ao longo do tempo.',
      },
      sip2: {
        title: 'SIP #2 — Position Yield',
        copy: 'Camada opcional para posições abertas elegíveis.',
      },
    },
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
  scenarioSelector: {
    label: 'Cenário de referência SIP #2',
    illustrative: 'Apenas ilustrativo — a taxa real é definida pelo protocolo.',
    hint: 'Os cenários mostram faixas de comportamento do SIP #2 para fins educacionais. A taxa real do SIP #2 é definida pelo protocolo, não pelo usuário. DUSD base e SIP #3 não são afetados.',
    disabledHint: 'Ative o SIP #2 para aplicar o cenário selecionado.',
    conservative: 'Conservador',
    base: 'Base',
    optimistic: 'Otimista',
  },
  scenario: {
    eyebrow: 'Comparação de Cenários',
    sipOff: 'SIP #2 Desligado',
    sipOn: 'SIP #2 Ligado',
    idle: 'Base',
    active: 'Ativo',
    noGainIdle: 'O yield base de DUSD + SIP #3 segue rodando em segundo plano.',
  },
  footer: {
    brand: 'StandX SIP Guide',
    tagline:
      'Um explicador feito pela comunidade para o sistema SIP da StandX. Sem vínculo com a equipe StandX.',
    disclaimer:
      'Apenas simulação educacional. Os números são ilustrativos — os resultados reais podem variar.',
    resourcesTitle: 'Recursos',
    resources: {
      docs: 'Docs da StandX',
      website: 'StandX.com',
      sip1: 'SIP #1 — Block Trades',
      sip2: 'SIP #2 — Position Yield',
      sip3: 'SIP #3 — DUSD Native Yield',
    },
    communityTitle: 'Comunidade',
    community: {
      author: 'Criado por Thisnotmeme',
      twitter: 'StandX no X',
    },
    copyright: '© 2026 Guia da comunidade',
    educational: 'Apenas para uso educacional.',
  },
};

export default ptBR;
