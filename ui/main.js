// counter code
var button  = document.getElementById('counter');


button.onclick = function () {
    
    //create a request object
    var request = new XMLHttpRequest();
    
    //capture response and store it in a variable
    request.onreadystatechange = function(){
        
        if(request.readyState == XMLHttpRequest.DONE){
            //take some action
            if(request.status ==200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
            
        }
        //Not done yet
    };
    //make the requet
    request.open('GET','http://parthshinde71994.imad.hasura-app.io/counter',true);
    request.send(null);
};