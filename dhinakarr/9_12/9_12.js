var readlineSync=require('readline-sync');

arrayInitializer();
// addArray(arrayInitializer());

// var n =readlineSync.questionInt("Enter the number to check for prime or not: ")
// isprime(n);

// randomArraygen()

function arrayInitializer(){
    var size = readlineSync.questionInt("Enter size of the array: ");
    var arr= new Array(size);
    
    for (let i = 0; i < arr.length; i++) { 
      var arrinp= readlineSync.questionInt(`Enter ${i+1}th element: `);
      arr[i]= arrinp;
     }

     console.log(arr);
     return arr;
}

function addArray(array) {
    var count=0;
    for (let i = 0; i < array.length; i++) {
        count+=array[i];
    }
    console.log(`${count} is the sum of the array elements`);
    console.log(`${count/array.length} is the average of the elements.`)
}


function isprime(n){
    var isitprime=false;
    for(var i=2; i<n/2; i++){
        if((n%i == 0)){
            console.log(`${n} is not a prime number.`);
            break;
        }
        else isitprime=true;
    }
    if (isitprime) {
        console.log(`${n} is a prime number.`);
    }
 
}

function randomArraygen() {
    var size = readlineSync.questionInt("Enter size of the array: ")
    var arr= new Array(size);
    for (let i = 0; i < arr.length; i++) { 
      
      arr[i]= Math.floor(Math.random() * 1000);
     }

     console.log(arr);
     return arr;
}

