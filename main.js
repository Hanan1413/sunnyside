


const menuToggle = document.getElementById("mobile-menu-toggle");
console.log(menuToggle)
const mobileMenu = document.querySelector(".mobile-menu-items");
console.log(mobileMenu)

menuToggle.addEventListener("click",() => {
    mobileMenu.classList.toggle("active");
  });
