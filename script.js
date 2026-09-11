/* =========================================================
   BHARGAV DIGITAL SEVA
   Main JavaScript
========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {

    menuBtn.addEventListener("click", function () {
        nav.classList.toggle("open");
    });

}


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {
            nav.classList.remove("open");
        }

    });

});


/* ================= ACTIVE NAVIGATION ================= */

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ================= SERVICE SEARCH ================= */

const serviceSearch = document.getElementById("serviceSearch");
const serviceCards = document.querySelectorAll(".service-card");
const noResults = document.getElementById("noResults");

if (serviceSearch) {

    serviceSearch.addEventListener("input", function () {

        const searchText = this.value.toLowerCase().trim();

        let visibleCards = 0;

        serviceCards.forEach(function (card) {

            const serviceName =
                card.querySelector("h3").textContent.toLowerCase();

            const serviceDescription =
                card.querySelector("p").textContent.toLowerCase();

            const serviceData =
                card.getAttribute("data-service") || "";

            const matches =
                serviceName.includes(searchText) ||
                serviceDescription.includes(searchText) ||
                serviceData.includes(searchText);

            if (matches) {

                card.style.display = "";

                visibleCards++;

            } else {

                card.style.display = "none";

            }

        });


        if (noResults) {

            if (visibleCards === 0 && searchText !== "") {

                noResults.style.display = "block";

            } else {

                noResults.style.display = "none";

            }

        }

    });

}


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ================= CLOSE MENU ON OUTSIDE CLICK ================= */

document.addEventListener("click", function (event) {

    if (!nav || !menuBtn) {
        return;
    }

    const clickedInsideMenu =
        nav.contains(event.target);

    const clickedMenuButton =
        menuBtn.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {

        nav.classList.remove("open");

    }

});
