const billInput = document.getElementById("billInput");
const tipButtons = document.querySelectorAll(".tipButton");
const tipInput = document.getElementById("tipInput");
const peopleInput = document.getElementById("peopleInput");
const errorMessage = document.getElementById("errorMessage");
const resetButton = document.getElementById("resetButton");
const tipTotal = document.getElementById("tipTotal");
const totalSpent = document.getElementById("totalSpent");

let billValue = parseInt(billInput.value);
let peopleValue = parseInt(peopleInput.value);
let tipPercentajeCustomValue = parseInt(tipInput.value);

let tipPercentaje = 0;

const calculations = () => {
  billValue = parseInt(billInput.value);
  peopleValue = parseInt(peopleInput.value);

  let tipPercentajeCalculation = (billValue * tipPercentaje) / 100;

  tipTotal.innerText = (tipPercentajeCalculation / peopleValue).toFixed(2);
  totalSpent.innerText = (
    (tipPercentajeCalculation + billValue) /
    peopleValue
  ).toFixed(2);
};

// No logré hacer funcionar el cambio de estilos al clickear un boton diferente.
const tipButtonSelected = () => {
  tipButtons.forEach((button) => {
    button.classList.toggle("tipButtonActive");
  });
};

billInput.addEventListener("input", () => {
  billValue = parseInt(billInput.value);
  calculations();
});

tipButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    tipButtonSelected();
    tipPercentaje = parseInt(e.target.innerText.slice(-3, -1));
    calculations();
  });
});

tipInput.addEventListener("input", () => {
  tipPercentaje = parseInt(tipInput.value);

  if (!isNaN(tipPercentaje)) {
    calculations();
  }
});

peopleInput.addEventListener("input", () => {
  peopleValue = parseInt(peopleInput.value);

  if (peopleValue <= 0 || isNaN(peopleValue)) {
    errorMessage.style.visibility = "visible";
    peopleInput.style.border = "solid";
    peopleInput.style.borderColor = "red";
  } else {
    errorMessage.style.visibility = "hidden";
    peopleInput.style.border = "none";
    calculations();
  }
});

resetButton.addEventListener("click", () => {
  billInput.value = 0;
  billValue = 0;
  tipInput.value = 0;
  tipPercentajeCustomValue = "";
  peopleInput.value = 0;
  peopleValue = 0;
  tipTotal.innerText = 0;
  totalSpent.innerText = 0;
});
