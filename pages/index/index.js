//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    start:0,
    motto: 'Hello World',
    userInfos: [],
    hasUserInfo: false,
    channel:'头条',//default channel value
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    section: [
      { name: '头条', id: '1001' }, { name: '新闻', id: '1032' },
      { name: '财经', id: '1003' }, { name: '体育', id: '1004' },
      { name: '娱乐', id: '1005' }, { name: '军事', id: '1021' },
      { name: '教育', id: '1005' }, { name: '科技', id: '1005' },
      { name: 'NBA', id: '1005' }, { name: '股票', id: '1005' }, 
      { name: '星座', id: '1005' }, { name: '女性', id: '1005' },
      { name: '健康', id: '1005' }, { name: '育儿', id: '1005' }
    ],
    news:[],
    banners:[
    {
        name:"2名95后竟当逃兵，户籍备注拒服兵役，可悲！",
        picUrl:"http://static.home.mi.com/app/shop/img?id=shop_904608692a4d8415d0de39a0a5897e80.jpeg"
  
      }, {
        name: "必看，2018春运抢票秘籍！",
        picUrl: "http://static.home.mi.com/app/shop/img?id=shop_4ba3d814639ab27570f174467133619f.png"

    }, {
      name: "雪乡又火了，女导游称九个月磨刀，三个月翟阳！",
      picUrl: "http://static.home.mi.com/app/shop/img?id=shop_0f5e43035a8b8d27a4b6f315d222fd9b.jpeg"

      }, {
        name: "生命任然要静静流逝，永不再重回",
        picUrl: "http://static.home.mi.com/app/shop/img?id=shop_91f29509f14ea243958285aaf5d5b640.jpeg"

    }, {
      name: "考试竟然让学生自己出题！老师们的这些神操作",
      picUrl: "http://static.home.mi.com/app/shop/img?id=shop_5c752db8097555831469356f5f389078.jpeg"

    },



    ]
  },
  onLoad: function () {
    wx.showLoading({

      title:'Loding',
      mask:true
    })
    var params = {

      channel: "头条",
      start:'0',
      num:'10'
    };
    this.loadTopNews(params);
  
  }, 
  onReachBottom: function () {
    //上拉  
    console.log("上拉");
    var that = this;
    var params = {

      channel: "头条",
      start: ++this.data.start,
      num: '10'
    };
    this.loadTopNews(params);

  } ,
  handleTap: function (e) {

    console.log(e);
    let channel = e.target.dataset.channel;
    console.log(channel);
    var params = {

      channel: channel,
      start: '0',
      num: '10'
    };
    wx.showLoading({

      title: 'Loding',
      mask: true
    })
    this.loadTopNews(params);
  },
 
 //加载新闻
loadTopNews:function(e){

var that = this;
let channel = e.channel;
console.log(channel);
    wx.request({
      url: 'https://way.jd.com/jisuapi/get', //仅为示例，并非真实的接口地址
      data: {
        channel: channel,
        num: e.num,
        start: e.start,
        appkey: 'd86205ebcd158c55a8c69173f18f734a'
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
    


        that.setData({ userInfos: res.data .result.result.list});
        wx.hideLoading();




      }
    })

  }




})
