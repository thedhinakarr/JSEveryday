/* ASYNC... Console.time and console.timeEnd() is for synchronous. */

/* Need to add the time in all the nested timeouts. */
/* Nested timeouts do not run in parallel. They run one after the other. */
/* Give only callback references to setTimeOut. */
/* SetInterval calls the function after every time interval  */
/* As soon as the async is pushed into the queue, the timer is invoked. */
/* Running parallely.Need to dwell on this. */
/* Axios is a package or a client to communicate with API */


const random = (data)=>{
    console.log(data);

}

let internalfunction = setInterval(random,1000,"data")

setTimeout(() => {
    clearInterval(internalfunction)
}, 6000);



setTimeout(()=>{
    console.log("I am last")
    setTimeout(()=>{
        console.log("I am winner")
    },2000);
},2000);

setTimeout(()=>{
    console.log("I am first")
},2000);

//

setTimeout(()=>{

    console.log("HI");
    var sum =0;
    for(var i=0;i<=4;i++){
    sum+=i;
    }
    //HOISTING
console.log(sum);
},4000);


//HOISTING
//console.log(sum);

