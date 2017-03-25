var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
const cookieParse=require('cookie-parser');
var expressSession=require('express-session');
var mongoStore=require('connect-mongo')({session:expressSession});
var db=mongoose.connect('mongodb://root:125120@localhost:27017/test');
require('./models/comments_model.js');
require('./models/page_model.js');
require('./models/photo_model.js');
var app=express();
app.engine('.html',require('ejs').__express);
app.set('views',__dirname+'/views');
app.set('view engine','html');
require('./models/users_model.js');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParse());
app.use(expressSession({
  secret:'SECRET',
  resave: false,
  saveUninitialized:true,
  cookie:{maxAge:60*60*10}
}));
require('./comment_routes')(app);
require('./routes')(app);
app.listen(8008);
