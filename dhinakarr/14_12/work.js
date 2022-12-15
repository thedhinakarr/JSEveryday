

var justAVar = "Global";

function whereAreYou(){
    var justAVar = "Just an everyday local";

    function inner(){
        return justAVar;
    }

    return inner;
}

var innerfunction = whereAreYou();

var result = innerfunction();
// console.log(result);
// console.log(justAVar);


//CLOSURE
function makeCounter(){
    var count =0;

    function counter(){
        count = count +1;
        return count;
    }
    return counter;
}

var doCount = makeCounter();

console.log(doCount());
console.log(doCount());
console.log(doCount());
console.log(doCount());



//500
// Terneray operators. Used in react.

function getResult(bool1,bool2){
    return bool1 || bool2 ? `One or more` : `neither`;
}

console.log(getResult(false,false));

//Learn Date class.

