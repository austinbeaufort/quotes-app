const Positivity = require('positivity-api');

let quote1 = Positivity.random();
let quote2 = Positivity.random();
let quote3 = Positivity.random();

let placeQuote1 = document.querySelector('#quote1');
let placeQuote2 = document.querySelector('#quote2');
let placeQuote3 = document.querySelector('#quote3');

placeQuote1.textContent = quote1;
placeQuote2.textContent = quote2;
placeQuote3.textContent = quote3;

