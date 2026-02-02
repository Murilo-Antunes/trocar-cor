'use strict'

const btTrocar = document.getElementById('trocar')


function trocarCor(){
    console.log("testando botao")
    const tInput = document.getElementById('input')
    document.documentElement.style.setProperty('--cor-bg', tInput.value)
}

btTrocar.addEventListener('click', trocarCor)