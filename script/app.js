const future_work = document.querySelectorAll(".future_work");
const number_buttons = document.querySelectorAll(".num_btn");
const result = document.getElementById("display-area");
let result_text = result.innerHTML;
const delete_btn = document.getElementById("del");
const ac_btn = document.getElementById("ac");
const equal = document.getElementById("equal");
const space_btn = document.getElementById("space");

// !todo add on //of button
const is_on = false;

function showAlert(msg) {
  alert(msg);
}

future_work.forEach((button) => {
  button.onclick = () => {
    showAlert("future work ...");
  };
});

number_buttons.forEach((button) => {
  button.onclick = () => {
    result_text += button.innerHTML;
    result.innerText = result_text;
  };
});

ac_btn.addEventListener("click", () => {
  result_text = "";
  result.innerHTML = "";
});

delete_btn.addEventListener("click", () => {
  result_text = result_text.slice(0, -1);
  result.innerHTML = result_text;
});

equal.addEventListener("click", () => {
  let equation = result_text;
  equationType(equation);
});

space_btn.addEventListener("click", () => {
  result_text += " ";
  result.innerHTML = result_text;
});

//* Check the type of the equation to determine which calculation algorithm should be used
function equationType(equation) {
  first_digit = equation[0];
  last_digit = equation[equation.length - 1];
  if (isOperator(first_digit)) {
    prefixCalculation(equation);
  } else if (isOperator(last_digit)) {
    postfixCalculation(equation);
  } else infixCalculation(equation);
}
// todo
function prefixCalculation() {
  showAlert("prefix");
}
// todo
function postfixCalculation() {
  showAlert("postfix");
}
// todo
function infixCalculation() {
  showAlert("infix");
}

function isOperator(operant) {
  if (
    operant == "+" ||
    operant == "-" ||
    operant == "×" ||
    operant == "+" ||
    operant == "÷"
  ) {
    return true;
  }
  return false;
}
