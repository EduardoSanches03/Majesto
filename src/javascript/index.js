const myObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.classList.contains("hiddenU")) {
        entry.target.classList.add("showU");
      }
      if (entry.target.classList.contains("hiddenR")) {
        entry.target.classList.add("showR");
      } else if (entry.target.classList.contains("hidden")) {
        entry.target.classList.add("show");
      }
    }
  });
});

const elements = document.querySelectorAll(".hidden, .hiddenR, .hiddenU");

elements.forEach((element) => myObserver.observe(element));
