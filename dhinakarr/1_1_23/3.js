//Using promisAll in various things.

import axios from "axios"

function hitApi(){
    return axios.get("https://api.github.com/users",{
        auth:{
            username:"thedhinakarr",
            password:"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"
        }
    })
}

hitApi()
.then((res)=>{
    let promisesArray = res.data.map((ele)=>
        {
         return axios.get(`https://api.github.com/users/${ele.login}`,{
                auth:{
                    username: "thedhinakarr",
                    password:"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"
                }
            })    
        }
    )

        Promise.all(promisesArray)
        .then((responses)=>{
             responses.forEach((response)=>{
                console.log(response.data.login)
             })
        })
        .catch((err)=>{
            console.log(err.data)
        })
})
.catch((err)=>{
    console.log("ERROR")
})