function parallel(){
/*
  function iso(right, left){
     document.getElementById(left).onmouseup = function(ev){ev.preventDefault();
                          document.getElementById(right).style.height = (this.clientHeight+9)+"px"};
      document.getElementById(right).onmouseup = function(ev){ev.preventDefault();
                          document.getElementById(left).style.height = (this.clientHeight+9)+"px"};
  };
  iso("right", "left");
*/
   iso();
/*   window.addEventListener("keypress", function (ev){ev.preventDefault();}); //
   window.addEventListener("keydown", function (ev){ev.preventDefault();}); //
   window.addEventListener("keyup", function (ev){ev.preventDefault();}); //
*/
   var isSyncingLeftScroll = false;
   var isSyncingRightScroll = false;
   var leftDiv = document.getElementById('left');
   var rightDiv = document.getElementById('right');
   leftDiv.onscroll = function() {
   	if (!isSyncingLeftScroll) {
     	isSyncingRightScroll = true;
     	rightDiv.scrollTop = this.scrollTop;
     }
     isSyncingLeftScroll = false;
   }
   rightDiv.onscroll = function() {
   	if (!isSyncingRightScroll) {
     	isSyncingLeftScroll = true;
     	leftDiv.scrollTop = this.scrollTop;
     }
     isSyncingRightScroll = false;
   }
};
