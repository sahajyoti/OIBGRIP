// Get the form element
var form = document.querySelector("form");

// Get the convert button
var convertButton = document.querySelector("#convert-button");

// Get the unit selector
var unitSelector = document.querySelector("#unit-selector");

// Get the result element
var result = document.querySelector("#result");

// Add an event listener to the convert button
convertButton.addEventListener("click", function() {
  // Get the temperature from the input field
  var temperature = document.querySelector("#temperature").value;

  // Get the selected unit from the unit selector
  var unit = unitSelector.value;

  if (unit === "celsius") {
    var fahrenheit = (temperature * 9 / 5) + 32;
    var kelvin = temperature + 273.15;
    result.innerHTML = temperature + "&#8451; = " + fahrenheit + "&#8457; = " + kelvin + "K";
  } else if (unit === "fahrenheit") {
    var celsius = (temperature - 32) * 5 / 9;
    var kelvin = (temperature - 32) * 5 / 9 + 273.15;
    result.innerHTML = temperature + "&#8457; = " + celsius + "&#8451; = " + kelvin + "K";
  } else if (unit === "kelvin") {
    var celsius = temperature - 273.15;
    var fahrenheit = (temperature - 273.15) * 9 / 5 + 32;
    result.innerHTML = temperature + "K = " + celsius + "&#8451; = " + fahrenheit + "&#8457;";
  }
});
