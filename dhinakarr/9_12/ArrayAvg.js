var readlineSync=require('readline-sync');


function arrayInitializer(){
    var size = readlineSync.questionInt("Enter size of the array: ")
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