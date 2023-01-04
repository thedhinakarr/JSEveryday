
function timer(time){
    return new Promise((resolve,reject)=>{
        if(time<0||!time){
            reject("milliseconds are rrequired.")
        }
        setTimeout(()=>{
            resolve();
        },time);
    })
}