// src/javascript/index.js

// Função para iniciar a animação
function animateGlitch() {
  const glitchStatue = document.getElementById("glitch_statue");
  const glitchStatueTop = document.getElementById("glitch_statue_top");

  function glitchMove(timestamp) {
    const x = Math.random() * 8 - 1;
    const y = Math.random() * 4 - 0.5;
    glitchStatue.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(glitchMove);
  }

  function glitchFlash(timestamp) {
    const xOffset = parseFloat(
      getComputedStyle(glitchStatueTop).getPropertyValue("--x-offset")
    );
    const yOffset = parseFloat(
      getComputedStyle(glitchStatueTop).getPropertyValue("--y-offset")
    );

    const randomValue = Math.random();
    if (randomValue < 0.2) {
      glitchStatueTop.style.opacity = "0";
      glitchStatueTop.style.transform = `translateX(${xOffset}px)`;
    } else if (randomValue < 0.4) {
      glitchStatueTop.style.opacity = "0";
      glitchStatueTop.style.transform = `translateX(${yOffset}px)`;
    } else if (randomValue < 0.6) {
      glitchStatueTop.style.opacity = "0";
      glitchStatueTop.style.transform = `translateX(${xOffset + yOffset}px)`;
    } else {
      glitchStatueTop.style.opacity = "1";
      glitchStatueTop.style.transform = "translateX(0)";
    }

    requestAnimationFrame(glitchFlash);
  }

  function glitchMoveBrusque(timestamp) {
    const positions = [
      [5, -3],
      [-5, 3],
      [3, 2],
      [-3, -2],
      [2, -5],
      [-2, 5],
    ];
    const index = Math.floor(Math.random() * positions.length);
    const [x, y] = positions[index];
    glitchStatueTop.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(glitchMoveBrusque);
  }

  requestAnimationFrame(glitchMove);
  requestAnimationFrame(glitchFlash);
  requestAnimationFrame(glitchMoveBrusque);
}

// Iniciar a animação quando a página estiver carregada
document.addEventListener("DOMContentLoaded", animateGlitch);
