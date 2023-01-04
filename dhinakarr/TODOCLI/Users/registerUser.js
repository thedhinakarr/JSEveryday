//REGISTERING A NEW USER.

//version 1.0.

//Imports:
import chalk from "chalk"
import readlineSync from "readline-sync"
import fs from "fs/promises"



//The JSON object of a user contains --> Name, email, phoneNumber, Location, password 

//Our task is to take all thesse inputs and write them in the ../data.json file. 
//How to do that? Hold your horses.

async function registerUser(){
    try{
    console.clear()
    console.log(`USER REGISTRATION: `)

    //Username
    //Email Address
    //Phone Number
    //Location
    //Password

    //Getting the data.

    let userName = readlineSync.question("Enter the username: ")
    let email = readlineSync.questionEMail("Enter Email: ")
    let phoneNumber = readlineSync.questionInt("Enter phone number: ")
    let location = readlineSync.question("Enter Location: ")
    let password = readlineSync.question("Enter password: ",{
        hideEchoBack:true
    })
    let confirmPassword = readlineSync.question("Re-enter your password: ",{
        hideEchoBack:true
    })

    while(password!=confirmPassword){
        console.log("Passwords do not match. ")

        password = readlineSync.question("Re-enter the password you want to set: ",{
            hideEchoBack:true
        })

        confirmPassword = readlineSync.question("Confirm password: ",{
            hideEchoBack:true
        })

    }

    //The fun with file system begins...

    /* Get the entire data from that json file. */
    let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        /*  The JSON.parse() static method parses a JSON string,
           constructing the JavaScript value or object described by the string. 
           An optional reviver function can be provided to perform a
           transformation on the resulting object before it is returned.
        */

         /*
            The JSON.stringify() static method converts a JavaScript value to a JSON string, 
            optionally replacing values if a replacer function is specified or optionally
            including only the specified properties if a replacer array is specified.
         */  


            /*JSON cannot be an object. JSON is a string format.
             The data is only JSON when it is in a string format. 
             When it is converted to a JavaScript variable, it becomes a JavaScript object. */

    //WRITING TO THE FILE data.json

    //Constructing an object.

    let newUser = {userName,email,phoneNumber,location,password,todos: []}
    //Whenever a newUser is created, a todo is also created and added. Since this a to-do application.
    console.log(newUser)

    /* Push this newUser to the data retrieved. */
    fileData.push(newUser)

   // console.log(fileData);
  
    await fs.writeFile("data.json",JSON.stringify(fileData))
}
catch(err){
    console.log(err);
}
}

//EXPORT THIS THING.
export default registerUser;