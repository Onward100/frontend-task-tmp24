const navMenu = document.querySelector("nav")
const menuIcon = document.querySelector(".fa-bars")
const closeIcon = document.querySelector(".fa-close")

menuIcon.addEventListener("click", () =>{
    navMenu.style.transform = "translateX(0)"
})

closeIcon.addEventListener("click", () =>{
    navMenu.style.transform = "translateX(2000px)"
})