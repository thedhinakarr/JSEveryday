/*

1. HOISTING
2. Transfer functions from one file to another.

*/

// Do not use var, only use let and const from now.

function f(n){
    if(1){
        f(Math.floor(n/2));
    }
    console.log(n%2)
}
f(1024);
console.log(`---------------------------------------------`)
function f1(n){
    if(!(n/2==0)){
        f(Math.floor(n/2));
    }
    console.log(n%2)
}

f1(1024);

//Hoisting


/*
const.

there is a difference between updating and changing..
You can't use assignment operator with const. but you push using array helper methods.

*/

const a = [1,2,3,4];

a.push(90); //This works.

const obj ={
    a: 1,
    b: 2,
    c: 3
}


obj.d = 100;
console.log(obj);