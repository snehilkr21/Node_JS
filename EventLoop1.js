const fs = require("fs")
const a = 100;

setTimeout(()=>console.log("timeout"))

fs.readFile("./file.tsx","utf8",()=>{
    console.log("file reading")
})

setImmediate(()=>console.log("Immediate"))

function printA(){
    console.log("a = ",a)
}

printA()

console.log("last line of code")