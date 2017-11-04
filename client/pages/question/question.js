var app = getApp();
Page({
    data: {
        testquestions:[
            {
                content:'hello kitty的出生地？',
                imageurl:null,
                select:[
                    '美国',
                    '中国',
                    '日本',
                    '韩国',
                    '以上都不是'
                ]
            },
            {
                content:'紫荆4号楼的楼梯铺砖颜色最接近哪一个？',
                imageurl:null,
                select:[
                    '#d5d555',
                    '#3db32b',
                    '#ffffff',
                    '#99968d',
                    '#aa5bff'
                ]
            },
            {
                content:'有的女生军训在鼻梁多涂了几层防晒，甚至在脸颊，额头，下巴也多涂了，请问原因是？',
                imageurl:null,
                select:[
                    '五官可以变立体',
                    '涂太少没用，全涂又太贵，这样性价比高',
                    '因为这些部位容易晒黑',
                    '为了不让皮肤有高原红',
                    '为了让教官开心'
                ]
            },
            {
                content:'以下护肤的正确顺序是:\
                a洁面  b隔离  c乳液  d面霜  e爽肤水  f防晒  g精华液',
                imageurl:null,
                select:[
                    'abecgdf',
                    'aecgdbf',
                    'acebgdf',
                    'aegcdbf',
                    '以上都不对'
                ]
            },
            {
                content:'请问Nars高潮是什么？',
                imageurl:null,
                select:[
                    '腮红的名字',
                    '眼影的名字',
                    '自然现象',
                    '一部电影',
                    '不可描述'
                ]
            },
            {
                content:'以下选项哪一个是男生不懂但是女生懂的？',
                imageurl:null,
                select:[
                    '化妆品',
                    '穿搭',
                    '团总支小哥哥们的脑回路',
                    '包包',
                    '竟然有女生不懂化妆品和穿衣打扮'
                ]
            },
            {
                content:'上面第5种颜色叫什么？',
                imageurl:[
                    '../../images/63.2.jpg'
                ],
                select:[
                    '公主粉',
                    '浆果玫红',
                    '艳红色',
                    '紫玫红色',
                    '暖橘色'
                ]
            },
            {
                content:'请问女生化妆的时候 a.眼妆 b.脸妆 c.唇妆 的步骤是',
                imageurl:null,
                select:[
                    'abc',
                    'bac',
                    'acb',
                    'bca',
                    '对不起，我班女生天生丽质，不用化妆'
                ]
            },
            {
                content:'下列哪项是初次聊天可以问一个妹子的：',
                imageurl:null,
                select:[
                    '你多重',
                    '你有几个男朋友',
                    '我长的帅不帅',
                    '你上学期电电考了多少分',
                    '你的室友长得漂不漂亮'
                ]
            },
            {
                content:'请问这是什么？',
                imageurl:[
                    '../../images/63.5.jpg'
                ],
                select:[
                    '马卡龙',
                    '挂件',
                    '减压玩具',
                    '气垫粉扑',
                    '蛋黄派'
                ]
            },
            {
                content:'下面哪个明星没有带美瞳？',
                imageurl:[
                    '../../images/64.1.1.jpg',
                    '../../images/64.1.2.jpg',
                    '../../images/64.1.3.jpg'
                ],
                select:[
                    '',
                    '',
                    '',
                    '都戴了',
                    '都没戴'
                ]
            },
            {
                content:'请问下图中的物品是什么？',
                imageurl:[
                    '../../images/64.2.jpg'
                ],
                select:[
                    '暖手宝',
                    '卸妆棉',
                    '化妆棉',
                    '葫芦娃',
                    '以上没有正确答案'
                ]
            },
            {
                content:'风陵渡和以下谁有关',
                imageurl:[
                    '../../images/64.2.jpg'
                ],
                select:[
                    '暖手宝',
                    '卸妆棉',
                    '化妆棉',
                    '葫芦娃',
                    '以上没有正确答案'
                ]
            },
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
            'E','D','A','D','A','E','B','B','E','D','D','C','C','D','D',
        ],
        isComplete: true,
        score: 0,
        response:'',
        userInfo:{},
        openID: null,
        haveAnswer:{},
        completeCount: 0,
        startTime:null,
        finishTime:null
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
        //var temp={};
        //for(var i=0;i<answers.length;++i){
        //    temp["radio"+i] = 0;
        //}
        //this.setData({
        //    haveAnswer:temp
        //});
        //console.log(this.data.haveAnswer);
        this.setData({
            startTime:Date.parse(new Date())
        });
        console.log(this.data.startTime);
    },

    radioChange: function(e){
        // handle radioChange
        
        if(this.data.haveAnswer[e.target.id] != 1){
            this.data.haveAnswer[e.target.id] = 1;
            var cur = this.data.completeCount;
            this.setData({
                completeCount: cur+1
            });
        }
        console.log(this.data.haveAnswer);
        console.log(this.data.completeCount);
    },
    toastHidden:function(){
        this.setData({
            hiddenToast: true
        })
    },
    formSubmit: function(e){
        // submit the form
        this.setData({
            finishTime: Date.parse(new Date())
        });
        var that = this;
        var formData = e.detail.value;
        //console.log("submit triggled");
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
                    image: '../../images/false.png',
                    duration: 2000
                })
                //reset();
                break;
            }
        }
        console.log(this.data.isComplete);
        if(this.data.isComplete == true) {    
            
            this.checkAnswer(formData);
            app.setScore(this.data.score);
            console.log(app.globalData.userInfo);
            console.log(app.globalData.score);
            var postData = {
                nickName: this.data.userInfo.nickName,
                gender: this.data.userInfo.gender,
                score: this.data.score,
                duration: this.data.finishTime - this.data.startTime,
            };
            console.log(postData);
            wx.request({
                url:'https://48299903.qcloud.la/hello.php',
                data: postData,
                method: 'POST',
                header: {
                    "Content-Type": "application/x-www-form-urlencoded"
                    },
                success: function(res){
                    console.log(res);
                    that.setData({response:res.data.data});
                }
            });
            wx.redirectTo({
                url:'../score/score'
            })
        }
        this.data.isComplete = true;
    },
    formReset: function reset(){
        console.log("reset");
        this.setData({
            isComplete: true,
            haveAnswer: {},
            completeCount: 0
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