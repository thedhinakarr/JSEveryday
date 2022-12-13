//Functions are first class values.


var passengers=[{name:"A",paid:true},
                {name:"B" ,paid:true},
                {name:"C",paid:true},
                {name:"D",paid:true}];

 //Passengers, an array of passenger objects

 function processPassengers(passengers,testfunction){
        for (let i = 0; i < passengers.length; i++) {
             if (testfunction(passengers[i])) {
                return false;//If the result of testfunction is true... we return false.
             }   
        }
        return true;
    }

function checkNoFlyList(passenger){
    if (passenger.name === "Dr.Evel") {
        return true;
    }

    else return false;
}

function checkNotpaid(passenger){
 //  return(!passenger.paid); //returns true when passenger.paid =false;
  if(passenger.paid != true){
    return true;
   }
   else return false;
}

var allcanfly= processPassengers(passengers,checkNoFlyList);

if(!allcanfly){
    console.log("N0t everyone on this bitch can fly.")
}

var allpaid= processPassengers(passengers,checkNotpaid);


if (!allpaid) {
    console.log("Not everyone on this bitch has paid.")
}

/*write a function that prints a passenger’s name and whether or not they have paid to console.log. */


function printPassenger(passenger){
       console.log(`${passenger.name}--> Has paid: ${passenger.paid}`);
       return false;
}

processPassengers(passengers,printPassenger)

console.log(printPassenger)

console.log(isNaN(processPassengers))