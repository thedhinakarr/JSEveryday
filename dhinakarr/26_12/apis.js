import axios from 'axios';

function pingAPI(){
    axios.get("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>{
        console.log(res.data)
    })
    .catch(()=>{console.log("FUCKED.")})
}

pingAPI()