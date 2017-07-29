//index.js
//获取应用实例
var app = getApp();

var API_URL = "https://api.douban.com/v2/movie/search";
Page({
  data: {
    movies:[]
  },
  search:function(e) {
    if(!e.detail.value) {
      return ;
    }
    var that = this;
    wx.showToast({
      title:'加载中',
      icon:'loading',
      duration:10000
    });
    wx.request({
      url:API_URL+"?q="+e.detail.value,
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
  },
  //当页面加载好之后执行的
  onLoad: function () {
  
  }
})
