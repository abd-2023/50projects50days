var progressStep = document.querySelectorAll(".progress-step");

//focusing on next button on on page load
document.querySelector(".next-button").focus();
function nextStep() {

    for (let i = 0; i < progressStep.length; i++) {
        console.log("progressStep[i]", progressStep[i], i);
        if (!progressStep[i].classList.contains("active-step")) {
            progressStep[i].classList.add("active-step");
            if (i == 3) {
                document.querySelector(".next-button").classList.remove("active-button");
            }
            break;
        }
        else {
            if (i < 3) {
                progressStep[i].classList.add("completed-step");
            }
        }
    }

    activeSteps();
}
function prevStep(){
    for (let i = progressStep.length-1; i < progressStep.length; i--){
        console.log("progressStep[i]", progressStep[i], i);
        if (progressStep[i].classList.contains("active-step")) {
            progressStep[i].classList.remove("active-step");
            progressStep[i-1].classList.remove("completed-step");
            break;
        }
    }

    activeSteps();
}

function activeSteps(){
    var allActiveSteps = document.querySelectorAll(".active-step");

    if (allActiveSteps.length > 1) {
        document.querySelector(".prev-button").classList.add("active-button");
    }
    else{
        document.querySelector(".prev-button").classList.remove("active-button");
    }

    if (allActiveSteps.length <= 3) {
        document.querySelector(".next-button").classList.add("active-button");
    }
    else{
        document.querySelector(".next-button").classList.remove("active-button");
    }
}