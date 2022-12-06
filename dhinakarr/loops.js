//Dowhile

var practice_hours =50;

// do {
//     console.log("write code");
//     practice_hours++;
// } while (practice_hours<100)


//for loop

//odd 
//even
//multiples of 2
var even=0;
var odd=0;
var mult=0;

for (let index = 0; index <=1000; index+=2) {
//console.log(index);
even++;
}
console.log("Number of even numbers--> "+ even);
console.log("====================");
for (let index = 1; index <=1000; index+=2) {
  //  console.log(index);
    odd++;
 }

 console.log("Number of odd numbers--> "+ odd);

 console.log("====================");



for (let index = 0; index <=1000; index++) {
    
if(index%3==0){
//  console.log(index);
}
mult++;
}

console.log("Number of 3 multiples--> "+ mult);



