var expess=require('express');
var app = expess();

app.get('/', function(req,res){
    res.send('Hello World');
});

app.listen(3000, function(){
    console.log('Express running on port 3000')
})