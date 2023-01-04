/*

Async jobs run parellely.

*/

//How to know.
/*
1.Function call backs
2.promises
3.
*/

//setTimeout() is a buit in function, ehich takes a call back function and a delay.

//Larger the distance, more the latency.

console.log("Line 1");

setTimeout(()=>{console.log("Hello world.")},5000)

console.log("Line 2");
console.log("Line 3");