const future_work = document.querySelectorAll(".future_work");
const number_buttons = document.querySelectorAll(".num_btn");
const result = document.getElementById("display-area");
const delete_btn = document.getElementById("del");
const ac_btn = document.getElementById("ac");
let result_text = "";
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
    // todo its should delete the last index in result and result_text
});
