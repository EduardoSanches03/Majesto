document.addEventListener('DOMContentLoaded', (event) => {
    const menuText = document.getElementById('menu_text');
    let angle = 0;

    function rotate() {
        angle = (angle + 1) % 360;
        menuText.style.transform = `rotate(${angle}deg)`;
        requestAnimationFrame(rotate);
    }

    rotate();
});
