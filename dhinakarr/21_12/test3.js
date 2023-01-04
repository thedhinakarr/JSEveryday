/*Matrix sum */


var mat = [ [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5],
            [1,2,3,4,5]
]

var sum =0;

for(let i=0;i<mat.length;i++){
    for(j=0;j<mat.length;j++){
        sum+=mat[i][j]
    }
}
console.log(sum);