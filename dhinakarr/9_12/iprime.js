
var readlineSync=require('readline-sync');

var n =readlineSync.questionInt("Enter the number to check for prime or not: ")
isprime(n);
function isprime(n){
    var isitprime=false;
    for(var i=2; i<n; i++){
        if((n%i == 0)){
            console.log(`${n} is not a prime number.`);
            break;
        }
        else isitprime=true;
    }
    if (isitprime) {
        console.log(`${n} is a prime number.`);
    }
 
}