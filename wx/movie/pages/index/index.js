//index.js
//获取应用实例
var app = getApp();

var API_URL = "https://api.douban.com/v2/movie/top250";

Page({
  data: {
    movies:[]
  },
  //当页面加载好之后执行的
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    });

    wx.showToast({
      title:'加载中',
      icon:'loading',
      duration:10000
    });

    wx.request({
      url:API_URL,
      data:{},
      header:{
        'Content-Type':'json'
      },
      success:function(res) {
        wx.hideToast();
        console.log(res.data);
        that.setData({
          movies:res.data.subjects
        });
      }
    })
  }
})
