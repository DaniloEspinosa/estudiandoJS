// Juego del piedra papel o tijeras
// Esto es la version 0.1


let bienvenida = `
PIEDRA, PAPEL O TIJERAS
=======================

1 --> Piedra
2 --> Papel
3 --> Tijeras

`

// Elección del jugador
let eleccionUsuario = Number(prompt(bienvenida))

if (!isNaN(eleccionUsuario)) {
    if (eleccionUsuario == 1) {
        alert("Has elegido piedra ✊")
    } else if (eleccionUsuario == 2) {
        alert("Has elegido papel 🖐")
    } else if (eleccionUsuario == 3) {
        alert("Has elegido tijeras ✌")
    } else {
        alert("Hasta pronto")
    }

    //Elección de la máquina
    let eleccionPc = obtenerNumeroAleatorio(1, 3)

    if (eleccionPc == 1) {
        alert("El PC ha elegido piedra ✊")
    } else if (eleccionPc == 2) {
        alert("El PC ha elegido papel 🖐")
    } else if (eleccionPc == 3) {
        alert("El PC ha elegido tijeras ✌")
    }

    // Lógica del juego
    if (eleccionPc == eleccionUsuario) {
        alert("Empate")
    } else if (
        (eleccionUsuario == 1 && eleccionPc == 3) ||
        (eleccionUsuario == 2 && eleccionPc == 1) ||
        (eleccionUsuario == 3 && eleccionPc == 2)) {
        alert("Has ganado")
    } else {
        alert("Has perdido")
    }
} else {
    alert("Hasta pronto")
}


function obtenerNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

