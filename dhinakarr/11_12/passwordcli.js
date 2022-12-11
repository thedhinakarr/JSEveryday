
const capital='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const small='abcdefghijklmnopqrstuvwxyz';
const number='0123456789'; 
const specialcharacters='!"#$%&()*+,-./:;<=>?@[\]^_`{|}~'

var readLineSync = require('readline-sync');
var option;

const capitalength= capital.length;
const smallength = small.length;
const numberlength= number.length;
const splength= specialcharacters.length;
console.clear();

do {
    console.log(`\n_________________PASSWORD GENERATOR___________________\n`);

    var size= readLineSync.questionInt("Enter the Password's length, should be >= 8: ");
    randompwdgenerator(size);
    
    console.log("Do you want to continue? ")
    option= readLineSync.question(`y/n: `);
    console.clear();
} while (option!= 'n');

function randompwdgenerator(size){
    while (!(size>=8)) {
        size= readLineSync.questionInt("Password's size cannot be less than 8. Try again. \n Size: ");
    }
    var result=``;
    for (let i = 0; i<size; i++) {
        var flag =[capitalrandomizer(),numberrandomizer(),smallrandomizer(),sprandomizer()];
        switch(i){
            case 0:
                result+= capitalrandomizer();
                break;
            case 1:
                result+= smallrandomizer();
                break;
            case 3:
               result+= numberrandomizer();
                break;
            case 4:
                result+=sprandomizer();
                break;                            
        } 
        if(i>=4){
            result+=flag[Math.floor(Math.random()*flag.length)]
        }

       // console.log(Math.floor(Math.random()*4))
    }
   // console.log(result.length);
    console.log(`GENERATED_PASSWORD : ${result}\n`)
    console.log(`====================================================================`)
}


//Randomizing functions.
function capitalrandomizer() {
    var randomcapital=capital.charAt(Math.floor(Math.random()*(capitalength)))

    return randomcapital;
}
function numberrandomizer() {
    var randomnumber= number.charAt(Math.floor(Math.random()*numberlength))
    return randomnumber;
}
function smallrandomizer() {
    var randomsmall=small.charAt(Math.floor(Math.random()*smallength))
    return randomsmall;
}
function sprandomizer() {
    var randomsp=specialcharacters.charAt(Math.floor(Math.random()*splength))
    return randomsp;
}

