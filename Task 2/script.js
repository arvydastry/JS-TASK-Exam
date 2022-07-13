/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const plusButton = document.getElementById("btn__element");

let counter = 0;

plusButton.addEventListener("click", (event) => {
  counter++;

  document.getElementById("btn__state").textContent = counter;
});

minusButton.addEventListener("click", (event) => {
  counter--;

  document.getElementById("btn__state").textContent = counter;
});
