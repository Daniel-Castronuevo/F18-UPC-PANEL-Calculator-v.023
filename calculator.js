"use strict"

// CARGAR CALCULADORA //

const calculator = document.querySelector(".container-calc");

addEventListener("load",()=>{
    calculator.style.opacity = 1
});

// PANTALLA //

const mainScreen = document.querySelector(".tipping");

// VALOR ACTUAL //

let actualValue = [``,``,``];

//- - - - - - - - - - - -BOTONES NÚMEROS- - - - - - - - - - - -//

const botonesNumeros = document.querySelectorAll(".button-num");

botonesNumeros.forEach(boton => {
    boton.addEventListener("click",()=>{
        if (actualValue[1] == ``){

            actualValue[0] += boton.value
                            
            if(boton.value == 1){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${boton.value}</p>`
            }
            else if(boton.value == 7){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${boton.value}</p>`
            }
            else {
                mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
            }

        }
        else {

            actualValue[2] += boton.value
                            
            if(boton.value == 1){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on-1">${boton.value}</p>`
            }
            else if(boton.value == 7){
                mainScreen.innerHTML += `<p class="tipping-on tipping-on-7">${boton.value}</p>`
            }
            else {
                mainScreen.innerHTML += `<p class="tipping-on">${boton.value}</p>`
            }

        }
    })
});

//- - - - - - - - - - - -BOTONES OPERADORES BÁSICOS- - - - - - - - - - - -//

const botonesOperadores = document.querySelectorAll(".button-op");

botonesOperadores.forEach(botonOP => {
    botonOP.addEventListener("click",()=>{

        actualValue[1] += botonOP.value

        if(botonOP.value == `+`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--plus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `-`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--minus-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `/`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--division-sign">${botonOP.value}</p>`
        }
        else if(botonOP.value == `x`){
            mainScreen.innerHTML += `<p class="tipping-on tipping-on--multiplication-sign">${botonOP.value}</p>`
        }

    })
});

//- - - - - - - - - - - - - - -BOTON AC- - - - - - - - - - - - - - -//

const buttonAC = document.querySelector(".AC-button");

buttonAC.addEventListener("click",()=>{
    mainScreen.innerHTML = ``;
    actualValue = [``,``,``];
})

//- - - - - - - - - - - - - - -BOTON ENTER- - - - - - - - - - - - - - -//

const buttonENTER = document.querySelector(".button-enter");

buttonENTER.addEventListener("click",()=>{
    calculate(actualValue[0],actualValue[1],actualValue[2]);
    mainScreen.innerHTML = ``;
    actualValue = [``,``,``];
})

// CALCULAR //

let result

const calculate = (num1,op,num2) => {

    if (num1 == ``){
        num1 = 0;
    }

    else if(op == ``){
        op = `+`
        num2 = 0;
    }

    else if(num2 == ``){
        num2 = 0;
    }

    if (op == `+`){
        result = parseFloat(num1) + parseFloat(num2)
        return putInScreen(result)
    }
    else if (op == `-`){
        result = parseFloat(num1) - parseFloat(num2)
        return putInScreen(result)
    }
    else if (op == `x`){
        result = parseFloat(num1) * parseFloat(num2)
        return putInScreen(result)
    }
    else if (op == `/`){
        result = parseFloat(num1) / parseFloat(num2)
        return putInScreen(result)
    }
}

const resultScreen1 = document.querySelector(".result1");
const resultScreen2 = document.querySelector(".result2");
const resultScreen3 = document.querySelector(".result3");
const resultScreen4 = document.querySelector(".result4");
const resultScreen5 = document.querySelector(".result5");

const screensInUse = [false,false,false,false,false];

const putInScreen = (res) =>{

    let resString = res.toString()

    if (screensInUse[0] == false){
        for (let i = 0; i < resString.length; i++){
            resultScreen1.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            screensInUse[0] = true
        }
    }
    else if (screensInUse[1] == false){
        for (let i = 0; i < resString.length; i++){
            resultScreen2.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            screensInUse[1] = true
        }
    }
    else if (screensInUse[2] == false){
        for (let i = 0; i < resString.length; i++){
            resultScreen3.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            screensInUse[2] = true
        }
    }
    else if (screensInUse[3] == false){
        for (let i = 0; i < resString.length; i++){
            resultScreen4.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            screensInUse[3] = true
        }
    }
    else if (screensInUse[4] == false){
        for (let i = 0; i < resString.length; i++){
            resultScreen5.innerHTML += `<p class="tipping-on">${resString[i]}</p>`
            screensInUse[4] = true
        }
    }
}


