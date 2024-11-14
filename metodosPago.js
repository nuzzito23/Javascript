// elegir metodo de pago 

const metodoE = prompt("Elige un metodo de pago")
const metodo1 = 'pagoMovil'
const metodo2 = 'transferencia'


if (metodoE == metodo1 || metodoE == metodo2) {
    alert("Metodo seleccionado correctamente")
} else if (metodoE !== metodo1 && metodoE !== metodo2) {
    alert("No se puede realizar el pago") 
}

const numeroRIng = prompt("Ingrese el numero de referencia")
const montoIng = prompt("Ingrese el monto")
const numeroR = 23
const montoPagar = 30 

if (numeroRIng == 23 && montoPagar == 30) {
} if (montoIng = montoPagar) {
    alert("Pago realizado exitosamente")
}

 else if (montoIng < montoPagar) {
    alert("Pago Incompleto")
}

 else if (montoIng > montoPagar) {
    alert("Pagó de más")
 }

else if (numeroRIng !== 23) {
    alert("Vuelva a intentarlo")
}