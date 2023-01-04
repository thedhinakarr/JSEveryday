const arr = [10, 20, 30, 40];
var j;
for (var i = 0; i < 4; i++) {
    setTimeout(() => {
        console.log(j);
    }, 0)
    setTimeout(() => {
        console.log(arr[i - 1]);
        console.log("In Set Timeout", j);
    }, 4000);
}

setTimeout(() => {
    j = 1;
}, 10)

console.log(i);
j = 5;