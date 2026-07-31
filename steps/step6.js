document.addEventListener("DOMContentLoaded", () => {
    const gif6 = document.getElementById("gif6");
    const staticImg6 = document.getElementById("staticImg6");
    
    // Duration we extracted from the GIF is 7640 ms
    const duration = 7640;
    
    // Play the GIF from the beginning
    gif6.src = "../STEP 6.gif?" + new Date().getTime();
    gif6.style.display = "block";
    
    // Stop the loop after the duration
    setTimeout(() => {
        gif6.style.display = "none";
        staticImg6.style.display = "block";
        
        // Show Next Step button when GIF completes
        const nextToStep7 = document.getElementById("nextToStep7");
        const nextArrow6 = document.getElementById("nextArrow6");
        if(nextToStep7) nextToStep7.style.visibility = "visible";
        if(nextArrow6) nextArrow6.style.visibility = "visible";
    }, duration);

    const prevToStep5 = document.getElementById("prevToStep5");
    if (prevToStep5) {
        prevToStep5.addEventListener("click", () => {
            window.location.href = "step5.html?autoplay=true";
        });
    }

    const nextToStep7Btn = document.getElementById("nextToStep7");
    if (nextToStep7Btn) {
        nextToStep7Btn.addEventListener("click", () => {
            window.location.href = "step7.html";
        });
    }
});
