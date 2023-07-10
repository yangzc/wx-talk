// components/msg-item-text/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    "align": {
      type: String,
      value: "left"
    },
    "name": {
      type: String,
      value: "十里桂花"
    },
    "head_src": {
      type: String,
      value: "https://img0.baidu.com/it/u=1752903520,1572100722&fm=253&fmt=auto&app=138&f=JPEG?w=521&h=500"
    },
    "dt": {
      type: JSON,
      value: {
        "text": ""
      }
    }
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
      console.log("lifetimes===>", JSON.stringify(this.data))
    }
  }
})
