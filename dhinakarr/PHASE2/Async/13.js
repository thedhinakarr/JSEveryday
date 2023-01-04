const random = (data, data2) => {
    console.log(data, data2);
    return 100;
}

// random("Data");

let internalFunction = setInterval(random, 1000, "data", "data2");
setTimeout(() => {
    clearInterval(internalFunction);
}, 6000);

