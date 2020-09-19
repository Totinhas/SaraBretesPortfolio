function underlineMenu() {
  const path = window.location.pathname.split("/");
  const page = path[path.length - 1];
  const menuItem = document.querySelector('[data-page="' + page + '"]');
  menuItem.classList.add("currentPage");
}
