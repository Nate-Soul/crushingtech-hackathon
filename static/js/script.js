// CLOSE THE SHOW PLANS NOTIFICATION / ALERT
const closePlanAlertBtn = document.querySelector("#closePlanAlert");
const planAlert         = document.querySelector("#planAlert");

if (closePlanAlertBtn && planAlert ) {
    closePlanAlertBtn.addEventListener("click", () => {
        planAlert.classList.remove("flex");
        planAlert.classList.add("hidden");
    });
}

// TOGGLE BETWEEN COLLAPSING THE SETUP CARD CONTENT
const setupCardToggleBtn  = document.querySelector("#setupCardToggleBtn");
const setupCardBody       = document.querySelector("#setupCardBody");
const setupCardToggleImgs = setupCardToggleBtn.children;

if ( setupCardToggleBtn && setupCardBody && setupCardToggleImgs ) {
    setupCardToggleBtn.addEventListener("click", () => {
        if ( setupCardBody.classList.contains("flex") ) {
            setupCardBody.classList.remove("flex");
            setupCardBody.classList.add("hidden");
            Array.from(setupCardToggleImgs).forEach(setupCardToggleImg => {
                if ( setupCardToggleImg.classList.contains("hidden") ) {
                    setupCardToggleImg.classList.remove("hidden");
                } else {
                    setupCardToggleImg.classList.add("hidden");
                }
            });
        } else if ( setupCardBody.classList.contains("hidden") ) {
            setupCardBody.classList.remove("hidden");
            setupCardBody.classList.add("flex");
            Array.from(setupCardToggleImgs).forEach(setupCardToggleImg => {
                if ( setupCardToggleImg.classList.contains("hidden") ) {
                    setupCardToggleImg.classList.remove("hidden");
                } else {
                    setupCardToggleImg.classList.add("hidden");
                }
            });
        }
    });
}

//  TOGGLER FUNCTION FOR DROPDOWN MENUS
const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");

if (dropdownTogglers) {
    dropdownTogglers.forEach(dropdownToggler => {
        dropdownToggler.addEventListener("click", () => {
            if (dropdownToggler.nextElementSibling.classList.contains("hidden")) {
                dropdownToggler.nextElementSibling.classList.remove("hidden");
                dropdownToggler.nextElementSibling.classList.add("flex");
            } else {
                dropdownToggler.nextElementSibling.classList.remove("flex");
                dropdownToggler.nextElementSibling.classList.add("hidden");
            }
        });
    });
}


// TOGGLE BETWEEN COMPLETE STEP && INCOMPLETE STEP FOR THE SETUP FORM
const incompleteStepImgs = document.querySelectorAll(".incomplete-step-img");
const completeStepImgs   = document.querySelectorAll(".complete-step-img");

if (incompleteStepImgs.length > 0 && completeStepImgs.length > 0) {
    incompleteStepImgs.forEach(incompleteStepImg => {
        incompleteStepImg.addEventListener("click", () => {
            const completeStepImgElem = incompleteStepImg.nextElementSibling;
            completeStepImgElem.classList.remove("hidden");
            incompleteStepImg.classList.add("hidden");
        });
    });

    completeStepImgs.forEach(completeStepImg => {
        completeStepImg.addEventListener("click", () => {
            const incompleteStepImgElem = completeStepImg.previousElementSibling;
            incompleteStepImgElem.classList.remove("hidden");
            completeStepImg.classList.add("hidden");
        });
    });
}

// SET UP ACCORDION CONFIGURATION
const setupAccordionElem     = document.querySelector(".setup-accordion");
const setupAccordionTogglers = setupAccordionElem.querySelectorAll(".accordion-item-toggler");
const setupAccordionContents = setupAccordionElem.querySelectorAll(".accordion-item-content");
setupAccordionTogglers.forEach(setupAccordionToggler => {
    setupAccordionToggler.addEventListener("click", () => {
        setupAccordionContents.forEach(setupAccordionContent => {
            if (setupAccordionContent.classList.contains("flex")) {
                setupAccordionContent.classList.add("hidden");
                setupAccordionContent.classList.remove("flex");
            }
        });
        const ownAccordionContent  = setupAccordionToggler.parentElement.parentElement.querySelector(".accordion-item-content");
        ownAccordionContent.classList.add("flex");
        ownAccordionContent.classList.remove("hidden");
});
});