const crypto=require('crypto');
const express=require('express');
module.exports=function(app) {
  var users=require('./controllers/users_controller');
  app.use('/static',express.static('./static'))
      .use('/lib',express.static('../lib'));
  app.get('/user',function(req,res) {
    if(req.session.user) {
      res.render('user',{msg:req.session.msg});
    }
    else {
      req.session.msg='存储禁止!';
      res.redirect('/login');
    }
  });
  app.get('/signup',function(req,res) {
    if(req.session.user) {
      res.redirect('/');
    }
    res.render('signup',{msg:req.session.msg});
  });
  app.get('/login',function(req,res) {
    if(req.session.user) {
      res.redirect('/');
    }
    res.render('login',{msg:req.session.msg});
  });
  app.get('/logout',function(req,res) {
    req.session.destroy(function() {
      res.redirect('/login');
    });
  });
  app.post('/signup',users.signup);
  app.post('/user/update',users.updateUser);
  app.post('/user/delete',users.deleteUser);
  app.post('/login',users.login);
  app.get('/user/profile',users.getUserProfile);
}
