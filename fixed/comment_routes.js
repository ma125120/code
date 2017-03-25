var express=require('express');
module.exports=function(app) {
  var photos=require('./controllers/photos_controller');
  var comments=require('./controllers/comments_controller');
  var pages=require('./controllers/pages_controller');
  app.use('/static',express.static('./static')).
      use('/images',express.static('./images'));
  app.get('/',function(req,res) {
      res.render('photos',{
        username:req.session.username?req.session.username:null
      });
  });
  app.get('/logout',function(req,res) {
    req.session.destroy(function() {
      res.redirect('/');
    });
  });
  app.get('/photos',photos.getPhotos);
  app.get('/photo',photos.getPhoto);
  app.get('/page',pages.getPages);
  app.get('/comments/get',comments.getComment);
  app.post('/comments/add',comments.addComment);
}
