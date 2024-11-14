// recibo los numeros

const number1 = 4;
const number2 = 7;

let intentosNumero1 = 2;
let numeroIngresado1 = null;
let intentosNumero2 = 4;
let numeroIngresado2 = null;

// resto los intentos o adivino el numero

while (intentosNumero1 > 0 && numeroIngresado1 !== number1 && numeroIngresado2 !== number2) {
    numeroIngresado1 = Number(prompt('Ingresa tu numero1'));
    numeroIngresado2 = Number(prompt('Ingresa tu numero2'));
    intentosNumero1 = intentosNumero1 - 1;
    intentosNumero2 = intentosNumero2 - 1;
}

while (intentosNumero1 === 0 && intentosNumero2 > 0 && numeroIngresado2 !== number2) {
    numeroIngresado2 = Number(prompt('Ingresa tu numero2'));
    intentosNumero2 = intentosNumero2 - 1;
}