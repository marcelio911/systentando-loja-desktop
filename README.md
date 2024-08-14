![image](https://github.com/2skydev/electron-nestjs-react-vite-template/assets/43225384/431d3d65-8292-4189-977a-f13bb3dedd5e)

# Um projeto usando tecnologias como Electron + NestJS + React + Vite

Básicamente um modelo base para buildar um projeto web pro ambiente Desktop obdescendo estes requisitos

![image](https://raw.githubusercontent.com/marcelio911/systentando-loja-ui/b63c6a261e8da15bf3ce00ca2e09711e7d9f7a16/resources/screenshoots/pedidos.png)

## Funcionalidades

- Electron

- Electron builder

- Electron store (json storage)

- Auto updater

- Update loading screen

- Auto launch

- NestJS

- [Standalone application](https://docs.nestjs.com/standalone-applications)

- IPC handler, sender decorator

- IPC preload script auto generate

- React

- File system based router (nextjs pages router like)

- i18n

- The default language is set by detecting which language you use

<br/>

## Entendendo o framework & libraries

- App framework: [`electron`](https://www.electronjs.org/)

- App build tool: [`electron-builder`](https://www.electron.build/)

- App storage: [`electron-store`](https://github.com/sindresorhus/electron-store)

- App auto updater: [`electron-updater`](https://www.electron.build/auto-update)

- Bundle tool: [`vite`](https://vitejs.dev/) + [`electron-vite`](https://electron-vite.org/)

- Main process framework: [`nestjs`](https://nestjs.com/)

- Renderer process framework: [`react`](https://react.dev/) + [`typescript`](https://www.typescriptlang.org/)

- Code style: `eslint` + `prettier` + [`@trivago/prettier-plugin-sort-imports`](https://github.com/trivago/prettier-plugin-sort-imports)

- File system based router: [`react-router-dom v6`](https://reactrouter.com/docs/en/v6) + custom (src/components/FileSystemRoutes)

- i18n: [`i18next`](https://www.i18next.com/) + [`react-i18next`](https://react.i18next.com/)

<br/>

## Arquitetura

> [Figma link](https://www.figma.com/board/BGt9EJBWBnjcPCvKgEeES3/electron-nestjs-react-vite-template?node-id=304-58&t=NB3gHvd2vgOlaHfb-1)

![image](https://github.com/2skydev/electron-nestjs-react-vite-template/assets/43225384/ac40caf1-9840-480f-8352-be3e573226f0)

## Github workflow

> [Figma link](https://www.figma.com/board/BGt9EJBWBnjcPCvKgEeES3/electron-nestjs-react-vite-template?node-id=304-58&t=NB3gHvd2vgOlaHfb-1)

![image](https://github.com/2skydev/electron-nestjs-react-vite-template/assets/43225384/aa9301fe-a6d9-4075-b5bc-4126dbc03e1a)

<br/>

## Vamos começar

#### Para usar este template

- Crie um repositório a partir deste modelo ou bifurque este repositório

- Criar branch `develop` a partir da `main`

- Definir segredo nas configurações do repositório github (Settings > Secrets and variables > Actions > New repository secret)

- `PERSONAL_TOKEN`: Github personal access token é: Token de acesso pessoal do Github (escopo do repositório)

#### dev mode

```bash

pnpm  dev

```

#### vite & electron build

```bash

pnpm  build

```

## Erros conhecidos

- [%1 Não roda no ambiente Win32 ](https://github.com/pnpm/pnpm/issues/5638#issuecomment-1327988206)

- Github Action

- Update package.json version

- `pathspec 'develop' did not match any file(s) known to git`

- DO: crie o branch `develop` a partir de `main`
