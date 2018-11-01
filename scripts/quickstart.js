

var app ={};
app.show = function(){
    console.log(" hello world");
}

app.init = function(){
    var headBtn = document.getElementById('showHeading');
    var showSubHeadBtn = document.getElementById('showSubHeading');
    headBtn.addEventListener('click', app.updateContent('majHeading','javaScript'));
    showSubHeadBtn.addEventListener('click',app.updateContent('minorHeading','java'));
}


app.updateContent = function(element, msg){
     return function(){
        var majorHeading = document.getElementById(element);
        majorHeading.innerHTML= msg;
     }
    
}

app.show();
//app2.show();
app.init();
