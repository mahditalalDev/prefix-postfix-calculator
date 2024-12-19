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
function prefixCalculation(equation) {
  showAlert(`prefix+${equation}`);
}
// todo
function postfixCalculation(equation) {
  showAlert(`postfix +${equation}`);
}
// todo
function infixCalculation(equation) {
  let equation_array = convertToArray(equation);
  console.log("the array is", equation_array);
  let equation_result = 0;
  let equation_length = equation_array.length;

  try {
    for (let i = 0; i < equation_length - 2; i += 2) {
      let first_element = parseFloat(equation_array[i]);
      let operator = equation_array[i + 1];
      let second_element = parseFloat(equation_array[i + 2]);
      if (
        isNaN(first_element) ||
        !isOperator(operator) ||
        isNaN(second_element)
      ) {
        alert("Invalid equation format!");
        throw new Error("Invalid equation");
      }
      switch (operator) {
        case "+":
          equation_result = first_element + second_element;
          break;
        case "-":
          equation_result = first_element - second_element;
          break;
        case "/":
          if (second_element === 0) {
            alert("You can't divide by 0");
            return "Division by zero error";
          }
          equation_result = first_element / second_element;
          break;
        case "x":
          equation_result = first_element * second_element;
          break;
        default:
          throw new Error("Invalid operator");
      }
    }
  } catch (error) {
    showAlert("Invalid equation");
    console.error(error.message);
    return "Error: Invalid equation";
  }
  result_text = equation_result;
  if (typeof result !== "undefined" && result !== null) {
    result.innerHTML = result_text;
  } else {
    console.log(result_text);
  }
  return equation_result;
}
function convertToArray(equation) {
  let equation_array = equation.split(/([+\-x*/])/);
  return equation_array;
}
function isOperator(operant) {
  if (
    operant == "+" ||
    operant == "-" ||
    operant == "x" ||
    operant == "+" ||
    operant == "/"
  ) {
    return true;
  }
  return false;
}
