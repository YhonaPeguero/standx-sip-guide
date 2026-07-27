const ptBR = {
  topBar: {
    nav: {
      overview: 'Visão Geral',
      simulator: 'Simulador',
      playbook: 'Playbook de Yield',
      vaults: 'Vaults',
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
        text: 'Insira suas próprias taxas e teste diferentes capitais e horizontes para ver como cada camada pode se comportar.',
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
      minRate: 'Taxa mínima: 0%',
      maxRate: 'Taxa máxima: 100%',
    },
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
    rangeHint: 'Projeção educacional. Insira suas próprias taxas e depois ajuste capital e horizonte.',
    chartAriaLabel: 'Acúmulo de yield projetado em {horizon}, com base nas taxas que você inseriu.',
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
      title: 'Os SIPs da StandX',
      description:
        'Cada SIP tem um papel específico — do sistema de yield já implementado (SIP #1–#4) ao SIP #5, o framework em desenvolvimento que define o que vem a seguir.',
    },
    sipStatus: {
      implemented: 'Implementado',
      review: 'Em revisão',
      wip: 'Em desenvolvimento',
      draft: 'Rascunho',
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
      sip4: {
        title: 'Block Options',
        copy: 'Take Profit e Stop Loss no estilo opção sobre o Block Trade. Você paga uma pequena Reservation Fee pelo direito de sair — ou entrar — a um preço fixo a qualquer momento antes do vencimento.',
      },
      sip5: {
        title: 'Universal Markets Listing',
        copy: 'Um framework em desenvolvimento para listagem de perps sem permissão, agora dividido em sub-propostas por etapas. Expanda para ver o que já está implementado (5A, 5B) e o que segue como rascunho (5C).',
      },
      sip5a: {
        title: 'Community Maker Yield',
        copy: 'A primeira peça ativa do Universal Markets. Transforma o Market Maker Uptime Program em um yield diário: makers que cotam liquidez de dois lados perto do preço de marca acumulam "Maker Hours" — ponderadas pela proximidade do preço e pelo uptime — e dividem um pool diário de recompensas em DUSD/token, reforçado por taxas de trading recicladas.',
      },
      sip5b: {
        title: 'Community Vaults',
        copy: 'A camada de capital do Universal Markets, em três tipos de vault comunitário: Strategy Vaults permitem apoiar um trader, Reward Vaults guardam o orçamento de makers de um par e Shield Vaults assumem o risco de cauda das liquidações à frente do ADL. Um mercado não pode abrir até que seu Sponsor mantenha equity bloqueado em um deles.',
      },
      sip5c: {
        // Título placeholder, literal do índice oficial de SIPs — ainda sem documento público.
        title: 'Cooooooking',
      },
    },
    draftPlaceholderNote: 'Placeholder no índice oficial de SIPs — ainda sem documento público.',
    readMore: 'Ler mais',
    openSection: 'Abrir seção',
    showSubProposals: 'Ver sub-propostas',
    hideSubProposals: 'Ocultar sub-propostas',
    communityNote:
      'Construído pela comunidade para ajudar usuários a entender os SIPs da StandX mais rápido.',
  },
  blockOptions: {
    tag: 'SIP #4 · Já disponível',
    title: 'Block Options: TP e SL como um direito reservado',
    description:
      'A StandX transforma o Take Profit e o Stop Loss em Block Options. Em vez de um gatilho mecânico, sua saída vira um direito que alguém reserva pagando uma taxa — e quem o detém decide se executa antes do vencimento.',
    intro:
      'Um TP/SL normal apenas dispara em um preço. A SIP-4 se apoia no Block Trade para tornar a intenção de saída negociável: uma contraparte paga ou recebe uma Reservation Fee, o direito fica reservado até o vencimento, e executar continua sendo uma escolha — não um stop automático na primeira mecha feia.',
    marginNote:
      'As Block Options funcionam por enquanto apenas com posições em Cross Margin — não em Isolated.',
    tp: {
      chip: 'Block Option TP',
      title: 'Monetize uma saída planejada',
      summary:
        'Você já estava disposto a realizar lucro em um alvo. Ofereça essa saída como um direito negociável e ganhe enquanto espera.',
      feeLabel: 'Reservation Fee',
      feeValue: 'Você recebe',
      steps: [
        'Abra sua posição, selecione TP e escolha o modo Block Option “Community Hedge”.',
        'Defina o preço de TP, a quantidade a cobrir e o vencimento; depois confirme e assine.',
        'Uma contraparte paga a você a Reservation Fee para reservar o direito.',
        'Se for executado, você sai no seu preço; se vencer sem uso, você fica com a taxa e com a posição.',
      ],
    },
    sl: {
      chip: 'Block Option SL',
      title: 'Proteção sem perder o controle',
      summary:
        'Um stop normal dispara no primeiro toque — mechas incluídas. O Block SL dá a você um direito de saída reservado que você escolhe quando usar.',
      feeLabel: 'Reservation Fee',
      feeValue: 'Você paga',
      steps: [
        'Abra sua posição, selecione SL e escolha o modo Block Option.',
        'Defina o preço de proteção, a quantidade e o vencimento; depois confirme e assine.',
        'Você paga uma Reservation Fee limitada e aguarda a ordem ser preenchida onchain.',
        'Se o mercado continuar contra você, aperte Execute antes do vencimento — uma mecha que se recupera não tira você da posição.',
      ],
    },
    terms: {
      items: [
        {
          term: 'Reservation Fee',
          copy: 'O pagamento para reservar o direito. Quem vende o TP recebe; quem detém o SL paga.',
        },
        {
          term: 'Vencimento',
          copy: 'Direitos reservados podem ser exercidos até o vencimento. Sem uso, são cancelados sem liquidação.',
        },
        {
          term: 'Execute',
          copy: 'Estilo americano: quem detém pode executar a qualquer momento antes do vencimento, a seu critério.',
        },
      ],
    },
    resourcesLabel: 'Saiba mais',
    links: {
      docs: 'Docs oficiais',
      thread: 'Thread da StandX',
      intern: 'Thread de análise',
    },
  },
  vaults: {
    eyebrow: 'SIP #5B · Implementado',
    title: 'Community Vaults',
    description:
      'A camada de capital do Universal Markets: três tipos de vault comunitário que fornecem o capital de trading, os orçamentos de makers e os colchões de seguro sobre os quais os Universal Markets são construídos.',
    intro:
      'Se o SIP-5A ativou a camada de yield do Universal Markets, o SIP-5B ativa a camada de capital. O tipo de um vault é fixado na criação e cada tipo carrega sua própria economia, suas regras de risco e suas regras de saída: um orçamento feito para ser distribuído não pode compartilhar a economia de LP de uma estratégia de trading, e o capital de seguro, que precisa estar presente de forma confiável, não pode compartilhar as regras de saída de nenhum dos dois.',
    meta: {
      sip: 'SIP',
      parent: 'Pai',
      status: 'Status',
      date: 'Data',
      release: 'Data de release',
      author: 'Autor',
    },
    metaValues: {
      sip: '5B',
      parent: 'SIP-5: Universal Markets Listing',
      status: 'Implementado',
      date: '2026-06-30',
      release: '2026-07-18',
      author: 'StandX Team',
    },
    docLink: 'Ler o SIP-5B',
    illustrative: 'Illustrative — user-entered amounts, not StandX parameters.',
    notPublished: 'not published',
    types: {
      eyebrow: 'Três tipos de vault',
      title: 'Um padrão, três produtos',
      description:
        'O tipo do vault é definido na criação, então quem deposita sempre sabe em qual produto está entrando. Natureza, fonte de retorno e saída são a comparação que a proposta faz na sua Motivation.',
      columns: {
        nature: 'Natureza',
        return: 'Fonte de retorno',
        exit: 'Saída',
      },
      showDetail: 'O que é',
      hideDetail: 'Ocultar',
      strategy: {
        tag: 'Strategy',
        name: 'Community Strategy Vault',
        nature: 'Capital delegado a um trader',
        return: 'PnL de trading, yield do DUSD',
        exit: 'Janela de processamento de saques',
        detail:
          'Os depositantes financiam o vault, o owner opera com ele no StandX Perps e os depositantes recebem LP tokens precificados pelo NAV do vault. O capital do owner e o dos depositantes ficam na mesma contabilidade de LP e ao mesmo preço, então ganhos e perdas são suportados proporcionalmente; o que o owner abre mão é da possibilidade de sair primeiro.',
        params: [
          { label: 'Participação mínima do owner — parâmetro de protocolo no lançamento inicial', value: '5%' },
          { label: 'Janela de processamento de saques, em condições normais', value: 'máx. 4 dias' },
        ],
      },
      reward: {
        tag: 'Reward',
        name: 'Community Reward Vault',
        nature: 'O orçamento de incentivos de um mercado',
        return: 'Fee share e reciclagem via Stand Mode',
        exit: 'Sem saque livre',
        detail:
          'O orçamento de incentivos para makers de um par, obrigatório quando um Sponsor o lista. Seus ativos são feitos para serem gastos: fluem diariamente para os makers da comunidade via SIP-5A, então o vault não emite LP tokens e espera-se que seu saldo caia. O Stand Mode devolve o fee share do Sponsor ao vault, e as contribuições da comunidade não geram nenhum direito sobre o orçamento.',
      },
      shield: {
        tag: 'Shield',
        name: 'Community Shield Vault',
        nature: 'O capital de seguro de um mercado',
        return: 'Liquidation fees, prêmios de seguro, PnL de posições',
        exit: 'Período de aviso',
        detail:
          'Capital de seguro posicionado à frente do ADL para os pares que respalda. Os depositantes recebem LP tokens precificados pelo NAV e assumem o risco de cauda em troca de receita de seguro, com risco isolado por par. Um Shield Vault opera um negócio de seguros, e ganha como tal e perde como tal.',
      },
    },
    gate: {
      eyebrow: 'Trading Gate',
      title: 'Quatro condições antes de um mercado ir para Live',
      description:
        'Um mercado passa de Bootstrapping para Live somente quando as quatro condições se cumprem. Ative-as para operar o portão: ele abre na quarta, não antes.',
      stateLabel: 'Estado do mercado',
      bootstrapping: 'Bootstrapping',
      live: 'Live',
      conditions: {
        sponsorEquity:
          'O equity bloqueado do Sponsor no Shield Vault associado atende ao required_sponsor_commitment.',
        shieldCapital:
          'O capital total de cobertura do Shield Vault atende ao requisito de risco do mercado.',
        rewardBudget:
          'O Reward Vault do mercado tem orçamento de makers suficiente para o cronograma de liberação declarado.',
        review: 'A fonte de oráculo, a profundidade de makers, o OI cap e os parâmetros de risco passam pela revisão.',
      },
      openCopy: 'As quatro condições se cumprem, então o mercado pode abrir para trading.',
      closedCopy:
        '{met} de {total} condições cumpridas. O mercado permanece em Bootstrapping até que as quatro se cumpram.',
      footnote:
        'O required_sponsor_commitment é definido por mercado a partir do seu OI cap, alavancagem máxima, volatilidade esperada, qualidade do oráculo e escala de liquidação projetada: os mercados não compartilham um número fixo.',
    },
    shield: {
      eyebrow: 'Shield Health',
      description:
        'A saúde do Shield continua agindo sobre a receita do Sponsor e o estado do mercado depois do lançamento. Percorra a escada para ver o que dispara cada estágio.',
      triggerLabel: 'Disparo',
      thresholdLabel: 'Limite',
      footnote:
        'O SIP-5B diz o que dispara cada estágio, mas não publica nenhum limite, janela de reposição ou índice de cobertura, então nenhum aparece aqui. A escada estende o fee share condicionado à saúde do SIP-5 até a camada de capital: Sponsors são pagos por manter seu mercado solvente, não por tê-lo lançado.',
      stages: {
        escrow: {
          name: 'O fee share vai para escrow',
          trigger:
            'O equity bloqueado do Sponsor ou a cobertura geral do vault cai abaixo do requisito, e um aviso de reposição é emitido.',
        },
        oiCut: {
          name: 'OI cap reduzido, ou rebaixado para Watchlist',
          trigger: 'O déficit não é restaurado dentro da janela de reposição.',
        },
        reduceOnly: {
          name: 'O mercado entra em ReduceOnly',
          trigger: 'A cobertura rompe o limite rígido, ou segue comprometida.',
        },
        sunset: {
          name: 'O mercado entra em Sunset',
          trigger:
            'O déficit não pode ser reparado. As shares do Sponsor só são desbloqueadas depois que toda posição e responsabilidade é liquidada.',
        },
      },
    },
    liquidation: {
      eyebrow: 'Fluxo de liquidação',
      title: 'Order book, depois Shield Vault, depois ADL',
      description:
        'Quando o order book não consegue absorver uma liquidação a preços aceitáveis, o Shield Vault assume a posição pelo preço de liquidação e recebe o liquidation fee. O ADL só é alcançado quando a capacidade reservada para aquele par se esgota. Digite seus próprios valores para percorrer o caminho.',
      inputs: {
        positionSize: 'Tamanho da posição',
        reservedCapacity: 'Capacidade reservada para o par',
        liquidationFee: 'Liquidation fee',
      },
      nodes: {
        orderBook: {
          title: 'Order book',
          copy: 'A liquidação vai primeiro ao book. O que ele não absorver a preços aceitáveis segue adiante.',
        },
        shield: {
          title: 'Shield Vault',
          copy: 'Assume a posição pelo preço de liquidação e recebe o liquidation fee; depois desmonta ou faz hedge a critério do owner, dentro dos seus próprios limites de risco.',
        },
        adl: {
          title: 'ADL',
          copy: 'Alcançado somente quando a capacidade reservada para este par se esgota. A proteção de todos os outros pares fica intacta.',
        },
      },
      results: {
        absorbed: 'Absorvido pelo Shield Vault',
        fee: 'Liquidation fee para o vault',
        remaining: 'Capacidade reservada restante',
        adl: 'Chega ao ADL',
      },
      states: {
        idle: 'Digite um tamanho de posição para ver onde ela para.',
        covered:
          'A capacidade reservada deste par cobre a posição, então o Shield Vault a absorve antes do ADL.',
        adl: 'A posição excede a capacidade reservada para este par, então o excedente chega ao ADL.',
      },
      isolationNote:
        'Um Shield Vault pode respaldar vários pares, com a cobertura de cada par isolada e seu capital reservado exclusivamente: o mesmo capital nunca conta como cobertura de dois pares ao mesmo tempo. Limites de tomada por evento, restrições de unwind e fórmulas de fee são publicados com os termos de associação de cada par, não no SIP-5B.',
    },
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
    label: 'Ganho Estimado',
  },
  rateInputs: {
    eyebrow: 'Taxas de Yield',
    baseLabel: 'Base DUSD — anual',
    sip2Label: 'SIP #2 — anual',
    placeholder: '0.00',
    rangeHint: 'Insira {min}–{max}%',
    sip2DisabledHint: 'Ative o SIP #2 para aplicar esta taxa.',
    note: 'A StandX não publica nenhuma taxa para DUSD, SIP #2 ou SIP #3. Estes números são seus, e a projeção é aritmética sobre eles.',
  },
  protocolStats: {
    initialCapital: 'Capital Inicial',
    estimatedValue: 'Valor Estimado',
    appliedRate: 'Taxa Aplicada',
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
      sip4: 'SIP #4 — Block Options',
      sip5: 'SIP #5 — Universal Markets',
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
