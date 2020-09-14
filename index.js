const express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.send('Hello world')
})

app.get('/hello', function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/hello/:name',function(req,res){
    res.render('hello',{param: req.params.name})
})

app.listen(8000,function(){
    console.log('Listening to PORT 8000')
})