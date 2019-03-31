const q = require('./index.js');

let placeQuote1 = document.querySelector('#quote1');
let placeQuote2 = document.querySelector('#quote2');
let placeQuote3 = document.querySelector('#quote3');

placeQuote1.textContent = q.quote1;
placeQuote2.textContent = q.quote2;
placeQuote3.textContent = q.quote3;

