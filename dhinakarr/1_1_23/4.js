//Async await.

import axios from "axios"

async function getUsers(){
    try{
       
        let res = await axios.get("https://api.github.com/users",{
            auth:{
                username:`thedhinakarr`,
                password:`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`
            }
        })

        console.log(res.login)

    }
    catch (error){
        console.log("error");
        console.error(error.response);
    }
}

getUsers();