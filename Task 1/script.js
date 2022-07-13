/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formul4: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */

const converterForm = document.querySelector("form");

converterForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const kilogram = document.getElementById("search");

  const svarai = kilogramTosvarai(kilogram.value);

  const grams = kilogramToGrams(kilogram.value);

  const uncies = kilogramToUncies(kilogram.value);

  const output = document.getElementById("output");

  output.textContent = `Svarai: ${svarai}, Gramai: ${grams}, Uncijos: ${uncies}`;
});

function kilogramTosvarai(kilogram) {
  return kilogram * 2.2046;
}

function kilogramToGrams(kilogram) {
  return Number(kilogram) / 0.001;
}

function kilogramToUncies(kilogram) {
  return Number(kilogram) * 35.274;
}
