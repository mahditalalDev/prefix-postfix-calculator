const buttons = document.querySelectorAll(".button1, .button2");
const number_buttons = document.querySelectorAll(".button3");
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
    showAlert(`${button.innerHTML}`);
  };
});

