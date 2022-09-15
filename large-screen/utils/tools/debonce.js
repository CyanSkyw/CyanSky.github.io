//防抖
function debounce(fn, delay) {
    const delays = delay || 500;
    let timer;
    return function () {
      const th = this;
      const args = arguments;
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        timer = null;
        fn.apply(th, args);
      }, delays);
    };
}