/* Weird shit. */

import axios from "axios"

function hitApi(){
    return axios.get(`https://api.github.com/users`,{
        auth:{
            username:`thedhinakarr`,
            password:`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`
        }
    })

}

hitApi()
.then((async (res)=>{

    try{

        let promisesArray = res.data.map((ele)=>{
            return axios.get(`https://api.github.com/users/${ele.login}`,{
                auth:{
                    username:`thedhinakarr`,
                    password:`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`
                }
            })
        })
            // Use await when resolving a promise.
            
        let responses = await Promise.all(promisesArray);
        responses.forEach((ele)=>{
            console.log(ele.data.login)
        })

    }

    catch(error){

        console.log("Error")


    }

}))



.catch((error)=>{
    console.log(error);
})