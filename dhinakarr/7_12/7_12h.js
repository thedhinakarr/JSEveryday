/*ARRAY METHODS*/

//Iterate:forEach

["1","2","3"].forEach(console.log);//For each element, call alert.


["A","B","C"].forEach((item,index,array)=>{
    console.log(`${item} at ${index} in ${array}`);
})



let arr = ["A","1",1,null];
console.log(arr.includes(null));
console.log(arr.indexOf(1));

const arr1 =[NaN];
console.log(arr1.includes(NaN));



let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
  ];
  
  let user = users.find(item => item.name == "Pete");
  
console.log(user.id); // J


function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
  
  let arr4= [ 9,8,7,6,5];
  
  arr.sort(compareNumeric);
  
  console.log(arr4);  // 1, 2, 15