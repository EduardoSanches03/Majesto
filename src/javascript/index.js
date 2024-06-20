let rolagemTravada = false;

function travarRolagem() {
  document.body.style.overflow = "hidden";
  const hiddenIElement = document.querySelector(".hiddenI");
  const hiddenIElement2 = document.querySelector(".text-container");
  if (hiddenIElement) {
    hiddenIElement.classList.add("showI");
    setTimeout(() => {
      hiddenIElement.classList.remove("showI");
    }, 3000);
  }
  if (hiddenIElement2) {
    hiddenIElement2.classList.add("showIn-Out-Up");
    
  }
}

function destravarRolagem() {
  document.body.style.overflow = "";
}

const myObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if (entry.target.classList.contains("hidden")) {
          entry.target.classList.add("show");
        }
        if (entry.target.classList.contains("hiddenU")) {
          entry.target.classList.add("showU");
        }
        if (entry.target.classList.contains("hiddenR")) {
          entry.target.classList.add("showR");
        }
        if (
          entry.target.classList.contains("scroll_pause") &&
          !rolagemTravada
        ) {
          travarRolagem();
          rolagemTravada = true; // Atualiza a flag para indicar que a rolagem foi travada
          setTimeout(destravarRolagem, 3000);
        }
      }
    });
  },
);

// Seleciona todos os elementos que queremos observar
const elements = document.querySelectorAll(
  ".hidden, .hiddenI, .hiddenR, .hiddenU, .scroll_pause, .hiddenIn-Out-Up"
);

// Adiciona os elementos ao observer
elements.forEach((element) => myObserver.observe(element));
