const themeButton = document.getElementById("theme-btn");
const html = document.getElementsByTagName("html")[0];

const classicButton = document.getElementById("classic-btn");
const classicPrices = document.getElementById("classic-prices");

const hybridButton = document.getElementById("hybrid-btn");
const hybridPrices = document.getElementById("hybrid-prices");

const lightVolumeButton = document.getElementById("light-volume-btn");
const lightVolumePrices = document.getElementById("light-volume-prices");

//const megaVolumeButton = document.getElementById("mega-volume-btn");
//const megaVolumePrices = document.getElementById("mega-volume-prices");

const elememts = document.querySelectorAll(".fade-in")

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-active");
        }
    })
}, {
    root: null,
    rootMargin: '0px',
    threshold: 0
})

elememts.forEach((elememt) => {
    observer.observe(elememt);
})

classicButton.addEventListener("click", () => {
    if(classicPrices.classList.contains("hidden")) {
        classicPrices.classList.replace("hidden", "flex");
        classicPrices.setAttribute("data-state", "open");
        classicButton.innerText = "Close";

    } else {
        classicPrices.classList.replace("flex", "hidden");
        classicPrices.setAttribute("data-state", "closed");
        classicButton.innerText = "See Prices";
    }
})

hybridButton.addEventListener("click", () => {
    if(hybridPrices.classList.contains("hidden")) {
        hybridPrices.classList.replace("hidden", "flex");
        hybridPrices.setAttribute("data-state", "open");
        hybridButton.innerText = "Close";

    } else {
        hybridPrices.classList.replace("flex", "hidden");
        hybridPrices.setAttribute("data-state", "closed");
        hybridButton.innerText = "See Prices";
    }
})

lightVolumeButton.addEventListener("click", () => {
    if(lightVolumePrices.classList.contains("hidden")) {
        lightVolumePrices.classList.replace("hidden", "flex");
        lightVolumePrices.setAttribute("data-state", "open");
        lightVolumeButton.innerText = "Close";

    } else {
        lightVolumePrices.classList.replace("flex", "hidden");
        lightVolumePrices.setAttribute("data-state", "closed");
        lightVolumeButton.innerText = "See Prices";
    }
})

/*

megaVolumeButton.addEventListener("click", () => {
    if(megaVolumePrices.classList.contains("hidden")) {
        megaVolumePrices.classList.replace("hidden", "flex");
        megaVolumePrices.setAttribute("data-state", "open");
        megaVolumeButton.innerText = "Close";

    } else {
        megaVolumePrices.classList.replace("flex", "hidden");
        megaVolumePrices.setAttribute("data-state", "closed");
        megaVolumeButton.innerText = "See Prices";
    }
})
*/