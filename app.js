'use strict'

const btTrocar = document.getElementById('trocar')


function trocarCor(){
    console.log("testando botao")
    let tInput = document.getElementById('input').value.toLowerCase()

    console.log(tInput)


    if(tInput == "amarelo"){
        tInput = "yellow" 
        console.log(tInput.value)
    }else if (tInput == "vermelho"){
        tInput = "red"
    }else if(tInput == "verde"){
        tInput = "green"
    }else if(tInput == "azul" ){
        tInput = "blue"
    }
    
    document.documentElement.style.setProperty('--cor-bg', tInput)
}

btTrocar.addEventListener('click', trocarCor)