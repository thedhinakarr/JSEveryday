a={1:'a',2:'b',3:'c',4:'d'}
console.log(a)
// console.log(Object.keys(a))
// console.log(Object.values(a))

l = Object.keys(a)
v = Object.values(a)
console.log(l.length)

i=0
while (i<l.length){
    console.log(l[i],':',v[i])
    i++
}


for (i=0;i<=2;i++){
    for (j=0;j<=2;j++){
        console.log(i,j)
    }
    console.log(`----------`)
}


a = 1
b = ''
console.log(a+b)
c=2
console.log(a+b+c)