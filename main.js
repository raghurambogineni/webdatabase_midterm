document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle-icon");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-link");


    function isSmallScreen() {
        return window.innerWidth <= 500;
    }


    menuToggle.addEventListener("click", () => {
        if (isSmallScreen()) {
            navLinks.classList.toggle("active");
        }
    });


    navItems.forEach(link => {
        link.addEventListener("click", () => {
            if (isSmallScreen()) {
                navLinks.classList.remove("active");
            }
        });
    });

    document.addEventListener("click", (event) => {
        if (isSmallScreen() && !navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    });
});