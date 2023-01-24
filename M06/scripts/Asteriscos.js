const TAM = 20

let a = []

for (let i = 0; i < TAM; i++) {



   a[i] = parseInt(Math.random() * 50) + 1


   for (let j = 0; j < a[i]; j++) {

      document.write(`*`)
   }


   document.write("<br>")
}

console.log(a)
//funcion para el que boten genere asteriscos.
let refresh = document.getElementById('refresh');
refresh.addEventListener('click', _ => {
   location.reload();
})