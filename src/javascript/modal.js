// Obtém todos os overlays e modais
var overlays = document.getElementsByClassName("overlay");
var modals = document.getElementsByClassName("Modal");
var spans = document.getElementsByClassName("fechar");

for (let i = 0; i < overlays.length; i++) {
  let overlay = overlays[i];
  let modal = modals[i];
  let span = spans[i];

  overlay.onclick = function () {
    modal.classList.remove("hidden");
    modal.style.display = "block";
    setTimeout(function () {
      modal.classList.add("show");
    }, 10);
  };

  span.onclick = function () {
    modal.classList.remove("show");
    modal.classList.add("hidden");
    setTimeout(function () {
      modal.style.display = "none";
    }, 300);
  };
}

window.onclick = function (event) {
  for (let i = 0; i < modals.length; i++) {
    let modal = modals[i];
    if (event.target == modal) {
      modal.classList.remove("show");
      modal.classList.add("hidden");
      setTimeout(function () {
        modal.style.display = "none";
      }, 300);
    }
  }
};
