// var hello = {
//     get: () =>{
//         console.log("HI")
//     }
// }

// hello.get()


// function printArray(arr) {
//     try {
//         arr.forEach(element => {
//             console.log(element);
//         });
//     } catch (error) {
//         console.error("You ran into an Error");
//         // console.error(error);
//     }

// }

// printArray(["a",1]);


// function isNumber(value) {
//     // check for NaN, as NaN is of type 'number'
//     return typeof value === 'number' && !isNaN(value);
// }
// var result = isNumber('58');
// console.log(result);

import axios from "axios";

for (let i = 1; i <= 10; i++) {
    console.log(i);
    axios.get(`http://jsonplaceholder.typicode.com/users/${i}`)
        .then((res) => {
            console.log(res.data.username, res.data.id);
        })
        .catch((err) => {
            console.error(err);
            console.error("SOME ERROR");
        })
}



