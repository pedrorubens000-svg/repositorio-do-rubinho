# LicitaRadar

**Sistema de Monitoramento de Licitações Públicas**

---

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
- Armazenamento local dos favoritos utilizando LocalStorage.
- Página inicial de login demonstrativa.

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
├── public/
├── src/
│   ├── App.tsx
│   ├── Login.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

## 6. Instalação e Execução

### 6.1 Pré-requisitos
- Node.js instalado.
- npm instalado.
- Git instalado.
- Visual Studio Code (recomendado).

### 6.2 Clonar o repositório
```bash
git clone [https://github.com/pedrorubens000-svg/repositorio-do-rubinho.git](https://github.com/pedrorubens000-svg/repositorio-do-rubinho.git)
```

### 6.3 Acessar a pasta do projeto
```bash
cd licitaradar
```

### 6.4 Instalar as dependências
```bash
npm install
```

### 6.5 Executar a aplicação
```bash
npm run dev
```

Após iniciar o servidor, acesse o endereço disponibilizado pelo Vite, normalmente:
> `http://localhost:5173/`

### 6.6 Comandos úteis do Git

* **Verificar alterações:**
  ```bash
  git status
  ```
* **Adicionar arquivos:**
  ```bash
  git add .
  ```
* **Registrar alterações:**
  ```bash
  git commit -m "Descrição da alteração"
  ```
* **Enviar alterações para o GitHub:**
  ```bash
  git push
  ```
* **Atualizar o repositório local:**
  ```bash
  git pull
  ```
* **Visualizar histórico de commits:**
  ```bash
  git log
  ```

## 7. Integração com o PNCP

O projeto prevê a integração com o **Portal Nacional de Contratações Públicas (PNCP)**, utilizando sua API pública para consultar informações sobre contratações e oportunidades de licitação.

* **Portal oficial:** [https://www.gov.br/pncp/pt-br](https://www.gov.br/pncp/pt-br)

## 8. Gerência de Configuração e Controle de Versão

O desenvolvimento do **LicitaRadar** utiliza **Git** para controle de versão e **GitHub** para hospedagem do repositório e acompanhamento das alterações realizadas no projeto.

O controle de versão permite:
- Registrar as alterações no código-fonte.
- Acompanhar o histórico de desenvolvimento.
- Facilitar o trabalho colaborativo.
- Identificar a participação de cada integrante.

### Histórico mínimo de commits
Cada integrante deverá realizar pelo menos um commit no repositório GitHub. A participação será verificada por meio da seção **Contributors** do GitHub.

## 9. Integrantes

- **Pedro Rubens Ferreira de Oliveira** — 202503026394
- **Gabriel Moreira Nascimento** — 202502912218
- **Lucas Vinícius Carvalho Da Cruz** — 202503605416

## 10. Status do Projeto

**Em desenvolvimento.**

Atualmente, o LicitaRadar possui uma interface funcional, dashboard demonstrativo, pesquisa de oportunidades, gerenciamento local de favoritos e uma página inicial de login simulada.

A integração com fontes oficiais de dados e a implementação da autenticação real estão previstas para as próximas etapas do desenvolvimento.

## 11. Desenvolvimento

Projeto desenvolvido como iniciativa acadêmica e prática de aprendizado na área de **Análise e Desenvolvimento de Sistemas**.

---

*LicitaRadar — Encontre oportunidades. Acompanhe licitações.*