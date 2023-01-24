let num
let n
let salir = false
let volver

num = parseInt(Math.random() * 100) + 1

do{
do {

  do {

    n = prompt("introduce el numero que quieres buscar")

    if (n == null) {

      salir = true
    } else if (n < 0 || n > 100) {

      alert("el numero introducido no es valido")
      volver = true
    }





  } while (salir == false && volver == true)


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

if(salir==false){

  alert("acertado")
}

}while(salir==false &confirm("quieres seguir jugando"))

if(salir){

  document.write("se cancelo la partida")
}