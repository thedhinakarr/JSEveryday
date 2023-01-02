//USER DELETION.

//PROGRAM FLOW

/*
   1. find user with the email
   2. To proceed to deletion, verify the password
   3. Confirm --> Y/n.
   4. If y--> Delete using splice.
   5. Else throw error, console log error--> DELETION FAILED

*/
import readlineSync from "readline-sync"
import fs from "fs/promises"

async function deleteUser() {
    try {
        console.clear()
        console.log("GONNA DELETE USER" );
        let fileData = await fs.readFile("data.json");
        fileData = JSON.parse(fileData);

        let email = readlineSync.questionEMail("Enter your Email : ");

        let emailfound = fileData.findIndex((ele) => {ele.email ==email})       
        
        fileData.splice(emailfound,1)

        await fs.writeFile("data.json", JSON.stringify(fileData));
        console.log("DELETION SUCCESSFUL.")

        
     }
    catch (err) {
        console.log(err)
    }
}

export default deleteUser