class EchartFscbzc extends EchartsMain{
  
  

  constructor(...argumentsList){
    super(...argumentsList);
  }
  
  getOption(){
    this.nameDict=['燃料费','电费','主要材料','水费','环保材料','运输装卸费','其他'];
    this.staticData=[15,15,15,15,15,12,13];
    return {
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            center:['50%','50%'],
            radius: ['10%', '80%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 3
            },
            left:'left',
            label:{
              formatter: '{b}:\n{c}%',
              textBorderColor:'#000'
            },
            data: this.getData()
          }
        ]
      };
  }

  getData() {
    let data = [];
    console.log(this);
    console.log(this.nameDict);
    for (let i = 0; i < this.nameDict.length; i++) {
        let item={ name: this.nameDict[i], value:this.staticData[i]};
        data.push(item);
    }
    return data;
  }

}

let echartFscbzc=new EchartFscbzc('echartFscbzc')
echartsList.push(echartFscbzc);


let fscbzcDropDown=document.querySelector('#fscbzcDropDown');
fscbzcDropDown.addEventListener('select',(event)=>{
    let [text]=event.detail;
    echartFscbzc.setOption(echartFscbzc.getOption());
    console.log(text);
})

