/*
*用来判断设备的类型
*然后执行不同的函数
*/
//可以在pc上和在手机上转换
var TouchEvents = {
    touchstart: "touchstart",
    touchmove: "touchmove",
    touchend: "touchend",
    init: function () {       
        this.touchstart = "mousedown";
        this.touchmove = "mousemove";
        this.touchend = "mouseup";
        console.log(event);       
    }
};

var TouchEvents2 = {
    mousedown: "mousedown",
    mousemove: "mousemove",
    mouseup: "mouseup",
    init: function () {       
        this.mousedown = "touchstart";
        this.mousemove = "touchmove";
        this.mouseup = "touchend";
        console.log(this);       
    }
};


//判断是否是移动或是web
var engine={  
    versions:function(){   
       var u = navigator.userAgent;
       var app = navigator.appVersion;
       return {
          //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核  
            presto: u.indexOf('Presto') > -1, //opera内核  
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器  
            iPad: u.indexOf('iPad') > -1, //是否iPad    
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
        };  
     }(),  
    language:(navigator.engineLanguage || navigator.language).toLowerCase()  
}   
  
if(engine.versions.mobile || engine.versions.ios || engine.versions.android ||   
  engine.versions.iPhone || engine.versions.iPad){
      console.log("移动设备")
  }else{
    console.log("web application");
}


// 判断是不是微信内核

function is_weixin(){
    var ua = navigator.userAgent.toLowerCase();
    var version = {
        and : ua.indexOf('android') > -1 || ua.indexOf('linux') > -1,
        ios : !!ua.match(/\(i[^;]+;( u;)? cpu.+mac os x/),
        wx : ua.match(/MicroMessenger/i)=='micromessenger'
    }   
    
    var iphone = 'imgs/iPhoneWeixinShareNoOpen.png';
    var android = 'imgs/andriod-tip.jpg';
    
    function showImg(src){
        var zepId = $('#href');
        var imgsrc = src;
        $('#section img').attr('src',imgsrc);
        zepId.on('touchstart',function(){
            $('#section').show();
        })
    }
    
    if(version.wx){
        console.log('wx');
        if(version.ios){
            console.log("ios");
            showImg(iphone);
        }else if(version.and){
            console.log("and");
            showImg(android);
        };
    }else{
        console.log('common use')
    }
}










