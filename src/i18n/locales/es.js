const es = {
  topBar: {
    nav: {
      overview: 'Resumen',
      simulator: 'Simulador',
      playbook: 'Playbook de Yield',
      playbookShort: 'Playbook',
      vaults: 'Vaults',
      ariaLabel: 'Secciones principales',
    },
    community: 'Comunidad',
    language: {
      button: 'Idioma',
      buttonAria: 'Abrir menú de idiomas',
      menuAria: 'Opciones de idioma',
    },
  },
  guide: {
    button: 'Modo Guía',
    prompt: '¿Nuevo en StandX SIPs? Haz la guía de 60 segundos.',
    start: 'Iniciar guía',
    stepLabel: 'Paso',
    back: 'Atrás',
    next: 'Siguiente',
    skip: 'Saltar',
    finish: 'Finalizar',
    narrated: 'Guía narrada',
    pause: 'Pausar',
    resume: 'Reanudar',
    mute: 'Silenciar',
    voiceUnavailable:
      'La voz no está disponible para este idioma en tu navegador. La guía en texto sigue disponible.',
    steps: {
      dusd: {
        title: 'DUSD',
        text:
          'DUSD genera rendimiento automáticamente mientras lo mantienes. Siempre está activo: sin staking, sin interruptor.',
      },
      sip2: {
        title: 'SIP #2 Rendimiento de Posición',
        text:
          'Esta es la capa opcional que tú controlas. Activar SIP #2 suma rendimiento sobre posiciones abiertas elegibles por encima del baseline.',
      },
      sip3: {
        title: 'SIP #3 Expansión de Yield Nativo DUSD',
        text:
          'Como el yield base de DUSD, SIP #3 siempre está activo: la actividad de trading en StandX se canaliza al yield de DUSD en segundo plano.',
      },
      capital: {
        title: 'Capital',
        text:
          'Empieza aquí. Elige un preset o escribe cualquier monto: 10k y 1.5m funcionan. Todo lo de abajo se recalcula a partir de esto.',
      },
      rates: {
        title: 'Tasas de rendimiento',
        text:
          'Las pones tú. StandX no publica ninguna de las dos, así que ambos campos empiezan vacíos y llevan la marca not published: aquí no se adivina nada por ti.',
      },
      output: {
        title: 'Lo que producen tus números',
        text:
          'La ganancia, el gráfico y las estadísticas se leen de lo que escribiste arriba. Sin tasa, la ganancia es cero.',
      },
      vaults: {
        title: 'Community Vaults',
        text:
          'SIP-5B suma tres tipos de vault: estrategia, recompensa y escudo. Cada uno declara su fuente de retorno y cómo se sale.',
      },
      playbook: {
        title: 'Playbook de Yield',
        text:
          'Flujos breves de la comunidad para usar los SIP, cada uno de pocos pasos de principio a fin.',
      },
    },
  },
  app: {
    skipToContent: 'Ir al contenido principal',
    errors: {
      minAmount: 'Monto mínimo: $100',
      maxAmount: 'Monto máximo: $1,000,000',
      minRate: 'Tasa mínima: 0%',
      maxRate: 'Tasa máxima: 100%',
    },
    footer: {
      disclaimer: 'Simulación educativa. Los resultados reales pueden variar.',
      createdBy: 'Creado por: Thisnotmeme,',
    },
  },
  hero: {
    title: {
      line1: 'Entiende los SIP de StandX,',
      line2: 'en tiempo real',
    },
    subtitle:
      'Un explicador interactivo y multilingüe. Simula capital, visualiza el bucle de rendimiento y descubre cómo DUSD, Position Yield y SIP #3 funcionan juntos — sin salir de la página.',
    primaryCta: 'Abrir simulador',
    secondaryCta: 'Aprender la mecánica',
    features: {
      dusd: 'Yield base de DUSD',
      sip2: 'Yield de posición (SIP #2)',
      sip3: 'Expansión DUSD (SIP #3)',
      multilingual: 'Cinco idiomas soportados',
    },
    meta: {
      source: 'Fuente',
      sourceValue: 'docs.standx.com/sip',
      scope: 'Alcance',
      languages: 'Idiomas',
      maintainer: 'Responsable',
      maintainerValue: 'Thisnotmeme',
      builtBy: 'Hecho por',
      builtByValue: 'La comunidad de StandX',
    },
  },
  headline: {
    title: 'Rendimiento en tiempo real',
  },
  microCopy: {
    on: 'Todas las capas activas: DUSD base + SIP #3 + SIP #2.',
    off: 'DUSD base + SIP #3 ya están generando. Activa SIP #2 para sumar rendimiento de posiciones.',
  },
  statusChip: {
    on: 'SIP #2 Activo',
    off: 'SIP #2 Apagado',
  },
  overview: {
    openSimulator: 'Abrir simulador',
    interactivePreview: 'Vista previa interactiva',
    previewActive:
      'Todas las capas activas. SIP #2 ahora suma rendimiento de posiciones sobre la base.',
    previewIdle:
      'El rendimiento base de DUSD + SIP #3 ya está corriendo. Activa SIP #2 para sumar rendimiento de posiciones.',
    storyHint: 'Toda la lógica se muestra en tres pasos conectados a la derecha.',
  },
  simulator: {
    tag: 'Simulador de Yield',
    rangeHint: 'Proyección educativa. Introduce tus propias tasas y luego ajusta capital y horizonte.',
    chartAriaLabel: 'Acumulación de rendimiento proyectada en {horizon}, según las tasas que introdujiste.',
  },
  toggle: {
    ariaOn: 'Desactivar rendimiento',
    ariaOff: 'Activar rendimiento',
    on: 'ENCENDIDO',
    off: 'APAGADO',
    active: 'ACTIVO',
    idle: 'INACTIVO',
  },
  yieldLoop: {
    eyebrow: 'Bucle de Yield StandX',
    live: 'Bucle Activo',
    paused: 'Bucle en Pausa',
    statusAlwaysActive: 'Siempre activo',
    statusSip2On: 'SIP #2 activo',
    statusSip2Off: 'SIP #2 apagado',
    summary:
      'El rendimiento base de DUSD y SIP #3 funcionan por sí solos. SIP #2 es la capa que tú activas para sumar rendimiento de posiciones.',
    nodes: {
      dusd: {
        label: 'Capital',
        title: 'DUSD',
        copy: 'Empieza con capital en DUSD, la capa base del bucle.',
      },
      sip2: {
        label: 'Activo',
        title: 'SIP #2 Rendimiento de Posición',
        copy: 'La actividad elegible puede seguir generando rendimiento mientras las posiciones permanecen abiertas.',
      },
      sip3: {
        label: 'Compuesto',
        title: 'SIP #3 Expansión de Yield Nativo DUSD',
        copy: 'Las rutas de rendimiento pueden devolver valor al crecimiento de DUSD.',
      },
    },
  },
  education: {
    mechanics: {
      tag: 'Mecánica',
      eyebrow: 'Aprende la mecánica',
      title: 'Un recorrido guiado en cuatro pasos',
      description:
        'Un bucle simple que puedes recorrer en menos de un minuto para entender cómo funciona SIP en la práctica.',
    },
    stepLabel: 'Paso',
    flowSteps: {
      step1: {
        title: 'Elige tu capital',
        copy: 'Selecciona un monto inicial o usa un preset rápido.',
      },
      step2: {
        title: 'Activa SIP Switch',
        copy: 'Activa el bucle y mira cómo cobra vida el simulador.',
      },
      step3: {
        title: 'Previsualiza el comportamiento',
        copy: 'Observa cómo puede evolucionar el valor en distintos periodos en tiempo real.',
      },
      step4: {
        title: 'Aprende qué SIP lo impulsa',
        copy: 'Comprende qué SIP impulsa cada parte de la experiencia.',
      },
    },
    sipOverview: {
      tag: 'Resumen SIP',
      eyebrow: 'Resumen SIP',
      title: 'Los SIPs de StandX',
      description:
        'Cada SIP cumple un rol específico — desde el sistema de yield ya implementado (SIP #1–#4) hasta el SIP #5, el marco en desarrollo que define lo que viene.',
    },
    sipStatus: {
      implemented: 'Implementado',
      review: 'En revisión',
      wip: 'En desarrollo',
      draft: 'Borrador',
    },
    sipCards: {
      sip1: {
        title: 'Operaciones en Bloque',
        copy: 'Facilita ejecutar operaciones grandes con menos impacto en el flujo normal del mercado.',
      },
      sip2: {
        title: 'Rendimiento de Posición',
        copy: 'Permite que posiciones elegibles mantengan el rendimiento activo mientras operas en el mercado.',
      },
      sip3: {
        title: 'Expansión de Yield Nativo DUSD',
        copy: 'Mejora cómo circula el capital para reforzar rutas de rendimiento de DUSD.',
      },
      sip4: {
        title: 'Block Options',
        copy: 'Take Profit y Stop Loss tipo opción sobre Block Trade. Pagas una pequeña Reservation Fee por el derecho a salir — o entrar — a un precio fijo en cualquier momento antes del vencimiento.',
      },
      sip5: {
        title: 'Universal Markets Listing',
        copy: 'Un marco en desarrollo para el listado de perps sin permisos, ahora dividido en sub-propuestas por etapas. Despliega para ver qué ya está implementado (5A, 5B) y qué sigue en borrador (5C).',
      },
      sip5a: {
        title: 'Community Maker Yield',
        copy: 'La primera pieza activa de Universal Markets. Convierte el Market Maker Uptime Program en un yield diario: los makers que cotizan liquidez de doble lado cerca del precio marca acumulan "Maker Hours" — ponderadas por cercanía al precio y por uptime — y reparten un pool diario de recompensas en DUSD/token, reforzado con comisiones de trading recicladas.',
      },
      sip5b: {
        title: 'Community Vaults',
        copy: 'La capa de capital de Universal Markets, en tres tipos de vault comunitario: los Strategy Vaults permiten respaldar a un trader, los Reward Vaults guardan el presupuesto de makers de un par y los Shield Vaults asumen el riesgo de cola de las liquidaciones por delante del ADL. Un mercado no puede abrir hasta que su Sponsor mantenga equity bloqueado en uno.',
      },
      sip5c: {
        // Título placeholder, literal del índice oficial de SIPs — todavía sin documento público.
        title: 'Cooooooking',
      },
    },
    draftPlaceholderNote: 'Placeholder en el índice oficial de SIPs — todavía sin documento público.',
    readMore: 'Leer más',
    openSection: 'Abrir sección',
    showSubProposals: 'Ver sub-propuestas',
    hideSubProposals: 'Ocultar sub-propuestas',
    communityNote:
      'Construido por la comunidad para ayudar a entender los SIPs de StandX más rápido.',
  },
  blockOptions: {
    tag: 'SIP #4 · Ya disponible',
    title: 'Block Options: TP y SL como un derecho reservado',
    description:
      'StandX convierte el Take Profit y el Stop Loss en Block Options. En lugar de un disparador mecánico, tu salida se vuelve un derecho que alguien reserva pagando una comisión, y quien lo tiene decide si lo ejecuta antes del vencimiento.',
    intro:
      'Un TP/SL normal solo se dispara a un precio. SIP-4 se apoya en Block Trade para que la intención de salida sea negociable: una contraparte paga o recibe una Reservation Fee, el derecho queda reservado hasta el vencimiento, y ejecutar sigue siendo una decisión, no un stop automático por la primera mecha fea.',
    marginNote:
      'Las Block Options funcionan por ahora solo con posiciones en Cross Margin, no en Isolated.',
    tp: {
      chip: 'Block Option TP',
      title: 'Monetiza una salida planeada',
      summary:
        'Ya estabas dispuesto a tomar ganancias en un nivel. Ofrece esa salida como un derecho negociable y gana mientras esperas.',
      feeLabel: 'Reservation Fee',
      feeValue: 'Recibes',
      steps: [
        'Abre tu posición, selecciona TP y elige el modo Block Option “Community Hedge”.',
        'Define el precio de TP, la cantidad a cubrir y el vencimiento; luego confirma y firma.',
        'Una contraparte te paga la Reservation Fee para reservar el derecho.',
        'Si se ejecuta, sales a tu precio; si vence sin usarse, conservas la comisión y la posición.',
      ],
    },
    sl: {
      chip: 'Block Option SL',
      title: 'Protección sin perder el control',
      summary:
        'Un stop normal se dispara al primer toque, mechas incluidas. El Block SL te da un derecho de salida reservado que usas cuando tú decides.',
      feeLabel: 'Reservation Fee',
      feeValue: 'Pagas',
      steps: [
        'Abre tu posición, selecciona SL y elige el modo Block Option.',
        'Define el precio de protección, la cantidad y el vencimiento; luego confirma y firma.',
        'Pagas una Reservation Fee limitada y esperas a que la orden se llene onchain.',
        'Si el mercado sigue en tu contra, pulsa Execute antes del vencimiento; una mecha que se recupera no te saca.',
      ],
    },
    terms: {
      items: [
        {
          term: 'Reservation Fee',
          copy: 'El pago por reservar el derecho. En el TP la recibe quien vende; en el SL la paga quien la tiene.',
        },
        {
          term: 'Vencimiento',
          copy: 'El derecho reservado se puede ejercer hasta el vencimiento. Sin usar, se cancela sin liquidación.',
        },
        {
          term: 'Execute',
          copy: 'Estilo americano: quien lo tiene puede ejecutar cuando quiera antes del vencimiento, a su criterio.',
        },
      ],
    },
    resourcesLabel: 'Saber más',
    links: {
      docs: 'Docs oficiales',
      thread: 'Hilo de StandX',
      intern: 'Hilo explicativo',
    },
  },
  vaults: {
    eyebrow: 'SIP #5B · Implementado',
    title: 'Community Vaults',
    description:
      'La capa de capital de Universal Markets: tres tipos de vault comunitario que aportan el capital de trading, los presupuestos de makers y los colchones de seguro sobre los que se construyen los Universal Markets.',
    intro:
      'Si SIP-5A activó la capa de rendimiento de Universal Markets, SIP-5B activa la capa de capital. El tipo de un vault queda fijado en su creación, y cada tipo lleva su propia economía, sus reglas de riesgo y sus reglas de salida.',
    meta: {
      status: 'Estado',
      release: 'Fecha de release',
    },
    metaValues: {
      status: 'Implementado',
      release: '2026-07-18',
    },
    docLink: 'Leer SIP-5B',
    illustrative: 'Illustrative — user-entered amounts, not StandX parameters.',
    notPublished: 'not published',
    types: {
      eyebrow: 'Tres tipos de vault',
      title: 'Un estándar, tres productos',
      description:
        'El tipo de un vault se define al crearlo, así que quien deposita siempre sabe en qué producto entra. Naturaleza, fuente de retorno y salida son la comparación que la propuesta plantea en su Motivation.',
      columns: {
        nature: 'Naturaleza',
        return: 'Fuente de retorno',
        exit: 'Salida',
      },
      showDetail: 'Qué es',
      hideDetail: 'Ocultar',
      strategy: {
        tag: 'Strategy',
        name: 'Community Strategy Vault',
        nature: 'Capital delegado a un trader',
        return: 'PnL de trading, yield de DUSD',
        exit: 'Ventana de procesamiento de retiros',
        detail:
          'Los depositantes financian el vault, el owner opera con él en StandX Perps y los depositantes reciben LP tokens valorados al NAV del vault. El capital del owner y el de los depositantes están en la misma contabilidad LP y al mismo precio, así que ganancias y pérdidas se soportan de forma proporcional; lo que el owner cede es la posibilidad de salir primero.',
        params: [
          { label: 'Participación mínima del owner — parámetro de protocolo en el lanzamiento inicial', value: '5%' },
          { label: 'Ventana de procesamiento de retiros, en condiciones normales', value: 'máx. 4 días' },
        ],
      },
      reward: {
        tag: 'Reward',
        name: 'Community Reward Vault',
        nature: 'El presupuesto de incentivos de un mercado',
        return: 'Fee share y reciclaje vía Stand Mode',
        exit: 'Sin retiro libre',
        detail:
          'El presupuesto de incentivos para makers de un par, obligatorio cuando un Sponsor lo lista. Sus activos están diseñados para gastarse: fluyen a diario hacia los makers de la comunidad mediante SIP-5A, por lo que el vault no emite LP tokens y se espera que su saldo baje. Stand Mode devuelve el fee share del Sponsor al vault, y las contribuciones de la comunidad no otorgan ningún derecho sobre el presupuesto.',
      },
      shield: {
        tag: 'Shield',
        name: 'Community Shield Vault',
        nature: 'El capital de seguro de un mercado',
        return: 'Liquidation fees, primas de seguro, PnL de posiciones',
        exit: 'Periodo de preaviso',
        detail:
          'Capital de seguro que se sitúa por delante del ADL para los pares que respalda. Los depositantes reciben LP tokens valorados al NAV y asumen el riesgo de cola a cambio de ingresos de seguro, con el riesgo aislado por par. Un Shield Vault opera un negocio de seguros, y gana como tal y pierde como tal.',
      },
    },
    gate: {
      eyebrow: 'Trading Gate',
      description:
        'Un mercado pasa de Bootstrapping a Live solo cuando se cumplen las cuatro condiciones.',
      conditions: {
        sponsorEquity:
          'El equity bloqueado del Sponsor en el Shield Vault asociado cumple required_sponsor_commitment.',
        shieldCapital:
          'El capital total de cobertura del Shield Vault cumple el requisito de riesgo del mercado.',
        rewardBudget:
          'El Reward Vault del mercado tiene presupuesto de makers suficiente para el calendario de liberación declarado.',
        review: 'La fuente de oráculo, la profundidad de makers, el OI cap y los parámetros de riesgo pasan la revisión.',
      },
      footnote:
        'required_sponsor_commitment se fija por mercado a partir de su OI cap, apalancamiento máximo, volatilidad esperada, calidad del oráculo y escala de liquidación proyectada: los mercados no comparten una cifra fija.',
    },
    shield: {
      eyebrow: 'Shield Health',
      description:
        'La salud del Shield sigue actuando sobre los ingresos del Sponsor y el estado del mercado después del lanzamiento. Recorre la escalera para ver qué dispara cada etapa.',
      triggerLabel: 'Disparador',
      thresholdLabel: 'Umbral',
      footnote:
        'SIP-5B indica qué dispara cada etapa, pero no publica ningún umbral, ventana de reposición ni ratio de cobertura, así que aquí no aparece ninguno. La escalera extiende el fee share condicionado a la salud de SIP-5 hasta la capa de capital: a los Sponsors se les paga por mantener su mercado solvente, no por haberlo lanzado.',
      stages: {
        escrow: {
          name: 'El fee share pasa a escrow',
          trigger:
            'El equity bloqueado del Sponsor o la cobertura general del vault cae por debajo del requisito, y se emite un aviso de reposición.',
        },
        oiCut: {
          name: 'OI cap reducido, o paso a Watchlist',
          trigger: 'El déficit no se restablece dentro de la ventana de reposición.',
        },
        reduceOnly: {
          name: 'El mercado entra en ReduceOnly',
          trigger: 'La cobertura rompe el umbral duro, o sigue deteriorada.',
        },
        sunset: {
          name: 'El mercado entra en Sunset',
          trigger:
            'El déficit no puede repararse. Las shares del Sponsor se desbloquean solo cuando se liquidan todas las posiciones y responsabilidades.',
        },
      },
    },
    liquidation: {
      eyebrow: 'Flujo de liquidación',
      title: 'Order book, luego Shield Vault, luego ADL',
      description:
        'Cuando el order book no puede absorber una liquidación a precios aceptables, el Shield Vault se queda la posición al precio de liquidación y recibe el liquidation fee. Solo se llega al ADL cuando se agota la capacidad reservada para ese par. Introduce tus propios importes para recorrer el camino.',
      inputs: {
        positionSize: 'Tamaño de la posición',
        reservedCapacity: 'Capacidad reservada para el par',
        liquidationFee: 'Liquidation fee',
      },
      nodes: {
        orderBook: {
          title: 'Order book',
          copy: 'La liquidación va primero al book. Lo que no pueda absorber a precios aceptables sigue adelante.',
        },
        shield: {
          title: 'Shield Vault',
          copy: 'Toma la posición al precio de liquidación y recibe el liquidation fee; después la deshace o la cubre a discreción del owner, dentro de sus propios límites de riesgo.',
        },
        adl: {
          title: 'ADL',
          copy: 'Solo se alcanza cuando se agota la capacidad reservada para este par. La protección del resto de pares queda intacta.',
        },
      },
      results: {
        absorbed: 'Absorbido por el Shield Vault',
        fee: 'Liquidation fee para el vault',
        remaining: 'Capacidad reservada restante',
        adl: 'Llega al ADL',
      },
      states: {
        idle: 'Introduce un tamaño de posición para ver dónde acaba.',
        covered:
          'La capacidad reservada de este par cubre la posición, así que el Shield Vault la absorbe antes del ADL.',
        adl: 'La posición supera la capacidad reservada para este par, así que el exceso llega al ADL.',
      },
      isolationNote:
        'Un Shield Vault puede respaldar varios pares, con la cobertura de cada par aislada y su capital reservado en exclusiva: el mismo capital nunca cuenta como cobertura de dos pares a la vez. Los límites de toma por evento, las restricciones de unwind y las fórmulas de fees se publican con los términos de asociación de cada par, no en SIP-5B.',
    },
  },
  playbook: {
    tag: 'Playbook Comunitario',
    eyebrow: 'Playbook de Yield Comunitario',
    title: 'Rutas prácticas para entender rápido DUSD y el comportamiento SIP',
    description:
      'Tarjetas breves y con enfoque, basadas en cómo la comunidad realmente piensa cada flujo.',
    strategyCard: 'Tarjeta de estrategia',
    benefitLabel: 'Beneficio',
    disclaimer: 'Simulación educativa. Los resultados reales pueden variar.',
    actions: {
      try: 'Probar este flujo',
      learn: 'Más información',
    },
    cards: {
      holdDusd: {
        tag: 'Pasivo',
        title: 'Mantener DUSD',
        headline: 'Gana pasivamente sin hacer staking',
        copy: 'Mantén DUSD listo mientras participas en el comportamiento de yield simulado con el tiempo.',
        benefit: 'Tu capital se mantiene líquido mientras el rendimiento sigue visible.',
      },
      tradeAwareness: {
        tag: 'Activo',
        title: 'Opera con criterio',
        headline: 'Las posiciones elegibles pueden ganar mediante SIP #2',
        copy: 'Usa SIP #2 como marco para entender cómo actividad y rendimiento pueden trabajar juntos.',
        benefit: 'Mejor timing con menos capital ocioso.',
      },
      understandLoop: {
        tag: 'Sistema',
        title: 'Entiende el bucle',
        headline: 'SIP #3 redirige actividad al yield de DUSD',
        copy: 'Sigue la vista del bucle para ver cómo distintas acciones pueden impulsar crecimiento a largo plazo.',
        benefit: 'Modelo mental más claro de cómo el sistema compone.',
      },
      combineLayers: {
        tag: 'Estrategia',
        title: 'Combina las capas',
        headline: 'Yield base de DUSD + yield de posición activa',
        copy: 'Prueba distintos montos y periodos para comparar resultados por capas en un solo lugar.',
        benefit: 'Planificación práctica con análisis what-if rápidos.',
      },
    },
  },
  controlPanel: {
    eyebrow: 'Panel de control',
    title: 'Interruptor SIP #2',
    description:
      'El rendimiento base de DUSD y SIP #3 están siempre activos. Activa SIP #2 para sumar rendimiento de posiciones por encima.',
    sip2Label: 'SIP #2 — Rendimiento de posición',
    sip2Hint: 'Capa opcional. Activa el rendimiento en posiciones abiertas elegibles.',
    breakdown: {
      base: 'Base',
      sip2: 'SIP #2',
      applied: 'Aplicada',
    },
    learnHowItWorks: 'Aprender cómo funciona',
  },
  protocolStatus: {
    alwaysActive: 'Siempre activo',
    rows: {
      dusd: {
        title: 'Rendimiento base DUSD',
        copy: 'Genera automáticamente mientras mantienes DUSD.',
      },
      sip3: {
        title: 'SIP #3 — Expansión DUSD',
        copy: 'Canaliza la actividad de trading hacia el rendimiento de DUSD con el tiempo.',
      },
      sip2: {
        title: 'SIP #2 — Rendimiento de posición',
        copy: 'Capa opcional para posiciones abiertas elegibles.',
      },
    },
  },
  capitalSimulator: {
    eyebrow: 'Simulador de capital',
    customAmount: 'Monto personalizado',
    rangeHint: 'Mín {min} · Máx {max}',
    note: 'Ejemplo simulado con fines educativos. Los resultados reales pueden variar.',
    suffixHint: 'Abreviatura: 10k = $10,000, 1.5m = $1,500,000.',
  },
  rangeSelector: {
    ariaLabel: 'Rango de tiempo',
  },
  valueDisplay: {
    label: 'Ganancia estimada',
  },
  rateInputs: {
    eyebrow: 'Tasas de rendimiento',
    baseLabel: 'Base DUSD — anual',
    sip2Label: 'SIP #2 — anual',
    placeholder: '0.00',
    rangeHint: 'Introduce {min}–{max}%',
    sip2DisabledHint: 'Activa SIP #2 para aplicar esta tasa.',
    note: 'StandX no publica ninguna tasa para DUSD, SIP #2 ni SIP #3. Estas cifras son tuyas y la proyección es aritmética sobre ellas.',
  },
  protocolStats: {
    initialCapital: 'Capital inicial',
    estimatedValue: 'Valor estimado',
    appliedRate: 'Tasa aplicada',
  },
  scenario: {
    eyebrow: 'Comparación de escenarios',
    sipOff: 'SIP #2 Apagado',
    sipOn: 'SIP #2 Encendido',
    idle: 'Base',
    active: 'Activo',
    noGainIdle: 'El rendimiento base de DUSD + SIP #3 sigue activo de fondo.',
  },
  footer: {
    brand: 'StandX SIP Guide',
    tagline:
      'Un explicador construido por la comunidad para el sistema SIP de StandX. Sin afiliación con el equipo de StandX.',
    disclaimer:
      'Solo simulación educativa. Los números son ilustrativos — los resultados reales pueden variar.',
    resourcesTitle: 'Recursos',
    resources: {
      docs: 'Docs de StandX',
      website: 'StandX.com',
      sip1: 'SIP #1 — Block Trades',
      sip2: 'SIP #2 — Position Yield',
      sip3: 'SIP #3 — DUSD Native Yield',
      sip4: 'SIP #4 — Block Options',
      sip5: 'SIP #5 — Universal Markets',
    },
    communityTitle: 'Comunidad',
    community: {
      author: 'Creado por Thisnotmeme',
      twitter: 'StandX en X',
    },
    copyright: '© 2026 Guía de la comunidad',
    educational: 'Solo para uso educativo.',
  },
};

export default es;
