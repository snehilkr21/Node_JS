console.log("xyz module is called")
function calculateSum(a,b){
    console.log(a+b)
}
var x=100;
module.exports = {
    x:x,
    calculateSum:calculateSum
}