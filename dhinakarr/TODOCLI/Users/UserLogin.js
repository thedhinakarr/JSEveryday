//LET US LOGIN EXISTING USERS

import readlineSync from "readline-sync"
import fs from "fs/promises"

import createToDo from "../Todo/createTodo.js"
import editToDo from "../Todo/editTodo.js"
import getAllTodos from "../Todo/getAllTodos.js"



/* need to check emails and passwords. */

async function login() {
    try {

        console.clear()
        console.log(`USER LOGIN PAGE`)
        let email = readlineSync.questionEMail("Enter email: ")
        let password = readlineSync.question("Enter password: ", {
            hideEchoBack: true
        })

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let emailfound = fileData.find((ele) => {
            if (ele.email == email) {
                return ele
            }
        })

        if (!emailfound) {
            throw "EMAIL NOT FOUND."
        }

        if (emailfound.password != password) {
            throw "WRONG PASSWORD"
        }
        else {
            console.log("LOGIN SUCCESSFUL.")

            console.log("Option 1--> CreateTODO")
            console.log("Option 2--> UpdateTODO")
            console.log("option 3--> ViewTODO")
            let optionn;
            do {
                optionn = readlineSync.questionInt("Enter the option: ")
                switch (optionn) {
                    case 0:
                        console.log("Thank you for using this CLI. See you soon.")
                        break;
                    case 1:
                        console.log("Creating TODO")
                        await  createToDo(email);
                        break;
                    case 2:
                        console.log("Updating todo")
                        await editToDo(email)
                        break;
                    case 3:
                        console.log("Viewing Todo")
                        await getAllTodos(email)
                        break;
                    default:
                        console.log("Invalid option.")
                        break;
                }
            }
            while (optionn != 0)

        }

    }
    catch (err) {
        console.log(err)
    }
}

// login()
export default login;