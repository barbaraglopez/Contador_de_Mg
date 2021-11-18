const btnMas = document.querySelector('#btn-m')
const btnMenos = document.querySelector('#btn')
const meGusta = document.getElementById('contadorPositivo')
const noMeGusta = document.getElementById('contadorNegativo')

btnMas.onclick = () =>{
    let contador = meGusta.innerText
    contador++
    meGusta.innerText = contador
}

btnMenos.onclick = () =>{
    let contadorNegativo = noMeGusta.innerText
    contadorNegativo++
    noMeGusta.innerText = contadorNegativo
}