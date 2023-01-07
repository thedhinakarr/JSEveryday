//App.js---->createTodo.js---->UserLogin.js

import chalk from "chalk"
import fs from "fs/promises"
import readlineSync  from "readline-sync"
import randomStringGenerator from "../Utils/utilities.js"

async function createToDo(email){
    try{
       console.clear()
       console.clear("Create TODO:")

       let task = readlineSync.question("ENTER THE TASK: ")

       let fileData = await fs.readFile('data.json');
       fileData= JSON.parse(fileData)
       
       let found = fileData.find(ele => ele.email=== email ) 
       //GIVES THE REFERENCE TO THE OBJ WHICH PASSES THE CONDITION. (SHALLOW COPY)

        //Notice the syntax. Find takes a condition.
        //Returns reference to an object.
        //Now make an adding object.

       let new_task ={
            todoName:task,
            isCompleted:false,
            todo_id:randomStringGenerator(12)
       }
        
       found.todos.push(new_task)

       await fs.writeFile(`data.json`,JSON.stringify(fileData))
       console.log(chalk.greenBright("TASK ADDED SUCCESSFULLY."))

    }
    catch(err){
        console.log(err)
    }
}

export default createToDo