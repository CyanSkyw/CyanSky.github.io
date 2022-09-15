
class EchartMap extends EchartsMain{
    constructor(...argumentsList){
        super(...argumentsList)
    }
    getOption(){
        console.log()
        let [mapData,barData] = this.getData(this.map);
        return {
            tooltip: {
                trigger: 'item',
            },
            // dataRange: {
            //     orient: 'horizontal',
            //     splitList: [
            //         { start: 0, end: 50, color: "rgba(139, 222, 218,0.5)" },
            //         { start: 50, end: 100, color: "rgba(67, 173, 208,0.5)" },
            //         { start: 100, end: 200, color: "rgba(153, 142, 224,0.5)" },
            //         { start: 200, end: 400, color: "rgba(239, 147, 147,0.5)" }
            //     ],
            //     itemGap: 50,
            // },
            geo3D:{
                show:false,
                map: 'jiangsu',
                viewControl: {
                    distance: 110,
                },
                left:'-35%',
                bottom:'20%',
                light: {
                    main: {
                      shadow: true,
                      intensity: 2
                    },
                  }
            },
            
            // legend:{
            //     show:true,
            //     left:'left',
            //     bottom:0,
            //     orient:'horizontal',
            //     data:{
            //         name:'Nightingale Chart'
            //     }
            // },
            visualMap: {
                max: 400,
                calculable: true,
                realtime: false,
                inRange: {
                  color: [
                    '#313695',
                    '#4575b4',
                    '#74add1',
                    '#abd9e9',
                    '#e0f3f8',
                    '#ffffbf',
                    '#fee090',
                    '#fdae61',
                    '#f46d43',
                    '#d73027',
                    '#a50026'
                  ]
                },
                outOfRange: {
                  colorAlpha: 0
                }
              },
            series: [
                {
                    name: 'map',
                    type: 'map3D',
                    map: 'jiangsu',
                    data: mapData,
                    viewControl: {
                        distance: 110,
                    },
                    tooltip: { //提示框组件。
                        enterable: true, //鼠标是否可进入提示框
                        transitionDuration: 1, //提示框移动动画过渡时间,
                        formatter: function (params) {
                            if (params.name) {
                                let str = `
                                <div class="map-tooltip">
                                  <div class="city-name">${params.name}</div>
                                  <div class="city-info">${params.value}</div>
                                </div>
                                `
                                return str;
                            }
                        },
                        backgroundColor: 'rgba(30, 54, 124,1)',
                        borderWidth: '1px',
                        borderRadius: '4',
                        borderColor: '#00B2AC',
                        textStyle: {
                            color: 'rgba(255,255,255,1)'
                        },
                        padding: [5, 10]
                    },
                    left:'-35%',
                    bottom:'20%',
                    emphasis:{
                        label:{
                            show:true,
                            textStyle:{
                                color:'#fff'
                            }
                        }
                    }
                },
                {
                    type: 'bar3D',
                    coordinateSystem: 'geo3D',
                    shading: 'lambert',
                    data: barData,
                    barSize: 3  ,
                    minHeight: 0.2,
                    silent: true,
                    itemStyle: {
                      color: 'orange'
                      // opacity: 0.8
                    }
                  }
            ]
        }
    }
    getData(map) {
        let mapData = [];
        let barData = [];

        for (let i = 0; i < map.features.length; i++) {
            let num = Math.round(Math.random() * Math.random() * 800)
            if (!map.features[i].properties) {
                console.log(map.features[i])
            } else {
                barData.push({ "name": map.features[i].properties.name, "value": [...map.features[i].properties.center,num] });
                mapData.push({ "name": map.features[i].properties.name, "value": num });
            }
        }
        return [mapData,barData];
    }

    registerMap(geoJson){
        this.map=geoJson;
        echarts.registerMap('jiangsu', this.map);
    }
}

let echartMap=new EchartMap(); 
$.getJSON('../utils/map/jiangsusheng.json', function (geoJson) {
    echartMap.registerMap(geoJson)
    echartMap.initEcharts('echartMap')
    echartsList.push(echartMap);
})
