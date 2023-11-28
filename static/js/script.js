// TOGGLE BETWEEN COMPLETE STEP && INCOMPLETE STEP FOR THE SETUP FORM
const toggleStep = (stepImg, isComplete, currentStepsDisplay, totalSteps) => {
    const targetStep = isComplete ? stepImg.previousElementSibling : stepImg.nextElementSibling;
    const closestAccordionItem  = stepImg.closest(".accordion-item");
    const setupAccordionContent = closestAccordionItem.querySelector(".accordion-body-content");
    const setupAccordionImg     = closestAccordionItem.querySelector(".accordion-img");

    //TOGGLE VISIBILTY FOR STEPS
    targetStep.classList.toggle("hidden");
    stepImg.classList.toggle("hidden");

    
    //TOGGLE VISIBILITY FOR ACCORDIONS & UPDATE THE PROGRESS BAR
    if (isComplete) {
        //UPDATE PROGRESS INDICATOR
        parseInt(currentStepsDisplay.textContent--);
        updateProgress(currentStepsDisplay, totalSteps);

    } else {
        parseInt(currentStepsDisplay.textContent++);
        updateProgress(currentStepsDisplay, totalSteps);
    }
        
    //check if the present accordion is closed else close it
    if (setupAccordionContent.classList.contains("flex")) {
        setupAccordionContent.classList.add("hidden");
        setupAccordionContent.classList.remove("flex");
        setupAccordionImg.classList.add("hidden");
        closestAccordionItem.classList.remove("active");
    }

    //open the next accordion item
    const nextSetupAccordionItem = closestAccordionItem.nextElementSibling;
    if (nextSetupAccordionItem !== null) {
        const nextSetupAccordionContent = nextSetupAccordionItem.querySelector(".accordion-body-content");
        const nextSetupAccordionImg     = nextSetupAccordionItem.querySelector(".accordion-img");
        nextSetupAccordionContent.classList.add("flex");
        nextSetupAccordionContent.classList.remove("hidden");
        nextSetupAccordionImg.classList.remove("hidden");
        nextSetupAccordionItem.classList.add("active");
    }
}

const toggleAccordion = (accordionToggler) => {

    const accordionItem     = accordionToggler.parentElement.parentElement.parentElement;
    const accordionElem     = accordionItem.parentElement;
    const accordionContents = accordionElem.querySelectorAll(".accordion-body-content");
    const accordionImgs     = accordionElem.querySelectorAll(".accordion-img");

    accordionContents.forEach((accordionContent, index) => {
        if(accordionContent.classList.contains("flex")) {
            accordionContent.classList.add("hidden");
            accordionContent.classList.remove("flex");
            accordionImgs.item(index).classList.toggle("hidden");
            accordionItem.classList.remove("active");
        }
    });

    const ownAccordionContent  = accordionItem.querySelector(".accordion-body-content");
    const ownAccordionImg      = accordionItem.querySelector(".accordion-img");
    ownAccordionContent.classList.toggle("flex");
    ownAccordionContent.classList.toggle("hidden");
    ownAccordionImg.classList.toggle("hidden");
    accordionItem.classList.toggle("active");
}

const updateProgress = (currentStepsDisplay, totalSteps) => {
    const setupProgressIndicator = document.querySelector("#setupProgressIndicator");
    const currentProgress    = parseInt(currentStepsDisplay.textContent);
    const calculatedProgress = (currentProgress / totalSteps) * 100;
    setupProgressIndicator.style.width = `${calculatedProgress}%`;
}

document.addEventListener("DOMContentLoaded", () => {

    const incompleteStepImgs     = document.querySelectorAll(".incomplete-step-img");
    const completeStepImgs       = document.querySelectorAll(".complete-step-img");
    const totalStepsDisplay      = document.querySelector("#totalSteps");
    const currentStepsDisplay    = document.querySelector("#stepsCompleted");
    const totalSteps             = incompleteStepImgs.length;

    //check if elements are in the dom before executing any logic
    if (totalSteps > 0 && completeStepImgs.length > 0) {
        //initialize default values for progress bar
        totalStepsDisplay.textContent = totalSteps;
        currentStepsDisplay.textContent = 0;
        //get all the incomplete images and toggle them on click
        incompleteStepImgs.forEach(incompleteStepImg => {
            incompleteStepImg.addEventListener("click", () => { toggleStep(incompleteStepImg, false, currentStepsDisplay, totalSteps) });
        });
        //get all the complete steps images and toggle them on click
        completeStepImgs.forEach(completeStepImg => {
            completeStepImg.addEventListener("click", () => { toggleStep(completeStepImg, true, currentStepsDisplay, totalSteps) });
        });
    }


    // SET UP ACCORDION CONFIGURATION
    const setupAccordionElem     = document.querySelector(".setup-accordion");
    const setupAccordionTogglers = setupAccordionElem.querySelectorAll(".accordion-item-toggler");

    //for each of the setup accordion toggler listen for a click event
    setupAccordionTogglers.forEach(setupAccordionToggler => {
        setupAccordionToggler.addEventListener("click", () => {
            toggleAccordion(setupAccordionToggler);
        });
    });

});