let firstNumber = 0;
let isOperationPressed = false;
let operation = "";

const display = document.querySelector("#display");

const btn0 = document.querySelector("#btn0");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btnPlus = document.querySelector("#btnPlus");
const btnEqual = document.querySelector("#btnEqual");
const btnMinus = document.querySelector("#btnMinus");
const btnMultiply = document.querySelector("#btnMultiply");
const btnDivide = document.querySelector("#btnDivide");
const btnClear = document.querySelector("#btnClear");
const btnClear2 = document.querySelector("#btnClear2");
function PressNumber(number) {
  if (!isOperationPressed) {
    display.innerHTML = display.innerHTML + number;
  } else {
    display.innerHTML = number;
  }
  isOperationPressed = false;
}
btn0.addEventListener("click", () => PressNumber(0));

btn1.addEventListener("click", () => PressNumber(1));

btn2.addEventListener("click", () => PressNumber(2));

btn3.addEventListener("click", () => PressNumber(3));

btn4.addEventListener("click", () => PressNumber(4));

btn5.addEventListener("click", () => PressNumber(5));

btn6.addEventListener("click", () => PressNumber(6));

btn7.addEventListener("click", () => PressNumber(7));

btn8.addEventListener("click", () => PressNumber(8));
btn9.addEventListener("click", () => PressNumber(9));
const Operators = function (ope) {
  firstNumber = Number(display.innerHTML);
  isOperationPressed = true;
  operation = ope;
};
btnPlus.addEventListener("click", () => Operators("+"));
btnMinus.addEventListener("click", () => Operators("-"));
btnMultiply.addEventListener("click", () => Operators("×"));
btnDivide.addEventListener("click", () => Operators("/"));
btnClear2.addEventListener("click", function () {
  firstNumber = 0;
  isOperationPressed = false;
  operation = "";
  display.innerHTML = "";
});
btnClear.addEventListener("click", function () {
  display.innerHTML = "";
});
btnEqual.addEventListener("click", function () {
  if (operation === "+") {
    display.innerHTML = firstNumber + Number(display.innerHTML);
  } else if (operation === "-") {
    display.innerHTML = firstNumber - Number(display.innerHTML);
  } else if (operation === "×") {
    display.innerHTML = firstNumber * Number(display.innerHTML);
  } else if (operation === "/") {
    display.innerHTML = firstNumber / Number(display.innerHTML);
  }
});
