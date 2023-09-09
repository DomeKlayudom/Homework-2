rideDistance = document.getElementById("ride-distance");
minTraffic = document.getElementById("min-traffic");
rideResult = document.getElementById("ride-result");

btnCal = document.getElementById("btn-cal");
btnCan = document.getElementById("btn-can");

btnCal.addEventListener("click", function () {
  rideResult.innerHTML = 0;


    let rideDistanceResult = rideDistance.value == 1
      ? 35.0
      : rideDistance.value > 1 && rideDistance.value <= 10
      ? rideDistance.value * 5.5
      : rideDistance.value > 10 && rideDistance.value <= 20
      ? rideDistance.value * 6.5
      : rideDistance.value > 20 && rideDistance.value <= 40
      ? rideDistance.value * 7.5
      : rideDistance.value > 40 && rideDistance.value <= 60
      ? rideDistance.value * 8
      : rideDistance.value > 60 && rideDistance.value <= 80
      ? rideDistance.value * 9
      : rideDistance.value * 10.5;

    let minTrafficResult = minTraffic.value * 2
    let result = rideDistanceResult + minTrafficResult

      rideResult.innerHTML = result
});

btnCan.addEventListener("click", function () {
  rideDistance.value = "";
  minTraffic.value = "";
  rideResult.innerHTML = "0";
});
