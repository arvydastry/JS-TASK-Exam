/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(sum, subtraction, multiplication, division) {
  this.sum = sum;
  this.subtraction = subtraction;
  this.multiplication = multiplication;
  this.division = division;

  this.sumResult: function sum(a, b) {
        return (a + b);
    }
}


console.log(sumResult(22,55));


