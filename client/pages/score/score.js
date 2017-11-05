var app = getApp();
Page({
    data: {
        score: '',
        userInfo: {},
        openID: null,
        isShow: false,
        greetings:[
            '会码代码和debug的男生最帅了！（陈一婷）',
            '祝你早日脱单哦٩( '+'\''+'ω'+'\''+' )و（卢丹葳）',
            '祝学业爱情双丰收，男生节快乐~（曲艺）'
        ],
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
        //wx.showToast({
        //    title: '',
        //    icon: 'loading',
        //    duration: 2000
        //});
        this.getUser();
        wx.showModal({
            title:'正在计算得分',
            content:this.data.greetings[Math.floor(Math.random()*this.data.greetings.length)],
            //content:'祝福语就这个吧：少年侠气，交结五都雄。肝胆洞。毛发耸。立谈中。死生同。一诺千金重。推翘勇。矜豪纵。轻盖拥。联飞鞚。斗城东。轰饮酒垆，春色浮寒瓮。吸海垂虹。',
            showCancel:false,
            confirmText:'收下祝福',
            confirmColor:'#673b6e'
        });
        setTimeout(this.setScore,2000);
        
    },
    redirect: function(){
        wx.redirectTo({
            url: '../question/question'
        })
    }
})