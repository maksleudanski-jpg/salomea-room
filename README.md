# Salomea Rusetskaya — студийный сайт-презентация

Новый `Vite + React + TypeScript` сайт для проекта размещения статуи Саломеи Русецкой у входа в Колледж бизнеса и права.

## Что изменено

- Главная scroll-сцена перенесена почти в начало сайта: сразу после Hero.
- Добавлена вторая scroll-сцена из старой анимации Саломеи: `public/assets/seq/archive`.
- Усилен дизайн: крупная serif-типографика, музейная editorial-композиция, графит/бумага/олива/пыльная роза/латунь.
- Добавлены parallax-эффекты, reveal-анимации, fixed header, bento-сетка и реальная Google-карта с точкой колледжа.
- Canvas sequence использует `requestAnimationFrame`, `ScrollTrigger`, cover/crop-отрисовку и fallback.

## Запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
```

## Главные ассеты

```text
public/assets/seq/main/frame_001.webp ... frame_120.webp
public/assets/seq/archive/frame_001.webp ... frame_180.webp
public/assets/college-facade.webp
public/assets/statue-concept.png
```

## Нарезка нового видео в кадры

Если заменишь главное видео, положи его сюда:

```text
public/assets/source/salomea-sequence.mp4
```

И запусти:

```bash
npm run extract-sequence
```

Или вручную через ffmpeg:

```bash
ffmpeg -i public/assets/source/salomea-sequence.mp4 -vf "fps=15,scale=1280:-2" -frames:v 120 -c:v libwebp -q:v 76 public/assets/seq/main/frame_%03d.webp
```

## Что важно

Старый сайт не дорабатывался напрямую. Использованы его ассеты и старые кадры только как вторичная scroll-сцена. Главный смысл сайта: колледж → вход → статуя Саломеи как символ образования и личного выбора.
