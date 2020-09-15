// components/l-nav/l-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    text:{
      type:String,
      value:''
    }
  },
  options:{
    // styleIsolation:"isolated"//不会相互影响
    styleIsolation:"apply-shared"//会相互影响
  },
  externalClasses:[],
  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    fatherChange(){
      this.triggerEvent("ChildLetMeChange",{"text":"孩子让我改变的"},{})
    }
  }
})
