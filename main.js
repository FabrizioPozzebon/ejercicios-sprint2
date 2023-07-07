// // condicionales

// let numeroUno = 5
// let numeroDos = 10
// let numeroTres = 15

// if (numeroUno < numeroDos){
//  console.log("false")
//  }
// else {
//       console.log("true")
// }


//  if (numeroUno == numeroDos){
//      console.log("son iguales")
//  }
//  else {
//      console.log("no son iguales")
//  }
//  if (numeroUno < numeroDos){
//      console.log("este numero es mayor " + numeroDos)
//  }
//  else if (numeroUno > numeroDos){
//      console.log("este numero es mayor " + numeroUno)
// }
// else {
//     console.log("Son iguales")
// }
// if (numeroUno < numeroDos && numeroUno < numeroTres){
//     console.log("Este numero es menor " + numeroUno)
// }
// else if (numeroDos < numeroUno && numeroDos > numeroTres){
//     console.log("Este numero es menor " + numeroDos)
// }
// else{
//     console.log("Este numero es menor " + numeroTres)
// }

// let objetoUno = {
//     nombre: "Fabrizio",
//     edad: 20,
//     altura: 184
// }
// let objetoDos = {
//     nombre: "Lautaro",
//     edad: 31,
//     altura: 186
// }
// function altura(alturaUno, alturaDos) {
//     if (alturaUno < alturaDos){
//         console.log("Esta altura es menor " + alturaUno)
//     }
//     else {
//         console.log("Esta altura es menor " + alturaDos)
//     }
// }
// altura(objetoUno.altura, objetoDos.altura)
// function edad(edadUno, edadDos){
//     if (edadUno > edadDos){
//         console.log("Esta edad es mayor " + edadUno)
//     }
//     else {
//         console.log("Esta edad es mayor " + edadDos)
//     }
// }
// edad(objetoUno.edad, objetoDos.edad)
// let nombre = prompt ("Ingrese su nombre")
// let edad1 = prompt ("Ingrese su edad")
// let altura1 = prompt ("Ingrese su altura (cm)")
// let vision = prompt ("Ingrese su vision 1-10")
// function completar(){
// if (edad1 >= 18 && altura1 >= 150 && vision >= 8){
//     console.log("Apto para conducir")
// }
// else {
//     console.log("No apto para conducir")
// }
// }
// completar()
// let nombre1 = prompt ("Ingresar nombre")
// function apto(){
//     if (nombre1 !== "Fabrizio"){
//         let pase = prompt ("¿Tenes pase VIP?")
//         if (pase !== "si"){
//             let entrada = prompt ("¿Queres pagar la entrada?")
//                 if (entrada == "si"){
//                     let dinero = prompt ("¿Cuanto dinero tenes?")
//                     if (dinero < 1000){
//                         console.log("No tienes suficiente dinero")
//                     }
//                     else {
//                         console.log("Pasa")
//                     }
//                 }
//         }
//         else {
//             console.log("Pasa")
//         }
//     }
//     else {
//         console.log("Pasa")
//     }
// }
// apto()
// let numeroIncognita = 8
// function adivina(){
//     let intento1 = prompt ("Adivina la incognita del 1-10")
//     if (intento1 == numeroIncognita){
//         alert("Ganaste")
//     }
//     else {
//         let intento2 = prompt ("Segundo intento")
//         if (intento2 == numeroIncognita){
//             alert("Ganaste")
//         }
//         else {
//             let intento3 = prompt ("Intento 3")
//             if (intento3 == numeroIncognita){
//                 alert("Ganaste")
//             }
//             else{
//                 alert("Perdiste")
//             }
//         }
//     }      
// }
// adivina()
// let tuEdad = prompt("Ingrese su edad")
// function descubrir(){
//     if (tuEdad <= 12){
//          console.log("Eres un infante")
//     }
//      else if (tuEdad >= 13 && tuEdad <= 18){
//          console.log("Eres un adolecente")
//     }
//      else if (tuEdad >= 19 && tuEdad <= 45){
//          console.log("Eres un mayor joven")
//     }
//      else if (tuEdad > 45 &&  tuEdad <= 99){
//          console.log("Eres un anciano")
//     }
//      else {
//          console.log("¿Realmente tienes esa edad?")
//     }
// }
//  descubrir()
//  let jugador1 = prompt("JUGADOR1 Ingrese piedra, papel o tijeras")
//  let jugador2 = prompt("JUGADOR2 Ingrese piedra, papel o tijeras") 
//  if (jugador1 == jugador2) {
//      console.log("EMPATE")
// } else {
//      if (jugador1 == "piedra" && jugador2 == "tijeras") {
//          console.log("GANADOR jugador1")
//     } else {
//         if (jugador1 == "papel" && jugador2 == "piedra") {
//             console.log("GANADOR jugador1")
//         } else {
//             if (jugador1 == "tiijeras" && jugador2 == "papel") {
//                 console.log("GANADOR jugador1")
//             } else {
//                 console.log("GANADOR jugador2")
//             }
//         }
//     }
// }
// function color(){
// let color = prompt("Ingrese un color")
// switch (color){
//     case"negro":
//     case"blanco":
//     console.log("Falta de color")
//     break
//     case"verde":
//     console.log("El color de la naturaleza")
//     break
//     case"azul":
//     console.log("El color del agua")
//     break
//     case"amarillo":
//     console.log("El color del sol")
//     break
//     case"rojo":
//     console.log("El color del fuego")
//     break
//     case"marron":
//     console.log("El color de la tierra")
//     break
//     default: console.log("Exelente eleccion, no lo teniamos pensado")
//     break
// }
// }
//   color()

// //Bucles

// let num1 = prompt("Ingrese un numero")
// let i = 0
//    for (i = 1; i <= 10; i++){
//       let num2 = i * num1
//       console.log(num2)
//    }
// let num3 = 0
// let indice = 0
// let arrayNum = []
// do {
//    num3 = parseInt(prompt("Ingrese un numero"))
//    if (num3 !== 0){
//       arrayNum.push(num3)
//    }
// } while (num3 !== 0);
// console.log(arrayNum)

// let num4 = prompt("Ingrese un número:")
// console.log("Los divisores de " + num4 + " son:")
// for (let index = 1; index <= num4; index++)
//     if (num4 % index === 0) {
//       console.log(index);
//     }

// let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// for (let indic = 0; indic < array.length; indic++) {
//     console.log("Elemento " + (indic + 1) + ": " + array[indic])
// }


// let numerosArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
// for (let indicee = 0; indicee < numerosArray.length; indicee++) {
//   let doble = numerosArray[indicee] * 2
//   console.log("El doble de " + numerosArray[indicee] + " es: " + doble)
// }

let grupoFamiliar = [
    { nombre: "Marcelo", edad: 58, relacion: "Padre", ocupacion: "Heladero"},
    { nombre: "Silvana", edad: 57, relacion: "Madre", ocupacion: "Heladera"},
    { nombre: "Fabrizio", edad: 20, relacion: "Hijo", ocupacion: "Estudiante"},
    { nombre: "Lautaro", edad: 31, relacion: "Hijo", ocupacion: "Arquitecto"},
    { nombre: "Valentin", edad: 19, relacion: "Primo", ocupacion: "Estudiante"}
  ]
  for (let ind = 0; ind < grupoFamiliar.length; ind++) {
    let persona = grupoFamiliar[ind];
    console.log("Hola, soy " + persona.nombre + ", tengo " + persona.edad + " años y soy " + persona.relacion + ". Mi ocupación es " + persona.ocupacion + ".")
}
  
