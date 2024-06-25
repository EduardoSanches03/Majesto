document.addEventListener('DOMContentLoaded', function () {
    const contents = document.querySelectorAll('.case-content');
    const arrows = document.querySelectorAll('.arrow-left-click, .arrow-right-click'); // Seleciona ambas as setas

    let currentIndex = 0;

    arrows.forEach((arrow, index) => {
        arrow.addEventListener('click', function () {
            // Oculta o conteúdo atual
            contents[currentIndex].classList.remove('active');

            // Determina a direção do clique
            if (arrow.classList.contains('arrow-right-click')) {
                // Avança para o próximo conteúdo
                currentIndex = (currentIndex + 1) % contents.length;
            } else if (arrow.classList.contains('arrow-left-click')) {
                // Retrocede para o conteúdo anterior
                currentIndex = (currentIndex - 1 + contents.length) % contents.length;
            }

            // Exibe o próximo conteúdo
            contents[currentIndex].classList.add('active');
        });
    });
});
