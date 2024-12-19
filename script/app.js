const buttons = document.querySelectorAll(".button1, .button2");
const number_buttons = document.querySelectorAll(".button3");
const result = document.getElementById('display-area');
let result_text = '';
function showAlert(msg) {
  alert(msg);
}

buttons.forEach((button) => {
  button.onclick = () => {
    showAlert("future work ...");
  };
});
number_buttons.forEach((button) => {
  button.onclick = () => {
    result_text += button.innerHTML;
    result.innerText=result_text
  };
});

