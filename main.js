var typed=new Typed(".text",{
    strings:["Frontend Developer","Data Analyst","Web Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})

// Your progress bar code
document.addEventListener("DOMContentLoaded", function () {
    const progressBars = document.querySelectorAll(".progress-bar");

    const revealProgress = () => {
        progressBars.forEach(bar => {
            const barTop = bar.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (barTop < windowHeight - 100 && !bar.classList.contains("animated")) {
                const targetWidth = bar.getAttribute("data-width");
                bar.style.width = targetWidth;
                bar.classList.add("animated"); // mark as animated

                // Animate percentage count-up
                let start = 0;
                const end = parseInt(targetWidth);
                const interval = setInterval(() => {
                    if (start <= end) {
                        bar.textContent = start + "%";
                        start++;
                    } else {
                        clearInterval(interval);
                    }
                }, 10);
            }
        });
    };
    
    window.addEventListener("scroll", revealProgress);
    revealProgress(); // trigger on load
});
