console.log("Hello World");

let a = () => {
    console.log("a")
    setTimeout(() => {
        console.log("anony")
    }, 4000);
};
setTimeout(a, 3000);

// for(let i=0;i<50000;i++){
//     console.log(i);
// }
let b = () => {
    console.log("b")
};
setTimeout(b, 5000)

setTimeout(function c() {
    console.log("c");
}, 0)

console.log("gm");