
let limite= prompt("introduce un numero para calcular la secuencia")

function fibonaci(limite){

    const fib= [0,1]
   
    for(let i=2;i<limite;i++){

        fib[i]= fib[i-1]+fib[i-2]
    }


   
    return fib


}

const fib= fibonaci(limite)

const ul= document.getElementById("fib")

fib.forEach(element => {
    const li= document.createElement("li")
    li.innerHTML=element
    ul.append(li)
});