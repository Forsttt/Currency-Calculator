{
    const form = document.querySelector(".js-form");

    form.addEventListener("submit", (event) => {
        const euroElement = document.querySelector(".js-euro");
        const rateElement = document.querySelector(".js-rate");
        const outputElement = document.querySelector(".js-output");
        event.preventDefault();
        
        let euro = euroElement.value;
        let rate = rateElement.value;

        let output = euro * rate;
        outputElement.innerText = output.toFixed(2) + "PLN";
        console.log(output);
    });

}