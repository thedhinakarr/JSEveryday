import axios from "axios"
import chalk from "chalk"; 

function pingAPI(){
    axios.get("http://jsonplaceholder.typicode.com/posts")
    .then((res) => {

        //Res.data is the Data you receive from the API
       // console.log(res.data);
       
        let data = res.data;
        //console.log(data)

    
        let namesArray = data.map((ele) => {
         return ele;
        })

        console.log(namesArray)

        // namesArray.forEach(element => {
        //     console.log(`{\n title: ${chalk.bgCyan(element.title)}\n}`);
        // });
    })

    //Handles Error
    .catch((err) => {
        console.error('We ran into an Error')
        console.error(err);
    });
}
pingAPI()

