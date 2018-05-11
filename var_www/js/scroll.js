var scrollx = document.querySelector('#scrollx');
//      scrollx.scrollLeft=1163;  //  set to scroll right
///////////////// setInterval  same interval from start run, can overcall if run time larger than interval
var timerId = setInterval(function(){
    var pos = scrollx.scrollLeft;
    scrollx.scrollLeft = pos+5; // pos-5 to scroll right
    if( pos == scrollx.scrollLeft )
    {clearInterval(timerId);scrollx.scrollLeft=150;}
}, 35)
//////////////// setTimeout runs once or endless loop
function scrlit() {
    var timerId = setTimeout(function(){
        var pos = scrollx.scrollLeft;
        scrollx.scrollLeft = pos+5; // pos-5 to scroll right
        if( pos == scrollx.scrollLeft )
        {clearTimeout(timerId);scrollx.scrollLeft=150;}
        scrlit();
    }, 35);
  };
  scrlit();
///////////////////

https://github.com/simov/simplr-smoothscroll
========================
https://stackoverflow.com/questions/7408100/can-i-change-the-scroll-speed-using-css-or-jquery/7408178#7408178
http://jsfiddle.net/36dp03ur/

<div id="myDiv">
    Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. <span class="boldit">Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. </span> Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. <span class="boldit">Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. </span> Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. <span class="boldit">Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. </span> Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. <span class="boldit">Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. </span> Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. <span class="boldit">Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. </span> Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. <span class="boldit">Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. </span> Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. <span class="boldit">Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. </span> Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. <span class="boldit">Use the mouse wheel (not the scroll bar) to scroll this DIV. You will see that the scroll eventually slows down, and then stops. </span>
</div>
===========================
#myDiv {
    height:2000px;
    width:100px;
    background-color: #CCF;

    font-family: 'Trebuchet MS';
    font-size: 12px;
    line-height: 24px;
    padding: 5px;
    margin: 5px;
    overflow:hidden;
}
.boldit{font-weight:bold;}
============================
if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 5;
	var distance = 300;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}
