/* =====================================
   Veterinární volejbalový turnaj
   Main JavaScript
===================================== */


// Plynulé zavření případných otevřených prvků
document.addEventListener("DOMContentLoaded", () => {


    // rok automaticky podle aktuálního data
    const year = new Date().getFullYear();


    console.log(
        "Veterinární volejbalový turnaj web spuštěn - " + year
    );


});



/* =====================================
   Animace sekcí při scrollování
===================================== */


const sections = document.querySelectorAll(".section");


const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold:0.15
    }
);



sections.forEach(section => {

    observer.observe(section);

});



/* =====================================
   Zvýraznění navigace podle pozice
===================================== */


const navLinks = document.querySelectorAll("nav a");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;


        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });



    navLinks.forEach(link => {


        link.classList.remove("active");


        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }


    });


});/* ===============================
   MOBILNÍ MENU
================================ */


const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");


menuToggle.addEventListener("click", () => {


    mainNav.classList.toggle("open");


});



document.querySelectorAll(".main-nav a").forEach(link => {


    link.addEventListener("click", () => {


        mainNav.classList.remove("open");


    });


});
