num = document.getElementById("temp-num");
btnCal = document.getElementById("btn-cal");
btnCan = document.getElementById("btn-can");
radioCtf = document.getElementById("temp-ctf");
radioFtc = document.getElementById("temp-ftc");

tempResult = document.getElementById("temp-result");
radioCtf.checked = true

btnCal.addEventListener("click", function () {
  if (radioCtf.checked) {
    var celsius = parseFloat(num.value);
    var fahrenheit = (celsius * 9) / 5 + 32;
    tempResult.innerHTML = fahrenheit.toFixed(2) + "°F";
  }

  if (radioFtc.checked) {
    var fahrenheit = parseFloat(num.value);
    var celsius = ((fahrenheit - 32) * 5) / 9;
    tempResult.innerHTML = celsius.toFixed(2) + "°C";
  }
});

btnCan.addEventListener("click", function () {
  num.value = "";
  tempResult.innerHTML = "0.00";
  radioCtf.checked = true
});
