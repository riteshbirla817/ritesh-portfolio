
// =====================================
// 1. MOBILE NAVIGATION MENU
// =====================================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

    menuToggle.textContent = isOpen ? "✕" : "☰";

});


// =====================================
// 2. CLOSE MENU AFTER CLICKING A LINK
// =====================================

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


// =====================================
// 3. CLOSE MENU WHEN CLICKING OUTSIDE
// =====================================

document.addEventListener("click", function (event) {

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {

        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


// =====================================
// 4. CONTACT FORM FUNCTIONALITY
// =====================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    // Get form values

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();


    // Check empty fields

    if (!name || !email || !message) {

        alert("Please fill all the fields.");

        return;

    }


    // Basic email validation

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

        alert("Please enter a valid email address.");

        return;

    }


    // Create email content

    const subject = encodeURIComponent(
        "Portfolio Contact Message from " + name
    );

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + message
    );


    // Open default email application

    const mailtoLink =
        "mailto:birlaritesh817@gmail.com" +
        "?subject=" + subject +
        "&body=" + body;

    window.location.href = mailtoLink;


    // Reset form

    contactForm.reset();

});


// =====================================
// 5. FOOTER CURRENT YEAR
// =====================================

const footerText = document.querySelector(".footer p");

if (footerText) {

    footerText.textContent =
        "© " + new Date().getFullYear() +
        " Ritesh Birla. All Rights Reserved.";

}


// =====================================
// 6. SMOOTH SCROLLING
// =====================================

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const targetSection = document.querySelector(targetId);

        if (targetSection) {

            event.preventDefault();

            targetSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
