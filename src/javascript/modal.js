// Obtém a overlay e o modal
var overlay = document.getElementById("kellfanyOverlay");
var modal = document.getElementById("kellfanyModal");
var section = document.getElementById("pg5");

// Obtém o elemento <span> que fecha o modal
var span = document.getElementsByClassName("fechar")[0];


overlay.onclick = function() {
    modal.style.display = "block";
    section.style.overflow = "hidden"
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
