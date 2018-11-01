(function(){
    function add(){
        var counter = 0;   //free variable -local

        return function(){ // a closure closing around counter
            return counter++;
        }
    }

    var mycounter = add();
    console.log(mycounter());
    console.log(mycounter());
    console.log(mycounter());

})('inside closure');

