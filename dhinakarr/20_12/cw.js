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


var readlineSync = require(`readline-sync`);

console.log("------------MATRIX CLI--------------");
var rows = readlineSync.questionInt("Enter number of rows: ");
var columns = readlineSync.questionInt("Enter number of columns: ")
var matrix = new Array(rows);

for(let i = 0;i<rows;i++){
    matrix[i] = new Array(columns);
    for(let j = 0;j<columns;j++){
        var ele = readlineSync.questionInt(`Enter element at [${i}][${j}]: `);
        matrix[i][j]= ele;
    }
}

console.log(matrix);

//printMatrix(matrix);