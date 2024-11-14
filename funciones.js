// Funciones
// Funciones viejas

// Sin argumentos
function sumVieja() {
  return 1 + 8;
}
console.log(sumVieja());

// Con argumentos
function sumViejaConArgumentos(x, y) {
  return x + y;
}
console.log(sumViejaConArgumentos(5, 10));

// Las funciones usa la keyword return para retornar el valor y este poder ser usado en el programa.

// Funciones flechas (Actualizadas)

// Sin argumentos
const sumFlecha = () => 10 + 2;

// Con argumentos
const sumFlechaArgumentos = (x, y) => x + y;

// Una cualidad de las funciones de flecha es que tienen el return implicito, es decir, si queremos retornar algo podemos hacerlo sin escribir la keyword return (no aplica en todos los casos)