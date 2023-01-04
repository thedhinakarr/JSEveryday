/* Remove duplicate Elements from a string. */

var string ="HELLO"

var stringarr= new Array;
var newString= new Array;

var flag = true;


for(let i=0; i<string.length;i++){
    stringarr.push(string.charCodeAt(i));
}

//If I find it again, dont add it in the new array.

for(let i=0;i<string.length;i++){
    for(j=0;j<i;j++){
        if(stringarr[i]==stringarr[j]){
            flag=false;
            break;
        }
    }
    flag=true;
    newString.push(stringarr[i]);
   
}
console.log(stringarr)
console.log(newString)



