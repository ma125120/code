var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
var gb=mongoose.connect('mongodb://root:125120@localhost:27017/test');
require('./models/comments_model.js');
require('./models/page_model.js');
require('./models/photo_model.js');
var app=express();
app.engine('.html',require('ejs').__express);
app.set('views',__dirname+'/views');
app.set('view engine','html');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
require('./comment_routes')(app);
app.listen(8001);