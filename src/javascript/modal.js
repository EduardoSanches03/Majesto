var overlay = document.getElementById("kellfanyOverlay");
var modal = document.getElementById("kellfanyModal");
var section = document.getElementById("pg5");

var span = document.getElementsByClassName("fechar")[0];

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
window.onclick = function (event) {
  if (event.target == modal) {
    modal.classList.remove("show");
    modal.classList.add("hidden");
    setTimeout(function () {
      modal.style.display = "none";
    }, 300);
  }
};
