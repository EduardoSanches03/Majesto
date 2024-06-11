document.addEventListener("DOMContentLoaded", (event) => {
  const menuText = document.getElementById("menu_text");
  let angle = 0;

  function rotate() {
    angle = (angle + 0.5) % 360;
    menuText.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotate);
  }

  rotate();
});

document.addEventListener("DOMContentLoaded", (event) => {
  const starMove = document.getElementById("close_options_star");

  function animateStar() {
    const x = (Math.random() - 0.5) * 2;
    const y = (Math.random() - 0.5) * 1;

    starMove.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(animateStar);
  }

  animateStar();
});
