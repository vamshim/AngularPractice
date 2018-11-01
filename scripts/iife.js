/*
 IIFE get invoked immediately, whatever functions defined in iifee is local to that creates a local scope.
*/
var module = (function(msg){
    console.log(msg);

    function first(){
        console.log('i am in first');
    }

    function second(){
        console.log('i am in second');
    }

    return{
        one :first      // first method becomes public 
        
    }

    first();
    second();

})('I am inside iife');

console.log(module.one());//module.first()
//first();