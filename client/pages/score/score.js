var app = getApp();
Page({
    data: {
        score: ''
    },
    setScore: function(){
        this.setData({
            score: app.globalData.score
        })
    },
    onLoad: function(){
        wx.showToast({
            title: '正在计算得分',
            icon: 'loading',
            duration: 2000
        });
        setTimeout(this.setScore,2000);
    }
})