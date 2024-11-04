document.addEventListener('DOMContentLoaded', function () {
    const contents = document.querySelectorAll('.case-content');
    const arrows = document.querySelectorAll('.arrow-left-click, .arrow-right-click'); // Seleciona ambas as setas

    let currentIndex = 0;

    arrows.forEach((arrow, index) => {
        arrow.addEventListener('click', function () {
            contents[currentIndex].classList.remove('active');

            if (arrow.classList.contains('arrow-right-click')) {
                currentIndex = (currentIndex + 1) % contents.length;
            } else if (arrow.classList.contains('arrow-left-click')) {
                currentIndex = (currentIndex - 1 + contents.length) % contents.length;
            }

            contents[currentIndex].classList.add('active');
        });
    });
});
