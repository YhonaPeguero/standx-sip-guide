const es = {
  topBar: {
    nav: {
      overview: 'Resumen',
      simulator: 'Simulador',
      playbook: 'Playbook de Yield',
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
        text: 'DUSD puede generar rendimiento automáticamente mientras lo mantienes, sin staking.',
      },
      sip2: {
        title: 'SIP #2 Rendimiento de Posición',
        text: 'Las posiciones abiertas elegibles pueden seguir generando rendimiento mientras estén activas.',
      },
      sip3: {
        title: 'SIP #3 Expansión de Yield Nativo DUSD',
        text: 'La actividad de trading en StandX puede ayudar a fortalecer el yield de DUSD con el tiempo.',
      },
      simulator: {
        title: 'Simulador',
        text: 'Prueba distintos montos de capital y periodos para previsualizar cómo pueden comportarse las capas de yield.',
      },
      playbook: {
        title: 'Playbook de Yield',
        text: 'Explora flujos simples de la comunidad para entender y usar los SIPs de StandX.',
      },
    },
  },
  app: {
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
  headline: {
    title: 'Rendimiento en tiempo real',
  },
  microCopy: {
    on: 'Tu capital, generando rendimiento.',
    off: 'Tu capital, inactivo.',
  },
  statusChip: {
    on: 'Protocolo Activo',
    off: 'Protocolo Inactivo',
  },
  overview: {
    openSimulator: 'Abrir simulador',
    interactivePreview: 'Vista previa interactiva',
    previewActive:
      'Cuando está activo, el bucle simula cómo el capital puede seguir moviéndose entre capas de rendimiento.',
    previewIdle: 'Activa SIP para ver cómo puede funcionar el bucle de rendimiento con el tiempo.',
    storyHint: 'Toda la lógica se muestra en tres pasos conectados a la derecha.',
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
    summary:
      'El capital fluye por DUSD, se activa con SIP #2 y se refuerza con SIP #3 para mantener el bucle en marcha.',
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
      eyebrow: 'Resumen SIP',
      title: 'Tres SIPs trabajando juntos',
      description: 'Cada SIP cumple un rol específico. Juntos definen cómo se comporta el bucle de StandX.',
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
    },
    readMore: 'Leer más',
    communityNote: 'Construido por la comunidad para ayudar a entender los SIPs de StandX más rápido.',
  },
  playbook: {
    eyebrow: 'Playbook de Yield Comunitario',
    title: 'Rutas prácticas para entender rápido DUSD y el comportamiento SIP',
    description:
      'Tarjetas breves y con enfoque, basadas en cómo la comunidad realmente piensa cada flujo.',
    strategyCard: 'Tarjeta de estrategia',
    benefitLabel: 'Beneficio:',
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
    title: 'SIP Switch',
    description: 'Visualiza cómo el capital activo puede generar rendimiento con el tiempo.',
    learnHowItWorks: 'Aprender cómo funciona',
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
  scenario: {
    eyebrow: 'Comparación de escenarios',
    sipOff: 'SIP Apagado',
    sipOn: 'SIP Encendido',
    idle: 'Inactivo',
    active: 'Activo',
    noGainIdle: 'Sin ganancia proyectada mientras está inactivo.',
  },
};

export default es;
