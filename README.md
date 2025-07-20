# Desafio de Portaria Online

## 📋 Descrição

AGT Portaria Online é um sistema de gerenciamento de portaria que controla a entrada e saída de veículos, mantém um cadastro de colaboradores e registra todas as viagens realizadas. O sistema facilita o controle de frota, oferecendo uma interface intuitiva para registrar saídas e retornos de veículos, bem como manter um histórico completo de viagens.

## 🚀 Tecnologias Utilizadas

- [Angular](https://angular.dev/) - versão 19.2.x
- [PrimeNG](https://primeng.org/) - versão 19.1.3 (Biblioteca de componentes UI)
- [PrimeIcons](https://primeng.org/icons) - versão 7.0.0
- [TypeScript](https://www.typescriptlang.org/) - versão 5.7.2
- [SCSS](https://sass-lang.com/) - para estilização
- [RxJS](https://rxjs.dev/) - para programação reativa

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── card-registro-viagem
│   │   ├── card-veiculo
│   │   ├── formulario-cadastrar-funcionario
│   │   ├── formulario-cadastrar-veiculo
│   │   ├── formulario-registrar-retorno
│   │   ├── formulario-registrar-saida
│   │   └── patio-veiculos
│   ├── interfaces/
│   │   ├── funcionario.model.ts
│   │   ├── registro-viagem.model.ts
│   │   └── veiculo.model.ts
│   ├── pages/
│   │   ├── funcionarios
│   │   ├── home
│   │   ├── registros-de-viagens
│   │   └── veiculos
│   ├── services/
│   │   ├── funcionarios.service.ts
│   │   ├── veiculo.service.ts
│   │   └── viagens.service.ts
│   └── shared/
│       ├── descricao-de-pagina
│       ├── menu-lateral
│       └── pipes/
│           └── veiculo-status.pipe.ts
├── environments/
└── assets/
```

## ✨ Funcionalidades

### 1. Gestão de Veículos
- Cadastro de veículos com placa e modelo
- Visualização dos veículos cadastrados
- Status de localização do veículo (No Pátio/Em Viagem)

### 2. Gestão de Colaboradores
- Cadastro de colaboradores com nome e CNH
- Visualização dos colaboradores cadastrados

### 3. Gestão de Viagens
- Registro de saída de veículos
  - Seleção de veículo
  - Seleção de motorista
  - Destino da viagem
  - Registro de passageiros
- Registro de retorno de veículos
- Histórico completo de viagens

### 4. Dashboard/Home
- Visualização rápida dos veículos no pátio
- Visualização dos veículos em viagem
- Acesso rápido a todas as funcionalidades

### 5. Recursos Adicionais
- Tema claro/escuro
- Menu lateral para navegação
- Notificações de ações realizadas com sucesso ou erro

## ⚙️ Como Executar o Projeto

### Pré-requisitos
- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- [Angular CLI](https://cli.angular.io/) (versão 19)
- Backend rodando previamente [Projeto Spring](https://github.com/sspedroo/desafio_agt)

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/sspedroo/desafio_agt_frontend.git
cd desafio_agt
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:
```bash
npm start
# ou
yarn start
# ou
ng serve
```

4. Acesse o aplicativo em: `http://localhost:4200`

### Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run build` - Compila o projeto para produção
- `npm run watch` - Compila em modo de observação para desenvolvimento

## 🏗️ Construção do Projeto

Para construir o projeto para produção:

```bash
npm run build
# ou
ng build
```

Os arquivos compilados serão armazenados no diretório `dist/` por padrão.

## 🔖 Recursos Adicionais

Para mais informações sobre o Angular CLI:
- [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli)

## 🛠️ Desenvolvimento

Este projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 19.2.9.

### Ferramentas de Desenvolvimento

- Visual Studio Code com as extensões recomendadas no arquivo extensions.json
- Configurações do editor no arquivo .editorconfig
