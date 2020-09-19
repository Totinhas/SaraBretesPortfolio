function toggleNav() {
  const burger = document.querySelector(".fa-bars");
  const nav = document.querySelector(".menus");
  const navLinks = document.querySelectorAll(".menus li");

  burger.addEventListener("click", function () {
    nav.classList.toggle("menusActive");
  });
}
toggleNav();
