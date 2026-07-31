
const transbox1 = document.getElementById("transbox1");
const interactionLayer1 = document.getElementById("interactionLayer1");
const staticImg1 = document.getElementById("staticImg1");
const gif1 = document.getElementById("gif1");
const nextToStep1b = document.getElementById("nextToStep1b");
const nextArrow1 = document.getElementById("nextArrow1");

let step1Timeout = null;
let slide1aBlob = null;
fetch("../assets/Slide 1a.gif").then(r => r.blob()).then(b => slide1aBlob = b);

transbox1.addEventListener("click", () => {
    interactionLayer1.style.display = "none";
    gif1.style.display = "block";
    gif1.style.opacity = "1";

    gif1.onload = () => {
        gif1.onload = null;
        staticImg1.style.display = "none";

        step1Timeout = setTimeout(() => {
            gif1.style.opacity = "0";
            staticImg1.src = "../assets/slide_1a_last.png";
            staticImg1.style.display = "block";
            nextToStep1b.style.visibility = "visible";
            nextArrow1.style.visibility = "visible";
        }, 8080);
    };

    if (slide1aBlob) {
        gif1.src = URL.createObjectURL(slide1aBlob);
    } else {
        gif1.src = "../assets/Slide 1a.gif?" + new Date().getTime();
    }
});

nextToStep1b.addEventListener("click", () => {
    window.location.href = "step1b.html";
});

document.getElementById("prevToStep0").addEventListener("click", () => {
    window.location.href = "step0.html";
});
