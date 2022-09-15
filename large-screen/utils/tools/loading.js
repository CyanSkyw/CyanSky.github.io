class Loading{
    constructor(config) {
        this.type = config.type || 'circle';
        this.tipLabel = config.tipLabel || "loading...";
        this.wrap = config.wrap || document.body;
        this.loadingWrapper = null;
        this.mask=config.mask||false;
        
    }

    showLoading() {
        // loading wrap的子盒子，即整个loading的内容盒子
        var loadingWrapper = document.createElement('div');
        loadingWrapper.className = 'loading-wrapper';
        // loading type对应的不同的动画
        var loadingView = document.createElement('div');
        loadingView.className = 'loading-view';
        // loading 内的文本标签
        var tipView = document.createElement('div');
        tipView.className = 'tip-view';
        tipView.innerText = this.tipLabel;
        // 对 loading type的三种情形进行判断
        switch (this.type) {
            case 'circle':
                html = `
                    <div class="container1">
                        <div class="circle circle1"></div>
                        <div class="circle circle2"></div>
                        <div class="circle circle3"></div>
                        <div class="circle circle4"></div>
                    </div>
                    <div class="container2">
                        <div class="circle circle1"></div>
                        <div class="circle circle2"></div>
                        <div class="circle circle3"></div>
                        <div class="circle circle4"></div>
                    </div>
                `;
                loadingView.innerHTML = html;
                break;
            case 'bounce':
                var html = `
                    <div class="bounce-view">
                        <div class="bounce bounce1"></div>
                        <div class="bounce bounce2"></div>
                        <div class="bounce bounce3"></div>
                    </div>
               `;
                loadingView.innerHTML = html;
                break;
            case 'wave':
                var html = `
                    <div class="wave">
                        <div class="react react1"></div>
                        <div class="react react2"></div>
                        <div class="react react3"></div>
                        <div class="react react4"></div>
                        <div class="react react5"></div>
                    </div>
               `;
                loadingView.innerHTML = html;
                break;
            case 'neon':
                loadingView.classList.add('neon');
                loadingView.appendChild(tipView);
                break;
            default:
                break;
        }
    
        loadingWrapper.appendChild(loadingView);
        if(this.type!=='neon'){
            loadingWrapper.appendChild(tipView);
        }
        
        if(this.mask){
            var mask = document.createElement('div');
            mask.className = 'loading-mask';
            mask.appendChild(loadingWrapper);
            this.wrap.appendChild(mask);
            this.loadingWrapper = mask;
        }else{
            this.wrap.appendChild(loadingWrapper);
            this.loadingWrapper = loadingWrapper;
        }
    }

    hideLoading(){
        this.wrap.removeChild(this.loadingWrapper);
    }
}
