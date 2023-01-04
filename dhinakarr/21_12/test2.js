/* Composite index in a string. */


var x ='Hellooabcde';
var nx='';

for(let i=2;i<x.length;i++){
    if(isprime(i)==false){
        nx+=x[i]
    }
}

console.log(nx);


function isprime(n){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }  
    }
    return true;
}