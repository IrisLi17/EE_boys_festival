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
                content:'以下护肤的正确顺序是:'+'\n'+'a洁面  b隔离  c乳液  d面霜  e爽肤水  f防晒  g精华液',
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
                content:'请问女生化妆的时候'+'\n'+'a.眼妆 b.脸妆 c.唇妆 的步骤是',
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
                imageurl:null,
                select:[
                    '黄蓉',
                    '郭芙',
                    '郭襄',
                    '小龙女',
                    '以上都不是'
                ]
            },
            {
                content:'下列选项中，和其它选项属于不同类别的是：',
                imageurl:null,
                select:[
                    '小胖丁',
                    '萝卜丁',
                    '小羊皮',
                    '小灯泡',
                    '在我的认知范围内以上都不是化妆品'
                ]
            },
            {
                content:'萝卜丁指的是',
                imageurl:[
                    '../../images/64.5.1.jpg',
                    '../../images/64.5.2.jpg',
                    '../../images/64.5.3.jpg',
                ],
                select:[
                    '',
                    '',
                    '',
                    '都是',
                    '都不是'
                ]
            },
            {
                content:'女生过生日应该送什么礼物？',
                imageurl:null,
                select:[
                    '国林gg的亲笔签名电电书',
                    '一块精心包装的面包板',
                    '由三极管二极管拼装成的艺术作品',
                ]
            },
            {
                content:'卧蚕应该画在哪个位置？',
                imageurl:null,
                select:[
                    '眼皮上，细细一条',
                    '眼皮上，比较粗的一片',
                    '紧贴眼睛下方，细细一条',
                    '紧贴眼睛下方，比较粗的一片',
                    '//可能会出现黑眼圈的位置',
                    '画在桑叶上'
                ]
            },
            {
                content:'下列何种粉末具有较佳的遮盖力？',
                imageurl:null,
                select:[
                    '二氧化钛',
                    '碳酸钙',
                    '滑石粉',
                    '玉米淀粉',
                    '以上都不是'
                ]
            },
            {
                content:'下列哪个是眉粉刷？',
                imageurl:[
                    '../../images/65.4.1.png',
                    '../../images/65.4.2.png',
                    '../../images/65.4.3.png',
                    '../../images/65.4.4.png',
                ],
                select:[
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                content:'下列哪个是散粉刷？',
                imageurl:[
                    '../../images/65.5.1.png',
                    '../../images/65.5.2.png',
                    '../../images/65.5.3.png',
                    '../../images/65.5.4.png',
                ],
                select:[
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                content:'洗完脸使用护肤品的正确顺序是',
                imageurl:null,
                select:[
                    '爽肤水-精华-乳液-面霜',
                    '精华-爽肤水-面霜-乳液',
                    '精华-爽肤水-乳液-面霜',
                    '爽肤水-乳液-精华-面霜'
                ]
            },
            {
                content:'下列哪个不属于今年秋冬潘通发布的国际服装色彩流行色',
                imageurl:null,
                select:[
                    '芭蕾舞鞋粉',
                    '石榴红',
                    '秋枫褐',
                    '薰衣草紫'
                ]
            },
            {
                content:'当你的自行车后座上坐着你的妹子，而你在努力骑上好汉坡时，你的妹子说：你太辛苦啦~\
                是不是我太重了，让你这么累呀？'+'\n'+'此时你应该说',
                imageurl:null,
                select:[
                    '没关系，我骑得动。',
                    '你一点不重呀。',
                    '是啊，我快累死了。',
                    '只是在好汉坡载你费力，在平路还是可以的。'
                ]
            },
            {
                content:'男生节时，女生送给你们早餐时，她们所期待的你们的反应是：',
                imageurl:null,
                select:[
                    '我还没穿衣服呢就不下床了，装睡吧。',
                    '走廊太冷了，为了保暖我就伸出一直胳膊拿进屋子然后迅速关门吧。【计划通|ω•`)',
                    'emmmm她们买的早餐看起来好难吃，算了勉强收下吧。',
                    '穿戴整齐地乖巧接过早餐，并真诚表示感谢。'
                ]
            },
            {
                content:'一个习惯披肩发的女生突然扎起了头发最有可能是因为什么？',
                imageurl:null,
                select:[
                    '因为扎起来更好看',
                    '因为扎起来更舒服',
                    '因为她买了新的头绳',
                    '因为她没洗头',
                    '因为今年流行马尾辫'
                ]
            },
            {
                content:'裸妆是指什么？',
                imageurl:null,
                select:[
                    '不化妆',
                    '淡妆',
                    '自然清新无化妆痕迹的妆',
                    '裸色的妆',
                    '简单快速的妆'
                ]
            },
            {
                content:'防晒霜、粉底、隔离液的涂抹顺序是？',
                imageurl:null,
                select:[
                    '防晒、粉底、隔离',
                    '粉底、防晒、隔离',
                    '隔离、防晒、粉底',
                    '防晒、隔离、粉底',
                    '隔离、粉底、防晒'
                ]
            },
            {
                content:'女生生日时送什么礼物好？',
                imageurl:null,
                select:[
                    '微信红包',
                    '小礼物',
                    '陪她逛街',
                    '鲜花',
                    '微信祝福'
                ]
            },
            {
                content:'以下哪个不属于时尚杂志呢？',
                imageurl:null,
                select:[
                    'vogue',
                    'elle',
                    '时尚芭莎',
                    'marie claire',
                    'the New Yorker'
                ]
            },
            {
                content:'请选出下列与其他功能不同的化妆品',
                imageurl:[
                    '../../images/68.1.1.jpg',
                    '../../images/68.1.2.jpg',
                    '../../images/68.1.3.jpg',
                    '../../images/68.1.4.jpg'
                ],
                select:[
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                content:'你认为下图所示产品的价位在多少？'+'\n'+'提示：雅诗兰黛 15ml',
                imageurl:[
                    '../../images/68.2.jpg'
                ],
                select:[
                    '100元以内',
                    '100——300',
                    '300——500',
                    '500元以上'
                ]
            },
            {
                content:'一般情况下画底妆时，以下五种化妆品的使用顺序\
                为'+'\n'+'①粉饼	  ②隔离霜	  ③爽肤水	  ④粉底液	   ⑤散粉',
                imageurl:null,
                select:[
                    '①②③④⑤',
                    '③②④①⑤',
                    '③④①②⑤',
                    '③④⑤①②',
                    '③②④⑤①'
                ]
            },
            {
                content:'下列哪种发型被称为鱼骨辫？',
                imageurl:[
                    '../../images/68.4.1.jpg',
                    '../../images/68.4.2.jpg',
                    '../../images/68.4.3.jpg',
                    '../../images/68.4.4.jpg',
                    '../../images/68.4.5.jpg',
                ],
                select:[
                    '',
                    '',
                    '',
                    '',
                    ''
                ]
            },
            {
                content:'以下几支口红哪一只最贵？',
                imageurl:[
                    '../../images/68.5.1.jpg',
                    '../../images/68.5.2.jpg',
                    '../../images/68.5.3.jpg',
                    '../../images/68.5.4.jpg'
                ],
                select:[
                    '',
                    '',
                    '',
                    ''
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
            },
            {
                content:'F'
            }
        ],
        answers:[
            'E','D','A','D','A','E','B','B','E','D',
            'D','C','C','D','D','C','C','A','C','B',
            'A','D','B','D','D','C','D','C','E',
            'B','C','B','C','D'
        ],
        
        selectedQuestions:[
            0,2,3,5,10,7,1,15,14,12
        ],
        //animationData:{},
        greeting:null,
        isComplete: true,
        score: 0,
        response:'',
        userInfo:{},
        openID: null,
        haveAnswer:{},
        checkResult:{},
        completeCount: 0,
        startTime:null,
        finishTime:null
    },
    onLoad: function(){
        //console.log("onload");
        var that  = this;
        app.getUserInfo(function(id){
            that.setData({
                openID:id
            });
            console.log(that.data.openID);
        },
            function (userInfo){
            that.setData({
                userInfo: userInfo,
            });
            console.log(that.data.userInfo);
        });
        this.setData({
            startTime:Date.parse(new Date())
        });
        console.log(this.data.startTime);
        
    },
    radioChange: function(e){
        // handle radioChange
        console.log(e);
        if(this.data.haveAnswer[e.target.id] != 1){
            this.data.haveAnswer[e.target.id] = 1;
            var cur = this.data.completeCount;
            this.setData({
                completeCount: cur+1
            });
        }
        if(e.detail.value == this.data.answers[e.target.id.substring(5)]){
            this.data.checkResult[e.target.id] = 1;
        }
        else{
            this.data.checkResult[e.target.id] = 0;
        }
        this.checkAnswer();
        
        //this.setData({
        //    greeting:this.data.greetings[Math.floor(Math.random()*this.data.greetings.length)]
        //});
        //var animation = wx.createAnimation({
        //    duration: 1000,
        //    timingFunction: 'ease',
        //});
        //this.animation = animation;
        //animation.translateY(-100).step();
        //this.setData({
        //    animationData:animation.export()
        //})
        //setTimeout(function(){
        //    animation.translateY(100);
        //    this.setData({
        //        animationData:animation.export()
        //    })
        //}.bind(this),1000);
        //this.setData({
        //    animationData:animation.export()
        //});
        //console.log(this.data.animationData);
        console.log(this.data.haveAnswer);
        console.log(this.data.completeCount);
        console.log("score:"+this.data.score);
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
            
            //this.checkAnswer(formData);
            app.setScore(this.data.score);
            console.log(app.globalData.userInfo);
            console.log(app.globalData.score);
            
            var postData = {
                id:this.data.openID,
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

    //check answer when trigger radio change
    checkAnswer: function(){
        //for(var i=0; i<this.data.answers.length; ++i){
        //    if(formData['radio-group'+i] == this.data.answers[i]){
        //        this.data.score += 100/this.data.answers.length;
        //    }
        //}
        this.data.score = 0;
        for(var key in this.data.checkResult){
            this.data.score += 10*this.data.checkResult[key];
        }
        
    }
})