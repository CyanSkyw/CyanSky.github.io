function setScale(width,height) {
    let scaleBox = document.getElementById('scaleBox')
    if (scaleBox) {
        resetScroll(getScale(width,height));
        scaleBox.style.setProperty("--scale",getScale(width,height));
            window.addEventListener("resize", debounce(() => {
                console.log(scaleBox);
                scaleBox.style.setProperty("--scale",getScale(width,height));
                resetScroll(getScale(width,height));
            }
        ));
        
    }
}



function getScale(w,h) {
    // 固定好16：9的宽高比，计算出最合适的缩放比
    // debugger
    let width=w?w:1920, height=h?h:1080
    const wh = window.innerHeight / height;
    const ww = window.innerWidth / width;
    return ww < wh ? ww : wh;
}

setScale(1920,1080);
