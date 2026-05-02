<h1 align="center">✂️ Agendamento Barbearia</h1>
<p align="center">
  Sistema web de agendamento de atendimentos para barbearias, com interface moderna e responsiva.
</p>
<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-6-3178C6?style=flat&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/pnpm-package_manager-F69220?style=flat&logo=pnpm&logoColor=white" />
</p>

📋 Sobre o projeto
O Agendamento Barbearia é uma aplicação front-end desenvolvida para facilitar o processo de agendamento de serviços em barbearias. O cliente consegue visualizar os serviços disponíveis e realizar seu agendamento de forma simples e intuitiva.

⚠️ Nota: projeto em desenvolvimento ativo. Novas funcionalidades sendo adicionadas continuamente.


✨ Funcionalidades

 Listagem de serviços disponíveis
 Interface responsiva para mobile e desktop
 Seleção de barbeiro e horário
 Confirmação de agendamento
 Painel administrativo


🛠️ Tecnologias
TecnologiaVersãoUsoReact19Biblioteca de UITypeScript6Tipagem estáticaVite8Bundler e dev serverTailwind CSS4EstilizaçãoESLint9Qualidade de códigopnpm—Gerenciador de pacotes

🚀 Como rodar localmente
Pré-requisitos

Node.js (v18 ou superior)
pnpm

Instalação
bash# 1. Clone o repositório
git clone https://github.com/Donson92703/atendimentobarbearia.git

# 2. Entre na pasta do projeto
cd atendimentobarbearia

# 3. Instale as dependências
pnpm install

# 4. Inicie o servidor de desenvolvimento
pnpm dev
Acesse http://localhost:5173 no navegador.
Outros comandos
bashpnpm build      # gera a build de produção na pasta /dist
pnpm preview    # visualiza a build de produção localmente
pnpm lint       # verifica a qualidade do código com ESLint

📁 Estrutura do projeto
atendimentobarbearia/
├── src/
│   ├── components/     # componentes reutilizáveis
│   ├── pages/          # páginas da aplicação
│   ├── assets/         # imagens e recursos estáticos
│   ├── App.tsx         # componente raiz
│   └── main.tsx        # ponto de entrada
├── public/             # arquivos públicos
├── index.html
├── vite.config.ts
├── tsconfig.json
└── package.json

📓 Diário de desenvolvimento
Anotações do processo de aprendizado durante o projeto. Atualizado a cada sessão.
Fontes e tipografia ✅

Fontes importadas via Google Fonts no index.html (Cairo, Catamaran, Inter, Rubik)
Aplicadas globalmente via Tailwind no index.html
Dificuldade encontrada: não sabia inicialmente onde inserir o link das fontes
Como resolvi: rever aula sobre estrutura do HTML base

Arquivos estáticos ✅

Imagens e ícones organizados na pasta src/assets/
Importação feita diretamente nos componentes: import logo from './assets/logo.png'
Dificuldade encontrada: tentei usar a pasta /public primeiro, o comportamento foi diferente do esperado
Como resolvi: src/assets/ é o caminho correto para arquivos usados dentro de componentes React

Componentes de texto com variantes 🔄 em andamento

Criados componentes reutilizáveis com variações de estilo (tamanho, peso, cor)
Próximo passo: aplicar nos demais componentes da interface

Calendário / seleção de horário ⏳ pendente

Aguardando estudo de useState e gerenciamento de estado
Referência: seção de Hooks do curso


🌐 Deploy

Em breve disponível online.


📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

<p align="center">
  Desenvolvido por <a href="https://github.com/Donson92703">Donson92703</a>
</p>

