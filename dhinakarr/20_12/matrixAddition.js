//Adition.

function matrixAddition(arrA,arrB){

var arrC = new Array(arrA.length);

for(let i=0;i<arrA.length;i++){
    arrC[i]= new Array(arrA[0].length)
}

//console.log(arrA[0][0])

//Addition.

for(let i=0;i<arrA.length;i++){
    for(let j=0;j<arrA[0].length;j++){
        arrC[i][j] = arrA[i][j] + arrB[i][j];
      
    }
}
return arrC;
}

export default matrixAddition;