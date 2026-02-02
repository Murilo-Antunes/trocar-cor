'use strict'

const btTrocar = document.getElementById('trocar')


function trocarCor(){
    console.log("testando botao")
    let tInput = document.getElementById('input').value.toLowerCase()

    console.log(tInput)


    if(tInput == "amarelo" || tInput.value == "Amarelo"){
        tInput = "yellow" 
        console.log(tInput.value)
    }else if (tInput == "vermelho" || tInput == "Vermelho"){
        tInput = "red"
    }else if(tInput == "verde" || tInput == "Verde"){
        tInput = "green"
    }else if(tInput == "azul" || tInput == "Azul"){
        tInput = "blue"
    }
    
    document.documentElement.style.setProperty('--cor-bg', tInput)
}

btTrocar.addEventListener('click', trocarCor)