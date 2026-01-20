# 🔷 Nexus Inventory

![Project Status](https://img.shields.io/badge/status-em_desenvolvimento-orange?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)

> **Gerencie seus ativos com clareza.**
> Centralize o inventário de TI e rastreie o ciclo de vida dos equipamentos em uma plataforma unificada.

---

## 📸 Visão Geral

O **Nexus Inventory** é um sistema Web de gestão de ativos de TI (ITAM) projetado para substituir planilhas complexas por uma interface visual, limpa e intuitiva. O foco do projeto é a aplicação de princípios de **Clean Code**, **HTML Semântico** e **CSS/JS Puro** (Vanilla), garantindo alta performance e controle total do código.

### Telas do Projeto

| Tela de Login | Dashboard (Visão Geral) |
|:---:|:---:|
| ![Login](./screenshots/login.png) | ![Dashboard](./screenshots/dashboard.png) |
| *Validação de campos e "Olho Mágico"* | *KPIs, Gráficos e Tabelas Dinâmicas* |

*(Nota: Adicione as imagens na pasta screenshots para visualizá-las aqui)*

---

## 🚀 Funcionalidades Atuais (MVP Front-end)

### 🔐 Autenticação
- [x] **Interface Clean:** Layout dividido (Split Screen) com imagem de Hero e Formulário.
- [x] **UX Aprimorada:** Feedback visual nos inputs e botão de "Ver Senha" (Toggle Visibility).
- [x] **Validação JS:** Verificação de campos vazios antes do envio.

### 📊 Dashboard
- [x] **Sidebar Fixa:** Navegação intuitiva com ícones (Google Material Symbols).
- [x] **KPIs Visuais:** Cards estatísticos para visão rápida (Total de Ativos, Em Uso, Manutenção).
- [x] **Design System:** Uso de variáveis CSS para consistência de cores (Tema Teal).
- [x] **Simulação de Dados:** Manipulação do DOM para injetar dados via JavaScript (Mock Data).

---

## 🛠️ Tecnologias Utilizadas

O projeto foi construído focando na base sólida do desenvolvimento web, sem dependência de frameworks CSS ou bibliotecas pesadas.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![VS Code](https://img.shields.io/badge/VS_Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)

- **HTML5:** Estrutura semântica (`<header>`, `<main>`, `<aside>`, `<section>`).
- **CSS3 Puro:**
    - **Flexbox & Grid:** Para layouts responsivos e alinhamentos complexos.
    - **CSS Variables:** Para fácil manutenção de temas e cores.
    - **Clean Style:** Sem Bootstrap ou Tailwind. Todo o estilo foi escrito à mão.
- **JavaScript (Vanilla ES6+):**
    - Manipulação do DOM (`getElementById`, `querySelector`).
    - Event Listeners para interatividade.
    - Lógica de validação e simulação de dados.

---

## 📂 Estrutura do Projeto

A organização segue padrões profissionais de separação de responsabilidades:

```bash
nexus-inventory/
│
├── public/                 # Arquivos acessíveis ao navegador
│   ├── css/
│   │   ├── style.css       # Estilos globais (Login, Reset, Variáveis)
│   │   └── dashboard.css   # Estilos específicos do painel administrativo
│   │
│   ├── js/
│   │   ├── login.js        # Lógica de autenticação e UI do login
│   │   └── dashboard.js    # Lógica de carregamento de dados e interações
│   │
│   ├── index.html          # Tela de Login
│   └── dashboard.html      # Tela Principal
│
├── screenshots/            # Imagens para documentação
└── README.md               # Documentação do projeto