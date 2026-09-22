# Чертоги Фрилансера 4 PRO — independent Vite starter

Оригинальная самостоятельная реализация класса инструментов, публично описанного для «Чертогов Фрилансера 4»: Vite, компонентная архитектура, навигация по страницам, оптимизация изображений, SVG sprite, ZIP/FTP, WordPress/Docker, VS Code, React/Vue/Tailwind adapters и библиотека готовых UI-модулей.

Не содержит оригинального закрытого исходного кода.

## Start
npm install
npm run dev

## Build
npm run check
npm run build
npm run img:optimize
npm run sprite:build
npm run critical:build
npm run zip

## FTP
Copy `.ftp-deploy.example.json` to `.ftp-deploy.json`, fill credentials, then:
npm run ftp:deploy
