const crypto=require('crypto');
const mongoose=require('mongoose'),
      User=mongoose.model('User');
function hashPW(pwd) {
  return crypto.createHash('sha256').update(pwd)
          .digest('base64').toString();
}
exports.signup=function(req,res) {
  var user=new User({username:req.body.username});
  user.set('hashed_password',hashPW(req.body.password));
  user.set('email',req.body.email);
  user.save(function(err) {
    if(err) {
      res.session.error=err;
      res.redirect('/signup');
    } else {
      req.session.user=user.id;
      req.session.username=user.username;
      req.session.msg='Authenticated as '+user.username;
      res.redirect('/');
    }
  });
};
exports.login=function(req,res) {
  User.findOne({username:req.body.username})
      .exec(function(err,user) {
        if(!user) {
          err='没有发现该用户';
        } else if(user.hashed_password===
                  hashPW(req.body.password.toString())) {
                    req.session.regenerate(function() {
                      req.session.user=user.id;
                      req.session.username=user.username;
                      req.session.nickname=user.nickname;
                      req.session.msg='验证的用户名为 '+user.username;
                      res.redirect('/');
                    });
                  } else {
                    err='验证失败，密码错误';
                  }
        if(err) {
          req.session.regenerate(function() {
            req.session.msg=err;
            res.redirect('/login');
          });
        }
      });
};
exports.getUserProfile=function(req,res) {
  User.findOne({_id:req.session.user})
      .exec(function(err,user) {
        if(!user) {
          res.status(404).json({err:'User Not Found!'});
        } else {
          res.json(user);
        }
      });
};
exports.updateUser=function(req,res) {
  User.findOne({_id:req.session.user})
      .exec(function(err,user) {
        user.set('email',req.body.email);
        user.set('nickname',req.body.nickname);
        user.save(function(err) {
          if(err) {
            res.session.error=err;
          } else {
              req.session.msg='User Updated.';
          }
          res.redirect('/user');
      });
    });
}
exports.deleteUser=function(req,res) {
  User.findOne({_id:req.session.user})
      .exec(function(err,user) {
        if(user) {
          user.remove(function(err) {
            if(err) {
              req.session.msg=err;
            }
            req.session.destroy(function() {
              res.redirect('/login');
            });
          });
        } else {
          req.session.msg='User Not Found!';
          req.session.destroy(function() {
            res.redirect('/login');
          });
        }
      });
};
