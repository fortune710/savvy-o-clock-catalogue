const classicButton = document.getElementById("classic-btn");
const classicPrices = document.getElementById("classic-prices");

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