const buttons = document.querySelectorAll('.button1, .button2');
function showAlert(msg) {
    alert(msg);
}

buttons.forEach(button => {
    button.onclick = ()=>{
        showAlert("future work ...")
    };
})
