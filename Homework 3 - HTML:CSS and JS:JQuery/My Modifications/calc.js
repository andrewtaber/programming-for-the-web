/*
 * Implement all your JavaScript in this file!
 */
const PLUS = "addButton";
const MINUS = "subtractButton";
const DIVIDE = "divideButton";
const TIMES = "multiplyButton";
const EQUALS = "equalsButton";

var firstOperand = null;
var secondOperand = null;
var lastOperator = null;
var numberToDisplay = "";
var numbersHaveBeenEntered = false;

init();


function init() {
displayNumbersPressed();
setOperatorFunctions();
setEqualsButtonFunctionality();
setClearOption();
}

function setOperatorFunctions() {
  $(".operator").click(function() {
    if(!firstOperand && numbersHaveBeenEntered) {
      setFirstHalfOfExpression(this);
      readyForNextInput();
    }
    else if(numbersHaveBeenEntered) {
      setSecondOperand();
      evaluateExpression();
      setFirstHalfOfExpression(this);
      readyForNextInput();
    }
    else {
      trackOperatorChoice(this);
    }
  });
}

function setEqualsButtonFunctionality() {
  $("#equalsButton").click(function(){
    if(!firstOperand) {
      readyForNextInput();
    }
    else if(!secondOperand){
      setSecondOperand();
      evaluateExpression();
      setFirstOperand();
      readyForNextInput();
    }
    else {
      evaluateExpression()
      setFirstOperand()
      readyForNextInput();
    }
  });
}

function calculate() {
  var value;

  switch(lastOperator){
    case PLUS:
      value = Number(firstOperand) + Number(secondOperand);
      break;
    case MINUS:
      value = Number(firstOperand) - Number(secondOperand);
      break;
    case DIVIDE:
      value = Number(firstOperand) / Number(secondOperand);
      break;
    case TIMES:
      value = Number(firstOperand) * Number(secondOperand);
      break;
  }

  return value; //Rename later

}

function displayNumbersPressed() {
  $(".number-btn").click(function(){
    $("#display").val(numberToDisplay);
    numberToDisplay = $("#display").val() + $(this).val();
    $("#display").val(numberToDisplay);
    numbersHaveBeenEntered = true;
  });
};

function readyForNextInput() {
  numberToDisplay = "";
  numbersHaveBeenEntered = false;
}

function setFirstOperand() {
  firstOperand = $("#display").val();
}

function setSecondOperand() {
  secondOperand = $("#display").val();
}

function setFirstHalfOfExpression(operatorPressed) {
  firstOperand = $("#display").val();
  lastOperator = $(operatorPressed).attr("id");
}

function trackOperatorChoice(operatorPressed) {
  lastOperator = $(operatorPressed).attr("id");
}

function evaluateExpression() {
  $("#display").val(calculate());
}

function setClearOption() {
  $("#clearButton").click(function() {
    $("#display").val("");
    firstOperand = null;
    secondOperand = null;
    lastOperator = null;
    numberToDisplay = "";
    numbersHaveBeenEntered = false;
  });
};


function debug() {
  $("#output").text("First operand = " + firstOperand + ", Second Operand = " + secondOperand + ", Last Operator = " + lastOperator + ", Number to Display = " + numberToDisplay + ", Numbers Entered = " + numbersHaveBeenEntered);
}
