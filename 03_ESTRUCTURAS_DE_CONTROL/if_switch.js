// Estructura condicional

// if - else if - else

let dia_semana = "Viernes"

if (dia_semana.toLowerCase() == "jueves") {
    console.log("No es viernes")
} else if (dia_semana.toLowerCase() == "viernes") {
    console.log("Es viernes")
} else {
    console.log("No es ni jueves ni viernes")
}

dia_semana = "sábado"

if (dia_semana == "domingo" || dia_semana == "sábado") {
    console.log("Fin de semana!!")
} else {
    console.log("Toca ir a clase")
}

/*
lunes : ensalada
martes : sardinas
miercoles : pollo
jueves : paella
viernes : salmón
sabado : pizza
domingo : calçots

El mensaje de salida debe ser:
"Hoy toca ensalada"

*/

if (dia_semana == "lunes") {
    console.log("Hoy toca ensalada")
} else if (dia_semana == "martes") {
    console.log("Hoy toca sardinas")
} else if (dia_semana == "miercoles") {
    console.log("Hoy toca pollo")
} else if (dia_semana == "jueves") {
    console.log("Hoy toca paella")
} else if (dia_semana == "viernes") {
    console.log("Hoy toca salmón")
} else if (dia_semana == "sábado") {
    console.log("Hoy toca pizza")
} else if (dia_semana == "domingo") {
    console.log("Hoy toca calçots")
} else {
    console.log("Debes escribir correctamente")
}



let lunes = "ensalada"
let martes = "sardinas"
let miercoles = "pollo"
let jueves = "paella"
let viernes = "salmón"
let sabado = "pizza"
let domingo = "calçots"

let mensaje = "Hoy toca"

dia_semana = dia_semana.toLowerCase()

if (dia_semana == "lunes") {
    console.log(`${mensaje} ${lunes}`)
} else if (dia_semana == "martes") {
    console.log(`${mensaje} ${martes}`)
} else if (dia_semana == "miercoles") {
    console.log(`${mensaje} ${miercoles}`)
} else if (dia_semana == "jueves") {
    console.log(`${mensaje} ${jueves}`)
} else if (dia_semana == "viernes") {
    console.log(`${mensaje} ${viernes}`)
} else if (dia_semana == "sábado") {
    console.log(`${mensaje} ${sabado}`)
} else if (dia_semana == "domingo") {
    console.log(`${mensaje} ${domingo}`)
} else {
    console.log("Debes escribir correctamente")
}

// switch

switch (dia_semana) {
    case "lunes":
        console.log(`${mensaje} ${lunes}`)
        break
    case "martes":
        console.log(`${mensaje} ${martes}`)
        break
    case "miercoles":
        console.log(`${mensaje} ${miercoles}`)
        break
    case "jueves":
        console.log(`${mensaje} ${jueves}`)
        break
    case "viernes":
        console.log(`${mensaje} ${viernes}`)
        break
    case "sábado":
        console.log(`${mensaje} ${sabado}`)
        break
    case "domingo":
        console.log(`${mensaje} ${domingo}`)
        break
    default:
        console.log("Día incorrecto")
}


switch (dia_semana) {
    case "lunes":
    case "martes":
    case "miercoles":
    case "jueves":
    case "viernes":
        console.log("Toca ir a clases")
        break
    case "sábado":
    case "domingo":
        console.log("No tengo clases")
        break
    default:
        console.log("Día incorrecto")
}