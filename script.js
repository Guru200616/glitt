// Typing animation
const text = "Frontend Developer";
let index = 0;
const typing = document.querySelector(".typing");

function typeEffect() {
  if (index < text.length) {
    typing.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120);
  }
}
typeEffect();

// Cursor glow
const glow = document.querySelector(".cursor-glow");
document.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});

// Scroll reveal
const sections = document.querySelectorAll(".section");
const reveal = () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 80) {
      sec.classList.add("show");
    }
  });
};
window.addEventListener("scroll", reveal);
reveal();
