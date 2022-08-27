    let num1 = 5
    let num2 = 6

    let resultEl = 11
    
    function restrictAlphabets(e){
        let x=e.which||e.keycode;
        if ((x>=48&&x<=57)) {
            return true;
        }
        else{
            return false;
        }
    }

function getInputValue(){
    num1 = parseInt(document.getElementById("num1-inp").value);
    num2 = parseInt(document.getElementById("num2-inp").value);
}

function add() {
    getInputValue()

    resultEl = document.getElementById("displayResult")
    result = num1 + num2
    resultEl.textContent = result
    
}

function subtract() {
    getInputValue()

    resultEl = document.getElementById("displayResult")
    result = num1 - num2
    resultEl.textContent = result
    
}

function divide() {
    getInputValue()

    resultEl = document.getElementById("displayResult")
    result = num1 / num2
    resultEl.textContent = result

}

function multiply() {
    getInputValue()

    resultEl = document.getElementById("displayResult")
    result = num1 * num2
    resultEl.textContent = result

}
function nextOperation(){
    document.getElementById("num1-inp").value=result
    document.getElementById("num2-inp").value="" 
    resultEl.textContent=""
}

function clearDisplayResult(){
    document.getElementById("num1-inp").value=""
    document.getElementById("num2-inp").value="" 
    resultEl.textContent=""
}

