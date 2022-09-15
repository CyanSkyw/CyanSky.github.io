class Shake{
    constructor(ele){
        this.element=ele;
        this.init();
    }
    init(){
        let div=document.createElement('div');
        div.classList.add('glitch');
        let eleRoot=this.element.cloneNode(true);
        let elClone=this.element.cloneNode(true);
        eleRoot.classList.add('glitch-root');
        elClone.classList.add('glitch-clone');
        let parent=this.element.parentNode;
        div.appendChild(eleRoot);
        div.appendChild(elClone);
        parent.appendChild(div);
        this.element.remove();
    }
}

shakeEleList=document.querySelectorAll('[glitch=true]');
// debugger
shakeList=[]
for(let item of shakeEleList){
    shakeList.push(new Shake(item));
}
