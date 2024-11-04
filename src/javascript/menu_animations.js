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


function toggleMenu() {
  const logoMenu = document.getElementById("logo_menu");
  const menuMobile = document.getElementById("menu-mobile");
  const menuOptions = document.getElementById("menu_options");

  // Verifica se o menu está visível
  const isOpen = menuOptions.style.display === "block";

  if (isOpen) {
    // Fecha o menu para desktop e mobile
    menuOptions.classList.remove("slide-in");
    menuOptions.classList.add("slide-out");

    setTimeout(() => {
      menuOptions.style.display = "none";
      menuOptions.classList.remove("slide-out");

      if (window.innerWidth > 768) {
        logoMenu.style.display = "block";
        logoMenu.classList.remove("fade-out");
        logoMenu.classList.add("fade-in");
      } else {
        menuMobile.style.display = "block";
        menuMobile.classList.remove("fade-out");
        menuMobile.classList.add("fade-in");
      }
    }, 1000); // Ajuste de acordo com a duração da animação CSS
  } else {
    // Abre o menu para desktop e mobile
    if (window.innerWidth > 768) {
      logoMenu.classList.add("fade-out");
    } else {
      menuMobile.classList.add("fade-out");
    }

    setTimeout(() => {
      if (window.innerWidth > 768) {
        logoMenu.style.display = "none";
      } else {
        menuMobile.style.display = "none";
      }

      menuOptions.style.display = "block";
      menuOptions.classList.add("slide-in");
    }, 1000); // Ajuste de acordo com a duração da animação CSS
  }
}