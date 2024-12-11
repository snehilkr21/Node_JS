(function(module,require){
    require("./multiply")
    function add(a,b){
        console.log("sum ",a+b)
    }
    module.exports ={add}
}(module,require))
