const fs=require("fs")
const a =100
setImmediate(()=>{
    setImmediate(()=>{
        console.log("inner setImmdediate")
    })
    console.log("setImmdediate")
})
fs.readFile("./file.txt","utf-8",()=>{
    console.log("file read")
})
setTimeout(()=>console.log("set timeout is called"),0)
Promise.resolve("Promise").then(console.log)
process.nextTick(()=>console.log("Process nextTick"))
function printA(){
    console.log("a = ",a)
}
printA()
console.log("last line of code")