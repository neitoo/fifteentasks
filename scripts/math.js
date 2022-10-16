"use strict";

let radios = document.querySelectorAll('input[type="radio"]');

let result = document.getElementById('result');

let inputA = document.getElementById('a');
let inputB = document.getElementById('b');
let inputC = document.getElementById('c');
let button = document.getElementById('btn-answer');

let operation = 0;

for(let radio of radios){
    radio.addEventListener('click', function(){
        if(radio.id == 'square-root'){
            inputA.type = "number";
            inputB.type = "number";
            inputC.type = "number";
            operation = 1;
        }

        if(radio.id == 'pythagorean-triple'){
            inputA.type = "number";
            inputB.type = "number";
            inputC.type = "number";
            operation = 2;
        }

        if(radio.id == 'divisors'){
            inputA.type = "number";
            inputB.type = "hidden";
            inputC.type = "hidden";
            operation = 3;
        }

        if(radio.id == 'common-divisors'){
            inputA.type = "number";
            inputB.type = "number";
            inputC.type = "hidden";
            operation = 4;
        }

        if(radio.id == 'min-common-divisors'){
            inputA.type = "number";
            inputB.type = "number";
            inputC.type = "hidden";
            operation = 5;
        }

        if(radio.id == 'max-common-divisors'){
            inputA.type = "number";
            inputB.type = "number";
            inputC.type = "hidden";
            operation = 6;
        }

        button.type = "button";
    });
}

function discriminant(a,b,c){
    let D = Math.pow(b,2) - (4 * a * c);
    
    let x,x1,x2;
    let result;
    if(D < 0) return "Нет корней.";

    if(D == 0) {
        x = (-b + Math.sqrt(D))/2*a;
        result = `x = ${x}`
    }

    if(D > 0){
        x1 = (-b + Math.sqrt(D))/2*a;
        x2 = (-b - Math.sqrt(D))/2*a;
        result = `x1 = ${x1}<br/>x2 = ${x2}`
    }

    
    return result;
}

function pythagoreanTriple(a,b,c){
    let sqA = Math.pow(a,2);
    let sqB = Math.pow(b,2);
    let sqC = Math.pow(c,2);

    let max = Math.max(sqA,sqB,sqC);

    if(max == sqA + sqB || max == sqA + sqC || max == sqB + sqC ){
        return "True"
    }
    else{
        return "false";
    }
    
}

function dividers(n) {
    let array = [];
    for (let i = 2, limit = n >> 1; i <= limit; ++i) {
        if (!(n % i)) array.push(i);
    }
    if (n !== 1)
        array.push(n); 
    return array;
}

function commonDividers(a,b){
    let arrA = dividers(a); 
    let arrB = dividers(b); 
    let resultArr = [];

    for(var i = 0; i < arrA.length; i++){
        for(var j = 0; j < arrB.length; j++){
            if(arrA[i] == arrB[j]) resultArr.push(arrA[i]);
        }
    }
    return resultArr;
}

let minComDividers = (arr) =>  Math.min(...arr);

let maxComDividers = (arr) => Math.max(...arr);

button.addEventListener('click', function(){
    if(operation == 1){
        result.innerHTML = `Корни квадратного уравнения<br/>${discriminant(inputA.value,inputB.value,inputC.value)}`;
    }
    if(operation == 2){
        result.innerHTML = `Тройка Пифагора<br/>${pythagoreanTriple(inputA.value,inputB.value,inputC.value)}`;
    }
    if(operation == 3){
        result.innerHTML = `Делители числа<br/>${dividers(inputA.value)}`;
    }
    if(operation == 4){
        result.innerHTML = `Общие делители чисел<br/>${commonDividers(inputA.value,inputB.value)}`;
    }
    if(operation == 5){
        result.innerHTML = `Наименьший общий делитель чисел<br/>${minComDividers(commonDividers(inputA.value,inputB.value))}`;
    }
    if(operation == 6){
        result.innerHTML = `Наименьший общий делитель чисел<br/>${maxComDividers(commonDividers(inputA.value,inputB.value))}`;
    }
});