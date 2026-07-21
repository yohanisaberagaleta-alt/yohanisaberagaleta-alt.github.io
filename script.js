script.js
// Welcome message
console.log("Welcome to Yohanis Abera's Portfolio!");


// Automatically update copyright year
const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
    `© ${year} Yohanis Abera. All Rights Reserved.`;


// Button click animation
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(){

        this.style.transform = "scale(0.9)";

        setTimeout(() => {
            this.style.transform = "scale(1)";
        }, 150);

    });

});


// Typing animation for professional title
const text = "Network Engineer | Cybersecurity Enthusiast | System Administrator | Web Developer";

let i = 0;

const title = document.querySelector("header p");

title.innerHTML = "";


function typeEffect(){

    if(i < text.length){

        title.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeEffect, 50);

    }

}


typeEffect();


// Smooth scrolling effect
document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(){

        this.style.opacity = "0.7";

        setTimeout(() => {
            this.style.opacity = "1";
        }, 200);

    });

})
