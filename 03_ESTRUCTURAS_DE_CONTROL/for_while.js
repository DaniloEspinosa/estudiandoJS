// Estructuras iterativas

let lista_alumnos = ["Sara", "Noa", "José", "Pau", "Francisco", "Marta"]

let texto = "Hola"

for (let i = 0; i < texto.length; i++) {
    console.log(texto[i])
}

for (let i = 0; i < lista_alumnos.length; i++) {
    console.log(lista_alumnos[i])
}

// Descubrir quien es el alumno con el nombre más largo
// El mensaje debe ser:
// "xxxx" tiene el nombre mas largo

let nombre_mas_largo = ""

for (let i = 0; i < lista_alumnos.length; i++) {
    if (lista_alumnos[i].length > nombre_mas_largo.length) {
        nombre_mas_largo = lista_alumnos[i]
    }
}

let mensaje = `${nombre_mas_largo} tiene el nombre más largo`

console.log(mensaje)

// while
/*

*/
let inicio = 1

while (inicio <= 10) {
    console.log(`10 x ${inicio} = ${10*inicio}`)
    inicio++
}

inicio = 10

while (inicio > 0) {
    console.log(`10 x ${inicio} = ${10*inicio}`)
    inicio--
}

// Bucle do while

let passwordReal = "1234"
let passwordIntroducido = "" 
do {
    passwordIntroducido = prompt("Introduce tu contraseña:") 
} while (passwordReal != passwordIntroducido)