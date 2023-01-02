

var fs = require('file-system');

function writeFile(fileName,fileData){

    return new Promise((resolve,reject)=>{

        fs.writeFile(fileName,fileData,(err)=>{
            if(err){
                reject(err)
            }
            else resolve();
        })
    })
}

//fs.readFile( filename, encoding, callback_function )

function readFile(fileName){
    return new Promise((resolve,reject)=>{

     fs.readFile(fileName,'utf8',(err,data)=>{

            if(err){
                reject(err)
            }

            else resolve(data)
        })

    })
}

readFile("hello.txt").then((data)=>{

    console.log(data);
}).catch((err)=>{
    console.log("Fucked")
})

