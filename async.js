const crypto = require("crypto")
console.log("hello world")

var a =10;
var b=20;
let key = crypto.pbkdf2Sync("1pass","salt",500000,50,"sha512")
console.log("Sync key generated",key.toString("hex"))

crypto.pbkdf2("password1","salt",500000,50,"sha512",(err,key)=>{
    console.log("key generated ",key.toString("hex"))
})

function multiplication(x,y){
    const result = x*y;
    return result;
}

var c= multiplication(a,b)

console.log("Multiplication result ", c)