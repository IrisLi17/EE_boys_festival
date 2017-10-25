Page({
    data: {
        testquestions:[
            {
                content:'这是第一个问题',
                imageurl:''
            },
            {
                content:'这是第二个问题',
                imageurl:''
            }
        ],
        choices:[
            {
                content:'Yes'
            },
            {
                content:'No'
            }
        ]
    },
    radioChange: function(e){
        // handle radioChange
    },
    formSubmit: function(e){
        // submit the form
        console.log("submit triggled");
        wx.redirectTo({
            url:'../introduction/intro'
        })
    }
})