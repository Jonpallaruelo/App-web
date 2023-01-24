let texto
do {


    texto = prompt("introduce una frase")



    if (texto == null) {
        alert("No has introducido nada")
    }

}while(texto==null)


texto = texto.replace(/\s/g, '').toLowerCase()
console.log(texto)
texto = texto.replace("á", "a").replace("é", "e").replace("í", "i").replace("ó", "o").replace("ú", "u")

let reverso = texto.split("").reverse().join("")


if (texto === reverso) {

    document.write("<h1>Es un palindromo</h1>")
} else {

    document.write("<h1>No es un palindromo</h1>")
}

 // Otro ejemplo :)
// function palindromo(cadena){

// let array= cadena.split("")

// let reverse = array.reverse()

// let ultimoelemento= reverse.join("")

// if(cadena==ultimoelemento){
//     document.write("Es un palindormo")
// }else{
//     document.write("no es un palindromo")
// }


// return cadena

// }



// var entrada ="Anita, lava la tina"
// var entrada1= " probando el false"
// var entrada2="oso"

// document.write("<h2>"+ palindromo(entrada2)+"</h2")
// function palindromo(entrada){

// var espalindromo = true
// var stringentrada= entrada.toLowerCase()
// var sinespacios= stringentrada.replace(/\,*\s/g,"")
// var arreglo = Array.from(sinespacios)
// var k = arreglo.length

// for(let i=0; i<=arreglo.length;i++){

// if(arreglo[i]!= arreglo[k-1]){

//     espalindromo=false
// }
// k=k-1
// }
//   return espalindromo

// }

// palindromo(entrada1)


// var entrada = "anita, lava la tina"
// var entrada2="ola bebe"

