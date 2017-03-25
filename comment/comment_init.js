var mongoose=require('mongoose');
var db=mongoose.connect('mongodb://root:125120@localhost/test');
require('./models/comments_model.js');
require('./models/photo_model.js');
require('./models/page_model.js');
var CommentThread=mongoose.model('CommentThread');
var Reply=mongoose.model('Reply');
var Photo=mongoose.model('Photo');
var Page=mongoose.model('Page');
!function ad() {
  var Obj=[{title:"风景图片1",filename:'1.jpg'},
          {title:"风景图片2",filename:'2.jpg'},
        {title:"风景图片3",filename:'3.jpg'},
        {title:"风景图片4",filename:'4.jpg'},
        {title:"风景图片5",filename:'5.jpg'},
        {title:"风景图片6",filename:'6.jpg'},];
  for(var i=0,len=Obj.length;i<len;i++) {
    addPhoto(Obj[i]['title'],Obj[i]['filename']);
  }
  console.log(Obj[0]['title']);
}();
function addPhoto(title,filename) {
  var comment=new CommentThread({title:"关于"+title+" 的评论"});
  comment.save(function(err,comment) {
    var photo=new Photo({title:title,filename:filename});
    photo.commentId=comment.id;
    photo.save(function() {
      console.log(title+"已保存");
    });
  });
}
CommentThread.remove().exec(function() {
  Photo.remove().exec(function() {
    Page.remove().exec(function() {
      var comment=new CommentThread({title:"相册评论"});
      comment.save(function(err,comment) {
        var page=new Page({name:'Photo Page'});
        page.commentId=comment.id;
        page.save();
      });
    })
  })
});
