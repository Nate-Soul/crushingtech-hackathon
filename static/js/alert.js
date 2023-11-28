document.addEventListener("DOMContentLoaded", () => {

    // CLOSE THE SHOW PLANS NOTIFICATION / ALERT
    //get the plan alert and close alert elements
    const closePlanAlertBtn = document.querySelector(".close-plan-alert");
    const planAlert         = document.querySelector("#planAlert");
    
    //check if both elements exist before adding the event listener
    if (closePlanAlertBtn && planAlert ) {
        closePlanAlertBtn.addEventListener("click", () => {
            //toggle between active and inactive states using flex and hidden classes
            planAlert.classList.toggle("flex");
            planAlert.classList.toggle("hidden");
        });
    }
});