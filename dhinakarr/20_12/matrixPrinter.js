import chalk from 'chalk';

function printMatrix(matrix){

    for(let i=0;i<matrix.length;i++){
        let s=''
        for(let j=0;j<matrix.length;j++){
        
           if(i==j || (i+j===matrix.length-1)){
            s+=chalk.greenBright(matrix[i][j]);s+=' ';
           }
           else{
               s+=matrix[i][j];s+=' '
            }
            
        }
     
        console.log(s);
    }

}

export default printMatrix;

//Object destructuring --> Research.