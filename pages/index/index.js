// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    keyBoardHeight: 0, // 键盘高度86
    msgItems: [],// 聊天信息
    msgItem: {"ss":"yy","kk":"sdf"},//聊天消息
    scrollTop: 0, //scrollView滚动的位置
    scrollToView: '',// msg_item_id_{{msgItems.length-1}}
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
    var msgItems = [];
    for(var i=0; i< 30; i++) {
      msgItems.push({
        "id":i,
        "name": `十里桂花`,
        "data": {
          "text": `聊点什么-${i}`
        },
        "msgType": i%2
      });
    }
    this.setData({
      msgItems,
      scrollTop: 1000* msgItems.length,
      scrollToView: `msg_item_id_${msgItems.length-1}`
    });
  },
  keyboardHeightChange(event) {
    console.log("11111", this.data, "===>111111");
    // var keyBoardHeight = event.detail.height;
    // console.log("keyBoardHeight=", keyBoardHeight);
    // this.setData({
    //   keyBoardHeight,
    // });
    this.scrollToBottom();
  },
  scrollToBottom() {
    // let query = wx.createSelectorQuery().in(this);
    // query.select(".list_view").boundingClientRect(res => {
    //   console.log("scrollHeight", res.height);
    //   this.setData({
    //     scrollTop: res.height
    //   });
    // });
    // query.exec(res=>{});
    // this.setData();
    console.log(this.data.msgItems);
    var lastMsgItemId = `msg_item_id_${this.data.msgItems.length-1}`
    this.setData({
      scrollToView: lastMsgItemId
    });
    // this.setData({
    //   scrollTop: msgItems.length * 1000
    // });
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
