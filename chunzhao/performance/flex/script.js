function measureRenderTime() {
    // 性能优化API  performance  性能
    const startTime = performance.now(); // Start time
    //主线程idle(空闲) 微任务
    const  firstElement = document.querySelector('.flex-item');
    const checkFirstRendered = setInterval(() =>  {
        //怎样表示 firstElement已经渲染完成了？
        // offsetTop  是元素相对于视口的距离  offsetHeight 是元素的高度
        if(firstElement.offsetHeight > 0 && firstElement.offsetWidth > 0){
            clearInterval(checkFirstRendered); // Stop checking
            const firstRenderTime = performance.now() - startTime; // Calculate render time 
            console.log(`第一个元素渲染完成时间：${firstRenderTime}ms`)
        }
    },50)
}
measureRenderTime();