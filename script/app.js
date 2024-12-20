const future_work = document.querySelectorAll(".future_work");
const number_buttons = document.querySelectorAll(".num_btn");
const result = document.getElementById("display-area");
let result_text = result.innerHTML;
const delete_btn = document.getElementById("del");
const ac_btn = document.getElementById("ac");
const equal = document.getElementById("equal");
const space_btn = document.getElementById("space");
const function_type = document.getElementById("type-text");
const is_on = false;
let consoleLogs = [];

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
function calculate(first_element, second_element, operator) {
  let number1 = parseFloat(first_element);
  let number2 = parseFloat(second_element);
  let equation_result = 0.0;
  switch (operator) {
    case "+":
      equation_result = number1 + number2;
      break;
    case "-":
      equation_result = number1 - number2;
      break;
    case "/":
      if (number2 === 0) {
        alert("You can't divide by 0");
        return "Division by zero error";
      }
      equation_result = number1 / number2;
      break;
    case "x":
      equation_result = number1 * number2;
      break;
    default:
      throw new Error("Invalid operator");
  }
  return equation_result;
}

function displayResult(equation_result) {
  result_text = equation_result;
  if (typeof result !== "undefined" && result !== null) {
    result.innerHTML = result_text;
  } else {
    console.log(result_text);
  }
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
function splitEquation(equation) {
  let pattern = /[+\-x/]|\d*\.?\d+/g;
  let tokens = equation.match(pattern);
  return tokens;
}
function equationType(equation) {
  // """ Check the type of the equation to determine which calculation algorithm should be used """

  first_digit = equation[0];
  last_digit = equation[equation.length - 1];
  if (isOperator(first_digit)) {
    function_type.innerText="Prefix";
    function_type.style.visibility="visible"
    prefixCalculation(equation);
  } else if (isOperator(last_digit)) {
    function_type.innerText="Postfix";
    function_type.style.visibility="visible"
    postfixCalculation(equation);
  } else
   {
    function_type.innerText="infix";
    function_type.style.visibility="visible"
    infixCalculation(equation);
   }
}
function prefixCalculation(equation) {
  consoleLogs = []
  console.clear();
  consoleLogs.push("Prefix Calculation ")
  consoleLogs.push("Step 1: The initial equation as a string is:", equation);
  let equation_array = splitEquation(equation);
  consoleLogs.push("Step 2: Convert the equation string into an array to make it easier to work with:", equation_array);
  let stack = [];
  consoleLogs.push("Step 3: Initialize an empty stack to store operands during the loop:", stack);
  let equation_result = 0; 
  try {
    for (let i = equation_array.length - 1; i >= 0; i--) {
      let operator = equation_array[i];
      consoleLogs.push(`Step 4.${equation_array.length - i}: Current element in iteration is:`, operator);
      if (isOperator(operator)) {
        consoleLogs.push("Step 5: Detected an operator:", operator);

        if (stack.length < 2) {
          consoleLogs.push("Step 5.1: Invalid equation. Not enough operands for the operator.");
          alert("Invalid equation: Not enough operands.");
          return;
        }
        let first_element = stack.pop();
        let second_element = stack.pop();
        consoleLogs.push("Step 5.2: Operands popped from the stack:", first_element, second_element);

        equation_result = calculate(first_element, second_element, operator);
        consoleLogs.push("Step 5.3: Result of calculation using operator:", equation_result);
        stack.push(equation_result);
        consoleLogs.push("Step 5.4: Push the result back to the stack:", stack);

      } else {
        stack.push(equation_array[i]);
        consoleLogs.push("Step 6: Current element is an operand, push it to the stack:", stack);
      }
    }

    consoleLogs.push("Step 7: Calculation complete. The final result is:", equation_result);

    // Display the result
    console.log(consoleLogs.join("\n"));
    displayResult(equation_result);
    return equation_result;

  } catch (error) {
    // Catch any errors during execution
    console.log("Step 8: An error occurred:", error.message);
    alert("Error: " + error.message);
    return;
  }
}


function postfixCalculation(equation) {
  consoleLogs = []
  console.clear();
  consoleLogs.push("PostFix calc");
  consoleLogs.push(`Step 1: The initial equation as a string is: ${equation}`);
  consoleLogs.push("Step 1: The initial equation as a string is:", equation);
  let equation_array = splitEquation(equation);
  consoleLogs.push("Step 2: Convert the equation string into an array to make it easier to work with:", equation_array);

  let stack = [];
  consoleLogs.push("Step 3: Initialize an empty stack to store operands during the loop:", stack);

  let equation_result = 0;

  try {
    for (let i = 0; i < equation_array.length; i++) {
      let element = equation_array[i];
      consoleLogs.push(`Step 4.${i + 1}: Current element in iteration is:`, element);

      if (isOperator(element)) {
        consoleLogs.push("Step 5: Detected an operator:", element);

        if (stack.length < 2) {
          consoleLogs.push("Step 5.1: Invalid equation. Not enough operands for the operator.");
          alert("Invalid equation: Not enough operands.");
          return;
        }

        let second_element = stack.pop();
        let first_element = stack.pop();
        consoleLogs.push("Step 5.2: Operands popped from the stack:", first_element, second_element);
        equation_result = calculate(first_element, second_element, element);
        consoleLogs.push("Step 5.3: Result of calculation using operator:", equation_result);
        stack.push(equation_result);
        consoleLogs.push("Step 5.4: Push the result back to the stack:", stack);

      } else {
        stack.push(element);
        consoleLogs.push("Step 6: Current element is an operand, push it to the stack:", stack);
      }
    }

    consoleLogs.push("Step 7: Calculation complete. The final result is:", equation_result);
    displayResult(equation_result);
    console.log(consoleLogs.join("\n"));
    return equation_result;

  } catch (error) {
    console.log("Step 8: An error occurred:", error.message);
    alert("Error: " + error.message);
    return;
  }
}

function infixCalculation(equation) {
  let equation_array = splitEquation(equation);
  let equation_result = 0;
  let equation_length = equation_array.length;
  try {
    for (let i = 0; i < equation_length - 2; i += 2) {
      let first_element = equation_array[i];
      let operator = equation_array[i + 1];
      let second_element = equation_array[i + 2];
      if (
        isNaN(first_element) ||
        !isOperator(operator) ||
        isNaN(second_element)
      ) {
        alert("Invalid equation format!");
        throw new Error("Invalid equation");
      }
      equation_result = calculate(first_element, second_element, operator);
    }
  } catch (error) {
    showAlert("Invalid equation");
    console.error(error.message);
    return "Error: Invalid equation";
  }
  displayResult(equation_result);
  return equation_result;
}
