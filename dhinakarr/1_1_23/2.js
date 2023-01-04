//Promise All.

import axios from "axios"

function hitAPI(id) {
    return axios.get(`http://jsonplaceholder.typicode.com/users/${id}`);
}

let promisesArray =[]

for(let i=1;i<=10;i++){
    promisesArray.push(hitAPI(i))
}

//Now resolve all these promises.

Promise.all(promisesArray)
.then((responses)=>{
    responses.forEach((response)=>{
        console.log(response.data.name,response.data.id)
    })
})
.catch((err)=>{
    console.error(err)
})