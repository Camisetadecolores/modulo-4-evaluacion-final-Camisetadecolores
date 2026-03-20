
const menuBtn = document.querySelector(".js-menu-btn");
const mobileMenu = document.querySelector(".js-mobile-menu");
const shopToggle = document.querySelector(".js-shop-toggle");
const shopSubmenu = document.querySelector(".js-shop-submenu");

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("is-open");
  });
}

if (shopToggle && shopSubmenu) {
  shopToggle.addEventListener("click", () => {
    shopSubmenu.classList.toggle("is-open");
  });
}