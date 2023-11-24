// CLOSE THE SHOW PLANS NOTIFICATION / ALERT
const closePlanAlertBtn = document.querySelector("#closePlanAlert");
const planAlert         = document.querySelector("#planAlert");

//check if both elements exist before adding the event listener
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

//check if elements of the setup card exist before adding an event listener that toggles the card
if ( setupCardToggleBtn && setupCardBody && setupCardToggleImgs ) {
    setupCardToggleBtn.addEventListener("click", () => {
        setupCardBody.classList.toggle("flex");
        setupCardBody.classList.toggle("hidden");
        Array.from(setupCardToggleImgs).forEach(setupCardToggleImg => {
            setupCardToggleImg.classList.toggle("hidden");
        });
    });
}

//  TOGGLER FUNCTION FOR DROPDOWN MENUS
const dropdownTogglers = document.querySelectorAll(".dropdown-toggler");

if (dropdownTogglers.length > 0) {
    dropdownTogglers.forEach(dropdownToggler => {
        dropdownToggler.addEventListener("click", () => {
            const dropdownMenu = dropdownToggler.nextElementSibling;
            dropdownMenu.classList.toggle("hidden");
            dropdownMenu.classList.toggle("flex");
        });
    });
}


// TOGGLE BETWEEN COMPLETE STEP && INCOMPLETE STEP FOR THE SETUP FORM
const toggleStep = (stepImg, isComplete) => {
    const targetStep = isComplete ? stepImg.previousElementSibling : stepImg.nextElementSibling;
    const closestAccordionItem  = stepImg.closest(".accordion-item");
    const setupAccordionContent = closestAccordionItem.querySelector(".accordion-item-content");

    //TOGGLE VISIBILTY FOR STEPS
    targetStep.classList.toggle("hidden");
    stepImg.classList.toggle("hidden");

    //TOGGLE VISIBILITY FOR ACCORDIONS.
    //Firstly, check if the present accordion is closed else close it
    if (setupAccordionContent.classList.contains("flex")){
        setupAccordionContent.classList.toggle("hidden");
        setupAccordionContent.classList.toggle("flex");
    }

    //open the next accordion item
    if(closestAccordionItem.nextElementSibling !== null) {
        const nextSetupAccordionContent = closestAccordionItem.nextElementSibling.querySelector(".accordion-item-content");
        nextSetupAccordionContent.classList.remove("hidden");
        nextSetupAccordionContent.classList.add("flex");
    }
}

const incompleteStepImgs = document.querySelectorAll(".incomplete-step-img");
const completeStepImgs   = document.querySelectorAll(".complete-step-img");
if (incompleteStepImgs.length > 0 && completeStepImgs.length > 0) {
    incompleteStepImgs.forEach(incompleteStepImg => {
        incompleteStepImg.addEventListener("click", () => { toggleStep(incompleteStepImg, false) });
    });
    completeStepImgs.forEach(completeStepImg => {
        completeStepImg.addEventListener("click", () => { toggleStep(completeStepImg, true) });
    });
}

// SET UP ACCORDION CONFIGURATION
const setupAccordionElem     = document.querySelector(".setup-accordion");
const setupAccordionTogglers = setupAccordionElem.querySelectorAll(".accordion-item-toggler");
const setupAccordionContents = setupAccordionElem.querySelectorAll(".accordion-item-content");
setupAccordionTogglers.forEach(setupAccordionToggler => {
    setupAccordionToggler.addEventListener("click", () => {
        setupAccordionContents.forEach(setupAccordionContent => {
            setupAccordionContent.classList.add("hidden");
            setupAccordionContent.classList.remove("flex");
        });

        const ownAccordionContent  = setupAccordionToggler.parentElement.parentElement.querySelector(".accordion-item-content");
        ownAccordionContent.classList.toggle("flex");
        ownAccordionContent.classList.toggle("hidden");
});
});