//EDITS the to-do list.
import fs from "fs/promises"
import readlineSync from "readline-sync";
import chalk from "chalk";

async function editToDo(email) {
    try {
        console.clear()
        console.clear("Edit ToDo:")

        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);

        let found = fileData.find(ele => ele.email === email)
        
        
        let todoIndex = readlineSync.questionInt("Enter the Task Index that you want to update : ");

        while (!found.todos[todoIndex]) {
            todoIndex = readlineSync.questionInt("Enter a Valid Index that you want to update : ");
        }
        let todoName = readlineSync.question("Enter Updated Task : ");
        let isCompleted = readlineSync.question("Is this Task Completed Enter (y/n)");

        if (isCompleted === "y" ||
            isCompleted === "Y" ||
            isCompleted === "yes") {
            isCompleted = true
        } else {
            isCompleted = false;
        }

        let todoData = {
            todoName,
            isCompleted,
            todo_id: found.todos[todoIndex].todo_id
        }

        found.todos[todoIndex] = todoData;

        await fs.writeFile("data.json", JSON.stringify(fileData));
        console.log(("Task Edited Successfully"))

    }
    catch (err) {
        console.log(err)
    }
}

export default editToDo