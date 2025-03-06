const fs = require("fs")
const https = require("https")

console.log("Hello World")

var a = 10;
var b = 20;

https.get("https://jsonplaceholder.typicode.com/posts/1",(res)=>{
    console.log("data fetched", res)
})

setTimeout(()=>{
console.log("settimeout")
},2000)

fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("data",data)
})

function multiply(x,y){
    const result = x*y
    return result
}

var c = multiply(a,b)
console.log("Multiplication result is ",c)