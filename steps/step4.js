const transbox4a = document.getElementById("transbox4a");
const interactionLayer4a = document.getElementById("interactionLayer4a");
const transbox4b = document.getElementById("transbox4b");
const interactionLayer4b = document.getElementById("interactionLayer4b");
const transbox4c = document.getElementById("transbox4c");
const interactionLayer4c = document.getElementById("interactionLayer4c");

const vid4 = document.getElementById("vid4");
const nextToStep5 = document.getElementById("nextToStep5");
const nextArrow4 = document.getElementById("nextArrow4");
const step4Text = document.getElementById("step4Text");

let currentStop = 0;

vid4.addEventListener("timeupdate", () => {
    if (currentStop > 0 && vid4.currentTime >= currentStop) {
        vid4.pause();
        currentStop = 0;
        
        // Trigger the next interaction state based on the time
        if (vid4.currentTime < 3.0) {
            interactionLayer4b.style.display = "block";
            step4Text.innerText = "Insert the thermometer.";
        } else if (vid4.currentTime < 5.0) {
            interactionLayer4c.style.display = "block";
            step4Text.innerText = "Turn on the stirrer.";
        }
    }
});

vid4.addEventListener("ended", () => {
    step4Text.innerText = "Stirrer is on.";
    if(nextToStep5) nextToStep5.style.visibility = "visible";
    if(nextArrow4) nextArrow4.style.visibility = "visible";
});

transbox4a.addEventListener("click", () => {
    interactionLayer4a.style.display = "none";
    currentStop = 2.3; // Pause at 2.3s
    vid4.play();
});

transbox4b.addEventListener("click", () => {
    interactionLayer4b.style.display = "none";
    currentStop = 4.5; // Pause at 4.5s
    vid4.play();
});

transbox4c.addEventListener("click", () => {
    interactionLayer4c.style.display = "none";
    currentStop = 0; // Play until end
    vid4.play();
});

if(nextToStep5) {
    nextToStep5.addEventListener("click", () => {
        window.location.href = "step5.html";
    });
}

document.getElementById("prevToStep3").addEventListener("click", () => {
    window.location.href = "step3.html";
});
