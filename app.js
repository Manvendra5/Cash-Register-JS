const billAmount = document.querySelector('.bill-amount');
const cashGiven = document.querySelector('.cash-given');
const checkButton = document.querySelector('.btn-check');
const errorMessage = document.querySelector('#error-message');
const noOfNotes = document.querySelectorAll('.no-of-notes');
const nextButton = document.querySelector(".btn-next");
const hidenDiv = document.querySelector("#hiden-div");

var notes = [2000, 500, 100, 20, 10, 5, 1];

hidenDiv.style.display = "none";

function calculateNoOfNotes(amountToBeReturned) {
    for(var i = 0; i < notes.length; i = i + 1){
        const numberOfNotes = Math.trunc(amountToBeReturned / notes[i]);
        noOfNotes[i].innerText = numberOfNotes;
        amountToBeReturned = amountToBeReturned % notes[i];
    }
}

function showErrorMessage(message) {
    errorMessage.style.display = "block";
    errorMessage.innerText = message;
}

function hideMessage() {
    errorMessage.style.display = "none";
}


nextButton.addEventListener("click", function showOtherFields() {
    hidenDiv.style.display= "block";
    nextButton.style.display = "none"
});

checkButton.addEventListener("click", function validateBillAmount() {
    hideMessage();
    const cashGivenValue = Number(cashGiven.value);
    const billAmountValue = Number(billAmount.value);
    
    if (billAmountValue > 0) {
        if (cashGivenValue >= billAmountValue) {
            const amountToBeReturned = cashGivenValue - billAmountValue;
            calculateNoOfNotes(amountToBeReturned);
        }
        else {
            showErrorMessage("I will have to ask you to leave, if you don't have enough money."); 
        }
    }
    else {
        showErrorMessage("Bill Amount you have entered is not valid.");
    }
});
