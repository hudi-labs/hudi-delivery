# Hudi Delivery

Landing page estática da **Hudi Delivery**, uma plataforma para restaurantes que reúne cardápio digital, atendimento com IA no WhatsApp e um painel de gestão de pedidos. Este repositório contém apenas o site institucional (marketing), construído com Next.js 16, React 19 e Tailwind CSS 4, exportado como site estático e publicado no GitHub Pages.

## Sobre o projeto

O site apresenta os três módulos do produto:

- **Hudi Cardápio** — cardápio digital responsivo com link e QR Code próprios, sem comissão por pedido.
- **Hudi Conversa** — atendimento via WhatsApp com IA, disponível 24h, com transferência para a equipe humana quando necessário.
- **Hudi Painel** — painel com pedidos e cozinha em tempo real, vendas, ticket médio e CRM de clientes.

## Rotas

- `/` — landing page completa (hero, manifesto, como funciona, vitrine do produto, planos, FAQ e CTA final).
- `/planos/` — página dedicada de comparação de planos.
- `/plataforma/` — página detalhando módulos, fluxo da operação, segurança e implantação.

## Stack

- Next.js 16 com App Router e exportação estática (`output: "export"`);
- React 19 e TypeScript;
- Tailwind CSS 4 com tokens de marca em `src/app/globals.css`;
- Lucide React para ícones;
- Motion para entradas suaves com suporte a `prefers-reduced-motion`;
- Node Test Runner (`node --test`) para verificações leves de estrutura, contraste e deploy.

## Pré-requisitos

- **Node.js 24** e **npm 11** (ou versões compatíveis — o `engine` mínimo do Next é `>=20.9`).
- Git para clonar o repositório.

Recomendamos gerenciar a versão do Node com o [nvm](https://github.com/nvm-sh/nvm) (macOS/Linux) ou [nvm-windows](https://github.com/coreybutler/nvm-windows) (Windows), para evitar conflitos com outras versões instaladas na máquina.

## Passo a passo — macOS

1. Instale o Homebrew (se ainda não tiver): `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`.
2. Instale o nvm: `brew install nvm` e siga as instruções do Homebrew para carregá-lo no seu shell (`~/.zshrc`).
3. Instale e use o Node 24: `nvm install 24 && nvm use 24`.
4. Clone o repositório e entre na pasta: `git clone <url-do-repositorio> && cd hudi-delivery`.
5. Instale as dependências: `npm ci`.
6. Suba o servidor de desenvolvimento: `npm run dev`.
7. Abra `http://localhost:9009` no navegador.

> Em terminais não interativos (scripts, CI local), garanta que o shell carregou o nvm antes de rodar os comandos, por exemplo com `bash -lc "npm run dev"`.

## Passo a passo — Windows

1. Instale o nvm-windows a partir dos [releases oficiais](https://github.com/coreybutler/nvm-windows/releases) (`nvm-setup.exe`).
2. Abra o PowerShell ou o Prompt de Comando como administrador e instale o Node 24: `nvm install 24` seguido de `nvm use 24`.
3. Confirme a versão ativa: `node -v` (deve mostrar `v24.x.x`).
4. Clone o repositório e entre na pasta: `git clone <url-do-repositorio>` e `cd hudi-delivery`.
5. Instale as dependências: `npm ci`.
6. Suba o servidor de desenvolvimento: `npm run dev`.
7. Abra `http://localhost:9009` no navegador.

> Se o PowerShell bloquear a execução de scripts do npm, ajuste a política de execução com `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned` (executar como administrador).

## Scripts disponíveis

| Script | O que faz |
| --- | --- |
| `npm run dev` | Sobe o servidor de desenvolvimento em `http://localhost:9009`. |
| `npm run build` | Gera o build de produção (export estático em `out/`). |
| `npm run lint` | Roda o ESLint. |
| `npm run typecheck` | Roda o TypeScript sem emitir arquivos (`tsc --noEmit`). |
| `npm test` | Roda os testes com o Node Test Runner (`tests/*.test.mjs`). |
| `npm run check` | Executa lint, typecheck, testes e build, nessa ordem. |
| `npm run prepare:docs-pages` | Sincroniza o export estático para a pasta `docs/` (usado no deploy). |

## Qualidade e build

```bash
npm run check
```

O comando executa ESLint, TypeScript, testes e a exportação estática. O resultado publicável fica em `out/`.

## GitHub Pages

O workflow `.github/workflows/deploy-pages.yml` valida, exporta e publica o site automaticamente após um push na branch `main` (ignorando mudanças só em `docs/`).

Preferência: **Settings → Pages → Source → GitHub Actions**. Enquanto a origem continuar em **Deploy from a branch → `/docs`**, o builder Jekyll legado (`actions/jekyll-build-pages`) ainda roda. Por isso o workflow também sincroniza o export estático em `docs/` (com `.nojekyll` e `_config.yml` que inclui `_next`), via `npm run prepare:docs-pages`.

O `basePath` é recebido automaticamente da action oficial do GitHub Pages, então a aplicação funciona sob o caminho `/hudi-delivery/` sem URLs de assets quebradas. O domínio customizado fica no `CNAME` na raiz do repositório.

## Estrutura

```text
src/app/                    rotas (/, /planos, /plataforma), layout e tokens globais
src/components/ui/          Button, GlassCard, Accordion, Reveal, HudiMark, LiveOrderPreview, TypewriterLine
src/components/layout/      cabeçalho (SiteHeader) e rodapé (SiteFooter) compartilhados
src/components/sections/    seções de conversão da landing (Hero, Manifesto, HowItWorks, ProductShowcase, PricingTable, Faq, FinalCta)
src/data/                    conteúdo editável de produtos, planos e FAQ (site-content.ts)
src/types/                   tipos compartilhados de conteúdo do site
scripts/                     utilitários de build, incluindo prepare-docs-pages.mjs
tests/                       verificações leves sem dependências adicionais
docs/                        export estático publicado no GitHub Pages (gerado, não editar manualmente)
```

O site foi desenhado mobile-first, com foco visível, controles de toque de pelo menos 44px, HTML semântico e combinações principais de texto em conformidade com WCAG AA.
