class EchartKhhy extends EchartsMain {
  constructor(...argumentsList) {
    super(...argumentsList)
  }
  getOption() {
    this.nameDict = ['制造业', '化工', '农药', '医药', '仓储码头', '互联网', '电商', '新媒体'];
    this.staticData = [32.7, 4, 16.4, 14.3, 14.3, 14.3, 4]
    return {
      title: {
        show: true,
        text: "客户行业",
        textStyle: {
          fontSize: 14,
          width: 60,
          overflow: "truncate"
        },
        left: '54%',
        top: '53%',
        textAlign: 'center',
      },
      series: [
        {
          name: 'Nightingale Chart',
          type: 'pie',
          center: ['55%', '50%'],
          radius: ['50%', '65%'],
          itemStyle: {
            borderRadius: 3
          },
          top: '20%',
          left: 'left',
          label: {
            formatter: '{b}:\n{c}%',
            textBorderColor:'black'
          },
          data: this.getData()
        }
      ]
    };
  }

  getData() {
    let data = [];
    let sum = 100;
    for (let i = 0; i < this.nameDict.length; i++) {
      let item = { "name": this.nameDict[i], "value": this.staticData[i], label: { show: this.staticData[i] > 10 } };
      data.push(item);
    }
    console.log(data);
    return data;
  }
}

let echartKhhy =new EchartKhhy('echartKhhy');
echartsList.push(echartKhhy);
