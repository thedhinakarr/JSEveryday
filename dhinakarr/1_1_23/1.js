//Nested Axios.

import axios from "axios"


function hitApi(){
    return axios.get("https://api.github.com/users",{
        auth:{
            username:"thedhinakarr",
            password:"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"
        }
    })
}


axios.get(`https://api.github.com/users/thedhinakarr/following`,{
    auth:{
        username:"thedhinakarr",
        password:"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"
    }
})
.then((res)=>{
    console.log(res.data[0].login)
})
.catch((err)=>{
    console.log("error")
    console.log(err.data)
})


// hitApi()
// .then((res)=>{
    
//     let arrx= res.data;

//     arrx.forEach(element => {

//         axios.get(`https://api.github.com/users/${element.login}`,{
//             auth:{
//             username:"thedhinakarr",
//             password:"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"
//              }
//          })
         
//         .then((innerres)=>{
//             console.log(innerres.data.name)
//         })
//         .catch((err)=>{
//             console.error(err);
//         })
//     });

// })
// .catch((err)=>{console.error(err)})

