const fs = require("fs")
const a = 100;

setImmediate(()=>console.log("Immediate"))

Promise.resolve("Promise")

fs.readFile("./file.tsx","utf8",()=>{
    console.log("file reading")
})

setTimeout(()=>console.log("timeout"),0)

process.nextTick(()=>console.log("process.nextTick()"))

function printA(){
    console.log("a = ",a)
}

printA()

console.log("last line of code")