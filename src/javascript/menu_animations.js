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

// Função para alternar o menu
function toggleMenu() {
  const logoMenu = document.getElementById("logo_menu");
  const menuMobile = document.getElementById("menu-mobile");
  const menuOptions = document.getElementById("menu_options");
  const menuModal = document.getElementById("menuModal");

  if (window.innerWidth > 768) {
    const isOpen = menuOptions.style.display === "block";

    if (isOpen) {
      menuOptions.classList.remove("slide-in");
      menuOptions.classList.add("slide-out");

      setTimeout(() => {
        logoMenu.classList.add("fade-out");
        menuOptions.style.display = "none";
        menuOptions.classList.remove("slide-out");
        logoMenu.style.display = "block";
      }, 1000);
    } else {
      // Abre o menu para desktop
      logoMenu.style.display = "none"; // Esconde o logo
      logoMenu.classList.add("fade-in");
      menuOptions.style.display = "block";
      menuOptions.classList.add("slide-in");
    }
  } else {
    // Modo mobile: alterna a exibição da modal
    const isModalOpen = menuModal.style.display === "flex";

    if (isModalOpen) {
      // Fecha o menu modal
      menuModal.classList.remove("fade-in");
      menuModal.classList.add("fade-out");

      setTimeout(() => {
        menuModal.style.display = "none"; // Esconde a modal
        menuModal.classList.remove("fade-out");
      }, 1000); // Ajuste de acordo com a duração da animação CSS
    } else {
      // Abre o menu modal
      menuModal.style.display = "flex";
      menuModal.classList.add("fade-in");
    }
  }
}
