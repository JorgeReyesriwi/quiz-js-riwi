// // Variable globales
// console.log("Gestion de viaje de Hilde")
// let money = 2500000
// console.log("Empezamos el viaje con 2.500.000")

// // Llegando al aeropuerto

// console.log("Joa, no he comido y tengo como hambre, sera que como algo aqui o me espero hasta llegar a medellin, eso si, tengo que comer antes de llegar a macondo")


// let flag = true
// while (flag) {

//   const decition = parseInt(prompt("Ingrese que quiere hacer Hilde \n 1: comer una almojabana con gaseosa \n2: comer un subway con gaseosa \n 3: no comer hasta llegar a medellin"))

//   if(!isNaN(decition)) {

//     if(decition === 1) {
//       console.log("Hilde comprara una almojabana con gaseosa que cuesta 15.000, esto le caera mal porque lleva mucho en el stand")
//       money = money - 15000
//       console.log(`El saldo actual de Hilde despues de comer es ${money}`)
//       flag = false
//     }
  
//     else if(decition === 2) {
//       console.log("Hilde comprara un subway con gaseosa que cuesta 23.000, estara llenito y bien")
//       money = money - 23000
//       console.log(`El saldo actual de Hilde despues de comer es ${money}`)
//       flag = false

//     }
  
//     else if(decition === 3) {
//       console.log("Hilde no comprara nada")
//       console.log(`Como Hilde no comio nada su saldo sigue siendo ${money}`)
//       flag = false
//     }
  
//     else {
//       console.log("Ingrese un numero valido")
//       continue
//     }
//   } else {
//     console.log("Ingrese un numero")
    
//   }
// }

// Llegada a la sala de espera


function calculateNewDimention() {
  const maxLength = 40
  const maxWidth = 20
  const maxlHeight = 55
  
  const actualLength = 40
  const actualWidth = 20
  const actualHeight = 60

  const reductionHeight = maxlHeight / actualHeight 
  const reductionWidth = maxWidth / actualWidth
  const reductionLength = maxLength / actualLength

  const factorReduction = Math.min(reductionHeight, reductionLength, reductionWidth)

  const newLength = actualLength * factorReduction
  const newWidth = reductionWidth * factorReduction
  const newHeight = reductionHeight * factorReduction

  const newDimentionSuitcase = `nueva altura: ${newHeight} \nnuevo ancho: ${newWidth} \nnuevo largo: ${newLength}`
  console.log(newDimentionSuitcase)
}

calculateNewDimention()



