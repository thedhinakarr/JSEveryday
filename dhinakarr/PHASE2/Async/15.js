var sum = 0;
setTimeout(() => {
    console.log("I am First");
    for (var i = 1; i <= 4; i++) {
        sum += i;
    }
    console.log(sum);
}, 4000);

console.log(sum);