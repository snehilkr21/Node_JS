const fs = require("fs")
const https = require("https")

console.log("starting of program")

var a = 100
var b = 200

https.get("https://jsonplaceholder.typicode.com/posts",(res)=>{
    console.log("api hit successfully ")
})

setTimeout(()=>{
    console.log("settimeout is called after 5sed")
},5000)

fs.readFile("./file.txt","utf-8",(err,data)=>{
    console.log("file  ",data)
})

var a=100;
var b=200;
function multiplication(a,b){
    const c=a*b;
    return c;
}
const c=multiplication(a,b)
console.log("result ",c)