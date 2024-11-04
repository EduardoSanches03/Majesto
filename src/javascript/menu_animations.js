document.addEventListener("DOMContentLoaded", (event) => {
  const menuText = document.getElementById("menu_text");
  let angle = 0;

  function rotate() {
    angle = (angle + 0.3) % 360;
    menuText.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotate);
  }
  
  rotate();
});

function abrirMenu() {
  const logoMenu = document.getElementById("logo_menu");
  const menuOptions = document.getElementById("menu_options");

  logoMenu.classList.add("fade-out");

  setTimeout(() => {
    logoMenu.style.display = "none";
    menuOptions.style.display = "block";
    menuOptions.classList.add("slide-in");
  }, 1000); // Tempo igual ao da duração da animação CSS
}

function closeMenu() {
  const menuOptions = document.getElementById("menu_options");
  const logoMenu = document.getElementById("logo_menu");

  menuOptions.classList.remove("slide-in");
  menuOptions.classList.add("slide-out");

  setTimeout(() => {
    menuOptions.style.display = "none";
    logoMenu.style.display = "block";
    logoMenu.classList.remove("fade-out");
    logoMenu.classList.add("fade-in");
  }, 1000); // Tempo igual ao da duração da animação CSS
}
