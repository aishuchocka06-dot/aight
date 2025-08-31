// Simple fade-in animation on scroll
document.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    const pos = card.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }
  });
});
