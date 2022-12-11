
// Create a CLI application that has 2 Options:
// Generate a Random String with only Alphabets i.e. A-Z a-z
// Generate a Random String with Alphabets and Numbers A-Z a-z 0-9
// Once the User selects the option ask him for length and Print the Random String.
console.clear();
var readLineSync = require('readline-sync');

var option;
var size;
do {
    
    console.log("\n************* RANDOM STRING GENERATOR ************");
    console.log(`--------------------------------------------------------`);
    console.log("Enter 1 to generate Random strings of ranges [A-Z] & [a-z] ");
    console.log("Enter 2 generate Random strings of alpha-numeric characters in the ranges [A-Z] , [a-z] & [0-9]");
    console.log("Enter -1 to exit ");
    console.log(`--------------------------------------------------------`);
    
    option= readLineSync.questionInt("Enter option now: ");

    switch(option){
        case 1:
            size=readLineSync.question(`Enter the size of the string you want: `);
            console.log(generateStringoption1(size));
            break;
        case 2:
            size=readLineSync.question(`Enter the size of the string you want: `);
            console.log(generateStringoption2(size));   
            break;    
    }

} while (option!=-1);


function generateStringoption1(size) {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const charactersLength = characters.length;

    let result = ' ';

    for ( let i = 0; i < size; i++ ) {
        result += characters[(Math.floor(Math.random() * charactersLength))];
    }

    return result;
}


function generateStringoption2(size) {

    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;

    let result = ' ';

    for ( let i = 0; i < size; i++ ) {
        result += characters[(Math.floor(Math.random() * charactersLength))];
    }

    return result;
}





 