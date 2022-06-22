const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const sentinel = document.querySelector(".sentinel");
const navbar = document.querySelector(".navbar");
const stickyNavbar = document.querySelector(".navbar-sticky");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu");
  document.body.classList.toggle("freeze");
});

const stickyBurger = stickyNavbar.querySelector(".hamburger");

stickyBurger.addEventListener("click", () => {
  mobileMenu.classList.toggle("show-menu");
  document.body.classList.toggle("freeze");
});

const handler = (entries) => {
  if (navbar) {
    if (!entries[0].isIntersecting) {
      stickyNavbar.classList.add("sticky-active");
      console.log("hello");
    } else {
      stickyNavbar.classList.remove("sticky-active");
    }
  }
};

const observer = new window.IntersectionObserver(handler);
observer.observe(sentinel);
