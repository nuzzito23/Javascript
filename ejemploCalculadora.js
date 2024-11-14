// Pido la operacion mediante un prompt donde me incluye el primer numero, el signo y el segundo numero, todo dentro de una string.
const operation = prompt('Introduce tu operacion');

// Funcion
const separarNumeros = (signo) => {
  const numerosSeparados = operation.split(signo);
  const num1 = Number(numerosSeparados[0]);
  const num2 = Number(numerosSeparados[1]);
  return {
    num1,
    num2
  }
}

// Para poder continuar con la operacion, necesito saber que signo esta en la variable operation.
if (operation.includes('+')) {
  const numeros = separarNumeros('+');
  const resultado = numeros.num1 + numeros.num2;
  console.log(resultado);
} else if (operation.includes('-')) {
  const numeros = separarNumeros('-');
  const resultado = numeros.num1 - numeros.num2;
  console.log(resultado);
} else if (operation.includes('x')) {
  const numeros = separarNumeros('x');
  const resultado = numeros.num1 * numeros.num2;
  console.log(resultado);
} else if (operation.includes('/')) {
  const numeros = separarNumeros('/');
  const resultado = numeros.num1 / numeros.num2;
  console.log(resultado);
} else {
  console.log('error');
}