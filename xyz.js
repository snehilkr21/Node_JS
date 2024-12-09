console.log(module.exports)
console.log("xyz module is called")
function calculateSum(a,b){
    console.log(a+b)
}
var x=100;
z=1000;

// module.exports = {
//     calculateSum:calculateSum,
//     z:z
// }
module.exports.calculateSum=calculateSum;
module.exports.z=z
