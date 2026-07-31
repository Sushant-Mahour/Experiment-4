
const transbox2 = document.getElementById("transbox2");
const interactionLayer2 = document.getElementById("interactionLayer2");
const staticImg2 = document.getElementById("staticImg2");
const gif2 = document.getElementById("gif2");
const nextToStep3 = document.getElementById("nextToStep3");

let step2Timeout = null;
let step2Blob = null;
fetch("../slide 2.gif").then(r => r.blob()).then(b => step2Blob = b);

transbox2.addEventListener("click", () => {
    interactionLayer2.style.display = "none";
    gif2.style.display = "block";
    gif2.style.opacity = "1";

    gif2.onload = () => {
        gif2.onload = null;
        staticImg2.style.display = "none";

        step2Timeout = setTimeout(() => {
            gif2.style.opacity = "0";
            staticImg2.src = "../assets/slide_2_last.png";
            staticImg2.style.display = "block";
            nextToStep3.style.visibility = "visible";
            document.getElementById("nextArrow2").style.visibility = "visible";
        }, 2360);
    };

    if (step2Blob) {
        gif2.src = URL.createObjectURL(step2Blob);
    } else {
        gif2.src = "../slide 2.gif?" + new Date().getTime();
    }
});

nextToStep3.addEventListener("click", () => {
    window.location.href = "step3.html";
});

document.getElementById("prevToStep1b").addEventListener("click", () => {
    window.location.href = "step1b.html";
});
