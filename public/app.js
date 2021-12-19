document.addEventListener("DOMContentLoaded",()=>{
    let botonMenu = document.querySelector("#display-menu");
    let line1 = document.querySelector("#line-1");
    let line2 = document.querySelector("#line-2");
    let line3 = document.querySelector("#line-3");
    let menu = document.querySelector("#menu");

    botonMenu.addEventListener("click",()=>{
        line1.classList.toggle("rotate-45");
        line2.classList.toggle("hidden");
        line3.classList.toggle("-rotate-45");
        menu.classList.toggle("hidden");
        menu.classList.toggle("flex");
    });
});