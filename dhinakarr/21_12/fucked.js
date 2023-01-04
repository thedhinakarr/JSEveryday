//Print even indexes of array.
//Print prime indexes.


var array =[1,2,3,4,5,6,7,8]

for(let i=0;i<array.length;i++){
    if(isprime(i)&&i>1){
       // console.log(array[i]);
    }
}

function isprime(n){
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }  
    }
    return true;
}

function factorial(n){
    if(n==0||n==1){
        return 1;
    }
    else return n* factorial(n-1);
}

console.time();
console.log(factorial(9));
console.timeEnd();