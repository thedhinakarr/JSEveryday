//Array size without methods.

let arr =[1,2,3,4,5,6];
var count =0;
var i=0;

while (arr[i]!= undefined) {
    count++;
    i++;
}
console.log(count);

let arr2 = new Array(10);

for(var i=0; i<10;i++){
    arr2[i]=0;
}
console.log(arr2);

//Accessing last element
console.log(arr[arr.length-1]);
console.log(arr.at(-1));

//shift
arr.shift();
//unshift
arr.unshift();

//pop
arr.pop();
//push
arr.push(10);

console.log(arr);


//OBJECTS

var x ={
    a:1,
    b:2,
    c:["HI","BYE","GOODBYE"],
}
console.log(x.c[2]);