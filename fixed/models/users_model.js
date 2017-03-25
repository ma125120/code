const mongoose=require('mongoose'),
      Schema=mongoose.Schema;
var UserSchema=new Schema({
  username:{type:String,unique:true},
  email:String,
  nickname:String,
  hashed_password:String
},{collection:'user_info'});
mongoose.model('User',UserSchema);
