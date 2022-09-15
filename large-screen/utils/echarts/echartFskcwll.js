class EchartFskcwll extends EchartsMain{
  constructor(...argumentsList){
    super(...argumentsList)
  }
  getOption(){
    this.dataDict=[0,2000,2600,3000,3700,5000,7000,10000];
    let {data,dataMap}=this.getData();
    return {
      legend: 
        {
            orient: 'vertical',
            itemWidth:10,
            itemHeight:10,
            left:'40%',
            top:'10%',
            // 文字块背景色，一定要加上，否则对齐不会生效
            backgroundColor: "transparent", 
            formatter:function(a) {
                        return `{a|${a}}{b|${dataMap[a]}吨}`
            },
            textStyle: {
                fontSize:12,
                height:20,
                lineHeight:20,
                rich: {
                  a: {
                    width:70,
                    align:'left',
                  },
                  b: {
                    width: 70,
                    align:'right'
                  },
                },
              }
          },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          left:'-60%',
          radius:'90%',
          data: data,
          label:{
            position:'inner',
            formatter:'{d}%'
          },
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        }
      ]
    };
    
  }

  getData() {
    let data=[];
    let dataMap={};
    for(let i = 1; i <= this.dataDict.length; i++) {
        let num = (Math.random() * Math.random()*10000).toFixed(2)
        if(i===this.dataDict.length){
            data.push({value:num,name:'10000以上'})
            dataMap['10000以上']=num;
        }else{
            data.push({value:num,name:`${this.dataDict[i-1]}~${this.dataDict[i]}`})
            dataMap[`${this.dataDict[i-1]}~${this.dataDict[i]}`]=num;
        }
    }
    
    return {data,dataMap};
  }

}

let echartFskcwll=new EchartFskcwll('echartFskcwll');
echartsList.push(echartFskcwll);

let radioFskcwll=document.querySelector('#radioFskcwll');
radioFskcwll.addEventListener('chage',event=>{
  let [value]=event.detail;
  console.log(event.detail);
  echartFskcwll.setOption(echartFskcwll.getOption())
})
