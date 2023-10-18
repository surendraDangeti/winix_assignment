document.addEventListener("DOMContentLoaded", function () {
    const homeSection = document.querySelector(".home-section");
    const logo = document.querySelector(".home-log");
    const plotTitle = document.querySelector(".plot-title");
    const plotText = document.querySelector(".plot-text");
    const triggerZoom = 1.2;
    const triggerHide = 0.05;
    const triggerText = 0.1;
    let isZoomed = false;
    let isLogoHidden = false;
    let isTextDisplayed = false;

    // Function to apply initial styles
    function applyInitialStyles() {
        plotTitle.style.opacity = 0;
        plotText.style.opacity = 0;
        isTextDisplayed = false;
    }

    // Apply initial styles when the page loads
    applyInitialStyles();

    // Set a smooth transition for background-size
    homeSection.style.transition = "transform 0.3s, opacity 0.3s";

    window.addEventListener("scroll", function () {
        const scrollPos = window.scrollY;
        const sectionHeight = homeSection.offsetHeight;

        // Calculate the zoom factor more smoothly
        const zoomFactor = 1 + Math.min(scrollPos / (triggerZoom * sectionHeight), 0.5);

        // Apply the zoom effect using CSS transform
        homeSection.style.transform = `scale(${zoomFactor})`;

        // Hide the logo when scrolling down to the specified percentage of the section's height
        if (scrollPos >= triggerHide * sectionHeight && !isLogoHidden) {
            logo.style.opacity = 0;
            isLogoHidden = true;
        }

        // Display the text when scrolling down to the specified percentage of the section's height
        if (scrollPos >= triggerText * sectionHeight && !isTextDisplayed) {
            plotTitle.style.opacity = 1;
            plotText.style.opacity = 1;
            isTextDisplayed = true;
        }

        // Reset the styles when scrolling back to the top
        if (scrollPos === 0) {
            homeSection.style.transform = "scale(1)";
            isZoomed = false;

            if (isLogoHidden) {
                logo.style.opacity = 1;
                isLogoHidden = false;
            }

            if (isTextDisplayed) {
                applyInitialStyles();
            }
        }
    });
});

// section1




// section2
document.addEventListener("DOMContentLoaded", function () {
    const kidPics = document.querySelectorAll(".kid-pic");

    window.addEventListener("scroll", function () {
        const triggerOffset = window.innerHeight * 0.7; // Adjust the offset as needed

        kidPics.forEach(function (kidPic, index) {
            const rect = kidPic.getBoundingClientRect();
            if (rect.top < triggerOffset && !kidPic.classList.contains("active")) {
                setTimeout(function () {
                    kidPic.classList.add("active");
                }, index * 200); // Adjust the delay as needed
            }
        });
    });
});


// section3
document.addEventListener("DOMContentLoaded", function () {
    const keyImage = document.querySelector(".key-image");
    const imageContainer = document.querySelector(".coin-row");
    const images = imageContainer.querySelectorAll(".coin-image");
    const coinPairs = [images[0], images[1], images[2], images[3]];
    
    let isScrolling = false;
    let currentImagePairIndex = 0;
    let imageSwitchTimeout;
    
    function handleScroll() {
        if (!isScrolling) {
            isScrolling = true;
            keyImage.classList.add("rotating");
            switchImage();
        }
        
        clearTimeout(imageSwitchTimeout);
        imageSwitchTimeout = setTimeout(stopRotation, 200);
    }

    function stopRotation() {
        isScrolling = false;
        keyImage.classList.remove("rotating");
    }

    function switchImage() {
        coinPairs[currentImagePairIndex].classList.remove("coin-pair-active");
        currentImagePairIndex = (currentImagePairIndex + 1) % 2;
        coinPairs[currentImagePairIndex].classList.add("coin-pair-active");
    }

    window.addEventListener("scroll", handleScroll);

    window.addEventListener("scroll", function () {
        clearTimeout(imageSwitchTimeout);
        imageSwitchTimeout = setTimeout(stopRotation, 200);
    });
});




