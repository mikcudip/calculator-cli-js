const prompt = require("prompt-sync")({ sigint: true });

function suma(num1, num2) {
  let resultado = num1 + num2;
  return resultado;
}

function resta(num1, num2) {
  let resultado = num1 - num2;
  return resultado;
}

function multiplicacion(num1, num2) {
  let resultado = num1 * num2;
  return resultado;
}

function division(num1, num2) {
  let resultado
  (num2 != 0) ? resultado = num1 / num2 : console.log(prefixError("El denominador no puede ser 0."));
  return resultado;
}

function resto(num1, num2) {
  let resultado = num1 % num2;
  return resultado;
}

function factorial(num) {
  let resultado = 1;
  for (let index = num; index >= 1; index--) {
    resultado *= index;
  }
  return resultado;
}

function prefixError(error) {
  return "Error: " + error;
}

function saludo() {
  console.log("Bienvenido a su calculadora digital!");
}

function menu() {
  console.log("Indique la operacion a realizar");
  console.log("1. Suma");
  console.log("2. Resta");
  console.log("3. Multiplicacion");
  console.log("4. Division");
  console.log("5. Resto");
  console.log("6. Factorial");

  let opcion = parseInt(prompt("Indique la operacion a realizar: "));
  return opcion;
}

function operacion(opcion) {
  let num1, num2, resultado;
  switch (opcion) {
    case 1:
      num1 = parseInt(prompt("Indique el primer numero a sumar: "));
      num2 = parseInt(prompt("Indique el segundo numero a sumar: "));
      resultado = suma(num1, num2);
      break;
    case 2:
      num1 = parseInt(prompt("Indique el primer numero a restar: "));
      num2 = parseInt(prompt("Indique el segundo numero a restar: "));
      resultado = resta(num1, num2);
      break;
    case 3:
      num1 = parseInt(prompt("Indique el primer numero a multiplicar: "));
      num2 = parseInt(prompt("Indique el segundo numero a multiplicar: "));
      resultado = multiplicacion(num1, num2);
      break;
    case 4:
      num1 = parseInt(prompt("Indique el primer numero a dividir: "));
      num2 = parseInt(prompt("Indique el segundo numero a dividir: "));
      resultado = division(num1, num2);
      break;
    case 5:
      num1 = parseInt(prompt("Indique el primer numero a dividir para obtener el resto: "));
      num2 = parseInt(prompt("Indique el segundo numero a dividir para obtener el resto: "));
      resultado = resto(num1, num2);
      break;
    case 6:
      num1 = parseInt(prompt("Indique el numero a realizarle el factorial: "));
      resultado = factorial(num1);
      break;
    default:
      console.log("Opcion invalida");
  }
  return resultado;
}

function main() {
  resultado = operacion(menu());
  console.log(`El resultado es: ${resultado}`);
  let otraOperacion = parseInt(prompt("Desea realizar otra operacion?\nSi=1 | No=Presione cualquier otra tecla"));
  (otraOperacion == 1) ? main() : console.log("Good Bye ;)");
}

saludo();
main();