const uk = {
  topBar: {
    nav: {
      overview: 'Огляд',
      simulator: 'Симулятор',
      playbook: 'Плейбук прибутковості',
      playbookShort: 'Плейбук', // TODO: needs native review
      vaults: 'Vaults',
      ariaLabel: 'Основні розділи',
    },
    community: 'Спільнота', // TODO: needs native review
    language: {
      button: 'Мова',
      buttonAria: 'Відкрити меню мов',
      menuAria: 'Варіанти мови',
    },
  },
  guide: {
    button: 'Режим гіда',
    prompt: 'Вперше у StandX SIPs? Пройдіть 60-секундний гід.',
    start: 'Почати гід',
    stepLabel: 'Крок',
    back: 'Назад',
    next: 'Далі',
    skip: 'Пропустити',
    finish: 'Завершити',
    narrated: 'Озвучений гід',
    pause: 'Пауза',
    resume: 'Продовжити',
    mute: 'Вимкнути звук',
    voiceUnavailable:
      'Озвучення недоступне для цієї мови у вашому браузері. Текстовий гід залишається доступним.',
    steps: {
      dusd: {
        title: 'DUSD',
        text:
          'DUSD приносить дохід автоматично, поки ви його тримаєте. Завжди увімкнено — без стейкінгу, без перемикача.',
      },
      sip2: {
        title: 'SIP #2 Прибутковість Позиції',
        text:
          'Це опціональний шар, який контролюєте ви. Увімкнення SIP #2 додає дохід на прийнятні відкриті позиції поверх базового рівня.',
      },
      sip3: {
        title: 'SIP #3 Розширення Нативної Прибутковості DUSD',
        text:
          'Як і базовий дохід DUSD, SIP #3 завжди активний — торгова активність StandX спрямовується в дохід DUSD у фоні.',
      },
      capital: {
        title: 'Капітал', // TODO: needs native review
        text:
          'Почніть тут. Оберіть пресет або введіть будь-яку суму — 10k і 1.5m працюють. Усе нижче перераховується від цього.', // TODO: needs native review
      },
      rates: {
        title: 'Ставки прибутковості', // TODO: needs native review
        text:
          'Їх задаєте ви. Перше поле — це все припущення щодо DUSD: наявні джерела доходу разом із SIP-3; SIP #2 — опціональний шар зверху. Специфікації не фіксують жодної зі ставок, тому обидва поля порожні й позначені not fixed by SIP.', // TODO: needs native review
      },
      output: {
        title: 'Що дають ваші числа', // TODO: needs native review
        text:
          'Прибуток, графік і статистика читаються з того, що ви ввели вище. Без введеної ставки прибуток дорівнює нулю.', // TODO: needs native review
      },
      vaults: {
        title: 'Community Vaults', // TODO: needs native review
        text:
          'SIP-5B додає три типи сховищ — стратегія, винагорода та щит. Кожне вказує джерело доходу і спосіб виходу.', // TODO: needs native review
      },
      playbook: {
        title: 'Плейбук прибутковості', // TODO: needs native review
        text:
          'Короткі спільнотні сценарії застосування SIP, кожен на кілька кроків від початку до кінця.', // TODO: needs native review
      },
    },
  },
  app: {
    skipToContent: 'Перейти до основного вмісту',
    errors: {
      minAmount: 'Мінімальна сума: $100',
      maxAmount: 'Максимальна сума: $1,000,000',
      minRate: 'Мінімальна ставка: 0%', // TODO: needs native review
      maxRate: 'Максимальна ставка: 100%', // TODO: needs native review
    },
    footer: {
      disclaimer: 'Лише освітня симуляція. Фактичні результати можуть відрізнятися.',
      createdBy: 'Створено: Thisnotmeme,',
    },
  },
  hero: {
    title: {
      line1: 'Розберіться у StandX SIPs,',
      line2: 'у реальному часі',
    },
    subtitle:
      'Інтерактивний багатомовний пояснювач. Моделюйте капітал, візуалізуйте цикл прибутковості та зрозумійте, як DUSD, Position Yield і SIP #3 працюють разом — не залишаючи сторінку.',
    primaryCta: 'Відкрити симулятор',
    secondaryCta: 'Вивчити механіку',
    features: {
      dusd: 'Базова прибутковість DUSD',
      sip2: 'Прибутковість позиції (SIP #2)',
      sip3: 'Розширення DUSD (SIP #3)',
      multilingual: 'Підтримка п’яти мов',
    },
    meta: {
      source: 'Джерело', // TODO: needs native review
      sourceValue: 'docs.standx.com/sip',
      scope: 'Обсяг', // TODO: needs native review
      languages: 'Мови', // TODO: needs native review
      maintainer: 'Супровід', // TODO: needs native review
      maintainerValue: 'Thisnotmeme',
      builtBy: 'Створено', // TODO: needs native review
      builtByValue: 'Спільнотою StandX', // TODO: needs native review
    },
  },
  headline: {
    title: 'Заробіток у реальному часі',
  },
  microCopy: {
    on: 'Усі шари активні — DUSD base + SIP #3 + SIP #2.',
    off: 'DUSD base + SIP #3 уже працюють. Увімкніть SIP #2, щоб додати дохід від позицій.',
  },
  statusChip: {
    on: 'SIP #2 Активний',
    off: 'SIP #2 Вимкнено',
  },
  overview: {
    openSimulator: 'Відкрити симулятор',
    interactivePreview: 'Інтерактивний перегляд',
    previewActive:
      'Усі шари активні. SIP #2 додає дохід від позицій поверх базового рівня.',
    previewIdle:
      'Базовий дохід від DUSD + SIP #3 уже працює. Увімкніть SIP #2, щоб додати дохід від позицій.',
    storyHint: 'Уся логіка розкривається у трьох пов’язаних кроках праворуч.',
  },
  simulator: {
    tag: 'Симулятор прибутковості',
    rangeHint: 'Освітня проєкція. Введіть власні ставки, потім змініть капітал і горизонт.', // TODO: needs native review
    chartAriaLabel: 'Прогнозоване нарахування прибутковості за {horizon} на основі введених вами ставок.', // TODO: needs native review
  },
  toggle: {
    ariaOn: 'Вимкнути прибутковість',
    ariaOff: 'Увімкнути прибутковість',
    on: 'УВІМК',
    off: 'ВИМК',
    active: 'АКТИВНИЙ',
    idle: 'ПРОСТІЙ',
  },
  yieldLoop: {
    eyebrow: 'Цикл прибутковості StandX',
    live: 'Цикл Активний',
    paused: 'Цикл на Паузі',
    statusAlwaysActive: 'Завжди активно',
    statusSip2On: 'SIP #2 активний',
    statusSip2Off: 'SIP #2 вимкнено',
    summary:
      'Базовий дохід DUSD і SIP #3 працюють самостійно. SIP #2 — це шар, який ви вмикаєте, щоб додати дохід від позицій.',
    nodes: {
      dusd: {
        label: 'Капітал',
        title: 'DUSD',
        copy: 'Почніть із капіталу в DUSD — базовому шарі циклу.',
      },
      sip2: {
        label: 'Актив',
        title: 'SIP #2 Прибутковість Позиції',
        copy: 'Відповідна активність може продовжувати генерувати прибутковість, поки позиції відкриті.',
      },
      sip3: {
        label: 'Компаунд',
        title: 'SIP #3 Розширення Нативної Прибутковості DUSD',
        copy: 'Маршрути прибутковості можуть повертати вартість назад у зростання DUSD.',
      },
    },
  },
  education: {
    mechanics: {
      tag: 'Механіка',
      eyebrow: 'Вивчіть механіку',
      title: 'Керований шлях із чотирьох кроків',
      description:
        'Простий цикл, який можна пройти менш ніж за хвилину, щоб зрозуміти, як SIP працює на практиці.',
    },
    stepLabel: 'Крок',
    flowSteps: {
      step1: {
        title: 'Оберіть капітал',
        copy: 'Виберіть стартову суму або використайте швидкий пресет.',
      },
      step2: {
        title: 'Увімкніть SIP Switch',
        copy: 'Активуйте цикл і подивіться, як оживає симулятор.',
      },
      step3: {
        title: 'Перегляньте поведінку заробітку',
        copy: 'Побачте, як значення може змінюватися в реальному часі на різних проміжках.',
      },
      step4: {
        title: 'Дізнайтеся, який SIP це забезпечує',
        copy: 'Зрозумійте, який SIP відповідає за кожну частину досвіду.',
      },
    },
    sipOverview: {
      tag: 'Огляд SIP',
      eyebrow: 'Огляд SIP',
      title: 'SIP-и StandX',
      description:
        'Кожен SIP має свою роль — від уже реалізованої системи прибутковості (SIP #1–#4) до SIP #5, фреймворку в розробці, що формує наступний етап.',
    },
    sipStatus: {
      implemented: 'Реалізовано', // TODO: needs native review
      review: 'На розгляді',
      wip: 'В розробці', // TODO: needs native review
      draft: 'Чернетка',
    },
    sipCards: {
      sip1: {
        title: 'Block Trades',
        copy: 'Полегшує виконання великих угод із меншим впливом на нормальний ринковий потік.',
      },
      sip2: {
        title: 'Position Yield',
        copy: 'Дозволяє відповідним позиціям зберігати активну прибутковість, поки користувачі залишаються в ринку.',
      },
      sip3: {
        title: 'DUSD Native Yield Expansion',
        copy: 'Покращує циркуляцію капіталу, щоб торгова активність підсилювала маршрути прибутковості DUSD.',
      },
      sip4: {
        title: 'Block Options',
        copy: 'Опціоноподібні Take Profit і Stop Loss поверх Block Trade. Ви сплачуєте невелику Reservation Fee за право вийти — або увійти — за фіксованою ціною будь-коли до завершення терміну.',
      },
      // TODO: needs native review (uk) — sip5 / sip5a / sip5b / sip5c
      sip5: {
        title: 'Universal Markets Listing',
        copy: 'Фреймворк у розробці (WIP) для безпермісійного лістингу перпів, тепер поділений на поетапні під-пропозиції. Розгорніть, щоб побачити, що вже реалізовано (5A, 5B) і що досі є чернеткою (5C).',
      },
      sip5a: {
        title: 'Community Maker Yield',
        copy: 'Перший активний елемент Universal Markets. Він оновлює Market Maker Uptime Program до щоденного yield: makerи, що виставляють двосторонню order book ліквідність біля mark price, накопичують "Maker Hours" (зважені за близькістю до ціни та uptime) і ділять щоденний пул винагород у DUSD/token, що поповнюється переробленими торговими комісіями.',
      },
      sip5b: {
        title: 'Community Vaults',
        copy: 'Капітальний шар Universal Markets у трьох типах community vault: Strategy Vault дає змогу підтримати трейдера, Reward Vault тримає maker-бюджет пари, а Shield Vault бере на себе хвостовий ризик ліквідацій перед ADL. Ринок не може відкритися, поки його Sponsor не тримає заблокований equity в одному з них.',
      },
      sip5c: {
        // Placeholder title, verbatim from the official SIP index — no public document yet.
        title: 'Cooooooking',
      },
    },
    draftPlaceholderNote: 'Placeholder в офіційному індексі SIP — публічного документа ще немає.', // TODO: needs native review
    readMore: 'Детальніше',
    openSection: 'Відкрити розділ', // TODO: needs native review
    showSubProposals: 'Показати під-пропозиції', // TODO: needs native review
    hideSubProposals: 'Сховати під-пропозиції', // TODO: needs native review
    communityNote:
      'Створено спільнотою, щоб допомогти користувачам швидше зрозуміти SIP від StandX.',
  },
  // TODO: needs native review (uk) — blockOptions
  blockOptions: {
    tag: 'SIP #4 · Вже доступно',
    title: 'Block Options: TP і SL як зарезервоване право',
    description:
      'StandX перетворює Take Profit і Stop Loss на Block Options. Замість механічного тригера ваш вихід стає правом, яке хтось резервує за комісію, — і власник вирішує, чи виконати його до завершення терміну.',
    intro:
      'Звичайний TP/SL просто спрацьовує за ціною. SIP-4 будується на Block Trade, щоб намір виходу став предметом торгівлі: контрагент сплачує або отримує Reservation Fee, право резервується до завершення терміну, а виконання залишається вибором — не автоматичним стопом на першому різкому ґноті.',
    marginNote: 'Block Options наразі працюють лише з позиціями Cross Margin — не з Isolated.',
    tp: {
      chip: 'Block Option TP',
      title: 'Монетизуйте запланований вихід',
      summary:
        'Ви й так були готові зафіксувати прибуток на цільовому рівні. Запропонуйте цей вихід як торговане право та заробляйте, поки чекаєте.',
      feeLabel: 'Reservation Fee',
      feeValue: 'Ви отримуєте',
      steps: [
        'Відкрийте позицію, виберіть TP і режим Block Option «Community Hedge».',
        'Встановіть ціну TP, кількість для покриття та термін, потім підтвердіть і підпишіть.',
        'Контрагент сплачує вам Reservation Fee, щоб зарезервувати право.',
        'Якщо право виконано — ви виходите за своєю ціною; якщо термін минув без використання — комісія та позиція залишаються у вас.',
      ],
    },
    sl: {
      chip: 'Block Option SL',
      title: 'Захист без втрати контролю',
      summary:
        'Звичайний стоп спрацьовує на першому дотику — включно з ґнотами. Block SL дає зарезервоване право виходу, яким ви користуєтеся тоді, коли вирішите самі.',
      feeLabel: 'Reservation Fee',
      feeValue: 'Ви сплачуєте',
      steps: [
        'Відкрийте позицію, виберіть SL і режим Block Option.',
        'Встановіть ціну захисту, кількість і термін, потім підтвердіть і підпишіть.',
        'Ви сплачуєте обмежену Reservation Fee та чекаєте, поки ордер виконається ончейн.',
        'Якщо ринок і далі йде проти вас — натисніть Execute до завершення терміну; ґніт, що відновлюється, не виб’є вас із позиції.',
      ],
    },
    terms: {
      items: [
        {
          term: 'Reservation Fee',
          copy: 'Платіж за резервування права. Продавець TP її отримує; власник SL — сплачує.',
        },
        {
          term: 'Термін дії (Expiry)',
          copy: 'Зарезервовані права можна виконати до завершення терміну. Невикористані — скасовуються без розрахунку.',
        },
        {
          term: 'Execute',
          copy: 'Американський стиль: власник може виконати право будь-коли до завершення терміну, на власний розсуд.',
        },
      ],
    },
    resourcesLabel: 'Дізнатися більше',
    links: {
      docs: 'Офіційна документація',
      thread: 'Тред StandX',
      intern: 'Аналітичний тред',
    },
  },
  // TODO: needs native review (uk) — vaults section
  vaults: {
    eyebrow: 'SIP #5B · Реалізовано',
    title: 'Community Vaults',
    description:
      'Капітальний шар Universal Markets: три типи community vault, що постачають торговий капітал, maker-бюджети та страхові буфери, на яких тримаються Universal Markets.',
    intro:
      'Якщо SIP-5A увімкнув шар прибутковості Universal Markets, то SIP-5B вмикає шар капіталу. Тип vault фіксується при створенні, і кожен тип має власну економіку, правила ризику та правила виходу.',  // TODO: needs native review
    meta: {
      status: 'Статус',
      release: 'Дата релізу',
    },
    metaValues: {
      status: 'Реалізовано',
      release: '2026-07-18',
    },
    docLink: 'Читати SIP-5B',
    illustrative: 'Illustrative — user-entered amounts, not StandX parameters.',
    notPublished: 'not published',
    types: {
      eyebrow: 'Три типи vault',
      title: 'Один стандарт, три продукти',
      description:
        'Тип vault визначається при створенні, тому вкладник завжди знає, у який продукт входить. Природа, джерело доходу та вихід — це порівняння, яке пропозиція наводить у своїй Motivation.',
      columns: {
        nature: 'Природа',
        return: 'Джерело доходу',
        exit: 'Вихід',
      },
      showDetail: 'Що це',
      hideDetail: 'Згорнути',
      strategy: {
        tag: 'Strategy',
        name: 'Community Strategy Vault',
        nature: 'Капітал, делегований трейдеру',
        return: 'Торговий PnL, yield DUSD',
        exit: 'Вікно обробки виведення',
        detail:
          'Вкладники фінансують vault, owner торгує ним на StandX Perps, а вкладники тримають LP-токени за NAV вольту. Капітал owner і капітал вкладників лежать в одному LP-обліку за однією ціною, тому прибутки та збитки розподіляються пропорційно; owner відмовляється саме від можливості вийти першим.',
        params: [
          { label: 'Мінімальна частка owner — параметр протоколу на початковому запуску', value: '5%' },
          { label: 'Вікно обробки виведення за нормальних умов', value: 'макс. 4 дні' },
        ],
      },
      reward: {
        tag: 'Reward',
        name: 'Community Reward Vault',
        nature: 'Бюджет стимулів ринку',
        return: 'Fee share і рецикл через Stand Mode',
        exit: 'Без вільного виведення',
        detail:
          'Бюджет maker-стимулів пари, обов’язковий, коли Sponsor її лістить. Його активи створені, щоб витрачатися: вони щодня йдуть до community makers через SIP-5A, тому vault не випускає LP-токенів, і зменшення балансу є очікуваним. Stand Mode повертає fee share Sponsor у vault, а внески спільноти не дають жодних прав на бюджет.',
      },
      shield: {
        tag: 'Shield',
        name: 'Community Shield Vault',
        nature: 'Страховий капітал ринку',
        return: 'Liquidation fees, страхові премії, PnL позицій',
        exit: 'Період попередження',
        detail:
          'Страховий капітал, що стоїть перед ADL для пар, які він підтримує. Вкладники тримають LP-токени за NAV і беруть на себе хвостовий ризик в обмін на страховий дохід, з ізоляцією ризику по кожній парі. Shield Vault веде страховий бізнес — і зароблює, і втрачає відповідно.',
      },
    },
    gate: {
      eyebrow: 'Trading Gate',
      description:
        'Ринок переходить із Bootstrapping до Live лише тоді, коли виконано всі чотири умови.',  // TODO: needs native review
      conditions: {
        sponsorEquity:
          'Заблокований equity Sponsor у пов’язаному Shield Vault відповідає required_sponsor_commitment.',
        shieldCapital:
          'Загальний капітал покриття Shield Vault відповідає вимозі ризику цього ринку.',
        rewardBudget:
          'Reward Vault ринку має достатній maker-бюджет для заявленого графіка розподілу.',
        review: 'Джерело оракула, maker depth, OI cap і параметри ризику проходять перевірку.',
      },
      footnote:
        'required_sponsor_commitment встановлюється для кожного ринку окремо — з його OI cap, максимального левериджу, очікуваної волатильності, якості оракула та прогнозованого масштабу ліквідацій; ринки не мають однієї фіксованої цифри.',
    },
    shield: {
      eyebrow: 'Shield Health',
      description:
        'Стан Shield продовжує впливати на дохід Sponsor і стан ринку після запуску. Пройдіть драбину, щоб побачити, що запускає кожну стадію.',
      triggerLabel: 'Тригер',
      thresholdLabel: 'Порог',
      footnote:
        'SIP-5B зазначає, що запускає кожну стадію, але не публікує ні порогів, ні вікна поповнення, ні коефіцієнта покриття — тому їх тут немає. Драбина розширює умовний за станом fee share із SIP-5 до шару капіталу: Sponsor отримує плату за платоспроможність свого ринку, а не за те, що його запустив.',
      stages: {
        escrow: {
          name: 'Fee share переходить у escrow',
          trigger:
            'Заблокований equity Sponsor або загальне покриття vault падає нижче вимоги, і видається повідомлення про поповнення.',
        },
        oiCut: {
          name: 'OI cap знижено або переведення у Watchlist',
          trigger: 'Дефіцит не відновлено протягом вікна поповнення.',
        },
        reduceOnly: {
          name: 'Ринок переходить у ReduceOnly',
          trigger: 'Покриття пробиває жорсткий поріг або залишається ослабленим.',
        },
        sunset: {
          name: 'Ринок переходить у Sunset',
          trigger:
            'Дефіцит неможливо виправити. Частки Sponsor розблоковуються лише після розрахунку всіх позицій і зобов’язань.',
        },
      },
    },
    liquidation: {
      eyebrow: 'Потік ліквідації',
      title: 'Order book, далі Shield Vault, далі ADL',
      description:
        'Коли order book не може поглинути ліквідацію за прийнятними цінами, Shield Vault перебирає позицію за ціною ліквідації та отримує liquidation fee. ADL настає лише тоді, коли зарезервована для цієї пари ємність вичерпана. Введіть власні суми, щоб пройти цей шлях.',
      inputs: {
        positionSize: 'Розмір позиції',
        reservedCapacity: 'Зарезервована ємність для пари',
        liquidationFee: 'Liquidation fee',
      },
      nodes: {
        orderBook: {
          title: 'Order book',
          copy: 'Ліквідація спершу йде в book. Те, що він не може поглинути за прийнятними цінами, рухається далі.',
        },
        shield: {
          title: 'Shield Vault',
          copy: 'Перебирає позицію за ціною ліквідації та отримує liquidation fee, а потім закриває або хеджує її на розсуд owner у межах власних лімітів ризику.',
        },
        adl: {
          title: 'ADL',
          copy: 'Настає лише тоді, коли зарезервована для цієї пари ємність вичерпана. Захист усіх інших пар залишається недоторканим.',
        },
      },
      results: {
        absorbed: 'Поглинуто Shield Vault',
        fee: 'Liquidation fee для vault',
        remaining: 'Залишок зарезервованої ємності',
        adl: 'Доходить до ADL',
      },
      states: {
        idle: 'Введіть розмір позиції, щоб побачити, де вона опиниться.',
        covered:
          'Зарезервована ємність цієї пари покриває позицію, тож Shield Vault поглинає її перед ADL.',
        adl: 'Позиція перевищує зарезервовану для цієї пари ємність, тож надлишок доходить до ADL.',
      },
      isolationNote:
        'Shield Vault може підтримувати кілька пар, де покриття кожної пари ізольоване, а капітал зарезервований виключно за нею: той самий капітал ніколи не рахується покриттям двох пар одночасно. Ліміти перебирання на подію, обмеження unwind і формули fee публікуються разом з умовами асоціації кожної пари, а не в SIP-5B.',
    },
  },
  playbook: {
    tag: 'Плейбук спільноти',
    eyebrow: 'Плейбук прибутковості спільноти',
    title: 'Практичні шляхи, щоб швидко зрозуміти поведінку DUSD і SIP',
    description:
      'Короткі, сфокусовані картки, створені на основі того, як спільнота реально мислить про кожен сценарій.',
    strategyCard: 'Стратегічна картка',
    benefitLabel: 'Перевага',
    disclaimer: 'Лише освітня симуляція. Фактичні результати можуть відрізнятися.',
    actions: {
      try: 'Спробувати сценарій',
      learn: 'Дізнатися більше',
    },
    cards: {
      holdDusd: {
        tag: 'Пасивно',
        title: 'Тримати DUSD',
        headline: 'Отримуйте пасивно без стейкінгу',
        copy: 'Тримайте DUSD напоготові та беріть участь у змодельованій прибутковості з часом.',
        benefit: 'Капітал залишається ліквідним, а прибутковість — видимою.',
      },
      tradeAwareness: {
        tag: 'Активно',
        title: 'Торгуйте усвідомлено',
        headline: 'Відповідні позиції можуть заробляти через SIP #2',
        copy: 'Використовуйте SIP #2 як модель, щоб зрозуміти, як активність і прибутковість працюють разом.',
        benefit: 'Краще обирайте таймінг із меншим простоєм капіталу.',
      },
      understandLoop: {
        tag: 'Система',
        title: 'Зрозумійте цикл',
        headline: 'SIP #3 повертає активність у прибутковість DUSD',
        copy: 'Перегляньте цикл, щоб побачити, як різні дії можуть підживлювати довгострокове зростання.',
        benefit: 'Чіткіша ментальна модель того, як система компаундує.',
      },
      combineLayers: {
        tag: 'Стратегія',
        title: 'Комбінуйте шари',
        headline: 'Базова прибутковість DUSD + прибутковість активної позиції',
        copy: 'Тестуйте різні суми капіталу та проміжки, щоб порівнювати багатошарові результати в одному місці.',
        benefit: 'Практичне планування стратегії з швидкими what-if перевірками.',
      },
    },
  },
  controlPanel: {
    eyebrow: 'Панель керування',
    title: 'Перемикач SIP #2',
    description:
      'Базовий дохід DUSD і SIP #3 завжди активні. Увімкніть SIP #2, щоб додати дохід від позицій.',
    sip2Label: 'SIP #2 — Дохід від позицій',
    sip2Hint:
      'SIP-3 уже враховано у ставці DUSD. SIP-2 — опціональний шар для прийнятних відкритих позицій.', // TODO: needs native review
    breakdown: {
      base: 'DUSD · База + SIP-3', // TODO: needs native review
      sip2: 'SIP #2',
      applied: 'Застосована оцінка', // TODO: needs native review
    },
    learnHowItWorks: 'Дізнатися, як це працює',
  },
  protocolStatus: {
    alwaysActive: 'Завжди активно',
    rows: {
      dusd: {
        title: 'Базовий дохід DUSD',
        copy: 'Заробляє автоматично, поки ви тримаєте DUSD.',
      },
      sip3: {
        title: 'SIP #3 — Розширення DUSD',
        copy: 'Спрямовує торговельну активність у дохід DUSD з часом.',
      },
      sip2: {
        title: 'SIP #2 — Дохід від позицій',
        copy: 'Опціональний шар для прийнятних відкритих позицій.',
      },
    },
  },
  capitalSimulator: {
    eyebrow: 'Симулятор капіталу',
    customAmount: 'Власна сума',
    rangeHint: 'Мін {min} · Макс {max}',
    note: 'Змодельований приклад для освітніх цілей. Фактичні результати можуть відрізнятися.',
    suffixHint: 'Скорочення: 10k = $10,000, 1.5m = $1,500,000.', // TODO: needs native review
  },
  rangeSelector: {
    ariaLabel: 'Часовий діапазон',
  },
  valueDisplay: {
    label: 'Оцінений прибуток', // TODO: needs native review
  },
  rateInputs: {
    eyebrow: 'Ставки прибутковості', // TODO: needs native review
    baseLabel: 'Дохід DUSD — База + SIP-3', // TODO: needs native review
    baseHint:
      'Сукупна річна ставка наявних джерел доходу DUSD і шару комісій, які маршрутизує SIP-3.', // TODO: needs native review
    sip2Label: 'SIP #2 — ефективна річна ставка', // TODO: needs native review
    // Однаковий рядок у всіх мовах — як і два фіксовані маркери сайту.
    notFixedMarker: 'not fixed by SIP',
    placeholder: '0.00',
    rangeHint: 'Введіть {min}–{max}%', // TODO: needs native review
    sip2DisabledHint: 'Увімкніть SIP #2, щоб застосувати цю ставку.', // TODO: needs native review
    note: 'Специфікації SIP не визначають фіксованих APY. Введіть власні припущення. SIP-2 змодельовано як ілюстративну ефективну річну ставку, що не відтворює повну формулу розподілу пулу комісій протоколу.', // TODO: needs native review
  },
  protocolStats: {
    initialCapital: 'Початковий капітал',
    estimatedValue: 'Оцінена вартість',
    appliedRate: 'Застосована ставка', // TODO: needs native review
  },
  scenario: {
    eyebrow: 'Порівняння сценаріїв',
    sipOff: 'SIP #2 Вимкнено',
    sipOn: 'SIP #2 Увімкнено',
    idle: 'Базовий',
    active: 'Активно',
    noGainIdle: 'Базовий дохід від DUSD + SIP #3 продовжує працювати у фоні.',
  },
  footer: {
    brand: 'StandX SIP Guide',
    tagline:
      'Пояснювач системи SIP від StandX, створений спільнотою.',  // TODO: needs native review
    disclaimer:
      'Лише освітня симуляція. Числа є ілюстративними — фактичні результати можуть відрізнятися.',
    sectionsTitle: 'Розділи',  // TODO: needs native review
    resourcesTitle: 'Ресурси',
    resources: {
      sipDocs: 'Документація SIP',  // TODO: needs native review
      website: 'StandX.com',
    },
    communityTitle: 'Спільнота',
    community: {
      author: 'Створено Thisnotmeme',
      twitter: 'StandX на X',
    },
    copyright: '© 2026 Гід спільноти',
    educational: 'Лише для освітніх цілей.',
  },
};

export default uk;
