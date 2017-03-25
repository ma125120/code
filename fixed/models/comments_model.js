var mongoose=require('mongoose'),
    Schema=mongoose.Schema;
var ReplySchema=new Schema({
  username:String,
  subject:String,
  timestamp:{type:Date,default:Date.now},
  body:String
},{_id:true,collection:'reply'});
ReplySchema.add({replies:[ReplySchema]});
var commentThreadSchema=new Schema({
  title:String,
  replies:[ReplySchema]
},{collection:'comment_thread'});
mongoose.model('Reply',ReplySchema);
mongoose.model('CommentThread',commentThreadSchema);
