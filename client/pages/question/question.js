var app = getApp();
Page({
    data: {
        testquestions:[
            {
                content:'这是第一个问题',
                imageurl:'',
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
                imageurl:'',
                select:[
                    '选项一',
                    '选项二',
                    'hahah',
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
        isComplete: true,
        response:'',
        userInfo:{},
    },
    onLoad: function(){
        console.log("onload");
        var that  = this;
        app.getUserInfo(function (userInfo){
            that.setData({
                userInfo: userInfo
                //openID: openid
            })
        })
        console.log(that.data.userInfo);
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
        console.log("submit triggled");
        console.log(formData);
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
                    image: '../../images/error2.png',
                    duration: 2000
                })
                //reset();
                break;
            }
        }
        if(this.data.isComplete == true) {    
            wx.request({
                url:'https://hdatzw9n.qcloud.la/hello',
                data: formData,
                method: 'POST',
                success: function(res){
                    console.log(res.data);
                    that.setData({response:res.data.data});
                }
            });
            app.setScore(100);//need to modify
            wx.redirectTo({
                url:'../score/score'
            })
        }
    },
    formReset: function reset(){
        console.log("reset");
        this.setData({
            isComplete: true
        })
    }
})