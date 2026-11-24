Me ajude a criar o projeto de um site institucional fictício.

## 1. Visão Geral da Stack

Framework: [Nuxt 4](https://nuxt.com/) (Vue 3, Vite, SSR)
Estilização: Tailwind CSS com variáveis HSL e suporte a tema Claro/Escuro
Componentes UI: shadcn-vue (Reka UI) auto-importados de `app/components/ui/`
Ícones: Lucide Icons (`@lucide/vue`)
Internacionalização: `@nuxtjs/i18n`
Acessibilidade: `@nuxt/a11y` (Axe Core)
Gerenciador de Pacotes: `pnpm`

## 2. Acessibilidade Inegociável (A11y First)
A acessibilidade é prioridade absoluta, sobrepondo-se a qualquer preferência estética:

**Navegação por Teclado**:
Todo fluxo e componente interativo deve ser 100% operável via teclado (`Tab`, `Shift+Tab`, `Enter`, `Espaço`, `Setas`).
Mantenha anéis de foco visíveis em todos os elementos focáveis (`focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none`).
Modais e gavetas devem capturar o foco (*focus trap*), fechar ao pressionar `Escape` e restaurar o foco ao elemento acionador.
Preserve e mantenha o link de atalho para o conteúdo principal (`#main-content`) no topo do layout.


2. **Leitores de Tela e Tecnologias Assistivas**:

Utilize elementos HTML5 semânticos (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`, `<article>`).
Forneça atributos ARIA precisos onde HTML nativo for insuficiente (`aria-expanded`, `aria-controls`, `aria-live`, `aria-describedby`).
Ícones puramente decorativos devem conter `aria-hidden="true"`. Ícones acionadores sem texto visível devem conter `aria-label` ou `<span class="sr-only">`.


3. **Textos Alternativos (`alt`) em Imagens**:

Imagens informativas e capas de publicações devem possuir texto alternativo descritivo e contextual.
Imagens estritamente decorativas devem utilizar `alt=""` ou ser aplicadas via CSS.


4. **Contraste de Cores**:

Garanta conformidade com WCAG AA (mínimo 4.5:1 para texto normal e 3:1 para texto grande/componentes de UI) em ambos os modos claro e escuro.


5. **Tipografia e Zoom**:

Use tamanhos de fonte relativos (`rem`, classes Tailwind).
O layout não pode quebrar, truncar texto crítico ou sobrepor elementos quando o usuário aplicar zoom de até 200% no navegador.


6. **Tempo de Leitura e Redução de Movimento**:

Não imponha temporizadores restritivos. Carrosséis ou rotações automáticas devem possuir botão de pausa/reprodução e pausar no foco/hover.
Respeite `prefers-reduced-motion` desativando animações e transições quando solicitado pelo usuário.


7. **Sem Elementos Piscantes**:

Proibido o uso de elementos estroboscópicos ou que pisquem mais de 3 vezes por segundo, prevenindo convulsões e desconforto para pessoas com epilepsia fotossensível.


8. **Links Descritivos**:

Proibido usar rótulos genéricos como "clique aqui", "saiba mais" ou "ver mais" isolados.
O texto do link deve descrever claramente o destino (ex.: "Acessar Relatório de Gestão 2024 (PDF)").


9. **Hierarquia Semântica de Títulos**:

Cada página deve possuir exatamente um único elemento `<h1>`.
Mantenha a sequência lógica estrita (`<h1>` → `<h2>` → `<h3>`), sem pular níveis de cabeçalho.


## 3. Internacionalização Trilateral Obrigatória (i18n)
**Idiomas Suportados**:
`pt-BR` (Português do Brasil - padrão)
`en-GY` (Inglês da Guiana)
`es-VE` (Espanhol da Venezuela)


2. **Regra de Ouro**:

**Nenhum texto visível ao usuário final pode ser escrito diretamente no código (*hardcoded*)**.
Toda string deve ser registrada simultaneamente em `i18n/locales/pt-BR.json`, `i18n/locales/en-GY.json` e `i18n/locales/es-VE.json`.


3. **Reatividade à Troca de Idioma**:

Utilize a função `t('chave.namespace')` nos templates.
Metatags de SEO e títulos em `useHead()` devem ser reativos usando `computed(() => t('chave'))`.
## 4. Linguagem Simples e Redação Cidadã (Lei nº 15.263/2025)
A redação de qualquer texto institucional deve atender à Política Nacional de Linguagem Simples:
**Textos Curtos e Diretos**: Vá direto ao ponto; elimine parágrafos prolixos e floreios burocráticos.
**Ordem Direta**: Estruture frases prioritariamente em Sujeito + Verbo + Complemento.
**Voz Ativa**: Prefira "A SEPLAN elaborou o plano" a "O plano foi elaborado pela SEPLAN".
**Vocabulário Cotidiano**: Substitua termos técnicos e jargões jurídicos por expressões simples. Se o termo técnico for indispensável, explique-o imediatamente.
**Siglas**: Ao citar uma sigla pela primeira vez, forneça o significado por extenso.


## 5. Design System, Minimalismo e Reuso de Componentes
**Moderação no uso de Badges e Sparkles**:
**`Badge`**: Restrinja o uso ao estritamente essencial (indicação de status operacional, tipo documental crítico). Não use como adorno ou preenchimento de layout.
**Badges junto a Títulos/Subtítulos**: NÃO utilize badges junto a títulos ou subtítulos, estejam eles dentro ou fora de cards.
**Ícone `Sparkles`**: Não use como elemento decorativo genérico. Reserve apenas para lançamentos tecnológicos reais ou funcionalidades de inteligência de dados.


2. **Cores e Fundos (Proibição de Degradês)**:

NÃO utilize degradês em background, EXCETO nas imagens dos posts na página inicial. Todos os demais fundos de seções, páginas, cards ou elementos devem ser sólidos e neutros, respeitando o tema claro/escuro.


3. **Chamadas para Ação (CTAs) Estritas**:

NÃO adicione um CTA (botão, banner ou link de destaque de ação) para outra página caso não tenha sido explicitamente requisitado ou não faça parte da página original em que ela foi baseada. Evite presumir fluxos ou criar links de navegação secundários sem solicitação expressa.


4. **Reuso de Padrões (DRY)**:

Identifique padrões repetidos nas páginas existentes e abstraia em componentes ou layouts reutilizáveis (ex.: `ContainerHeader.vue`, `Container.vue`, layouts especializados).
Não crie código do zero quando já existir um componente ou layout correspondente.


5. **Centralização Obrigatória da Última Linha em Grids de Cards**:

Em qualquer listagem ou grid responsivo de cartões/cards, itens ou blocos, a última linha incompleta deve ser **obrigatoriamente centralizada visualmente na tela**, evitando espaços vazios assimétricos à direita.
Utilize exclusivamente as classes utilitárias padronizadas definidas em `app/assets/css/tailwind.css`:
`.grid-cards-center-2` (grids de até 2 colunas)
`.grid-cards-center-3` (grids de até 3 colunas)
`.grid-cards-center-4` (grids de até 4 colunas)
`.grid-cards-center-5` (grids de até 5 colunas)
É proibido o uso de `grid grid-cols-X` isolado para cartões e cards informativos sem a respectiva centralização da última linha.


6. **Proibição de Valores Hard-coded em Classes CSS (Valores Arbitrários)**:

É expressamente proibido o uso de classes utilitárias com valores arbitrários entre colchetes (ex.: `text-[11px]`, `w-[350px]`, `p-[14px]`, `leading-[18px]`, `text-[#123456]`).
Priorize sempre a escala padronizada e as classes utilitárias nativas do Tailwind e do Design System (`text-xs`, `text-sm`, `text-base`, `text-lg`, etc., bem como espaçamentos e dimensões padronizadas: `p-1`, `p-2`, `gap-3`, `leading-relaxed`, etc.).
Essa regra preserva a coerência visual do Design System, garante o escalonamento tipográfico adequado nas diretrizes de acessibilidade (WCAG - ampliação de até 200%) e facilita a manutenção do código.
## 7. Arquitetura Orientada a JSON (Strapi CMS Ready)
Como todo o conteúdo do site será servido pelo Strapi CMS:
Construa páginas e componentes capazes de receber e renderizar dados orientados a JSON (*JSON-driven*).
Tipifique payloads via interfaces TypeScript, desacoplando a lógica de apresentação dos dados brutos.
Estruture componentes prevendo blocos dinâmicos (*Dynamic Zones*) e coleções do CMS.


## 8. Dashboards e Licenciamento Aberto (Creative Commons CC0)
Todas as páginas de dashboards (sob `/dashboards/*` ou que usem `app/layouts/dashboard.vue`) devem exibir a marcação de licença **Creative Commons CC0 (Dedicação ao Domínio Público)** para os conjuntos de dados apresentados.
Forneça links para download das séries históricas em formatos abertos (CSV, JSON, XLSX).

