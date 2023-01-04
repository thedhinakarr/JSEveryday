//File Methods
import fs from "fs"
//readfile is an asynchronous operation.

fs.readFile("hello.txt",(err,data)=>{

    if(err) {
        throw err
    }
    
    console.log(data.toString())
})


