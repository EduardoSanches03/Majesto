const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Verifica se o elemento tem a classe 'hiddenR'
      if (entry.target.classList.contains("hiddenR")) {
        entry.target.classList.add("showR");
        // Verifica se o elemento tem a classe 'hidden'
      } else if (entry.target.classList.contains("hidden")) {
        entry.target.classList.add("show");
      }
    } else if (entry.target.classList.contains("showR")) {
      entry.target.classList.remove("showR");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const elements = document.querySelectorAll(".hidden, .hiddenR");

elements.forEach((element) => myObserver.observe(element));
