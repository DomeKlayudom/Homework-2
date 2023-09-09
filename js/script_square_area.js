btnCal = document.getElementById("btn-cal");
btnCan = document.getElementById("btn-can");
num1 = document.getElementById("width");
num2 = document.getElementById("long");
showResult = document.getElementById("squareResult");

btnCal.addEventListener("click", function () {
  result = parseFloat(num1.value) * parseFloat(num2.value);
  result = result.toFixed(2)

  showResult.innerHTML = result;
});

btnCan.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  showResult.innerHTML = "0.00"
});
