

var arrX= [0,1,2,3,4,5,6];


for(let i=2;i<arrX.length;i++){
    if(isprime(i)){
        console.log(arrX[i])
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