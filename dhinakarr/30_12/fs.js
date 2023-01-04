//Create a custom promise for reading a file.
import fs from "fs";

function fileReader(file){
    
    return new Promise((resolve,reject)=>{

        fs.readFileSync(file,(err,data)=>{

            if(err) {
                reject(err)
            }  
            resolve(console.log(data.toString()))
        })
       
})

}


fileReader("hello.txt").then((res)=>{
    console.log(res)
}).catch(()=>{
    console.log("Fucked")
})
