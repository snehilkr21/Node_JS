const fs = require("fs")
setImmediate(()=>console.log("set immediate"))
setTimeout(()=>{console.log("time expired")},0)
Promise.resolve("promise").then(console.log)
fs.readFile("./file.tsx","utf8",()=>{
    console.log("file reading")
})
process.nextTick(()=>{
    process.nextTick(()=>console.log("inner Tick"))
    console.log("process.nextTick()")
})
console.log("last line of code")
