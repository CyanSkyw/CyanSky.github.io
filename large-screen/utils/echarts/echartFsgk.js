class EchartFsgk extends EchartsMain{
  constructor(...argumentsList){
    super(...argumentsList)
  }
  getOption(){
    return {
      grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top: '5%',
        containLabel: true
      },
      tooltip: { //提示框组件。
        trigger: 'axis',
        transitionDuration: 1, //提示框移动动画过渡时间,s
        borderWidth: '1px',
        borderRadius: '4',
        borderColor: '#00B2AC',
        textStyle: {
            color: '#fff'
        },
        position: ['60%', '0'],
        padding: [5, 10],
        extraCssText:'background: linear-gradient(175deg,#96c5f1,#3271ea);',
    },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: [1,2,3,4,5,6,7,8,9,10,11,12],
        axisLabel: {
          show: true,
          formatter: '{value} 月',
          textStyle: {
            color: '#8196cd'
          },
        },
        axisLine: {
          show : false
        },
        axisTick:{
          show:false
        }
      }],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            align:'right',
          },
          axisLine: {
            show : false
          },
          splitLine: {     //网格线
            "show": false
          },
          axisLabel: {
            textStyle: {
              color: '#8196cd'
            }
          }
        }
      ],
      series: [
        {
          name: '目标值',
          type: 'bar',
          data: this.getData(),
          barCategoryGap:'50%',
          itemStyle:{
            color:{
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                  offset: 0, color: 'rgba(12, 160, 204,1)' // 0% 处的颜色
              }, {
                  offset: 1, color: 'rgba(12, 160, 204,0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        },
      ]
    }
  }

  getData() {
    let data = [];
    for (let i = 0; i < 12; i++) {
      let num = (Math.random() * Math.random() * 10000).toFixed(2)
      data.push(num);
    }
    return data;
  }  
}
let echartFsgk=new EchartFsgk('echartFsgk')

echartsList.push(echartFsgk);


  