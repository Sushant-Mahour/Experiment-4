const transbox5Speed = document.getElementById("transbox5Speed");
const transbox5Heat = document.getElementById("transbox5Heat");
const interactionLayer5Speed = document.getElementById("interactionLayer5Speed");
const interactionLayer5Heat = document.getElementById("interactionLayer5Heat");

const staticImg5 = document.getElementById("staticImg5");
const gif5 = document.getElementById("gif5");

const nextToStep6 = document.getElementById("nextToStep6");
const nextArrow5 = document.getElementById("nextArrow5");

function playGif(gifSrc, fallbackSrc, duration, onComplete) {
    gif5.style.display = "none";
    
    gif5.onload = () => {
        gif5.onload = null;
        staticImg5.style.display = "none";
        
        gif5.style.display = "block";
        gif5.style.opacity = "1";
        
        setTimeout(onComplete, duration);
    };

    gif5.src = gifSrc + "?" + new Date().getTime();
}

transbox5Speed.addEventListener("click", () => {
    interactionLayer5Speed.style.display = "none";
    
    // Play speed GIF for 4s
    playGif("../assets/step5_speed.gif", "", 4000, () => {
        gif5.style.display = "none";
        staticImg5.src = "../assets/step5_mid.png";
        staticImg5.style.display = "block";
        interactionLayer5Heat.style.display = "block"; // Show heat interaction next
    });
});

transbox5Heat.addEventListener("click", () => {
    interactionLayer5Heat.style.display = "none";
    
    // Play heat GIF for 4.5s
    playGif("../assets/step5_heat.gif", "", 4500, () => {
        gif5.style.display = "none";
        staticImg5.src = "../assets/step5_end.png";
        staticImg5.style.display = "block";
        
        if(nextToStep6) nextToStep6.style.visibility = "visible";
        if(nextArrow5) nextArrow5.style.visibility = "visible";
    });
});

if(nextToStep6) {
    nextToStep6.addEventListener("click", () => {
        window.location.href = "step6.html";
    });
}

document.getElementById("prevToStep4").addEventListener("click", () => {
    window.location.href = "step4.html";
});

// Autoplay logic
window.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("autoplay") === "true") {
        // Automatically start the speed interaction
        transbox5Speed.click();
        
        // We need to wait for the speed GIF to finish (4000ms) before clicking heat
        setTimeout(() => {
            if (transbox5Heat) {
                transbox5Heat.click();
            }
        }, 4100);
    }
});
