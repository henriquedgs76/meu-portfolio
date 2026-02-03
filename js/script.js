document.addEventListener('DOMContentLoaded', () => {
    // 1. Configuração do ScrollReveal
    const sr = ScrollReveal({
        distance: '60px',
        duration: 1000,
        delay: 200,
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        reset: false 
    });

    // Animação dos Cards: Zigue-zague (Esquerda/Direita)
    sr.reveal('.card:nth-child(odd)', { origin: 'left', distance: '100px' });
    sr.reveal('.card:nth-child(even)', { origin: 'right', distance: '100px' });

    // Animação em Cascata para as boxes de Tecnologias e Sobre
    sr.reveal('.box', { 
        interval: 150, 
        origin: 'bottom', 
        scale: 0.9 
    });

    // Títulos, Header e Contato
    sr.reveal('h2', { origin: 'top', distance: '30px' });
    sr.reveal('.hero p, .btn-group', { origin: 'bottom', delay: 400 });
    sr.reveal('.contact-card', { origin: 'bottom', scale: 0.9, delay: 300 });
    sr.reveal('footer', { origin: 'bottom', distance: '20px', delay: 500 });

    // 2. Efeito de Digitação (Typing Effect)
    const textElement = document.getElementById('typing-text');
    
    // Só executa se o elemento existir na página
    if (textElement) {
        const phrases = ["Douglas Henrique", "Desenvolvedor FullStack", "Especialista .NET"];
        let phraseIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const current = phrases[phraseIndex];
            
            if (isDeleting) {
                textElement.textContent = current.substring(0, charIndex - 1);
                charIndex--;
            } else {
                textElement.textContent = current.substring(0, charIndex + 1);
                charIndex++;
            }

            let speed = isDeleting ? 50 : 100;

            if (!isDeleting && charIndex === current.length) {
                speed = 2000; // Pausa quando termina de escrever
                isDeleting = true;
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                speed = 500; // Pausa antes de começar a próxima frase
            }

            setTimeout(type, speed);
        }
        type();
    }
});