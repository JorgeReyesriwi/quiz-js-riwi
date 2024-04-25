// Variable globales
console.log("Gestion de viaje de Hilde")
let money = 2500000
console.log("Empezamos el viaje con 2.500.000")

// Case 1

console.log("Joa, no he comido y tengo como hambre, sera que como algo aqui o me espero hasta llegar a medellin, eso si, tengo que comer antes de llegar a macondo")

let flag = true
while (flag) {

  const decition = parseInt(prompt("Ingrese que quiere hacer Hilde\n1: comer una almojabana con gaseosa\n2: comer un subway con gaseosa\n3: no comer hasta llegar a medellin"))

  if(!isNaN(decition)) {

    if(decition === 1) {
      console.log("Hilde comprara una almojabana con gaseosa que cuesta 15.000, esto le caera mal porque lleva mucho en el stand")
      money = money - 15000
      console.log(`El saldo actual de Hilde despues de comer es ${money}`)
      flag = false
    }

    else if(decition === 2) {
      console.log("Hilde comprara un subway con gaseosa que cuesta 23.000, estara llenito y bien")
      money = money - 23000
      console.log(`El saldo actual de Hilde despues de comer es ${money}`)
      flag = false

    }

    else if(decition === 3) {
      console.log("Hilde no comprara nada")
      console.log(`Como Hilde no comio nada su saldo sigue siendo ${money}`)
      flag = false
    }

    else {
      console.log("Ingrese un numero valido")
      continue
    }
  } else {
    console.log("Ingrese un numero")

  }
}

// Case 2
const suitcaseAlert = alert("Hilde, tu maleta no cumple con los requisitos minimos para poder viajar, vamos a sacar ropa de ella para que cumpla las medidas minimas")
function calculateNewDimention() {
  const maxLength = 40
  const maxWidth = 20
  const maxHeight = 55
  console.log(`Las medidas minimas son \naltura: ${maxHeight}\nancho: ${maxWidth}\nlargo: ${maxLength}`)
  const actualLength = 40
  const actualWidth = 20
  const actualHeight = 60
  console.log(`Las medidas actuales de tu maleta son \naltura: ${actualHeight}\nancho: ${actualWidth}\nlargo: ${actualLength}`)

  const reductionHeight = maxHeight / actualHeight
  const reductionWidth = maxWidth / actualWidth
  const reductionLength = maxLength / actualLength

  const factorReduction = Math.min(reductionHeight, reductionLength, reductionWidth);

  const newLength = actualLength * factorReduction
  const newWidth = actualWidth * factorReduction
  const newHeight = actualHeight * factorReduction

  const newDimentionSuitcase = `Ya optimizamos el espacio en la maleta para que cumpla los requisitos del viaje\nnueva altura: ${newHeight}\nnuevo ancho: ${newWidth}\nnuevo largo: ${newLength}`
  console.log(newDimentionSuitcase)
}

calculateNewDimention()

// Case 3
function binaryConverterLetter(binary) {
  

  const decimalNum = parseInt(binary, 2)

  const letter = String.fromCharCode(decimalNum)
  return letter
}

const hildeFood = confirm("Comiste antes de subir al avion?")
if(hildeFood === false) {
  console.log("Debes comer algo antes de irte para Macondo, son las 2AM y solo hay comida cara de aeropuerto")
  const hildeEat = confirm("Lo bueno es que hay mucha comida, lo malo es que es cara, cualquier cosa que compres costara $100.000 ¿Quieres comer?")
  if(hildeEat === true) {
    money = money - 100000
    console.log(`Hilde comio y quedo lleno, actualmente le quedan ${money}`)
  } else {
    console.log(`Hilde no comio, tiene mucha hambre pero le quedan ${money} para su viaje en Macondo`)
  }
} else {
  console.log("Hilde ya habia comido")
}

console.log("Estando en el aeropuerto Hilde se da cuenta que el wifi del aeropuerto esta fallando y debe confirmar su reserva en el hotel, despues de un rato caminando encuentra una red wifi disponible, pero tiene su contraseña encriptada con numeros binarios, debe descifrarla para poder confirmar su reserva")

const elPassEs = "01110010_01101001_01110111_01101001"
const arrayPass = elPassEs.split("_")

const firstWord = binaryConverterLetter(arrayPass[0])
const secondWord = binaryConverterLetter(arrayPass[1])
const thirdWord = binaryConverterLetter(arrayPass[2])
const fourthWord = binaryConverterLetter(arrayPass[3])
const password = firstWord + secondWord + thirdWord + fourthWord

let flag4 = true

while (flag4) {
  console.log("Ya descifro la contraseña, ahora ingresa lo que sale en consola para acceder a la red y hacer la reserva")
  console.log("La contraseña es: " + password)
  const enterPassword = prompt("Ingrese aqui la contraseña que sale en consola:")

  if (enterPassword === password) {
    console.log("ingreso correctamente la contraseña, la hora de uso son 50.000")
    const hourPaying = parseInt(prompt("Ingrese el numero de horas que desea usar el wifi, recuerda que la hora vale 50.000"))

      if (hourPaying > 0) {
        const costWifi = hourPaying * 50000
        money = money - costWifi
        console.log(`Despues de pagar la contraseña te quedan ${money}`)
        flag4 = false
      } else {
        console.log("No ingresaste una hora valida")
        continue
      }
    } else {
      console.log("Ingrese un numero")
      continue
    }
}

// Case 4

function replaceVowel(str) {
  return str.replace(/[aeiou]/gi, "i")
}

console.log("Hilde llega a Macondo y agarra un taxi para ir al hotel, pero se da cuenta que todos en Macondo hablan cambiando las vocales por la 'i' entonces decide hacer un traductor para poder comunicarse con el taxista")
console.log("Despues de tener el traductor le pregunta al taxista...\n\n")
const takeATaxi = "Taxi me puede llevar al hotel mariposas amarillas"
const translatedSentence = replaceVowel(takeATaxi)
console.log(translatedSentence)

// Case 5

console.log("Despues de que el taxista llega al hotel le dice a Hilde que son 300.000, Hilde al no estar de acuerdo con el taxista le dice que jueguen piedra, papel o tijeras para ver si le paga o no, el conductor acepta y juegan a una sola ronda")
let flag2 = true

while (flag2) {
  const options = ["piedra", "papel", "tijeras"]
  const driverOptions = Math.floor(Math.random() * 3)
  
  const driverOption = options[driverOptions]

  const hildeOption = prompt("Vamos a jugar piedra, papel o tijeras, escoge una de las 3 opciones").toLowerCase()

  if (hildeOption !== "piedra" && hildeOption !== "papel" && hildeOption !== "tijeras") {
      console.log("Opcion no valida, por favor elige 'piedra', 'papel' o 'tijeras'.")
      continue
  }

  console.log(`Hilde eligio: ${hildeOption}`)
  console.log(`El conductor eligio: ${driverOption}`)

  if (hildeOption === driverOption) {
      console.log("Empate. Como empataron no pasa nada porque solo fue a una ronda")
      flag2 = false
  } else if ((hildeOption === "piedra" && driverOption === "tijeras") ||
              (hildeOption === "papel" && driverOption === "piedra") ||
              (hildeOption === "tijeras" && driverOption === "papel")) {
      console.log("Hilde gana, no le debe nada al conductor.")
      flag2 = false
  } else {
    console.log("El conductor gana Hilde le debe $300.000");
    money = money - 300000
    console.log(`El dinero actual de Hilde despues de perder es ${money}`)
    flag2 = false
  }
}

// Case 6 

const daysInMacondo = 4
let day = 1
let days = 0
let flag3 = true

while (day <= daysInMacondo && flag3) {
  console.log(`Dia ${day} en Macondo`)

  const dressCode = prompt(`Hilde, hoy tu dia ${day} que vestimenta usaras \n'amarillo'\n'verde'\n'azul'\n'roja'`).toLowerCase()

  switch(dressCode) {
    case 'amarillo':
      const poolDecision = confirm('Quiere Hilde ir a la piscina \n"Aceptar" para ir \n"Cancelar" para no ir')
      if (poolDecision === true) {
        console.log("Al meterse a la piscina, Hilde empieza a sentirte ahogado debido al exceso de cloro, Muere y terminan las vacaciones.")
        flag3 = false
      } else {
        console.log("Hilde decidio no ir a la piscina. No pasa nada.")
      }
      break
    case 'verde':
      const decisionCaminata = confirm("Hilde ¿Quieres hacer una caminata?")
      if (decisionCaminata) {
          console.log("Como fuiste a la caminata y llegas a una hermosa cascada donde te tomas fotos.")
      } else {
          console.log("Como no querias hacer la caminata. Te devuelves solo y de noche, te pierdes.")
          flag3 = false
      }
      break
    case 'rojo':

      const beachDecision = confirm("Hilde ¿Quieres participar en las actividades en la playa?");
      if (beachDecision) {
        console.log("Tienes tres opciones en la playa:\n1. Jugar voleibol\n2. Nadar en el mar y montar moto acuatica\n3. Tomar cocteles mientras descansas");
        const beachOption = parseInt(prompt("Tienes tres opciones en la playa:\n1. Jugar voleibol\n2. Nadar en el mar y montar moto acuatica\n3. Tomar cocteles mientras descansas\nElige una opciones"));
      while (beachOption === Number) {
        switch (beachOption) {
          case 1:
            console.log("Juegas voleibol y la pasas genial.")
            break
          case 2:
            console.log("Nadas en el mar y montas moto acuatica.")
            break
          case 3:
            console.log("Mientras descansas y tomas cocteles, sientes un fuerte dolor de cabeza. Descubres que el chirrinchi esta adulterado y debes regresar de emergencia. Terminan las vacaciones.")
            flag3 = false
            break
          default:
            console.log("Opcion no valida.")
            continue
          }
        }
      } else {
        console.log("Decidiste no participar en actividades en la playa. No pasa nada.")
      }
    break
case "azul":
    const hotelDecision = confirm("¿Quieres participar en actividades dentro del hotel?")
    if (hotelDecision) {
      const hotelOption = parseInt(prompt("Tienes 3 opciones dentro del hotel\n1. Jugar bingo\n2. Bailar\n3. Ir al casino y apostar\nElige una opcion"))
      switch (hotelOption) {
        case 1:
          console.log("Juegas bingo y ganas dinero.")
          money += 50000
          console.log(`ganaste 50000, ahora tienes ${money}`)
          break
        case 2:
          console.log("Bailas y la pasas muy bien.")
          break
        case 3:
          console.log("Vas al casino, apuestas y pierdes todo tu dinero. Solo te quedas con el pasaje de regreso. Terminan las vacaciones.")
          money = 0
          continuarJuego = false
          break
        default:
          console.log("Opcion no valida.")
      }
    } else {
        console.log("Decidiste no participar en actividades dentro del hotel. No pasa nada.")
    }
    break
default:
    console.log("Color de vestimenta no válido. Por favor elige 'amarillo', 'verde', 'rojo' o 'azul'.")
    day--
}

day++
days++
    
}

console.log(`Hilde estuvo ${days} en Macondo`)

if (flag3) {
  console.log("Hilde volvio sano y salvo de Macondo")
  console.log(`Hilde gasto ${2500000 - money} durante el viaje`)
} else {
  console.log("Hilde murio en Macondo, como muere en macondo no muestra el dinero que le queda porque pues, esta muerto")
}