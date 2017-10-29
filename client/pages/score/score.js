var app = getApp();
Page({
    data: {
        score: '',
        userInfo: {},
        openID: null,
        isShow: false
    },
    setScore: function(){
        this.setData({
            score: app.globalData.score,
            isShow: true
        })
    },
    getUser: function(){
        this.setData({
            userInfo: app.globalData.userInfo,
            openID: app.globalData.openID
        })
    },
    onLoad: function(){
        wx.showToast({
            title: '正在计算得分',
            icon: 'loading',
            duration: 2000
        });
        this.getUser();
        setTimeout(this.setScore,2000);
        
    },
    redirect: function(){
        wx.redirectTo({
            url: '../question/question'
        })
    }
})