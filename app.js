var express=require('express')
var app=express()

//设置跨域
app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin','*')
    res.header('Access-Control-Allow-Headers','X-Requested-With')
    res.header('Access-Control-Allow-Methods','PUT,Post,Get')

})