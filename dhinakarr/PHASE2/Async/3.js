

setTimeout(()=> {console.log("X")},4000);

console.time()
setTimeout( (elem)=> {console.log(elem)},4000,9009);
console.timeEnd();//Console.time doesn't work for Asynchronous shit.