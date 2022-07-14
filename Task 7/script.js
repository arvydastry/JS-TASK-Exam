/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
const audi = {
  make: "audi",
  model: "A6",
  year: 2005,
  color: "white",
};

function showObjectKeys(object) {
  return Object.keys(object);
}

Object.entries(audi).forEach((entry) => {
  const key = entry[0];
  const value = entry[1];

  console.log(`${key}: ${value}`);
});

Object.entries(audi).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});
