//Wednesday assignment

//using temp
var a = 12;
var b= 10;
var temp = a;
a=b;
b=temp;

// console.log(a);
// console.log(b);



var a =1002;
var b=9;

// for(var i=9;i>=1;i--){
//     if(a%i==0&&b%i==0){
//         console.log(`${i} is the GCD`);
//         break;
//     }
// }



function GCD(a,b) {
    if(a==0){
       return b;
    }
    return GCD(b%a,b);
}





console.log(GCD(5,17706))
