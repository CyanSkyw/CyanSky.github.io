class EchartCzfh extends EchartsMain{
  constructor(...argumentslist){
    super(...argumentslist)
    // this.setResize()
  }
  getOption(){
    return {
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
      legend: {
        left: 'left',
        itemWidth:16,
        itemHeight:10,
        data: ['填埋', '焚烧'],
      },
      grid: {
        left: '0',
        right: '0',
        bottom: '0',
        top:'20%',
        containLabel: true
      },
      xAxis:[{
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
            lineStyle:{
               color:'#243549'
            }
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
          name: '填埋',
          type: 'line',
          stack: 'Total',
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(2, 128, 246)'
              },
              {
                offset: 1,
                color: 'rgba(2, 128, 246,.2)'
              }
            ])
          },
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: this.getData()
        },
        {
          name: '焚烧',
          type: 'line',
          stack: 'Total',
          areaStyle: {
            opacity: 0.8,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: 'rgb(224, 89, 48)'
              },
              {
                offset: 1,
                color: 'rgba(224, 89, 48,.2)'
              }
            ])
          },
          smooth: true,
          emphasis: {
            focus: 'series'
          },
          data: this.getData()
        },
      ],
      color:[ '#0280f6','#e05930', '#fac858', '#ee6666', '#73c0de', '#3ba272', '#fc8452', '#9a60b4', '#ea7ccc']
    };
    
  }
  getData(){
      let data = [];
      for (let i = 0; i < 12; i++) {
        let num = (Math.random() * Math.random() * 10000).toFixed(2)
        data.push(num);
      }
      return data;
  }
}

let echartCzfh=new EchartCzfh('echartCzfh');
echartsList.push(echartCzfh);
