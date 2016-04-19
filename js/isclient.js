(function(){
	var u = navigator.userAgent.toLowerCase();
	return version = {
		//移动终端浏览器版本信息
    trident: u.indexOf('trident') > -1, //IE内核  
    presto: u.indexOf('presto') > -1, //opera内核  
    webkit: u.indexOf('applewebkit') > -1, //苹果、谷歌内核  
    gecko: u.indexOf('gecko') > -1 && u.indexOf('khtml') == -1, //火狐内核  
    mobile: !!u.match(/applewebkit.*mobile.*/), //是否为移动终端  
    ios: !!u.match(/\(i[^;]+;( u;)? cpu.+mac os x/), //ios终端  
    android: u.indexOf('android') > -1 || u.indexOf('linux') > -1, //android终端或者uc浏览器  
    iPhone: u.indexOf('iphone') > -1 , //是否为iPhone或者QQHD浏览器  
    iPad: u.indexOf('ipad') > -1, //是否iPad    
    webApp: u.indexOf('safari') == -1, //是否web应该程序，没有头部与底部  
    wx :!u.indexOf('micromessenger')==-1 // 是否是微信内核	 
	}
})();