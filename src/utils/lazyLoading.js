import preLoad from "./preLoading";
const LazyLoad = {
  // install方法
  install(app) {
    app.directive('lazy', {
      mounted(el) {
        LazyLoad.listenerScroll(el);
      }
    })
  },
  // 监听scroll事件
  listenerScroll(el) {
    const handler = LazyLoad.throttle(LazyLoad.checking, 300);
    LazyLoad.checking(el);
    window.addEventListener('scroll', () => {
      handler(el)
    })
  },
  // 加载store中的图片
  checking(el) {
    const windowHeight = document.documentElement.clientHeight
    const elTop = el.getBoundingClientRect().top
    const elBtm = el.getBoundingClientRect().bottom
    const realSrc = el.dataset.src
    if (realSrc != el.src && elTop - (windowHeight+50) < 0 && elBtm > 0) {
      preLoad([realSrc]).then(()=>{
        el.src = realSrc;
      })
    }
  },
  // 节流
  throttle(fn, delay) {
    let prevTime = 0;
    return function (...args) {
      const currTime = Date.now()
      if (currTime - prevTime >= delay) {
        prevTime = currTime;
        fn.apply(this, args);
      }
    }
  },
}

export default LazyLoad