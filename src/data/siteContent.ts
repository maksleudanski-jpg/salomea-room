export const assetPaths = {
  facade: "/assets/college-facade.webp",
  facadeSource: "/assets/college-facade-source.jpg",
  heroFrame: "/assets/seq/main/frame_001.webp",
  finalFrame: "/assets/seq/main/frame_120.webp",
  statue: "/assets/statue-concept.png",
  salomeaEmblem: "/assets/images/salomea-emblem.webp",
  salomeaCutout: "/assets/images/salomea-cutout.webp",
  salomeaPoster: "/assets/images/salomea-poster.webp",
  collegeSticker: "/assets/images/college-sticker.webp",
  archiveFallback: "/assets/images/cinema-poster.webp",
  sequenceFallback: "/assets/seq/main/frame_120.webp",
  salomea: "/assets/images/salameya_1.jpg",
  college: '/assets/images/college.png',
};

export const heroContent = {
  label: "Проект для пространства колледжа",
  title: "Саломея Русецкая",
  subtitle: "как символ Колледжа бизнеса и права",
  body:
    "Мы предлагаем разместить статую Саломеи Русецкой у входа в колледж как знак образования, смелости и личного выбора. Её история показывает, что знания помогают человеку выйти за пределы своего времени и оставить след.",
  ideaTitle: "Идея проекта",
  ideaBody:
    "Статуя не как украшение, а как место, которое встречает студентов и напоминает им о силе знаний.",
};

export const salomeaCards = [
  {
    eyebrow: 'I',
    title: "Знание",
    body: "Её путь связан с постоянным обучением, практикой и работой с людьми разных культур.",
  },
  {
    eyebrow: 'II',
    title: "Смелость",
    body: "Она выбрала профессию, которая требовала силы характера, самостоятельности и внутренней свободы.",
  },
  {
    eyebrow: 'III',
    title: "Движение",
    body: "Её жизнь проходила через города, языки и новые возможности, превращая знание в действие.",
  },
];

export const mainSequenceBeats = [
  {
    title: "Пространство",
    body: "Фасад колледжа становится отправной точкой идеи.",
    range: [0.04, 0.23] as const,
    align: "left" as const,
  },
  {
    title: "Место",
    body: "У входа появляется зона, где может возникнуть новый символ.",
    range: [0.27, 0.45] as const,
    align: "right" as const,
  },
  {
    title: "Образ",
    body: "Саломея Русецкая входит в пространство колледжа как знак знаний и смелости.",
    range: [0.52, 0.71] as const,
    align: "left" as const,
  },
  {
    title: "Символ",
    body: "Статуя становится не украшением, а частью образовательной среды.",
    range: [0.76, 0.96] as const,
    align: "right" as const,
  },
];

export const archiveSequenceBeats = [
  {
    title: "История",
    body: "Архивная сцена переносит рассказ из пространства колледжа в эпоху Саломеи.",
    range: [0.05, 0.25] as const,
    align: "left" as const,
  },
  {
    title: "Путь",
    body: "Знания, практика и движение через города превращают биографию в пример выбора.",
    range: [0.32, 0.55] as const,
    align: "right" as const,
  },
  {
    title: "Смысл",
    body: "Эта история возвращается в колледж как образ, который может вдохновлять студентов каждый день.",
    range: [0.64, 0.9] as const,
    align: "left" as const,
  },
];

export const bentoFeatures = [
  {
    title: "Вдохновение",
    body: "Статуя создаёт образ, к которому можно возвращаться.",
    size: "large",
  },
  {
    title: "Связь с историей",
    body: "Колледж получает культурную точку внутри своего пространства.",
    size: "small",
  },
  {
    title: "Смысловая среда",
    body: "Входная зона становится более живой и запоминающейся.",
    size: "small",
  },
  {
    title: "Будущее",
    body: "Проект говорит студентам: ваш выбор тоже может оставить след.",
    size: "wide",
  },
];
