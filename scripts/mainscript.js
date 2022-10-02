"use strict";

let btn = document.querySelectorAll('#button');

for (let elem of btn) {
	elem.addEventListener('mouseover', function hov() {
		this.classList.toggle('hover');
	});
	elem.addEventListener('mouseout', function nhov() {
		this.classList.remove('hover');
	});
}

let btnAnswer = document.querySelector('#btn-answer');

btnAnswer.addEventListener('mouseover',function hovAns(){
	this.classList.toggle('hover-button')
});
btnAnswer.addEventListener('mouseout',function hovAns(){
	this.classList.remove('hover-button')
});
btnAnswer.addEventListener('mousedown',function hovAns(){
	this.classList.toggle('active-button')
});
btnAnswer.addEventListener('mouseup',function hovAns(){
	this.classList.remove('active-button')
});