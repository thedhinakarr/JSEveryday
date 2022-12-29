import axios from "axios";
import readlineSync from "readline-sync";
import chalk from "chalk";
//var index= readlineSync.question("Enter the index: ")


for(let i =1;i<=10;i++){
    axios.get(`https://jsonplaceholder.typicode.com/users/${i}`
    ).then((res)=>{
        {
         console.log(chalk.yellowBright("-----------------------------"))
         console.log(`${chalk.cyanBright(`NAME:`)} ${res.data.name}`)
         console.log(`${chalk.cyanBright(`ID: `)} ${res.data.id}`)
         console.log(chalk.yellowBright("-----------------------------"))
         }
     }).catch((err)=>{
         console.log("Index exceeded")
     })
}

// function getUsers(){
//     axios.get(`https://jsonplaceholder.typicode.com/users/`
//     ).then((res)=>{
       
//         {

//         console.log(chalk.yellowBright("-----------------------------"))
//         console.log(`${chalk.cyanBright(`NAME:`)} ${ele.data.name}`)
//         console.log(`${chalk.cyanBright(`ID: `)} ${ele.data.id}`)
//         console.log(chalk.yellowBright("-----------------------------"))
//      }
        
//     }).catch(()=>{
//         console.log("Index exceeded")
//     })
// }

// getUsers()


//GET PERFECT WITH PROMISES, And FILESYSTEM.
