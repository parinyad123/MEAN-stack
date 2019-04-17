var expess=require('express');
var app = expess();

app.get('/', function(req,res){
    var myList = '<ul><li>Andriod</li><li>iOS</li></ul>'
    res.send(myList);
});

app.listen(3000, function(){
    console.log('Express running on port 3000')
})