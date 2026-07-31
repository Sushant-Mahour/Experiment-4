document.addEventListener("DOMContentLoaded", () => {
    const gif7 = document.getElementById("gif7");
    const staticImg7 = document.getElementById("staticImg7");
    
    // Duration we extracted from the GIF is 4560 ms
    const duration = 4560;
    
    // Play the GIF from the beginning
    gif7.src = "../step 7.gif?" + new Date().getTime();
    gif7.style.display = "block";
    
    // Stop the loop after the duration
    setTimeout(() => {
        gif7.style.display = "none";
        staticImg7.style.display = "block";
        
        // Show Next Step button when GIF completes
        const nextToStep8 = document.getElementById("nextToStep8");
        const nextArrow7 = document.getElementById("nextArrow7");
        if(nextToStep8) nextToStep8.style.visibility = "visible";
        if(nextArrow7) nextArrow7.style.visibility = "visible";
    }, duration);

    const prevToStep6 = document.getElementById("prevToStep6");
    if (prevToStep6) {
        prevToStep6.addEventListener("click", () => {
            window.location.href = "step6.html";
        });
    }

    const nextToStep8Btn = document.getElementById("nextToStep8");
    if (nextToStep8Btn) {
        nextToStep8Btn.addEventListener("click", () => {
            window.location.href = "step8.html";
        });
    }
});
