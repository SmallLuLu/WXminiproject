Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:'张三'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad')
    console.log(options)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady')
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
    let pages=getCurrentPages();
    console.log(pages)
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log('onHide')
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log('onUnload')
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh')
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom')
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('onShareAppMessage')
  },
  /**
   * 页面滚动时执行
   */
  onPageScroll(event){
    console.log('PageScroll')
    console.log(event)
  },
  onResize(){
    console.log('Resize')
  },
  /**
   * 当前是 tab 页时，点击 tab 时触发
   */
  onTabItemTap(item){
    console.log(item)
  },
  /**
   * 当前页面分享到朋友圈
   */
  onShareTimeline(object){
    console.log(object)
    return{
      title:"分享一下",
      query:'/page/user?id=123'
    }
  },
  onAddToFavorites(res){
    console.log(res)
    return {
      title:'收藏的测试'
    }
  },
  lNavtextChange(){
    if(this.data.text=="张三"){
      this.setData({
        "text":"李四"
      })
    }else{
      this.setData({
        "text":"张三"
      })
    }
    
  },
  ChildLetMeChange(event){
    console.log(event)
    this.setData({
      "text":event.detail.text
    })
  }
})