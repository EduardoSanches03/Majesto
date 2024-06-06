// src/javascript/index.js
function abrirMenu() {
  // Esconder o menu_text
  console.log("Clicou");
  document.getElementById("logo_menu").style.display = "none";

  // Mostrar as novas opções de menu
  document.getElementById("menu_options").style.display = "block";
}


function closeMenu(){
  document.getElementById("menu_options").style.display = "none"
  document.getElementById("logo_menu").style.display = "block";
}