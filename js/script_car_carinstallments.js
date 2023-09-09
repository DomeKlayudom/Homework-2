let carName = document.getElementById("name");
let surName = document.getElementById("sur-name");

let radioButtons = document.querySelectorAll(
  'input[type="radio"][name="brands"]'
);

let carPrice = document.getElementById("car-price");
let downPayment = document.getElementById("down-payment");
let selectElement = document.getElementById("cars");
let interestYear = document.getElementById("interest");

btnCal = document.getElementById("btn-cal");
btnCan = document.getElementById("btn-can");

resultName = document.getElementById("result-name");
resultBrand = document.getElementById("result-brand");
resultDown = document.getElementById("result-down");
resultFinance = document.getElementById("result-finance");
resultPrice = document.getElementById("result-price");

let selectBrandValue = "Honda";

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", function () {
    if (this.checked) {
      selectBrandValue = this.value;
    }
  });
});

btnCal.addEventListener("click", function () {
  resultName.innerHTML = carName.value + " " + surName.value;
  resultBrand.innerHTML = selectBrandValue;
  resultDown.innerHTML = (carPrice.value * downPayment.value) / 100;
  let finance = carPrice.value - (carPrice.value * downPayment.value) / 100;
  resultFinance.innerHTML = finance.toFixed(2);
  let selectedYears = parseInt(selectElement.value);
  let annualInterest = (finance * interestYear.value) / 100; 
  let totalPrice = finance + selectedYears * annualInterest; 

  let monthlyPayment = totalPrice / (selectedYears * 12);
  resultPrice.innerHTML = monthlyPayment.toFixed(2); 
});

btnCan.addEventListener("click", function(){
  carName.value = ""
  surName.value = ""
  radioButtons[0].checked = true;
  selectBrandValue = "Honda";
  carPrice.value = ""
  downPayment.value = ""
  selectElement.selectedIndex = 0;
  interestYear.value = ""
  
  resultName.innerHTML = "XXXXX";
  resultBrand.innerHTML = "XXXXX";
  resultDown.innerHTML = "XXXXX";
  resultFinance.innerHTML = "XXXXX";
  resultPrice.innerHTML = "XXXXX";
})