const es = {
  topBar: {
    nav: {
      overview: 'Resumen',
      simulator: 'Simulador',
      playbook: 'Playbook de Yield',
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
        text: 'DUSD genera rendimiento automáticamente mientras lo mantienes. Siempre está activo: sin staking, sin interruptor.',
      },
      sip2: {
        title: 'SIP #2 Rendimiento de Posición',
        text: 'Esta es la capa opcional que tú controlas. Activar SIP #2 suma rendimiento sobre posiciones abiertas elegibles por encima del baseline.',
      },
      sip3: {
        title: 'SIP #3 Expansión de Yield Nativo DUSD',
        text: 'Como el yield base de DUSD, SIP #3 siempre está activo: la actividad de trading en StandX se canaliza al yield de DUSD en segundo plano.',
      },
      protocolLayers: {
        title: 'Cómo se apilan las capas',
        text: 'DUSD y SIP #3 corren solos. SIP #2 es la capa que tú decides encender. El panel de control muestra qué es pasivo y qué activas tú.',
      },
      simulator: {
        title: 'Simulador',
        text: 'Prueba distintos montos, periodos y escenarios de referencia para previsualizar cómo puede comportarse cada capa.',
      },
      playbook: {
        title: 'Playbook de Yield',
        text: 'Explora flujos simples de la comunidad para entender y usar los SIPs de StandX.',
      },
    },
  },
  app: {
    skipToContent: 'Ir al contenido principal',
    errors: {
      minAmount: 'Monto mínimo: $100',
      maxAmount: 'Monto máximo: $1,000,000',
    },
    chartMarkers: ['12 oct', '26 oct', '09 nov', 'Activo'],
    footer: {
      disclaimer: 'Simulación educativa. Los resultados reales pueden variar.',
      createdBy: 'Creado por: Thisnotmeme,',
    },
  },
  hero: {
    tag: 'Hecho por la comunidad',
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
    rangeHint:
      'Simulación educativa. Ajusta capital y periodo para previsualizar el comportamiento.',
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
        'Cada SIP cumple un rol específico — desde el sistema de yield activo (SIP #1–#3) hasta nuevas propuestas que definen lo que viene (SIP #4–#5).',
    },
    sipStatus: {
      live: 'Activo',
      review: 'En revisión',
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
        title: 'Universal Markets',
        copy: 'Una propuesta de listado de perps sin permisos: cualquiera puede patrocinar un mercado haciendo staking de DUSD, financiando a market-makers de la comunidad y ganando una parte de las comisiones.',
      },
    },
    readMore: 'Leer más',
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
  },
  rangeSelector: {
    ariaLabel: 'Rango de tiempo',
  },
  valueDisplay: {
    label: 'Rendimiento total generado',
  },
  protocolStats: {
    initialCapital: 'Capital inicial',
    estimatedValue: 'Valor estimado',
    estimatedGain: 'Ganancia estimada',
    yieldPct: 'Yield %',
  },
  scenarioSelector: {
    label: 'Escenario de referencia SIP #2',
    illustrative: 'Solo ilustrativo — la tasa real la define el protocolo.',
    hint: 'Los escenarios muestran rangos de comportamiento de SIP #2 con fines educativos. La tasa real de SIP #2 la determina el protocolo, no el usuario. DUSD base y SIP #3 no se ven afectados.',
    disabledHint: 'Activa SIP #2 para aplicar el escenario seleccionado.',
    conservative: 'Conservador',
    base: 'Base',
    optimistic: 'Optimista',
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
