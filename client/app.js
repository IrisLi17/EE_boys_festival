/**
 * @fileOverview 微信小程序的入口文件
 */

var qcloud = require('./vendor/wafer2-client-sdk/index');
var config = require('./config');





//app.js
App({
    onLaunch: function () {
    //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || []
        logs.unshift(Date.now())
        wx.setStorageSync('logs', logs)
        wx.redirectTo({
            url:'/pages/introduction/intro'
        })
    },
    getUserInfo: function (cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
        //调用登录接口
            wx.login({
                success: function () {
                    //var appid = 'wx33a712f992e26dad';
                    //var secret = 'e90e673f22cdff2e351a6e4ad445af7f';
                    //wx.request({
                    //    url: 'https://api.weixin.qq.com/sns/jscode2session?appid=‘+<code></code>appid+’&secret=‘+secret+’&grant_type=authorization_code&js_code='+loginCode.code,  
                    //    header: {  
                    //        'content-type': 'application/json'  
                    //    },  
                    //    success: function(res) {  
                    //      console.log(res.data.openid) //获取openid  
                    //      that.globalData.openID = res.data.openid;
                    //    }
                    //})


                    wx.getUserInfo({
                        success: function (res) {
                            that.globalData.userInfo = res.userInfo;
                            typeof cb == "function" && cb(that.globalData.userInfo)
                        }
                    })
                }
            });
        }
    },
    globalData: {
        userInfo: null,
        //openID: null
        score: ''
    },
    setScore: function(score){
        this.globalData.score = score;
    } 
})  