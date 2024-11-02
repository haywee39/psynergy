
// *************************************************************************
// HOME SCRIPT 
// ***************************************************************************
function openLightbox(element) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');

    lightbox.style.display = 'flex';
    lightboxImage.src = element.src;
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
}

// PROMO BANNER ON THE PAGE PAGE IN GET A QUOTE SLIDES IN FROM TOP 

document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".promo-banner");

    function handleScroll() {
        const imageRect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the image is in the viewport
        if (imageRect.top < windowHeight && imageRect.bottom > 0) {
            image.classList.add("visible");
        } 
        // Remove 'visible' class only when the image is completely out of view
        else if (imageRect.bottom <= 0 || imageRect.top >= windowHeight) {
            image.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
});


// ***********************************************************************
// ABOUT SCRIPT 
// ************************************************************************
// THE TEAM PROFILE IN THE ABOUT SECTION PICTURES SLIDES IN 
document.addEventListener("DOMContentLoaded", function () {
    const profiles = document.querySelectorAll(".team-profile");

    function handleScroll() {
        profiles.forEach((profile, index) => {
            const rect = profile.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (rect.top < windowHeight && rect.bottom >= 0) {
                setTimeout(() => {
                    profile.classList.add("visible");
                }, index * 150); // Stagger effect by 150ms for each profile
            } else if (rect.top > windowHeight || rect.bottom < 0) {
                profile.classList.remove("visible"); // Remove visible class if scrolled out
            }
        });
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run once on load in case items are already in view
});


// **********************************************************************************
// SERVICE SCRIPT 
// ************************************************************************
// IMAGE ON THE SERVICE PAGE IN GET A QUOTE SLIDES IN ON SCROLL 

document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".slide-in-image");

    function handleScroll() {
        const imageRect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the image is in the viewport
        if (imageRect.top < windowHeight && imageRect.bottom > 0) {
            image.classList.add("visible");
        } 
        // Remove 'visible' class only when the image is completely out of view
        else if (imageRect.bottom <= 0 || imageRect.top >= windowHeight) {
            image.classList.remove("visible");
        }
    }

    window.addEventListener("scroll", handleScroll);
});
