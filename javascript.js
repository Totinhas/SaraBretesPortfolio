function toggleNav() {
  console.log("hi");
  let burger = document.querySelector(".fa-bars");
  let nav = document.querySelector(".menus");
  const navLinks = document.querySelectorAll(".menus li");

  burger.addEventListener("click", function() {
    nav.classList.toggle("menusActive");
  });
}

toggleNav();
/* Vertical Menus Toggle 
function verticalMenus() {
  let mobileMenus = document.getElementById("mobileMenus");
  if (mobileMenus.style.display === "none") {
    mobileMenus.style.display = "block";
  } else {
    mobileMenus.style.display = "none";
  }
}
*/
