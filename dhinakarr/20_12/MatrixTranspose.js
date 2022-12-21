

function matrixTranspose(arrC){

    let arrR= new Array(arrC.length);

    for(let i =0;i<arrC[0].length;i++){
        arrR[i]= new Array(arrC[0].length);
    }

    for(let i=0;i<arrR.length;i++){
        for(let j=0;j<arrR.length;j++){
            arrR[i][j]=arrC[j][i];
        }
    }

    return arrR;
}

export default matrixTranspose;