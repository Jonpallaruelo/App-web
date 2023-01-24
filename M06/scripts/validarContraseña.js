
//ejercicio de repeticion de un numero

// const numeroRepeticiones = 10000

// //declaracion del mapa -Inicializacion

// let mapa = new Map()

// for (let i = 1; i <= 10; i++) {
//     mapa.set(i, 0)

// }

// for (let i = 1; i <= numeroRepeticiones; i++) {

//     let num = parseInt((Math.random() * 100) + 1)

//     let frecuenciaActual = mapa.get(num)
//     mapa.set(num, frecuenciaActual + 1)
//     console.log(mapa)


// }

// document.write("<h1>frecuencias</h1>")
// document.write("<ul>")

// for (let i = 1; i <= 10; i++) {

//     document.write(`<li>Numero ${i} ` + `${mapa.get(i)} </li> `)

// }

// document.write("</ul>")



//Ejercicio usuario contraseña

let nombre, contraseña
//centinela para controlar si cancela el cuadro

let seguir = true


//variables para los datos validados
let nombreOK
let contraselaOK

//premisas para la contraseña 
let hayMin = false
let hayMa = false
let hayNun = false
let hayOtros = false

//string de inicializacion de letras y numeros

const min = "abcdefghijklmnñopqrstuvwxyz"
const num = "0123456789"

//validacion del nombre usuario

do {
    let nombre = prompt("Escribe nombre de usuario")
    if (nombre == null) {
        seguir = false


    }

    if (seguir) {
        //validamos lo que ha entrado
        nombreOK = true
        let i = 0

        while ( nombreOK && i <nombre.length) {

            let caracter = nombre.charAt(i)
            
            //validamos la minuscula
            if (min.indexOf(caracter) ==-1) {

                // no se encontro una miniscula  de la lista (string)
                nombreOK = false
                alert("El usuario introducido es incorrecto \n" + "solo se admiten minisculas")
            }

            i++
        }
    }

} while (seguir == true && nombreOK == false)

//contraseña


if (seguir) {
    //peticion de la contraseña


    do {

        let hayMin = false
        let hayMa = false
        let hayNun = false
        let hayOtros = false
        contraseña = prompt("introduce la contraseña")
        if (contraseña == null) {
            seguir = false



        }

        if (seguir) {

            contraselaOK = true
            let i = 0

            while (contraselaOK && i < contraseña.length) {

                let caracter = contraseña.charAt(i)
                if (min.indexOf(caracter) != -1) {

                    hayMin = true
                }
                  //validar si hay una minuscula
                else if (min.toUpperCase().indexOf(caracter) != -1) {
                     hayMa=true
                }

                //validar si hay numero

                else if(num.indexOf(caracter)!=-1){

                    hayNun=true
                }

                else{
                    hayOtros=true
                }
                i++

            }

            contraselaOK=(
                hayMin=true && hayMa==true && hayNun==true &&hayOtros==true
            )

            if(contraselaOK==false){

                alert("La contraseña es incorrecta \n"+
                "debe tener minusculas mayusculas simbolos y numeros enteros")
            }
        }
        console.log(
            "Mayusculas: " + hayMa+
            "Minisculas:"+hayMin+
            "Numeros:"+hayNun+
            "Simbolos:"+hayOtros
        )

    } while (seguir==true &&contraselaOK==false)

   
   

}

if(seguir){
    document.write(`"<h1>Datos almacenados </h1>"`)
}
else {
    document.write("<h1>Operacion cancelada</h1>")
}

//

