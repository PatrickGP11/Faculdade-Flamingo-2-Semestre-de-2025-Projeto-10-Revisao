// Espera o documento HTML carregar completamente antes de executar o script

document.addEventListener('DOMContentLoaded', () => {

 

    // 1. Encontra os elementos com os quais vamos trabalhar

    // O botão que será clicado

    const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

    // A navegação que será mostrada/escondida

    const mainNav = document.querySelector('.main-nav');

 

    // 2. Escuta por um evento de "clique" no botão

    mobileMenuIcon.addEventListener('click', () => {

       

        // 3. Executa a ação quando o botão é clicado

        // A função classList.toggle() é a chave:

        // - Se a classe 'active' NÃO existir na navegação, ela a ADICIONA.

        // - Se a classe 'active' JÁ EXISTIR na navegação, ela a REMOVE.

        mainNav.classList.toggle('active');

    });

});

