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