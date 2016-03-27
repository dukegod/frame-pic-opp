//滑动事件
var slideFunc= function(){
	//全局变量，触摸开始位置  
    var startX = 0,
        startY = 0;  
    //touchstart事件  
    function touchSatrtFunc(evt) {  
        try{  
            evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
            console.log(evt);  
            var touch = evt.touches[0]; //获取第一个触点  
            var x = Number(touch.pageX); //页面触点X坐标  
            var y = Number(touch.pageY); //页面触点Y坐标  
            //记录触点初始位置  
            startX = x;  
            startY = y;  
            var text = 'TouchStart事件触发：（' + x + ', ' + y + '）';  
            console.log(text);
           }  
        catch (e) {  
            console.log('touchSatrtFunc：' + e.message);  
    	}  
    }
    //touchmove事件，这个事件无法获取坐标  
    function touchMoveFunc(evt) {  
        try{  
            //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等 
             console.log(evt);   
            var touch = evt.touches[0]; //获取第一个触点  
            var x = Number(touch.pageX); //页面触点X坐标  
            var y = Number(touch.pageY); //页面触点Y坐标  
            var text = 'TouchMove事件触发：（' + x + ', ' + y + '）';  
            //判断滑动方向  
            if (x - startX >0) {  
                text += '<br/>右滑动'+(x - startX);
                console.log(text);  
            }else{
                 text += '<br/>左滑动'+(x - startX);
                 console.log(text);  
            }  
            if (y - startY > 0) {  
                text += '<br/>下滑动'; 
                console.log(text); 
            }else{
                text += '<br/>上滑动'; 
                console.log(text);
            } 
             
        }  
        catch (e) {  
            console.log('touchMoveFunc：' + e.message);  
          }  
    }  
  
            //touchend事件  
    function touchEndFunc(evt) {  
        try {  
            //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等 
             console.log(evt);   
            var text = 'TouchEnd事件触发over';  
            console.log(text); 
        }  
        catch (e) {  
            console.log('touchEndFunc：' + e.message);  
         }  
    }  

 
    document.addEventListener('touchstart', touchSatrtFunc, false);  
    document.addEventListener('touchmove', touchMoveFunc, false);  
    document.addEventListener('touchend', touchEndFunc, false);  
}

slideFunc();




















