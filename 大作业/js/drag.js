window.onload=function(){

    var speed = 10; 
    picScroll = document.getElementById("picScroll");
    picScroll1 = document.getElementById("picScroll1");

    var ID=setInterval(changeToLeft,speed);

    
    //2、鼠标经过时暂停图片滚动
    picScroll.onmouseover=function() {
        clearInterval(ID);
    }
    //3、鼠标离开后图片继续滚动
    picScroll.onmouseout=function() {
        ID=setInterval(changeToLeft,speed);
    }


};
//1、图片向左滚动函数实现
function changeToLeft(){
    
    if(picScroll.scrollLeft >= (picScroll1.offsetWidth)){
        picScroll.scrollLeft = 0;
    }
    else{
        picScroll.scrollLeft += 1;
    }
}