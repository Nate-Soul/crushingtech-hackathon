// TOGGLE BETWEEN COLLAPSING THE SETUP CARD CONTENT
document.addEventListener("DOMContentLoaded", () => {
    //get the collapsible setup card element and it's trigger
    const setupCardToggleBtn  = document.querySelector("#setupCardToggleBtn");
    const setupCardBody       = document.querySelector("#setupCardBody");
    const setupCardToggleImgs = setupCardToggleBtn.children;
    
    //check if elements of the setup card exist before adding an event listener that toggles the card
    if ( setupCardToggleBtn && setupCardBody && setupCardToggleImgs ) {
        setupCardToggleBtn.addEventListener("click", () => {
            setupCardBody.classList.toggle("flex");
            setupCardBody.classList.toggle("hidden");
            if (setupCardBody.classList.contains("flex")) {
                setupCardToggleBtn.ariaExpanded = "true";
                setupCardBody.ariaHidden = "false";
            } else {
                setupCardToggleBtn.ariaExpanded = "false";
                setupCardBody.ariaHidden = "true";
            }
            Array.from(setupCardToggleImgs).forEach(setupCardToggleImg => {
                setupCardToggleImg.classList.toggle("hidden");
            });
        });
    }
});