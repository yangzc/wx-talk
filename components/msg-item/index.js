// components/msg-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "msg_item": {//消息数据，以json形式传递
      type: String,
      value: ""
    },
    "test": ""
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    
  },
  lifetimes: {
    attached: function() {
      console.log(this.data.msg_item);
    },
    created: function() {
      console.log(this.data.msg_item);
    }
  }
})
