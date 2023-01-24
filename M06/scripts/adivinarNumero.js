let num, n
let salir = false
let volver

do {
    //se repite este código, al menos una vez
    let cont = 0
    //cálculo del número del 1 al 100
    num = parseInt(Math.random() * 100) + 1
    do {
        //bucle del juego, se repite hasta que el usuario acierte o salga
        do {
            //bucle de petición de número
            //se repite mientras el usuario no indique un número correcto
            //o pulse cancelar
            // volver = false
            n = prompt("Adivina el número del 1 al 100")
            // document.write(n)
            //si se cancela el cuadro, la variable salir se vuelve true
            if (n == null) {
                salir = true
            } else if (isNaN(n) || n < 0 || n > 100) {
                //comprobamos si el número es válido
                alert("Número no válido")
                volver = true

            }

        } while (salir == false && volver == true)

        cont++

        if (salir == false) {
            //mensajes sobre lo cerca o no que está el usuario
            //solo se muestran si no se pulsó salir
            if (num > n) {
                alert("El número que buscas es mayor")
            } else if (num < n) {
                alert("El número que buscas es menor")
            }
        }
    } while (salir == false && n != num)
    //solo se puede salir si acertamos o si cancelamos un cuadro

    if (salir == false) {
        //mensaje de acierto
        alert("¡Acertaste! Intentos: " + cont)
        //pedimos confirmación al usuario para jugar otra vez si
        //no ha indicado que quiere salir
    }

} while (salir == false && confirm("¿Quieres jugar de nuevo?"))

//según la elección:

if (salir) {
    document.write("<h1>Se canceló la partida</h1>")
} else {
    document.write("<h1>Gracias por jugar</h1>")

}