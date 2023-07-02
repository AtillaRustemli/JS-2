let input = document.querySelector("input")[0];
let input1 = document.querySelector("input")[1];

let form = document.querySelector("form");
let span = document.getElementsByClassName("result")[0];
let result = document.getElementsByClassName("result")[0];

form.addEventListener("submit", (s) => {
  s.preventDefault();
  let amount = form.elements["number1"].value;
  let amount2 = form.elements["number2"].value;
  let currency = form.elements["currency"].value;
  let currency1 = form.elements["currency1"].value;
  switch (currency) {
    case "AZN":
      switch (currency1) {
        case "AZN":
          amount2 = amount * 1;
          break;
        case "TRY":
          amount2 = amount * 14.33;
          break;
        case "USD":
          amount2 = amount * 0.59;

          break;

        default:
          break;
      }
      break;
    case "TRY":
      switch (currency1) {
        case "AZN":
          amount2 = amount * 0.072;
          break;
        case "TRY":
          amount2 = amount * 1;
          break;
        case "USD":
          amount2 = amount * 0.041;

          break;

        default:
          break;
      }
      break;
    case "USD":
      switch (currency1) {
        case "AZN":
          amount2 = amount * 1.7;
          break;
        case "TRY":
          amount2 = amount * 23.5516;
          break;
        case "USD":
          amount2 = amount * 1;

          break;

        default:
          break;
      }
      break;

    default:
      break;
  }

  form.elements["number2"].value = amount2.toFixed(2);
});
