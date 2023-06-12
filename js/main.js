// Header stiky //
const header= document.querySelector("header")

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", window.scrollY > 0);
});

// Hamburger menu //

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})




// Top Button //
const goToBtn = document.querySelector('.go-top-btn');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 200) {
        goToBtn.style.display = "flex"
    } else {
        goToBtn.style.display = "none"
    }
}

goToBtn.addEventListener('click', () => {
    window.scrollTo ({
        top:0,
        behavior: "smooth"
    })
})



