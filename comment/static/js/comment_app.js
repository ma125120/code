var app=angular.module('myApp',[]);
function CommentObj($http) {
  this.getComment=function(commentId,callback) {
    $http({url:'/comments/get',method:'GET',params:{commentId:commentId}})
          .then(function(res) {
            callback(null,res.data);
          })
          .catch(function(res) {
            callback(res.data,{});
          });
  };
  this.addComment=function(rootCommentId,parentId,
        newComment,callback) {
    $http.post('/comments/add',{rootCommentId:rootCommentId,
                              parentCommentId:parentId,
                              newComment:newComment})
          .then(function(res) {
            callback(null,res.data);
          })
          .catch(function(res) {
            callback(res.data,{});
          });
        };
}
app.service('commentSrv',['$http',CommentObj]);
app.controller('photoController',['$scope','$http','commentSrv',
              function($scope,$http,commentSrv) {
    $http({url:'/photos',method:'GET'})
    .then(function(res) {
      $scope.photos=res.data;
      $scope.photo=$scope.photos[0];
      $scope.loadComments();
    })
    .catch(function(res) {
      $scope.photos=[];
    });
    $scope.loadComments=function() {
      commentSrv.getComment($scope.photo.commentId,
        function(err,comment) {
          if(err) {
            $scope.commentThread={};
          } else {
            $scope.commentThread=comment;
          }
        });
    };
    $scope.addReply=function(parentCommentId,subject,body)  {
      if(subject==""||body=="") {
        alert("输入不能为空！");return false;
      }
      var newComment={subject:subject,body:body};
      commentSrv.addComment($scope.commentThread._id,
                            parentCommentId,
                            newComment,function(err,comment) {
                              if(comment.msg1) {
                                alert(comment.msg1);return false;
                              }
                              $scope.loadComments();
                              if(err) console.log(err)
                            });
    };
    $scope.setPhoto=function(photoId) {
      $http.get('/photo',{params:{photoId:photoId}})
      .then(function(res) {
        $scope.photo=res.data;
        $scope.loadComments();
      })
      .catch(function(data,status,headers,config) {
        $scope.photo={};
      });
    };
  }]);
app.controller('pageController',['$scope','$http','commentSrv',
            function($scope,$http,commentSrv) {
    $http.get('/page',{params:{pageName:"Photo Page"}})
            .then(function(res) {
                  $scope.page=res.data;
                  $scope.loadComments();
             })
            .catch(function(data,status,headers,config) {
              $scope.Page={};
            });
    $scope.addReply=function(parentCommentId,subject,body) {
      if(subject==""||body=="") {
        alert("输入不能为空！");return false;
      }
      var newComent={subject:subject,body:body};
      commentSrv.addComment($scope.commentThread._id,
                            parentCommentId,
                            newComent,function(err,comment) {
                              if(comment.msg1) {
                                alert(comment.msg1);return false;
                              }
                              $scope.loadComments();
                            });
    };
    $scope.loadComments=function() {
      commentSrv.getComment($scope.page.commentId,
        function(err,comment) {
          if(err) {
            $scope.commentThread={};
          } else {
            $scope.commentThread=comment;
          }
        });
    };
  }]);
