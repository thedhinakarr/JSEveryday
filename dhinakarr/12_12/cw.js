/*RECURSION
A function calling itself is called recursion.

--> Initial point 
--> Base statement // Termination.
--> Call Back expression

Use google sheets to visual
*/

var i=1;
function f1(){

    if(i==100000){
        console.log("HI");
        return
    }

    else{
        console.log(i);
        i++;
        return f1();
    }
}

//Factorial of a number.

/* 

Factorial of a number 'n' is defined as the product
of that number with every whole number less than or
equal to that number 'n' until 1.


Do not take negatives as factorial of negatives approaches infinity.

*/

function factorial(n){
    if(n==1||n==0){ //The zero here is for the user. The program never reaches zero. 
        return 1;
    }
    return n *factorial(n-1);
}
for (let i =0 ; i < 7; i++) {
 //  console.log(factorial(i));
}

/* Three types of functions:
  
1. Pre defined functions -> Math.random()
2. User defined functions
3. Recursive functions

*/

function mul(i){
    if (i==6) {
        return
    }
    else{
        console.log(i);
        return mul(++i);
    }
}

//mul(1);


//Recursive binary converter

function f(n){
    if(n==0) return;
    console.log(n%2);
    f(Math.floor(n/2));
}


//Recursive ternary

function tf(n){
    if(n==0) return;
    console.log(n%3);
    f(Math.floor(n/3));
}

function of(n){
    if(n==0) return;
    console.log(n%8);
    f(Math.floor(n/8))
}

//Create a number converting CLI -->  Wednesday submission.


//RECURSIVE MULTIPLIER of two numbers.

function multiplier(x,y){
    if(y==0) return 0;
    return x + multiplier(x,y-2);
}


//ROBOT --> Confusing shit. Refer notes. Fuckin easy when broken down to the core.

/* There is a difference between assigning ++n and n+1

        The first one will will increment the modify the variable n itself.
        The second one just add 1 to n but not modify the original variable itself....
        ------> The incremented value is not re-assigned to the variable. <---------

        n+=1 is similar to n++ or ++n.
*/

function robot(n,a,b){
    if(n<=0){
        return;
    }
    robot(n-1,b,b+n);
    console.log(n,a,b);
    robot(n-1,b,a+n);
}


//Fibonnaci
var x= new Array;

function Fibonnaci(n){
    if((n<2) && n>=0){
        return 1;
    }

    x.push(n)
    return Fibonnaci(n-1) +Fibonnaci(n-2);

}

console.log(Fibonnaci());
console.log(x);