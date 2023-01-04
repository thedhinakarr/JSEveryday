//CUSTOM PROMISES
//Promise is an async operation
//.then is used to fullfill it
//.catch is used for error handling
//Create a Custom Promise for setTimeout.

function experiment(num){
    return new Promise((resolve,reject)=>{
        if(num>100){
            setTimeout(()=>{
                resolve("I am getting output");
            },1000)
        }else{
            setTimeout(()=>{
                reject("I am rejected")
            },0)
        }
    })
}

experiment(500).then((data)=>{
    console.log("DAta")
}).catch((err)=>{
    console.log(err)
})