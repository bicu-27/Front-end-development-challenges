const bgImageEL = document.getElementById("bg-image");

window.addEventListener("scroll", updateImage);

function updateImage() {
    const offset = window.pageYOffset;
    
    bgImageEL.style.opacity = 1 - offset / 900;
    bgImageEL.style.backgroundSize = `${160 - offset / 10}%`;
}
