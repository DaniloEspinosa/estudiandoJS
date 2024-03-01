// Juego del piedra papel o tijeras
// Esto es la version 0.1


let bienvenida = `
PIEDRA, PAPEL O TIJERAS
=======================

1 --> Piedra
2 --> Papel
3 --> Tijeras

`
/* // Opcion 1
do {
    game()
    let repeticion = confirm("¿Quieres jugar de nuevo?")

    if (!repeticion) {
        break
    }

} while (true);
*/

/// Opcion 2

let ganadas = 0
let perdidas = 0
let empatadas = 0



let continuar = true
do {
    game()
    continuar = confirm("Juegas de nuevo?")
} while (continuar);



function game() {
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
            return
        }
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
        empatadas++
    } else if (
        (eleccionUsuario == 1 && eleccionPc == 3) ||
        (eleccionUsuario == 2 && eleccionPc == 1) ||
        (eleccionUsuario == 3 && eleccionPc == 2)) {
        alert("Has ganado")
        ganadas++
    } else {
        alert("Has perdido")
        perdidas++
    }

    function obtenerNumeroAleatorio(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}

alert(`
Ganadas = ${ganadas}
Perdidas = ${perdidas}
Empatadas = ${empatadas}
`)