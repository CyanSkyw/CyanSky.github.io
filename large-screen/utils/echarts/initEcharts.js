let optionsMap=new Map();
function initEcharts(elemet,option){
    // debugger;
    let myChart = echarts.init(elemet);
    option && myChart.setOption(option);
    console.log(elemet.id);
    optionsMap.set(elemet.id,option)
    
}
window.addEventListener('resize', resize)

function resize() {
        let chartDom =document.querySelectorAll("[ data-toggle='echarts']")
        chartDom.forEach(domItem=>{
            let myChart=echarts.getInstanceByDom(domItem)
            myChart.setOption(optionsMap.get(domItem.id))
            myChart.resize();
        })
}
