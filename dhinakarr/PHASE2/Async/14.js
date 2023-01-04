setTimeout(() => {
    console.log("I am Last");
    setTimeout(() => {
        console.log("I am winner");
    }, 2000);
}, 2000);


setTimeout(() => {
    console.log("I am First");
}, 2000);