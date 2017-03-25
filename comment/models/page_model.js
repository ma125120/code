var mongoose=require('mongoose'),
    Schema=mongoose.Schema;
var PageSchema=new Schema({
  name:{type:String,unique:true},
  commentId:Schema.ObjectId
},{_id:true,collection:'page_model'});
mongoose.model('Page',PageSchema);
