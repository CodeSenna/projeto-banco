# 🚀 Projeto E-Wallet: Landing Page e Aplicação Financeira

Este projeto é uma aplicação front-end completa para um serviço fictício de carteira digital ("E-Wallet"). Ele foi inicialmente transcrito de um design do Figma e evoluiu para incluir um fluxo de autenticação de usuário e um painel financeiro totalmente interativo.

**Este projeto foi construído inteiramente com HTML, CSS e JavaScript puros (Vanilla JS), sem o uso de bibliotecas ou frameworks.**

> **Nota:** O fluxo de autenticação e armazenamento de dados usa `localStorage` e `sessionStorage` para fins educacionais e de portfólio. **Não é um método seguro** para um site em produção, pois os dados (incluindo senhas) são armazenados em texto simples no navegador.

---

## ✨ Funcionalidades Principais

* **Landing Page (index.html):** Página de apresentação completa, responsiva, com menu hambúrguer funcional.
* **Fluxo de Autenticação Real:**
    * **Página de Cadastro (cadastro.html):** Permite que novos usuários criem uma conta com e-mail, senha, CPF e um **depósito inicial**. O sistema cria uma conta de usuário e uma conta financeira separadas no `localStorage`.
    * **Página de Login (login.html):** Autentica usuários comparando os dados inseridos com os dados salvos e únicos daquele usuário.
* **Gerenciamento de Sessão:** Utiliza `sessionStorage` para "manter o usuário logado" durante a sessão.
* **Painel Protegido (dashboard.html):** Uma página financeira que só pode ser acessada por usuários autenticados.
* **Dashboard Interativa:**
    * **Contas Dinâmicas:** O saldo das contas é **calculado em tempo real** com base nas transações.
    * **Adicionar Contas:** O usuário pode criar novas contas (Ex: "Poupança", "Cartão").
    * **Adicionar Transações:** O usuário pode adicionar novas transações (Crédito/Débito) através de um formulário em um modal.
    * **Filtragem:** As transações podem ser filtradas por tipo (Crédito/Débito).
    * **Persistência Total:** Todos os dados de contas e transações são salvos no `localStorage` e persistem após a atualização da página.
* **Logout:** Funcionalidade no painel que limpa a `sessionStorage` e redireciona o usuário de volta ao login.

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Para toda a estrutura e semântica do site.
* **CSS3:** Para estilização, layout (Flexbox e Grid) e responsividade (Media Queries).
* **JavaScript (Puro/Vanilla):** Usado para todo o gerenciamento de estado, manipulação do DOM, gerenciamento de eventos e lógica de autenticação/financeira.
* **API de Web Storage:**
    * `localStorage`: Para armazenar permanentemente os dados da conta do usuário e seus dados financeiros (contas, transações).
    * `sessionStorage`: Para gerenciar o estado de "logado" do usuário.
* **Font Awesome:** Para os ícones utilizados no design.

---

## 🏁 Como Executar o Projeto

Este é um projeto estático (front-end puro), então não há necessidade de instalação.

1.  Certifique-se de que todos os arquivos (`index.html`, `login.html`, `cadastro.html`, `dashboard.html`, `app.js`, `style/style.css`) estejam na estrutura de pastas correta.
    ```
    / (pasta principal)
    ├── index.html
    ├── cadastro.html
    ├── login.html
    ├── dashboard.html
    ├── app.js
    └── style/
        └── style.css
    ```
2.  Abra o arquivo `index.html` no seu navegador de preferência.
3.  Para testar o fluxo completo:
    * Clique em "Entrar" e depois em "Cadastre-se".
    * **Crie uma conta** em `cadastro.html`, fornecendo um e-mail, senha, CPF e um **Depósito Inicial**.
    * Você será redirecionado para `login.html`. Faça o login com as credenciais que acabou de criar.
    * Você será levado ao `dashboard.html`, que já mostrará sua "Conta Principal" com o saldo do depósito inicial.
    * Adicione novas contas e transações e atualize a página para verificar a persistência.
    * Clique em "Sair" para ser deslogado.

---

## 🎓 Conceitos Aplicados

* **HTML/CSS:** Conversão de um design (Figma) em código funcional e responsivo.
* **JavaScript (Vanilla):** Manipulação de elementos da página e gerenciamento de eventos.
* **Gerenciamento de Estado no Front-End:** Criação de um mini "banco de dados" no `localStorage` para gerenciar dados de usuário de forma persistente.
* **Arquitetura Multi-Página:** Criação de um fluxo de navegação lógico entre páginas públicas e privadas.
* **Autenticação Simulada:** Implementação de uma "rota protegida" no front-end.