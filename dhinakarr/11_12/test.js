/*
Writing a function that takes a car object 
as a parameter and puts that car through a test returning a boolean value.
*/

function prequal(car) {
    if(car.mileage>10000){
        return false;
    }else if(car.year>1960){
        return false;
    }
    return true;
}

var taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow", 
    passengers: 4,
    convertible: false,
    mileage: 281341,
    started:false,
    start: function() {
        this.started=true;
    },
    stop: function(){
        this.started=false;
    },
    drive:function(){
        if(this.started){
            console.log("Started");
        }
        else{
            console.log("You need to start the engine baby.")
        }
    }
};


// 

/*
You’ve been given a super secret file and two functions 
that allow access to get and set the contents of the file, 
but only if you have the right password.
The first function, getSecret, returns the contents of the file if the password is correct,
and logs each attempt to access the file. The second function, setSecret, 
updates the contents of the file, and resets the access tracking to 0.
*/


function getSecret(file, secretPassword){
    file.opened+=1;
    if (secretPassword==file.password) {
        return file.contents;
    }
    else{
        return "Invalid password!";
    }

}

function setSecret(file, secretPassword, secret){
    if(secretPassword==file.password){
        file.opened=0;
        file.contents=secret;
    }

}

var superSecretFile={
    level: "classified",
    opened: 0,
    password: 2,
    contents: "Dr. Evel's next meeting is in Detroit."
};


// var secret = getSecret(superSecretFile,3);
// console.log(secret);

// setSecret(superSecretFile,3,"Next in India");
// secret = getSecret(superSecretFile,2);
// console.log(secret);



/*
Phone Number Checker
*/

var phone_number ="123-4567";

if(phone_number.length !=8 || phone_number.length != 7){
    console.log("Invalid.");
}

var a = phone_number.substring(0,3);
var b = phone_number.substring(phone_number.length-4);

console.log(a);
console.log(b);

if (isNaN(a)||isNaN(b)) {
   console.log("Invalid")
}

if (phone_number.length==8 && phone_number.charAt(3)=="-") {
console.log("Valid")
}

console.log("Valid")

function validate(phoneNumber) {
    return phoneNumber.match(/^\d{3}-?\d{4}$/); 
}

console.log(validate(phone_number));