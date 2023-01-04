console.log("Hello World No 22");

setTimeout(() => {
    console.log("Hello Hell");
}, 15000);

xyz();

console.log("Hello World 2");

abc();

function abc() {
    console.log("ABC");
}
function xyz() {
    console.log("XYZ");
}