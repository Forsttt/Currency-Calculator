{
const welcome = () => {
  console.log("witam :)");
};

const calculateResult = (amount, currency) => {
  const rateEUR = 4.5817;
  const rateCHF = 4.3392;
  const rateSEK = 0.4382;

  switch(currency) {
    case "EUR":
      return amount / rateEUR;
      
      case "CHF":
        return amount / rateCHF;

        case "SEK":
          return amount / rateSEK;
  }
};

const SubmitResponse = (event) => {
  event.preventDefault();

  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");
  const resultElement = document.querySelector(".js-result");

  const amount = amountElement.value;
  const currency = currencyElement.value;

  let result = calculateResult(amount, currency)

  resultElement.innerText = `${result.toFixed(2)} ${currency}`;
};

const init = () => {
  const formElement = document.querySelector(".js-form");

  formElement.addEventListener("submit", SubmitResponse);
};

welcome();
init();

}