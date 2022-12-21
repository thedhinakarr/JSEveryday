/*
Matrices.
*/

//Does the order matter in matrices?


let matrix = [[10,20,030],[020,040,080],[10,20,30]]


for(let i=0;i<matrix.length;i++){
    let s=''
    for(let j=0;j<matrix.length;j++){
        s+=matrix[i][j];s+=' '
    }
    console.log(s);
}