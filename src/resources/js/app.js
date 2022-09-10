import "bootstrap";

//* constants
const navbar = document.getElementsByTagName("nav")[0];
const target = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

const screenWidth = window.innerWidth;

if (screenWidth < 990) {
  navbar.style.backgroundColor = "#05233d";
}

window.onscroll = () => {
  const scroll = window.pageYOffset;
  if (scroll > 200) {
    navbar.style.backgroundColor = "#05233d";
  } else {
    if (screenWidth > 600) {
      navbar.style.backgroundColor = "transparent";
    }
  }
};

const animeScroll = () => {
  const windowTop = window.pageYOffset;

  target.forEach((el) => {
    if (windowTop > el.offsetTop - window.innerHeight / 1.1) {
      el.classList.add(animationClass);
    }
  });
};

window.addEventListener("scroll", () => {
  animeScroll();
});
