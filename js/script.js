{
  const calculateResult = (amount, currency) => {
    const rateEUR = 4.5817;
    const rateCHF = 4.3392;
    const rateSEK = 0.4382;

    switch (currency) {
      case "EUR":
        return amount / rateEUR;

      case "CHF":
        return amount / rateCHF;

      case "SEK":
        return amount / rateSEK;
    }
  };

  const submitResponse = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const currencyElement = document.querySelector(".js-currency");
    const resultElement = document.querySelector(".js-result");
    const resultTextBoxElement = document.querySelector(".js-resultTextBox");
    const amountTextElement = document.querySelector(".js-amountText");

    const amount = amountElement.value;
    const currency = currencyElement.value;
    const PLN =  Math.round(amount * 100 )/100;
    
    let result = calculateResult(amount, currency)
    resultElement.innerText = `${result.toFixed(2)} ${currency}`;
    if (amount > 0) {
      resultTextBoxElement.classList.add("result");
      amountTextElement.innerText = `${PLN} PLN wynosi: `;
  };
};

  const init = () => {
    const formElement = document.querySelector(".js-form");
    formElement.addEventListener("submit", submitResponse);
  };

  init();

}