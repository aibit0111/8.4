var express = require('express');
var app = express();
var uuid = require('node-uuid');
var i = uuid.v4();
app.get('',function(req,res){
    res.send(i);
});
app.listen(909,function(req,res){

});
console.log(i);