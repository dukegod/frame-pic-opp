// 可以在pc上和在手机上转换
var TouchEvents = {
    touchstart: "touchstart",
    touchmove: "touchmove",
    touchend: "touchend",
    init: function () {       
        this.touchstart = "mousedown";
        this.touchmove = "mousemove";
        this.touchend = "mouseup";      
    }
};
//  执行函数
TouchEvents.init();
