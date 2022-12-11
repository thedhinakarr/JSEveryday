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


let fruits = ["Apples", "Pear", "Orange"];


let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits);

var styles =["Jazz","Blues"]
styles.push("Rock-n-roll")
styles[Math.floor((styles.length-1)/2)]= "Classics";
console.log(styles);
styles.shift();
console.log(styles);
styles.unshift("Rap","Raggae");
console.log(styles);

//Splice
console.log(arr);
arr.splice(1,1)

arr.splice(0,3,"hi","insane shit")
console.log(arr);


let user={
    name: "HI",
    age: 23,

}

user["Likes bitches"]=true;

let key = "Likes bitches";

console.log(user[key]);
//Prime number










