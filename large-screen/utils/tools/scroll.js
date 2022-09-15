class ScaleBox{
    constructor(element, speed, suspend, duration, touch){
        this.height = element.scrollHeight||0;
        this.element=element||null;
        this.speed=speed||0;
        this.suspend=suspend||0;
        this.duration=duration||0;
        this.touch=touch||false;
        this.roll();
    }
    roll() {
        this.trans = setInterval(() => {
            //获取当前滚动条高度
            if (this.element.scrollTop >= this.height) {
                clearInterval(this.trans);
            }
            let firstChild = this.element.children[0].cloneNode(true);
            let secondChild = this.element.children[1].cloneNode(true);
            this.element.appendChild(firstChild);
            this.element.appendChild(secondChild);
            // 1、前两秒先移动20px 一行的距离  设置过渡为2秒
            this.scroll = setInterval(() => {
                // debugger
                this.element.scrollTop += this.speed;
            }, 50)
            // 2、最后一秒执行 list 头部删除一个 尾部添加一个
            this.pause=setTimeout(() => {
                clearInterval(this.scroll);
                this.element.removeChild(this.element.children[0]);
                this.element.removeChild(this.element.children[0]);
            }, this.suspend);
        }, this.suspend+this.duration)
        if(this.touch){
            this.element.addEventListener('mouseover',()=>{this.stop();})
            this.element.addEventListener('mouseout',()=>{this.goOn();})
        }
    }
    reset(speed, suspend, duration, touch){
        this.speed=speed||0;
        this.suspend=suspend||0;
        this.duration=duration||0;
        this.touch=touch||false;
        clearInterval(this.trans);
        this.roll();
    }

    stop(){
        if(this.trans){
            clearInterval(this.trans);
            clearInterval(this.scroll);
            clearTimeout(this.pause);
        };

    }
    goOn(){
        clearInterval(this.trans);
        clearInterval(this.scroll);
        clearTimeout(this.pause);

        this.roll();
    }

}

let ScrollList= document.querySelectorAll("[autoScroll='true']")
let ScrollObjList =[]
for (let i = 0; i < ScrollList.length; i++) {
    ScrollObjList.push(new ScaleBox(ScrollList[i], 2, 2000, 1000, true))
    
}

function resetScroll(zoom){
    if(zoom>1){
        for(let item of ScrollObjList){
            item.reset(2*zoom, 2000, 1000, true)
        }
    }else{
        for(let item of ScrollObjList){
            item.reset(2, 2000, 1000, true)
        }
    }
}