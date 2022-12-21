



function multiplyMatrix(arrA,arrB){

var arrC = new Array(arrA.length);
for(let i=0;i<arrA.length;i++){
    arrC[i]= new Array(arrA[0].length)
}
//console.log(arrC);


    for(let i=0;i<arrC.length;i++){
     for(let j=0;j<arrC[0].length;j++){
        var rowsum=0;
         for(let k=0;k<3;k++){
           // console.log(arrA[i][k],`*`,arrA[k][j])
            rowsum+=arrA[i][k]*arrB[k][j];
         }
         arrC[i][j]=rowsum
    }
    //console.log("-------------");
   
}


return arrC;
console.log(arrC)



}


export default multiplyMatrix;