const contenedor= document.getElementById('contenedor')
const colores=['#31F560', '#3DFF33', '#80E83A', '#CCFF33', '#F5EF31']
const cuadros= 500


for(let i =0;i<cuadros;i++){

const cuadro= document.createElement('div')
cuadro.classList.add('cuadro')
cuadro.addEventListener('mouseover',()=>color(cuadro))
cuadro.addEventListener('mouseout',()=>sincolor(cuadro))

contenedor.appendChild(cuadro)

}

function colorAleatorio(){

    return colores[Math.floor(Math.random()* colores.length)]
}

function color(elemento){


const color = colorAleatorio()
elemento.style.background=color

}

function sincolor(elemento){

    elemento.style.background= '#0d1f0a65';

}