// pages/pai/pai.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      navlist:[],
      num:0,
      arr:[]
  },
  click:function(e){
    this.setData({
      num: e.currentTarget.dataset.index
    })
    wx.request({
      url: 'https://api.apiopen.top/musicRankings',
      success: (res) => {
        this.setData({
          arr: res.data.result[this.data.num].content
        })
        console.log(this.data.arr)
      }
    })
    // console.log(e.currentTarget.dataset.index)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      wx.request({
        url: 'https://api.apiopen.top/musicRankings',
        success:(res)=>{
          this.setData({
            navlist: res.data.result,
            arr: res.data.result[this.data.num].content
          })
          console.log(this.data.arr)
        }
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})