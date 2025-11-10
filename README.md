# 🚀 Projeto E-Wallet: Landing Page e Autenticação

Este projeto é uma landing page completa para um serviço fictício de carteira digital ("E-Wallet"). Ele foi inicialmente transcrito de um design do Figma e, em seguida, evoluiu para incluir um fluxo de autenticação de usuário front-end completo, com páginas de cadastro, login e um painel de usuário protegido.

**Este projeto foi construído inteiramente com HTML, CSS e JavaScript puros (Vanilla JS), sem o uso de bibliotecas ou frameworks.**

> **Nota:** O fluxo de autenticação usa `localStorage` e `sessionStorage` para fins educacionais e de portfólio. **Não é um método seguro** para um site em produção, pois os dados (incluindo senhas) são armazenados em texto simples no navegador.

---

## ✨ Funcionalidades Principais

* **Landing Page (index.html):** Página de apresentação completa, responsiva, com seções de "sobre", "serviços", "planos de preços" e "newsletter".
* **Design Responsivo:** O layout se adapta a dispositivos móveis, tablets e desktops, incluindo um menu hambúrguer funcional em telas menores.
* **Fluxo de Autenticação:**
    * **Página de Cadastro (cadastro.html):** Permite que novos usuários criem uma conta. Os dados são salvos no `localStorage` do navegador.
    * **Página de Login (login.html):** Autentica usuários comparando os dados inseridos com os dados salvos no `localStorage`.
* **Gerenciamento de Sessão:** Utiliza `sessionStorage` para "manter o usuário logado" durante a sessão (enquanto a aba do navegador estiver aberta).
* **Painel Protegido (dashboard.html):** Uma página "financeira" que só pode ser acessada por usuários autenticados. Se um usuário não logado tentar acessá-la, ele é redirecionado para a página de login.
* **Logout:** Funcionalidade no painel que limpa a `sessionStorage` e redireciona o usuário de volta ao login.

---

## 🚀 Tecnologias Utilizadas

* **HTML5:** Para toda a estrutura e semântica do site.
* **CSS3:** Para estilização, layout (Flexbox e Grid) e responsividade (Media Queries).
* **JavaScript (Puro/Vanilla):** Usado para:
    * Manipulação do DOM (ex: menu hambúrguer).
    * Gerenciamento de eventos (cliques, envios de formulário).
    * Todo o fluxo de login/cadastro.
* **API de Web Storage:**
    * `localStorage`: Para armazenar permanentemente os dados da conta do usuário.
    * `sessionStorage`: Para gerenciar o estado de "logado" do usuário.
* **Font Awesome:** Para os ícones utilizados no design.

---

## 🏁 Como Executar o Projeto

Este é um projeto estático (front-end puro), então não há necessidade de instalação ou de um servidor complexo.

1.  Baixe ou clone este repositório.
2.  Certifique-se de que a estrutura de arquivos esteja correta:
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
3.  Abra o arquivo `index.html` no seu navegador de preferência.
4.  Para testar o fluxo completo:
    * Vá para `login.html` e clique em "Cadastre-se".
    * Crie uma conta em `cadastro.html`.
    * Você será redirecionado para `login.html`. Faça o login.
    * Você será levado ao `dashboard.html`.
    * Tente fechar a aba e abrir o `dashboard.html` diretamente (você será expulso!).

---

## 🎓 Conceitos Aplicados

Este projeto foi um ótimo exercício para praticar:

* **HTML/CSS:** Conversão de um design (Figma) em código funcional e responsivo.
* **JavaScript (Vanilla):** Manipulação de elementos da página e gerenciamento de eventos sem depender de bibliotecas como jQuery ou React.
* **Armazenamento no Lado do Cliente (Client-Side Storage):** Entendimento prático das diferenças e usos do `localStorage` (persistência longa) e `sessionStorage` (persistência de sessão).
* **Arquitetura Multi-Página:** Criação de um fluxo de navegação lógico entre diferentes páginas HTML.
* **Autenticação Simulada:** Implementação de uma "rota protegida" no front-end, um conceito fundamental em aplicações web.