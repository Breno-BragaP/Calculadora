const display = document.querySelector(".display");

function calculate(input) {
  display.value += input;
}

function finalResult() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = "Error";
  }
}

function clearResult() {
  display.value = "";
}
