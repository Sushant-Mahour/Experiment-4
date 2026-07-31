
const transbox1b = document.getElementById("transbox1b");
const interactionLayer1b = document.getElementById("interactionLayer1b");
const staticImg1b = document.getElementById("staticImg1b");
const gif1b = document.getElementById("gif1b");
const nextToStep2 = document.getElementById("nextToStep2");
const nextArrow1b = document.getElementById("nextArrow1b");

let step1bTimeout = null;
let slide1bBlob = null;
fetch("../assets/slide 1b.gif").then(r => r.blob()).then(b => slide1bBlob = b);

transbox1b.addEventListener("click", () => {
    interactionLayer1b.style.display = "none";
    gif1b.style.display = "block";

    gif1b.onload = () => {
        gif1b.onload = null;
        staticImg1b.style.display = "none";

        step1bTimeout = setTimeout(() => {
            gif1b.style.display = "none";
            staticImg1b.src = "../assets/slide_1b_last.png";
            staticImg1b.style.display = "block";
            nextToStep2.style.visibility = "visible";
            nextArrow1b.style.visibility = "visible";
        }, 5000);
    };

    if (slide1bBlob) {
        gif1b.src = URL.createObjectURL(slide1bBlob);
    } else {
        gif1b.src = "../assets/slide 1b.gif?" + new Date().getTime();
    }
});

nextToStep2.addEventListener("click", () => {
    window.location.href = "step2.html";
});

document.getElementById("prevToStep1").addEventListener("click", () => {
    window.location.href = "step1.html";
});
