const transbox3a = document.getElementById("transbox3a");
const interactionLayer3a = document.getElementById("interactionLayer3a");
const transbox3b = document.getElementById("transbox3b");
const interactionLayer3b = document.getElementById("interactionLayer3b");
const transbox3c = document.getElementById("transbox3c");
const interactionLayer3c = document.getElementById("interactionLayer3c");
const step3Text = document.getElementById("step3Text");
const nextToStep4 = document.getElementById("nextToStep4");
const nextArrow3 = document.getElementById("nextArrow3");
const staticImg3 = document.getElementById("staticImg3");
const gif3 = document.getElementById("gif3");

let step3Blob1 = null;
let step3Blob2 = null;
let step3Blob3 = null;

// Preload static images to prevent lag/flash at the end of GIFs
const preload1 = new Image(); preload1.src = "../assets/step3_p2_first.png";
const preload2 = new Image(); preload2.src = "../assets/step3_p3_first.png";
const preload3 = new Image(); preload3.src = "../assets/step3_p3_last.png";

fetch("../step 3 part 1.gif").then(r => r.blob()).then(b => step3Blob1 = b);
fetch("../step 3 part 2.gif").then(r => r.blob()).then(b => step3Blob2 = b);
fetch("../step 3 part 3.gif").then(r => r.blob()).then(b => step3Blob3 = b);

function playGif(blob, fallbackSrc, duration, onComplete) {
    // Keep gif3 hidden until it fully loads
    gif3.style.display = "none";
    
    gif3.onload = () => {
        gif3.onload = null;
        staticImg3.style.display = "none";
        
        // Now show the new GIF
        gif3.style.display = "block";
        gif3.style.opacity = "1";
        
        setTimeout(onComplete, duration - 40);
    };

    if (blob) {
        gif3.src = URL.createObjectURL(blob);
    } else {
        gif3.src = fallbackSrc + "?" + new Date().getTime();
    }
}

transbox3a.addEventListener("click", () => {
    interactionLayer3a.style.display = "none";
    
    playGif(step3Blob1, "../step 3 part 1.gif", 2920, () => {
        gif3.style.display = "none";
        staticImg3.src = "../assets/step3_p2_first.png";
        staticImg3.style.display = "block";
        interactionLayer3b.style.display = "block";
        step3Text.innerText = "Fill Distill Water upto 1000ml.";
    });
});

transbox3b.addEventListener("click", () => {
    interactionLayer3b.style.display = "none";
    
    playGif(step3Blob2, "../step 3 part 2.gif", 3560, () => {
        gif3.style.display = "none";
        staticImg3.src = "../assets/step3_p3_first.png";
        staticImg3.style.display = "block";
        interactionLayer3c.style.display = "block";
        step3Text.innerText = "Place the stir bar inside the beaker.";
    });
});

transbox3c.addEventListener("click", () => {
    interactionLayer3c.style.display = "none";
    
    playGif(step3Blob3, "../step 3 part 3.gif", 1880, () => {
        gif3.style.display = "none";
        staticImg3.src = "../assets/step3_p3_last.png";
        staticImg3.style.display = "block";
        nextToStep4.style.visibility = "visible";
        nextArrow3.style.visibility = "visible";
    });
});

nextToStep4.addEventListener("click", () => {
    window.location.href = "step4.html";
});

document.getElementById("prevToStep2").addEventListener("click", () => {
    window.location.href = "step2.html";
});
