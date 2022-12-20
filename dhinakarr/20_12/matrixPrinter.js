function printMatrix(matrix){

    for(let i=0;i<matrix.length;i++){
        let s=''
        for(let j=0;j<matrix.length;j++){
            s+=matrix[i][j];s+=' '
        }
        console.log(s);
    }

}

export default printMatrix;