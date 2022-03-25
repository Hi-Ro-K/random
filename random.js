'use strict';
const Number = document.getElementById('number-area');
const header = document.createElement('h2');
var random = Math.ceil( Math.random()*100 );
header.innerText = random;
Number.appendChild(header)