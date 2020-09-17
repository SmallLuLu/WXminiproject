// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array:["北京",'上海','广州','通州'],
    index:0,
    mulIndex:[0,0,0],
    mularray:[
      ['水饺', '面条','稀饭'], ['猪肉大葱馅', '韭菜鸡蛋馅', '羊肉馅', '芹菜馅'], ['酸汤', '蘸酱']
    ],
    tiemPicker:'00:00',
    datePicker:'1990-01-01',
    regionPicker:['广东省', '广州市', '海珠区'],
    customItem:"全部"
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (event) {
    console.log(event)
  },
  buttonGetInfo(event){
    console.log(event)
  },
  buttonGetPhone(event){
    console.log(event)
  },
  bindeChange(event){
    console.log(event)
  },
  CheckboxChange(event){
    console.log(event)
  },
  RadioChange(event){
    console.log(event)
  },
  bindPickerChange(event){
    console.log(event)
    this.setData({
      index:event.detail.value
    })
  },
  bindmulPickerChange(e){
    console.log(e)
  },
  bindcolumnchange(e){
    console.log(e);
    let data={
      mularray:this.data.mularray,
      mulIndex:this.data.mulIndex
    };
    let column=e.detail.column;
    let value=e.detail.value;
    switch(column){
      case 0:
        data.mulIndex[0]=0;
        switch(value){
          case 0:
            data.mularray[1]=['猪肉大葱馅', '韭菜鸡蛋馅', '羊肉馅', '芹菜馅'];
            data.mularray[2]=['酸汤', '蘸酱'];
            break;
          case 1:
            data.mularray[1]=['稀面条',"捞面"];
            data.mularray[2]=['青菜',"香菜"];
            break;
          case 2:
            data.mularray[1]=['玉米粥',"小米粥","大米粥"];
            data.mularray[2]=['咸的',"甜的"];
            break;
        }
      // case 1:
      //   data.mulIndex[0]=1;
      //   break;
      // case 2:
      //   data.mulIndex[0]=2;
      //   break;
    }
    this.setData({
      mularray:data.mularray
    })
  },
  timePickerChange(e){
    console.log(e)
    this.setData({
      tiemPicker:e.detail.value
    })
  },
  dataPickerChange(e){
    this.setData({
      datePicker:e.detail.value
    })
  },
  regionPickerChange(e){
    console.log(e)
    this.setData({
      regionPicker:e.detail.value
    })
  }
})