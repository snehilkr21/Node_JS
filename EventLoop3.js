const fs = require("fs");
const a = 100;

setImmediate(()=>console.log("Immediate"))
setTimeout(()=>console.log("timeout"),0)
Promise.resolve("Promise").then(function(){console.log("snehil")})

fs.readFile("./file.tsx","utf8",()=>{
    setTimeout(()=>console.log("2nd timeout"),0)
    process.nextTick(()=>console.log("2nd process.nextTick()"))
    setImmediate(()=>console.log("2nd Immediate"))
    console.log("file reading")
})

process.nextTick(()=>console.log("process.nextTick()"))

function printA(){
    console.log("a = ",a)
}
printA()
console.log("last line of code")

