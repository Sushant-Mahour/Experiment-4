document.addEventListener("DOMContentLoaded", () => {
    const gif8 = document.getElementById("gif8");
    const staticImg8 = document.getElementById("staticImg8");
    
    // Duration we extracted from the GIF is 7440 ms
    const duration = 7440;
    
    // Play the GIF from the beginning
    gif8.src = "../step 8.gif?" + new Date().getTime();
    gif8.style.display = "block";
    
    // Stop the loop after the duration
    setTimeout(() => {
        gif8.style.display = "none";
        staticImg8.style.display = "block";
    }, duration);

    const prevToStep7 = document.getElementById("prevToStep7");
    if (prevToStep7) {
        prevToStep7.addEventListener("click", () => {
            window.location.href = "step7.html";
        });
    }

    const finishBtn = document.getElementById("finishBtn");
    if (finishBtn) {
        finishBtn.addEventListener("click", () => {
            window.location.href = "step0.html";
        });
    }
});
