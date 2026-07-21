script.js
// Wait until the page is fully loaded
document.addEventListener("DOMContentLoaded", function () {

    // Welcome message
    console.log("Welcome to Yohanis Abera's Portfolio!");


    // Automatically update copyright year
    const footerText = document.querySelector("footer p");

    if (footerText) {
        const year = new Date().getFullYear();
        footerText.innerHTML = `© ${year} Yohanis Abera. All Rights Reserved.`;
    }


    // Button click animation
    const buttons = document.querySelectorAll(".btn");

    buttons.forEach(button => {

        button.addEventListener("click", function () {

            this.style.transform = "scale(0.9)";

            setTimeout(() => {
                this.style.transform = "scale(1)";
            }, 150);

        });

    });


    // Typing animation
    const title = document.querySelector("header p");

    if (title) {

        const text = "Network Engineer | Cybersecurity Enthusiast | System Administrator | Web Developer";

        let i = 0;

        title.innerHTML = "";

        function typeEffect() {

            if (i < text.length) {

                title.innerHTML += text.charAt(i);

                i++;

                setTimeout(typeEffect, 50);

            }

        }

        typeEffect();

    }


    // Button opacity effect
    document.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", function () {

            this.style.opacity = "0.7";

            setTimeout(() => {
                this.style.opacity = "1";
            }, 200);

        });

    });

});
