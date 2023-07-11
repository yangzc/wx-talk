// components/msg-item/index.js
Component({
      /**
       * 组件的属性列表
       */
      properties: {
        "value": { //消息数据，以json形式传递
          type: JSON,
          value: {
            "id": "", //唯一ID
            "align": "left", //对齐方式
            "name": "", //名字
            "head_src": "", //头像
            "type": "text", //类型
            "dt": {} //扩充数据
          },
            observer: function (newVal, oldVal) {}
          },
        },

        /**
         * 组件的初始数据
         */
        data: {},

        /**
         * 组件的方法列表
         */
        methods: {
          setupData: function () {
            console.log("setupData", "msgItem is", JSON.stringify(this.data.value));

          },
        },
        lifetimes: {
          created: function () { // 组件实例创建时调用
            // console.log("msgItem", JSON.stringify(this.data.value));
            // var msgItem = JSON.parse(this.data.msg_item);
          },
          attached: function () { // 进入节点树
            // console.log(this.data.msg_item);
            // console.log("msgItem", JSON.stringify(this.data.value));
          },
          ready: function () { //组件布局完成

          },
          moved: function () { // 移动节点

          },
          detached: function () { // 节点树被移除

          },
          error: function () { // 当前组件异常

          }
        }
      })