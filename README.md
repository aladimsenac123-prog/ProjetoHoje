# EcoEntregas

Startup de entregas ecológicas de bicicleta. Site institucional moderno, mobile-first, sem frameworks externos, desenvolvido com foco em alta performance, SEO e conformidade com a LGPD.

## Tecnologias Utilizadas
- HTML5 Semântico
- CSS3 puro (Variáveis, Flexbox, CSS Grid)
- JavaScript Vanilla (ES6+)
- PWA (Progressive Web App)

## Estrutura de Pastas
```text
ProjetoDeHoje/
├── index.html
├── manifest.json
├── sw.js
├── robots.txt
├── sitemap.xml
├── .htaccess
├── README.md
├── .gitignore
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── icons/
│   │   ├── team/
│   │   └── portfolio/
│   ├── fonts/
│   └── videos/
├── css/
│   ├── variables.css
│   ├── main.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── main.js
│   ├── components/
│   │   ├── mobile-menu.js
│   │   ├── co2-counter.js
│   │   ├── scroll-reveal.js
│   │   ├── lazy-loader.js
│   │   └── accessibility.js
│   ├── integrations/
│   │   ├── google-sheets.js
│   │   ├── google-analytics.js
│   │   ├── google-tag-manager.js
│   │   ├── whatsapp-button.js
│   │   ├── vlibras.js
│   │   └── adopt-lgpd.js
│   └── utils/
│       ├── validators.js
│       └── helpers.js
└── pages/
    └── parceiros.html
```

## Como Rodar Localmente
Certifique-se de ter o Node.js instalado ou use a extensão Live Server do VS Code.

Abra a pasta do projeto no editor.

Inicie o Live Server no arquivo index.html.

## Como Configurar Integrações
Google Analytics 4 e GTM: Substitua G-XXXXXXXXXX e GTM-XXXXXXX nos scripts do <head> do index.html.

Google Sheets (Apps Script): Crie uma planilha com as colunas de cadastro, implante um Web App no Google Apps Script e cole a URL gerada no arquivo js/integrations/google-sheets.js.

AdOpt (LGPD): Substitua SEU_ID_AQUI pelo código fornecido pelo painel do AdOpt.

## Como Fazer o Deploy
Siga as instruções do seu provedor de hospedagem para fazer o upload dos arquivos do projeto.

## Créditos
Desenvolvido por [Seu Nome].