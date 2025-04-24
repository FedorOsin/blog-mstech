document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("[data-animate]");

  const onScroll = () => {
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("animated");
      }
    });
  };

  window.addEventListener("scroll", onScroll);
  onScroll();
});
