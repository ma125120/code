//index.js
//获取应用实例
var app = getApp();

var API_URL = "https://api.douban.com/v2/movie/subject/";

Page({
  data: {
    movie:[]
  },
  //当页面加载好之后执行的
  onLoad: function (params) {
    var that = this
    wx.showToast({
      title:'加载中',
      icon:'loading',
      duration:10000
    });
    wx.request({
      url:API_URL+params.id,
      data:{},
      header:{
        'Content-Type':'json'
      },
      success:function(res) {
        wx.hideToast();
        console.log(res.data);
        that.setData({
          movie:res.data
        });
      }
    })
  }
})
