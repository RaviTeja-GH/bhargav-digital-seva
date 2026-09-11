/* =========================================================
   BHARGAV DIGITAL SEVA
   Main JavaScript
   ========================================================= */


/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("show");

    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        if (navbar) {
            navbar.classList.remove("show");
        }

    });

});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


/* =========================================================
   SERVICE SEARCH
   ========================================================= */

const searchInput = document.getElementById("serviceSearch");
const serviceCards = document.querySelectorAll(".service-card");

if (searchInput) {

    searchInput.addEventListener("input", () => {

        const searchTerm = searchInput.value
            .toLowerCase()
            .trim();

        serviceCards.forEach(card => {

            const cardText = card.innerText.toLowerCase();

            if (cardText.includes(searchTerm)) {

                card.classList.remove("hidden");

            } else {

                card.classList.add("hidden");

            }

        });

    });

}


/* =========================================================
   CURRENT YEAR
   ========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    yearElement.textContent = new Date().getFullYear();

}


/* =========================================================
   SMOOTH BUTTON FEEDBACK
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function () {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});
