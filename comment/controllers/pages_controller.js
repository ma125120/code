var mongoose=require('mongoose'),
    Page=mongoose.model('Page');
var getData=function(Model,findType,field,value) {
  Model.find({field:value})
      .exec(function(err,data) {
        if(!data) {
          res.status(404).json({msg:"未找到数据"});
        } else {
          res.json(data);
        }
      })
}

exports.getPages=function(req,res) {
  Page.findOne({name:req.query.pageName})
    .exec(function(err,page) {
      if(!page) {
        res.status(404).json({msg:'页面未找到'});
      } else {
        res.json(page);
      }
    });
};
