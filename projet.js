const navig = document.querySelector(".mynav");

window.addEventListener("scroll", function() {
    navig.classList.toggle("section", window.scrollY > 0)
})