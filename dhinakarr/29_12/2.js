import axios from "axios";

function hitAPI(){
   return  axios.get(`https://api.github.com/users`,{
        auth:{
            username:"thedhinakarr",
            password:"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"
        }
    })
}

let promiseArray = [];
for(let i=1;i<=10;i++){
    promiseArray.push(hitAPI(i));
}

console.log(promiseArray);

//Promise.all is an async process

Promise.all(promiseArray)
    .then((responses)=>{
      responses.forEach((ele)=>{
        console.log(ele.data.name,ele.data.id)
      })
    })
    .catch((err)=>{
        console.error(err);
    })

// hitAPI().then((res)=>{
//     res.data.forEach((ele)=>{
//         axios.get(`https://api.github.com/users/${ele.login}`,{
//         auth:{
//             username:"thedhinakarr",
//             password:"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"
//         }
//     }).then((result)=>{
//         // console.log(typeof result)
//         console.log(result.data.name,result.data.followers)
//     }).catch((error)=>{
//         console.error(error)
//     })

//     })

// }).catch((err)=>{
//     console.error(err)
// })

//Async await.

// async function getData(){
//     let result = await hitAPI();
//     console.log(result)
// }

// getData()