var expess=require('express');
var app = expess();

app.get('/', function(req,res){
    res.send('Hello Expess');
});


app.get('/About', function(req,res){
    res.send('Hello from About')
});

app.get('/Contact',function(req,res){
    res.send('Hello from Contact')
});

app.listen(3000, function(){
    console.log('Express running on port 3000')
})