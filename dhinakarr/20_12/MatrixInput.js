//Write a function that takes inputs from a Matrix
//Wednesday assignment.

/*

Ask number of rows
Ask number of columns

Ask each input by its address

Enter number of rows.
Enter number of columns.

Enter element [i][j]: 

Use different colour for diagnols.

*/

//Multiplication
//Determinants

import readlineSync from 'readline-sync';
import printMatrix from './matrixPrinter.js';
import multiplyMatrix from './MatrixMultiplier.js';
import matrixAddition from './matrixAddition.js';
import matrixTranspose from './MatrixTranspose.js';

console.log("------------MATRIX CLI--------------");
var rows = readlineSync.questionInt("Enter number of rows: ");
var columns = readlineSync.questionInt("Enter number of columns: ")

if(rows===columns){
var matrixA = new Array(rows);
var matrixB = new Array(rows);

for(let i = 0;i<rows;i++){
    matrixA[i] = new Array(columns);
    for(let j = 0;j<columns;j++){
        var ele = readlineSync.questionInt(`Enter element at [${i}][${j}]: `);
        matrixA[i][j]= ele;
       
    }
    
}

for(let i = 0;i<rows;i++){
    matrixB[i] = new Array(columns);
    for(let j = 0;j<columns;j++){
        var ele = readlineSync.questionInt(`Enter element at [${i}][${j}]: `);
        matrixB[i][j]= ele;
       
    }
    
}
console.log("********************")

console.log("Product:")
const xp = multiplyMatrix(matrixA,matrixB)
printMatrix(xp);
console.log("------------------------")
console.log("Transpose:")
printMatrix(matrixTranspose(xp))
console.log("*********************")
console.log("SUM:")
const xs = matrixAddition(matrixA,matrixB)
printMatrix(xs);
console.log("------------------------")
console.log("Transpose:")
printMatrix(matrixTranspose(xs))

}

else console.log("Enter dimensions for a square matrix you IDIOT!")