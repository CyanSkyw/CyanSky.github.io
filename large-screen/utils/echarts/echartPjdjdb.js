class EchartPjdjdb extends EchartsMain{
  constructor(...argumentsList){
    super(...argumentsList)
  }
  getOption(){
    return {
      legend: {
        left: 'left',
        itemWidth:16,
        itemHeight:8,
        data: ['新签焚烧', '新签填埋', '库存焚烧', '库存填埋'],
      },
      grid: {
        left: '6%',
        right: '6%',
        bottom: '0',
        top: '20%',
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
        valueFormatter: function (value) {
          return value + ' 元';
        },
        position: ['60%', '20%'],
        padding: [5, 10],
        extraCssText:'background: linear-gradient(175deg,#96c5f1,#3271ea);',
    },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: this.getDataMap(),
        axisLabel: {
          show: true,
          textStyle: {
            color: '#8196cd'
          }
        },
        axisLine: {
          show : false
        },
        axisTick:{
          show:false
        }
      },
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            show:false
          },
          axisLine: {
            show : false
          },
          splitLine: {     //网格线
            lineStyle:{
               color:'#243549'
            }
          }
        }
      ],
      series: [
        {
          name: '新签焚烧',
          type: 'line',
          stack: 'Total',
          data: this.getData()
        },
        {
          name: '新签填埋',
          type: 'line',
          stack: 'Total',
          data: this.getData()
        },
        {
          name: '库存焚烧',
          type: 'line',
          stack: 'Total',
          data: this.getData()
        },
        {
          name: '库存填埋',
          type: 'line',
          stack: 'Total',
          data: this.getData()
        }
      ]
    }
  }

getData() {
  let data = [];
  for (let i = 1; i <= 30; i++) {
    let num = (Math.random() * Math.random() * 10000).toFixed(2)
    data.push(num);
  }
  return data;
}
getDataMap() {
  let dataMap = [];
  let now = new Date();
  for (let i = 1; i <= 31; i++) {
    let date = now - i * 86400000;
    let dateStr = formatDate(new Date(date), 'YYYY-mm-dd')
    dataMap.push(dateStr);
  }
  return dataMap.reverse();
}

}

let echartPjdjdb = new EchartPjdjdb('echartPjdjdb')
echartsList.push(echartPjdjdb);
