
let texto= prompt("Introduce un texto que quieras cifrar");
let clave;
let resultado



do {

 clave = prompt("escribe la clave numero entero")
 if(isNaN(Number(clave))){

    alert("No has introducido un numero");
 }



}while(isNaN(Number(clave)))

for(let letra of texto){

 let cifra= letra.charCodeAt(letra)+clave;
 console.log(cifra)
 
  resultado= String.fromCharCode(cifra);

  document.write(resultado)

}

// 

