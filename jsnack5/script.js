"use strict";

const numArray = [];

for (let i = 0; i < 6; i++) {
   const num = Number(prompt("Inserisci un numero"));
   if (num % 2 == 1) {
      numArray.push(num);
   }
}

alert(numArray);