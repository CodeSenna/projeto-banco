// Espera o DOM carregar para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', () => {

    // Seleciona os elementos do DOM
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const navLinks = document.getElementById('nav-links');

    // Verifica se os elementos foram encontrados
    if (hamburgerBtn && navLinks) {
        
        // Adiciona o evento de clique ao botão
        hamburgerBtn.addEventListener('click', () => {
            
            // Alterna (adiciona/remove) a classe 'active' no menu
            navLinks.classList.toggle('active');

            // Opcional: Mudar o ícone (hambúrguer para "X")
            const icon = hamburgerBtn.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times'); // Ícone "X"
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars'); // Ícone "Hambúrguer"
            }
        });
    }

});