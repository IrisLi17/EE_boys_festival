var app = getApp();
Page({
    data: {
        testquestions:[
            {
                content:'这是第一个问题',
                imageurl:'../../images/background-2025316__480.png',
                select:[
                    '选项一',
                    '选项二',
                    'hahah',
                    '4',
                    '5'
                ]
            },
            {
                content:'这是第二个问题',
                imageurl:'../../images/u=170453941,2899967405&fm=27&gp=0.jpg',
                select:[
                    'test1',
                    'null',
                    'none',
                    '4',
                    '5'
                ]
            }
        ],
        choices:[
            {
                content:'A'
            },
            {
                content:'B'
            },
            {
                content:'C'
            },
            {
                content:'D'
            },
            {
                content:'E'
            }
        ],
        answers:[
            'A','B'
        ],
        isComplete: true,
        score: 0,
        response:'',
        userInfo:{},
        openID: null
    },
    onLoad: function(){
        //console.log("onload");
        var that  = this;
        app.getUserInfo(function (userInfo){
            that.setData({
                userInfo: userInfo,
                openID: app.globalData.openID
            })
        })
        //this.data.openID = app.globalData.openID;
        console.log(app.globalData.openID);
    },

    radioChange: function(e){
        // handle radioChange
    },
    toastHidden:function(){
        this.setData({
            hiddenToast: true
        })
    },
    formSubmit: function(e){
        // submit the form
        var that = this;
        var formData = e.detail.value;
        //console.log("submit triggled");
        //console.log(formData);
        for (let i in formData){
            if(formData[i]===''){
                //this.setData({
                //    hiddenToast:false
                //});
                this.setData({
                    isComplete: false
                })
                wx.showToast({
                    title: '还有未答完的题',
                    image: '../../images/false.png',
                    duration: 2000
                })
                //reset();
                break;
            }
        }
        console.log(this.data.isComplete);
        if(this.data.isComplete == true) {    
            wx.request({
                url:'https://48299903.qcloud.la',
                data: formData,
                method: 'POST',
                success: function(res){
                    console.log(res);
                    that.setData({response:res.data.data});
                }
            });
            this.checkAnswer(formData);
            app.setScore(this.data.score);
            console.log(app.globalData.userInfo);
            console.log(app.globalData.score);
            wx.redirectTo({
                url:'../score/score'
            })
        }
        this.data.isComplete = true;
    },
    formReset: function reset(){
        console.log("reset");
        this.setData({
            isComplete: true
        })
    },
    checkAnswer: function(formData){
        for(var i=0; i<this.data.answers.length; ++i){
            if(formData['radio-group'+i] == this.data.answers[i]){
                this.data.score += 100/this.data.answers.length;
            }
        }
    }
})