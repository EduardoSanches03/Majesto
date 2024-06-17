$(document).ready(function(){
    $(window).scroll(function() {
        console.log('Evento de rolagem acionado');
        console.log($(this).scrollTop());
    });
});




ScrollReveal().reveal("#majesto_text", {
  duration: 2000,
  distance: "400px",
  origin: "left",
});
