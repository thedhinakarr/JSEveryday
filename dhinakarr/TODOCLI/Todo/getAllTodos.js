//DISPLAYING AL TODOS

import readlineSync from "readline-sync";
import fs from "fs/promises";
import chalk from "chalk";


async function getAllTodos(email) {
    try {
        console.clear()
        console.log("VIEW ALL THE THINGS:")
        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);
        let emailFound = fileData.find((ele) => ele.email == email);
        console.table(emailFound.todos)
        console.log("TASKS FETCHED SUCCESSFULLY.")
    }
    catch (err) {

    }
}

export default getAllTodos