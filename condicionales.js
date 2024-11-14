// Condicionales
// Son los llamados si sino. En js se escriben con la keyowrd:
// if para el si
// else if para el si no si
// else para el si no

// Ejemplo: Comprobar si el usuario esta en un rango de edad determinado
const edadEnString = prompt('Dime tu edad');
const edadEnNumero = Number(edadEnString);
if (edadEnNumero > 0 && edadEnNumero <= 12) {
  alert('Eres un niño');
} else if (edadEnNumero > 12 && edadEnNumero < 18) {
  alert('Eres un adol');
} else if (edadEnNumero >= 18 && edadEnNumero < 65) {
  alert('Eres un adulto');
} else if (edadEnNumero >= 65 && edadEnNumero <= 100) {
  alert('Eres un anciano');
} else {
  alert('Hubo un error')
}