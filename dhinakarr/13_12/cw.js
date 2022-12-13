//REcursion pattern
var x= "*";
function recursivePattern(num){
  
    if(num ==1 || num ==0){
      // console.log(`*`);
       return;
    }

    else {
       
        console.log( x+=`*`);
        recursivePattern(num-1);
    }
   
    
}


recursivePattern(5);



//IIFE 
/*
Immediately Invoked Function Expression
*/

//Fat arrow function

var abc = () =>{
    console.log("This is a function.");
}

abc();
 /* In between the brackets, we give the function. There is another set of brackets after this to invoke the function. */
(() =>{
   // console.log("This is a function.");
})();


//Write a function sum using fat arrow function to accept 2 numbers and return the sum.


console.log(((num1,num2)=>{
    return num1+num2;
})(5,6)
);

//write an arrow function to print contents of an array.


var arr = ["A","B","C","D"];


((elements) => { 
    console.log(elements)
})//(arr);


var arrayPrinter= (elements) =>{
    for(let item in elements){
        console.log(elements[item]);
    }
}


a//rrayPrinter(arr);




var arr =[1,2,3,4,5,6,7,8,9];

arr.forEach((ele) => {
console.log(ele);
})

var strings =["Hello","This", "is", "a", "test"];

strings.forEach((ele) => {console.log(ele)});


