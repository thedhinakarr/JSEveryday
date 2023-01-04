
// setTimeout(()=>{

//     console.log("HIE");

//     setTimeout(()=>{ console.log("HI") }, 2000 )

// },5000)



// let outer = () => {
//     console.log("Hello India");
//     setTimeout(inner, 2000)
// }
// let inner = () => {
//     console.log("Hello World");
// }
// setTimeout(outer, 5000)

console.time()
let arr = new Array(20000)
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        console.log(arr[i], arr[j]);
    }
}
console.timeEnd()