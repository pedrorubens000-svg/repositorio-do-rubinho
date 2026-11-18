# LicitaRadar

**Sistema de Monitoramento de Licitações Públicas**

## 1. Sobre o Projeto

O **LicitaRadar** é uma aplicação web desenvolvida com o objetivo de facilitar o acompanhamento e a consulta de oportunidades de licitações públicas.

A plataforma busca centralizar informações sobre processos de contratação governamentais, permitindo que usuários pesquisem, organizem e acompanhem oportunidades de forma simples e intuitiva.

## 2. Objetivo

Desenvolver uma plataforma de monitoramento de licitações públicas, oferecendo ferramentas para pesquisa, acompanhamento e organização de oportunidades disponíveis nos portais governamentais.

## 3. Funcionalidades

### Implementadas

- Dashboard com indicadores de licitações.
- Interface de navegação lateral.
- Pesquisa por objeto, órgão e modalidade.
- Sistema de gerenciamento de favoritos.
- Armazenamento local dos favoritos utilizando `LocalStorage`.
- Componente/página inicial de login demonstrativa.

### Em desenvolvimento

- Integração com a API do PNCP (Portal Nacional de Contratações Públicas).
- Consulta de licitações reais.
- Sistema de autenticação de usuários.
- Cadastro de usuários.
- Filtros avançados de pesquisa.
- Persistência de dados em banco de dados.

## 4. Tecnologias Utilizadas

| Tecnologia | Aplicação |
| :--- | :--- |
| **React** | Desenvolvimento da interface |
| **TypeScript** | Tipagem e organização do código |
| **Vite** | Ambiente de desenvolvimento |
| **CSS3** | Estilização da aplicação |
| **LocalStorage** | Armazenamento local dos favoritos |
| **Node.js** | Ambiente de execução e gerenciamento de dependências |

## 5. Estrutura do Projeto

```text
licitaradar/
├── src/
│   ├── App.tsx
│   ├── login.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json
└── README.md