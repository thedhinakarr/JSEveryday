//regular function
function hello() {  // function declaration
    return "Hello World!";
  }

hello = function() { // function expression
    return "Hello World!";
  }



  hello = () => "Hello World";
  

// console.log(hello);
// console.log(hello());

let person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566
}

for(key in person){
    console.log(person[key]);
}  // For in for objects.

// for of  for arrays.
a = [1,2,3,4,5]
console.log("----------")
for (i=0;i<a.length;i++){
    console.log(a[i])
}
console.log("---------")
for (i in a) {
    console.log(i) //indices
    console.log(a[i]) //values
}

// for of
//for (variable of iterable) {
    // code block to be executed
//  }
console.log("----------")
a = [1,2,3,4,5]
for (i of a) {
    console.log(i) 
  }

a = ['code', 'for' , 'india']

// n = 'code'
// function cases(n) { 
//     return n.toUpperCase()
// }

a.forEach( element => 
    console.log(element.toUpperCase())
);

console.log(a);

a = ['code', 'for', 'india']
a = a.map(i => i.length)
console.log(a)



a = [1,2,3,4,5,6];
const reduced = a.reduce((total,current)=>total+current*2);
console.log(reduced);


const b = new Date();
console.log(typeof b);


// new Date(year,month)
// new Date(year,month,day)
// new Date(year,month,day,hours)
// new Date(year,month,day,hours,minutes)
// new Date(year,month,day,hours,minutes,seconds)
// new Date(year,month,day,hours,minutes,seconds,ms)



// if (8&7){
//   console.log('hey1')
// }


// if ((2 == '2')| ((2) == 2.0)){
//     console.log('hey2')
// }

// var a=3,c=5

// if (a&c | c|a) {
//     console.log('hey3')
// }

// var a=3,x=5
// if (a&b | b|a) {
//     console.log('hey3')
// }

if ('Sahana' == 'sahana'){
        console.log('hey3')
 }

 if ('Sahana' === 'sahana'){
    console.log('hey4')
}

if ('Sahana' === 'Sahana'){
    console.log('hey5')

}


if ('zero'){ console.log('I am mone')}

if ('0.0'){ console.log('I am gone')}

if (0.0){ console.log('I am one')}



if (null){ console.log('I am two')}


if ('[]'){ console.log('I am one')}