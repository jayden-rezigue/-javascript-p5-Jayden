// Stap 1: Schrijf calculateTotal(bedrag, korting)
// Stap 2: Luister naar het submit-event, lees de invoervelden uit met .value en toon het resultaat
// Stap 3: Toon een foutmelding in #result als het bedrag of de korting leeg is
// Bonus: Schrijf getKlantniveau(bedrag) en toon het niveau erbij
let bestelbedrag = document.getElementById("amount");
let korting = document.getElementById("discount");
let result = document.getElementById("result");
let btnSubmit = document.getElementById("btnSubmit");

btnSubmit.addEventListener("click", function (event) {
  event.preventDefault();
  if (amount.value == "" || discount.value == "") {
    result.textContent = "niks ingevuld";
  } else {
    result.textContent = calculateTotal(amount.value, discount.value);
  }
});

function calculateTotal(bestelbedrag, korting) {
  return bestelbedrag - ((bestelbedrag * korting) / 100).toFixed(2);
}
