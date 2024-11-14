// preguntar si desea usar direccion del usuario

const direccionUsuario = 'LosRuices'

let direccionU = prompt("Desea usar direccion de usuario")

// si es si

if (direccionU === 'si') {
    alert("Se enviará la orden a LosRuices")
    
    

// si es no

} else {
    
  // pedir al usuario ingresar direccion nueva

  const direccionNueva =  prompt("Ingrese una direccion nueva")

  // enviar

alert('enviará la orden a ${direccionNueva}')
} 