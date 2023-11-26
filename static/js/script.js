// CLOSE THE SHOW PLANS NOTIFICATION / ALERT
const closePlanAlertBtn = document.querySelector(".close-plan-alert");
const planAlert         = document.querySelector("#planAlert");

//check if both elements exist before adding the event listener
if (closePlanAlertBtn && planAlert ) {
    closePlanAlertBtn.addEventListener("click", () => {
        planAlert.classList.toggle("flex");
        planAlert.classList.toggle("hidden");
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

    
    //TOGGLE VISIBILITY FOR ACCORDIONS & UPDATE THE PROGRESS BAR
    if (isComplete) {
        //UPDATE PROGRESS INDICATOR
        parseInt(currentStepsDisplay.textContent--);
        updateProgress();
    } else {
        parseInt(currentStepsDisplay.textContent++);
        updateProgress();
    }

    //check if the present accordion is closed else close it
    if (setupAccordionContent.classList.contains("flex")) {
        setupAccordionContent.classList.add("hidden");
        setupAccordionContent.classList.remove("flex");
        setupAccordionContent.parentElement.classList.remove("active");
    }
    //open the next accordion item
    const nextSetupAccordionItem = closestAccordionItem.nextElementSibling;
    if (nextSetupAccordionItem !== null) {
        const nextSetupAccordionContent = nextSetupAccordionItem.querySelector(".accordion-item-content");
        nextSetupAccordionContent.classList.remove("hidden");
        nextSetupAccordionContent.classList.add("flex");
        nextSetupAccordionItem.classList.add("active");
    }
}

const incompleteStepImgs     = document.querySelectorAll(".incomplete-step-img");
const completeStepImgs       = document.querySelectorAll(".complete-step-img");
const totalStepsDisplay      = document.querySelector("#totalSteps");
const currentStepsDisplay    = document.querySelector("#stepsCompleted");
const setupProgressIndicator = document.querySelector("#setupProgressIndicator");
const totalSteps             = incompleteStepImgs.length;

if (totalSteps > 0 && completeStepImgs.length > 0) {
    totalStepsDisplay.textContent = totalSteps;
    currentStepsDisplay.textContent = 0;
    incompleteStepImgs.forEach(incompleteStepImg => {
        incompleteStepImg.addEventListener("click", () => { toggleStep(incompleteStepImg, false) });
    });
    completeStepImgs.forEach(completeStepImg => {
        completeStepImg.addEventListener("click", () => { toggleStep(completeStepImg, true) });
    });
}

const updateProgress = () => {
    const currentProgress    = parseInt(currentStepsDisplay.textContent);
    const calculatedProgress = (currentProgress / totalSteps) * 100;
    setupProgressIndicator.style.width = `${calculatedProgress}%`;
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
            setupAccordionContent.parentElement.classList.remove("active");
        });

        const ownAccordionContent  = setupAccordionToggler.parentElement.parentElement.querySelector(".accordion-item-content");
        ownAccordionContent.classList.toggle("flex");
        ownAccordionContent.classList.toggle("hidden");
        setupAccordionToggler.parentElement.parentElement.classList.add("active");
});
});
