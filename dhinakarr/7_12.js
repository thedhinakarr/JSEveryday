//Computed properties
var readlineSync=require('readline-sync');
//var name = readlineSync.question("Enter name: ");

var object={
    a:{
        name:"A",
        age:1,
    },
    b:{
        name:"B",
        age:2,
    },
    c:{
        name:"C",
        age:3,
    },
}

//print just the 1st key of a in object.
var obj_keys=[]
for(outkey in object){
    obj_keys.push(outkey)
}
console.log(obj_keys);
for (let i=0;i<obj_keys.length;i++){
    console.log(object[obj_keys[i]].name);
}

// //console.log(object[name]);

// //Add key value pairs to an object.
// var obj ={};
// obj.a={};
// obj.b={};
// obj.c={};

//Returning keys and values of object.
for(var x in object){
    //console.log(key);
   console.log(object[x]);
}

//Efficient way:
// var keys = Object.keys(obj); //returns the keys of the object as array
// var values= Object.values(obj); //returns the values of the object as an array

//console.log(keys);



//Find median
//Array needs to be sorted.
let arr =[1,2,3,4,5];

console.log(Math.floor((arr.length-1)/2));

//Strings
var str="abc";
var str2="DEF";
console.log(str+str2);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
//str.split(".")
//str.join("") --> Joins an array and convert it into a string with whatever character you gave in between.





//Assignment... Build CLI for IPv4.

//There are methods which only work on arrays and not strings.

//Take input from user as a String and check if it's a valid input or not.

//And also determine if it is private or public.
//Bonus--> Object comparision.
//Bonus-->Build the CLI for IPv6.

//Assignment....Generating an array of predefined length






let ip = "192.168.0.130";
let segregatedip = ip.split(".");
//console.log(segregatedip.length); //Returns an array of items seperated by a specific character.



//Slice and Splice
/* SPLICE:
 Modifies arr starting from index 'start', removes 
'deleteCount' elements and then inserts ele1...eleN.
And returns the array of removed elements.
SO it modifies the present and returns the array to store it in another variable.
 */
let arr4 = [1,2,3,4,5];
arr4.splice(3,2);
//console.log(arr4);

/* SLICE:
-->It returns a new array copying it to all items from start to end(not including the end).
-->Both start and end can be negative, but in that case position from array end can be assumed.
-->Creates a copy, doesn't modify the existing array.
*/ 

let arr5 = ["A","B","C","D","E"];
let arr6= arr5.slice(1,3);
//console.log(arr5);
//console.log(arr6);

//CONCAT
/*
The method .concat creates a new array that includes values from other objects and additional items.
The method doesn't modify the array. It only creates an array which needs to be stored.To be used again.
*/
console.log(arr5);
let ax= arr6.concat(arr5);
console.log(ax);




//Imperative Style of programming-->OLD AS FUCK-->traditioinal approach-->Building everything from scratch
for(var i=0;i<=arr.length-1;i++){
    console.log(arr[i]);
}

//Declarative style of programming-->Modern-->Quick-->Fast-->Concise
//FOREACH

// arr.array.forEach(element => {
//     console.log(element);
// });


//FUNCTIONS--> A block of code which is reusable.

function isEven(element){

    if(element%2){
        console.log(`${element} is an odd number`);
    }
    else{
        console.log(`It is an even number.`);
    }
}


//Another form of writing a function:
//ARROW FUNCTION

var isitEven =(element) => { 
        if(element%2==0){
        console.log(`${element} is an evn number`);
    }

    else{
     console.log(`It is odd number.`);
    }
}


isitEven(33);
