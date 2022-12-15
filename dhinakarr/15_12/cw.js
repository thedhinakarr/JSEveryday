//500
// Terneray operators. Used in react.

function getResult(bool1,bool2){
    return bool1 || bool2 ? `One or more` : `neither`;
}

//console.log(getResult(false,false));

//Learn Date class.

//Learn to calculate square roots by hand.

// Math.sqrt(789).tofixed(4); Decimal precision set to 4.


//Reverses Array.
function reverse(sentence){
    return sentence.split('').reverse().join('$');
}
var sentence = 'Hello CFI Folks!';
var result = reverse(sentence);
// console.log(result);

var pac =[];

pac.push(1);
pac.push(1);
pac.push(1);
pac.push(1);
pac.push(1);

var resultt = pac[0];

//console.log(resultt);


/*
1
1 2
1 2 3
1 2 3 4 
1 2 3 4 5
..... until N
*/

let n =46;
let str ="";

for (let i = 0; i <=n;i++){

    for(let j= 0; j<i;j++){
        str+= j+1 +" ";      
    }

    str+='\n'
}
console.log(str);