let cube = document.getElementById("cube");
window.addEventListener("scroll", () => {
    cube.style.transform = `rotateX(${window.scrollY}deg) rotateY(${-window.scrollX}deg)` ;
});