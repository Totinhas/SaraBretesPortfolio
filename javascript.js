/* Replace menus with burger menu on resize */
function windowResize() {
  if (window.innerWidth >= 540) {
    let navMenus = (document.getElementById("menus").style.display = "block");
    let navBurger = (document.getElementsByClassName(
      "fa-bars"
    )[0].style.display = "none");
  } else {
    let navMenus = (document.getElementById("menus").style.display = "none");
    let navBurger = (document.getElementsByClassName(
      "fa-bars"
    )[0].style.display = "block");
  }
}

window.onresize = windowResize;

/* Vertical Menus Toggle */
function verticalMenus() {
  let mobileMenus = document.getElementById("mobileMenus");
  if (mobileMenus.style.display === "none") {
    mobileMenus.style.display = "block";
  } else {
    mobileMenus.style.display = "none";
  }
}
