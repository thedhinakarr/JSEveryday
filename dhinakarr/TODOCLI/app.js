//Main driving code.

//Imports

import readlinsSync from "readline-sync"
import fs from "fs/promises"
import chalk from "chalk"
import loading from "loading-cli"
import UserLogin from "./Users/UserLogin.js"
import registerUser from "./Users/registerUser.js"
import deleteUser from "./Users/deleteUser.js"

//Main menu.
async function launchCLI() {
    try {
        //USER INTERFACE
        console.clear()
        console.log("TO_DO CLI")
        console.log("************************************************")
        let option;
        do{    
            console.log("Option 1--> Register")
            console.log("Option 2--> Login")
            console.log("option 3--> Delete Account")
            console.log("option 0--> Exit")
            option = readlinsSync.questionInt("Enter the option: ")
            switch (option) {

            case 0:
                console.log("Exit")
                break;
            case 1:
                console.log("REGISTERING USER.")
                await registerUser();
                break;
            case 2:
                console.log("Login")
                await UserLogin();
                option=0;
                break;
            case 3:
                console.log("deleting")
                await deleteUser();
                console.log("-------------------")
                break;
            default:
                console.log("Invalid option.")
                break;

        }
    }while(option!=0)
        
    } catch (err) {
        console.log(err)
    }
}

//MAIN INVOKER.
launchCLI();