

import fs from "fs";

fs.writeFile("hello2.txt","HEllo world,fromfs",(err)=>{
    if(err){ throw err}
    console.log("Write done.")
})