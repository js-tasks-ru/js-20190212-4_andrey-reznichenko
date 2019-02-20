/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */
"use strict";
function pow (m, n) {
    let result = m ** n;

    return result;
}
let m = +prompt("Number 1","");
let n = +prompt("Number 2","");

if ( n <= 0 ){
    alert('Ошибка степени');
} else{
    alert( pow (m, n) );
}