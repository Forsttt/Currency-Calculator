let euroElement = document.querySelector(".js-euro");
let form = document.querySelector(".form");
let rateElement = document.querySelector(".js-rate");
let outputElement = document.querySelector(".js-output");
let button = document.querySelector(".button");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let euro = euroElement.value;
    let rate = rateElement.value;

    let output = euro * rate;
    outputElement.innerText = output.toFixed(2) + "PLN";
    console.log(output);
});
