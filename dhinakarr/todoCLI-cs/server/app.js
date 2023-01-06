import express from "express";
import fs from "fs/promises"
import { body, validationResult } from ('express-validator')

import { userRegistrationValidations, userLoginValidations, errorMiddleware } from "./validations/index.js"

const app = express()
const port = 6001;

//JSON Body Parser
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Todo server route.")

})

/*

User Signup -Public Post 
User Login - Public Post

Private Tasks

---> ALL THESE TASKS SHOULD HAPPEN AFTER LOGIN <---
User Deletion 
Create Task
Edit task
Delete Task
Read Task
Read Tasks

*/

app.post("/api/register"/* This is the routing path.. Whenever someone uses this path, this method is invoked. */,
    body('password').isLength({ min: 5 }),
    async (req, res) => {
        try {

            console.log(req.body) // Reading the fucking request object.

            //OBJECT CONSTRUCTION. Constructing an object for ourselves.
            let { username, phone, email, location, password, password2 } = req.body
            /*
            This makes this object.
            {
                username: req.body.username,
                phone: req.body.phone,
                email: req.body.email,
                location: req.body.location,
                password: req.body.password,
                password2: req.body.password2
            }
            */

            let fileData = await fs.readFile("data.json")
            /* 
             Reads the data from our data.json file, stores it in filedata.
             Note it's an array of objects.
            */

            fileData = JSON.parse(fileData)

            /* 
             Parses the JSON string object-->fileData to a proper JSON
             object that can be used in our code.
            */

            //Checking duplicate users
            let emailFound = fileData.find((ele) => ele.email == req.body.email)

            /* 
                THE EMAIL TO BE CHECKED WITH IS PRESENT IN THE REQUEST BODY.

                Makes a new variable emailFound, On the RHS, we use a 
                .find array helper method that checks whether the 
                email in the request object (req.body.email)
                is equal to any object's(i.e users's) email present in the database(data.json) 
            
                RETURNS A BOOLEAN. TRUE IF FOUND. ELSE FALSE.
            */


            if (emailFound) {
                return res.status(409).json({ error: "User Already exists, Log in." })
            }

            /*

             IF EMAIL ALREADY EXISTS, DO NOT CREATE ANOTHER USER.
             DROP AN ERROR AND ASK HIM TO LOGIN.

             response status is set to 409, a json object is sent in the response.

             {
                error: "USER ALREADY EXISTS, LOG IN."
             }

             This is sent to the client.

            */

            let userData = { username, email, phone, location, password, password2 };
            /*
            
            NOW another variable called userData is created, this is essentially a variable which holds an object.
            
            THE FUCKING OBJECT WE CREATED IN THE BEGINNING. 
            THE REQUEST OBJECT WHICH WE CLONED INTO ANOTHER OBJECT TO BE USED IN OUR CODE.

            */

            fileData.push(userData);
            /*

             REMEMBER, the fileData is an array of objects, 
             this array which we got into our code, when we used the async function readfile before.
             NOW WE SIMPLY PUSH THE NEW USER'S data into the this array of objects, resulting in a new array of objects consisting of
             the new user.

             SO EVERYTIME:
                1.WE READ THE DATA FILE
                2.GET ALL THE DATA PRESENT INTO OUR CODE
                3.ADD NEW USER IF NEEDED.
                4.OVERWRITE THIS UPDATED ARRAY OF OBJECTS INTO THE DATA FILE AGAIN.
                
                THERE HAS TO BE A BETTER FUCKING WAY, 
                IMAGINE PULLING DATA EVERYTIME FOR A DATABASE OF MILLIONS OF USERS.

            */
            await fs.writeFile("data.json", JSON.stringify(fileData));
            /*
            
            OVERWRITING THE FILE BACK TO the original data.json file.

            Since the data we have is in JSON FORM, first we will have to convert this to a JSON String and then put it back to our data file.

            JSON.stringify does the job for us.

            THIS IS AN ASYNC FUNCTION, returns a promise. THE Anonymous function has been started with a async keyword.
            THEREFORE we use a await keyword before the function here.

            */

            res.status(200).json({ success: "User Registered Successfully" });

            /*
            AFTER Everything is done, it means a successful registration has finished and a new user has been added to our database.
            NOW, in the response object the status code is set to 200 and an object containing a success message object is sent.

            {
                success: "User Registered Successfully."
            }

            */

        } catch (err) {
            //AN ERROR CAUGHT IN THE PROMISES, WILL BE RESOLVED IN THIS CATCH BLOCK.

            console.log(err);
            //LOGS THE ERROR ON THE TERMINAL
            res.status(500).json({ "error": "Internal Error" })
            /*

             response object's status is set to 500 and and error message is sent in the response object.

             {
                error:"INTERNAL ERROR."
             }

            */
        }
    })

app.post("/api/login", async (req, res) => {
    try {

        let fileData = await fs.readFile("data.json")
        fileData = JSON.parse(fileData)

        let emailfound = fileData.find((ele) => {
            if (ele.email == req.body.email) {
                return ele
            }
        })

        if (!emailfound) {
            return res.status(404).json({ "error": "User not found" })
        }

        if (emailfound.password != req.body.password) {
            return res.status(404).json({ "error": "Wrong password" })
        }

        else res.status(200).json({ "success": "LOGGED IN SUCCESSFULLY." })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ "error": "Internal Error" })
    }
})


app.listen(port, () => {
    console.log(`Server Started at port : ${port}`)
})
