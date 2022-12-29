import axios from "axios";

function hitAPI(id,login) {
    return  axios.get(`https://api.github.com/users/${id}/${login}`,{
        auth:{
            username:"thedhinakarr",
            password:"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"
        }
    })
}

let promiseArray = [];
for (let i = 1; i <= 46; i++) {
   promiseArray.push(hitAPI(i));
}

//console.log(promiseArray);

Promise.all(promiseArray)
    .then((responses) => {
       var x = responses.map((ele) => {
            return ele.data.id;
        })
        console.log(x)
    })
    .catch((err) => {
        console.error(err.message);
    })


