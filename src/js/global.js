console.log("JavaScript file is linked correctly!");

    window.addEventListener("DOMContentLoaded", () => {
        if (typeof Typed !== "undefined") {
            new Typed("#typed", {
                strings: [" Shopify Wizard", "Problem Solver", "Clear Communicator", "Web Enthusiast"],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true
            });
        } else {
            console.error("Typed.js is not loaded. Please include it manually or use a CDN.");
        }

        // Smooth scrolling for navigation
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    });
      

    