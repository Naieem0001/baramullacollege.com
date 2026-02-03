document.addEventListener("DOMContentLoaded", () => {

  /* ===============================
     DARK / LIGHT MODE TOGGLE
  ================================ */
  const themeToggle = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("gdc-theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");

      if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("gdc-theme", "light");
      } else {
        localStorage.setItem("gdc-theme", "dark");
      }
    });
  }

  /* ===============================
     ACCESSIBILITY: KEYBOARD NAVIGATION
     (Dropdown menus)
  ================================ */
  const submenuParents = document.querySelectorAll(".has-submenu");

  submenuParents.forEach(parent => {
    const link = parent.querySelector("a");

    if (link) {
      link.addEventListener("keydown", e => {
        if (e.key === "Enter") {
          e.preventDefault();
          parent.classList.toggle("open");
        }
      });
    }
  });

});
document.addEventListener("DOMContentLoaded", function () {

  const submenuLinks = document.querySelectorAll(".has-submenu > a");

  submenuLinks.forEach(link => {

    link.addEventListener("click", function (e) {

      if (window.innerWidth <= 900) {

        e.preventDefault();

        const parent = this.parentElement;

        // close others
        document.querySelectorAll(".has-submenu.open").forEach(item=>{
          if(item !== parent){
            item.classList.remove("open");
          }
        });

        parent.classList.toggle("open");

      }

    });

  });

});
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

if(navToggle && navMenu){
  navToggle.addEventListener("click", ()=>{
    navMenu.classList.toggle("active");
  });
}




