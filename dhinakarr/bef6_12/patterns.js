

//very bad approach.
for (let i = 0; i < 6; i++) {
    switch(i){
        case 1:
            console.log("*");
            break;
        case 2:
          console.log("* *");
           break; 
        case 3:
            console.log("* * *");
            break;    
        case 4:
            console.log("* * * *");
            break;      
        case 5:
            console.log("* * * * *");
            break;    
    }
    
}


var str ="*";
for (let i = 0; i < 5; i++) {
   console.log(str);
   str = str + "*";
    
}


for (let i = 0; i < 5; i++) {

   var str = (i+1)+" "+(i+2);
   
    console.log(str);

 }
 
