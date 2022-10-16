"use strict";

const PI = 3.14;

let radios = document.querySelectorAll('input[type="radio"]');

let result = document.getElementById('result');

let inputA = document.getElementById('aOrR');
let inputB = document.getElementById('b');
let inputC = document.getElementById('c');
let button = document.getElementById('btn-answer');

let operation = 0;

for(let radio of radios){
    radio.addEventListener('click', function(){
        inputA.placeholder = 'Введите величину a';
        if(radio.id == 'square'){
            inputA.type = "number";
            inputB.type = "hidden";
            inputC.type = "hidden";
            operation = 1;
        }

        if(radio.id == 'rectangle'){
            inputA.type = "number";
            inputB.type = "number";
            inputC.type = "hidden";
            operation = 2;
        }

        if(radio.id == 'circle'){
            inputA.placeholder = 'Введите величину R';
            inputA.type = "number";
            inputB.type = "hidden";
            inputC.type = "hidden";
            operation = 3;
        }

        if(radio.id == 'triangle'){
            inputA.type = "number";
            inputB.type = "number";
            inputC.type = "number";
            operation = 4;
        }

        button.type = "button";
    });
}

function sSquare(a){ let res = Math.pow(a,2); return res.toFixed(3);}
function pSquare(a){ let res = 4 * a; return res.toFixed(3);}

function sRectangle(a,b){ let res = a * b; return res.toFixed(3);}
function pRectangle(a,b){ let res = (a + b) * 2; return res.toFixed(3);}

function sCircle(r){let res = PI * Math.pow(r,2); return res.toFixed(3);}
function pCircle(r){let res = 2 * PI * r; return res.toFixed(3)}

function sTriangle(a,b,c){
    let p = (a+b+c)/2;
    let s = Math.sqrt(p*(p-a)*(p-b)*(p-c))
    return s.toFixed(3);
}

button.addEventListener('click', function(){
    if(operation == 1){
        result.innerHTML = `Квадрат<br/>Площадь = ${sSquare(inputA.value)}<br/>Периметр = ${pSquare(inputA.value)}`;
    }
    if(operation == 2){
        result.innerHTML = `Прямоугольник<br/>Площадь = ${sRectangle(inputA.value,inputB.value)}<br/>Периметр = ${pRectangle(inputA.value,inputB.value)}`;
    }
    if(operation == 3){
        result.innerHTML = `Круг<br/>Площадь = ${sCircle(inputA.value)}<br/>Периметр = ${sCircle(inputA.value)}`;
    }
    if(operation == 4){
        result.innerHTML = `Треугольник<br/>Площадь = ${sTriangle(inputA.value,inputB.value,inputC.value)}`;
    }
})