class EchartsMain{
    constructor(elementId,option){
        if(elementId!==undefined){
            this.initEcharts(elementId);
        }
    }

    //获取图表目标元素
    getElement(){
        return document.getElementById(this.elementId);
    }

    getChart(){
        return echarts.getInstanceByDom(this.getElement());
    }

    getOption(){}

    setOption(option){
        option && this.getChart().setOption(option);
    }
    //设置自适应
    setResize(){
        window.addEventListener("resize", this.debounce(this.resizeCallback));
    }
    //注册
    initEcharts(elementId,...argumentsList){
        if(elementId!==undefined){
            this.elementId=elementId;
        }
        if(this.elementId!==undefined){
            if(!this.getChart()){
                echarts.init(this.getElement());
                // this.setResize();
            }
            this.setOption(this.getOption(argumentsList));
            
        }
    // debugger;
    }

    //自适应回调
    resizeCallback(){
        this.getChart().resize();
    }

    //防抖
    debounce(fn, delay) {
        const delays = delay || 500;
        let timer;
        const _this = this;
        return function (...argumentsList) {
          if (timer) {
            clearTimeout(timer);
          }
          timer = setTimeout(function () {
            fn.apply(_this, argumentsList);
            clearTimeout(timer);
          }, delays);
        };
    }
}

let echartsList=[];

let mainYearSelecter=document.querySelector('#mainYearDropDown');
mainYearSelecter.addEventListener('select',(event)=>{
    let wrap=document.querySelector('.container');
    let loading= new Loading({type:'neon',wrap,mask:true})
    loading.showLoading();
    setTimeout(()=>{
        loading.hideLoading();
        let [text]=event.detail;
        for(let item of echartsList){
            item.getChart().showLoading({
                text: 'loading',
                color: '#c23531',
                textColor: '#000',
                maskColor: 'rgba(0,0,0, 0)',
                zlevel: 0,
              });
            // debugger;
            setTimeout(()=>{
                item.setOption(item.getOption());
                item.getChart().hideLoading();
            },2000)
        }
        console.log(text);
    },5000)
    
})