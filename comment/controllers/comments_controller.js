var mongoose=require('mongoose'),
    CommentThread=mongoose.model('CommentThread'),
    Reply=mongoose.model('Reply');
exports.getComment=function(req,res) {
    CommentThread.findOne({_id:req.query.commentId})
        .exec(function(err,comment) {
          if(!comment) {
            res.status(404).json({msg:'评论未找到.'});
          } else {
            res.json(comment);
          }
    });
};
exports.addComment=function(req,res) {
  if(req.session.username) {
    CommentThread.findOne({_id:req.body.rootCommentId})
        .exec(function(err,commentThread) {
          if(!commentThread) {
            res.status(404).json({msg:'评论链未找到'});
          } else {
            var newComment=Reply(req.body.newComment);
            newComment.username=generateRandomUsername();
            addComment(req,res,commentThread,commentThread,
              req.body.parentCommentId,newComment);
          }
          if(err) {
            console.log(err)
          }
    });
  }  else {
      res.json({msg1:"请登录后再进行评论。"});
    }
};
function addComment(req,res,commentThread,currentComment,
  parentId,newComment) {
    if(commentThread.id==parentId) {
      commentThread.replies.push(newComment);
      updateCommentThread(req,res,commentThread);
    } else {
      for(var i=0,len=currentComment.replies.length;i<len;i++) {
        var c=currentComment.replies[i];
        if(c._id==parentId) {
          c.replies.push(newComment);
          var replyThread=commentThread.replies.toObject();
          updateCommentThread(req,res,commentThread);
          break;
        } else {
          addComment(req,res,commentThread,c,
            parentId,newComment);
        }
      }
    }
  }
function updateCommentThread(req,res,commentThread) {
  CommentThread.update({_id:commentThread.id},
      {$set:{replies:commentThread.replies}})
      .exec(function(err,saveComment) {
        if(err) {
          res.json(404,{msg:'更新评论失败'});
        } else {
          res.json({msg:'success'});
        }
      });
}
function generateRandomUsername() {
  var users=['Lie 说谎家','Poison★弑神','Escape [逃脱]',
    'Remix．恍惚','神精榜.Traveler','Summer° 初夏'];
  return users[Math.floor((Math.random()*5))];
}
