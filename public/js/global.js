console.log("JavaScript file is linked correctly!");

// Simple test - try to initialize Typed immediately
document.addEventListener("DOMContentLoaded", () => {


    // Test if element exists
    const typedElement = document.querySelector("#typed");

    if (typedElement) {
        // First, set some initial text to verify the element is working
        typedElement.textContent = "Loading...";

        if (typeof Typed !== "undefined") {

            try {
                // Clear the element first
                typedElement.textContent = "";

                new Typed("#typed", {
                    strings: ["Shopify Wizard", "Problem Solver", "Clear Communicator", "Web Enthusiast"],
                    typeSpeed: 50,
                    backSpeed: 30,
                    loop: true,
                    showCursor: true,
                    cursorChar: '|',
                    contentType: 'text'
                });

            } catch (error) {

                typedElement.textContent = "Shopify Developer";
            }
        } else {

            typedElement.textContent = "Shopify Developer";
        }

    }

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


