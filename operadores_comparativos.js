
console.log("comparacion ==");
let counterOne = 100; 
let counterTwo = 200;
let responseOne = counterOne == counterTwo;
console.log(responseOne);
console.log("20" == 20); //true -- no estricta 
console.log("20" === 20); //false -- estricta 

console.log("comparacion no igual !=");
let responseTwo = counterOne != "100";
console.log(responseTwo);
let responseThree = counterOne !== "100";
console.log(responseThree);

console.log("mayor que >")
console.log(counterOne > 200); // counter = 100 ..... Falsa / False 
console.log("mayor igual que >")
console.log(counterOne >= 100); // counter = 100 .... verdad / True
console.log("menor que >")
console.log(counterOne < 99); // counter = 100 .... falsa / False 
console.log("menor igual que >")
console.log (counterOne <= 100) // counter = 100 .... Verdad / True 

