class EchartNdgyczl extends EchartsMain {
  constructor(...argumentsList) {
    super(...argumentsList)
  }
  getOption() {
    const wcz=this.getData(),mbz=this.getData(),qntqljz=this.getData();
    return {
      color: ['#0dfcfb', '#22cbf6', '#f79d39', '#0083fd', '#ffdd66'],
      legend: {
        left: 'left',
        itemWidth: 16,
        itemHeight: 8,
        data: ['目标值', '完成值', '去年同期累计值', '目标完成率', '同比增减率']
      },
      grid: {
        left: '0',
        right: '0',
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
        position: ['60%', '0'],
        padding: [5, 10],
        extraCssText: 'background: linear-gradient(175deg,#96c5f1,#3271ea);',
      },
      xAxis: [{
        type: 'category',
        boundaryGap: true,
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        axisLabel: {
          show: true,
          formatter: '{value} 月',
          textStyle: {
            color: '#8196cd'
          },
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            align: 'right',
          },
          axisLine: {
            show: false
          },
          splitLine: {     //网格线
            "show": false
          },
          axisLabel: {
            textStyle: {
              color: '#8196cd'
            }
          }
        },
        {
          type: 'value',
          axisLabel: {
            formatter: '{value} %',
            textStyle: {
              color: '#8196cd'
            }
          },
          axisLine: {
            show: false
          },
          splitLine: {     //网格线
            "show": false
          }
        }
      ],
      series: [
        {
          name: '目标值',
          type: 'bar',
          data: mbz,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' 吨';
            }
          },
        },
        {
          name: '完成值',
          type: 'bar',
          data: wcz,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' 吨';
            }
          },
        },
        {
          name: '去年同期累计值',
          type: 'bar',
          data: qntqljz,
          tooltip: {
            valueFormatter: function (value) {
              return value + ' 吨';
            }
          },
        },
        {
          name: '目标完成率',
          yAxisIndex: 1,
          type: 'line',
          data: this.getCompletionRate(wcz,mbz),
          tooltip: {
            valueFormatter: function (value) {
              return value + ' %';
            }
          },
        },
        {
          name: '同比增减率',
          type: 'line',
          data: this.getIncreaseRate(wcz,qntqljz),
          tooltip: {
            valueFormatter: function (value) {
              return value + ' %';
            }
          },
        },

      ]
    }

  }

  getData() {
    let data = [];
    for (let i = 0; i < 12; i++) {
      let num = (Math.random() * Math.random() * 100000).toFixed(2)
      data.push(num);
    }
    return data;
  }
  getCompletionRate(wcz,mbz){
    let data = [];
    for (let i = 0; i < wcz.length; i++) {
      if(mbz[i]>0){
        data.push((wcz[i]/mbz[i]*100).toFixed(2));
      }else{
        data.push(0);
      }
    }
    console.log(data);
    return data;
  }
  
  getIncreaseRate(wcz,qntqljz){
    let data = [];
    for (let i = 0; i < wcz.length; i++) {
      if(qntqljz[i]>0){
        data.push((wcz[i]-qntqljz[i]/qntqljz[i]*100).toFixed(2));
      }else{
        data.push(0);
      }
    }
    console.log(data);
    return data;
  }

}
let echartNdgyczl=new EchartNdgyczl('echartNdgyczl');
echartsList.push(echartNdgyczl);


let ndgyczlDropDown=document.querySelector('#ndgyczlDropDown');
ndgyczlDropDown.addEventListener('select',(event)=>{
    let [text]=event.detail;
    echartNdgyczl.setOption(echartNdgyczl.getOption());
    console.log(text);
})
