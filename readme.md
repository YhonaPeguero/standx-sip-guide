# StandX SIP Guide - by the Community

A community-driven educational experience designed to make StandX SIPs easier to understand.

This project turns SIP concepts into a cleaner, more visual, and more interactive format so users can quickly learn what each proposal means, why it matters, and how it improves the StandX ecosystem.

The goal is simple: make SIPs feel accessible, useful, and engaging for the community.

## What is scaffolded

- React + Vite application with production-ready defaults.
- Tailwind CSS setup for utility-first styling.
- Framer Motion integration for all interactive and animated UI behavior.
- Modular architecture that preserves the original README prototype behavior.
- ESLint flat config for maintainability and code quality.

## Project structure

```text
.
|- src/
|  |- components/
|  |  |- BackgroundFX.jsx
|  |  |- CallToAction.jsx
|  |  |- Chart.jsx
|  |  |- Headline.jsx
|  |  |- MicroCopy.jsx
|  |  |- Particles.jsx
|  |  |- RangeSelector.jsx
|  |  |- StatusChip.jsx
|  |  |- ToggleSwitch.jsx
|  |  |- TopBar.jsx
|  |  |- ValueDisplay.jsx
|  |- constants/
|  |  |- chart.js
|  |- hooks/
|  |  |- useSipMotion.js
|  |- lib/
|  |  |- chartPaths.js
|  |- styles/
|  |  |- index.css
|  |- App.jsx
|  |- main.jsx
|- index.html
|- package.json
|- tailwind.config.js
|- postcss.config.js
|- eslint.config.js
|- vite.config.js
```

## Run locally

```bash
npm install
npm run dev
```

## Build for production

```bash
npm run build
npm run preview
```

## Notes on implementation

- The interaction model and visual behavior from the original README code were preserved.
- Shared chart math and path generation live in `src/lib/chartPaths.js`.
- Motion value orchestration and interpolation live in `src/hooks/useSipMotion.js`.
- UI is decomposed into focused components under `src/components`.
