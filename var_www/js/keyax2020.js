/*globalXwindow*/
/*jslintXbrowser:true*/
//"useXstrict";
//var protocol = window.location.protocol;
var hostname = window.location.hostname;
//var port = window.location.port;
//var host = window.location.host // hostname:port
//var pathname = window.location.pathname;
//var search = location.search;

/*
var sock = io('ws://kyx.dynu.net:8000', {transports: ['websocket']});
//var sock = io('ws://192.168.1.1:8000', {transports: ['websocket']});
var sockt= sockt || sock.connect();
*/

//Firefox can't establish a connection to the server at ws://kyx.dynu.net:8000/uploads/?EIO=3&transport=websocket.
//var sock = io('ws://kyx.dynu.net:8000', {path: "/uploadz", transports: ['websocket']});
//Firefox can't establish a connection to the server at ws://kyx.dynu.net:8000/socket.io/?EIO=3&transport=websocket.
//  var sock = io('ws://kyx.dynu.net:8000', {transports: ['websocket']});
// GET http://kyx.dynu.net:8000/socket.io/      [HTTP/1.1 101 Switching Protocols 7ms]

//var sock = io(`http://${hostname}:8000`,{transports:['websocket', 'polling'],upgrade:true}); // /namespace` uploadz'
//var sock = io(`http://${hostname}`,{transports:['websocket']}); // /namespace` uploadz'
//var sock = io({transports:['websocket']}); // /namespace` uploadz'

//var sockups = io("/uploads");
var sock = io({transports: ['websocket']});
var sockt= sockt || sock.connect();
sockt.on('hiserver', function (newdat) {console.log("server sent: " , newdat);
                               sockt.emit('hiclient', "{ username: 'yones' }");
                              });
sockt.on('uploadProgress' , function (percent){alert(percent);
                              });

//socketAddr="https://ww2.my_example.com:3300" // server uri
//var socket = io.connect(socketAddr,{'flash policy port':3300});
//    socket.on('connect', function () { .....

/*
//var socket = io.connect('http://localhost');
sockt.on('connect', function(){
    sockt.emit('authentication', document.cookie.kyx:user);//curl username: "John", password: "secret" curl parenth;
//    sockt.on('authenticated', function() {
    // use the socket as usual
//    });
});
*/
/*
function addEvent(element, evnt, funct){ // unlimited events by element
  if (element.attachEvent) return element.attachEvent('on'+evnt, funct); // IE < 9
  else return element.addEventListener(evnt, funct, false); }; // true useCapture for IE < 9 instead bubbling
// addEvent(document.getElementById('myElement'), 'click', function () { alert('hi!'); } ); // example
// jQuery wrapper alternative // $(element).on('click', function () {   <do stuff>  });

// inline method:only 1 event per type and by element, overwrites
// element.onclick = function () { <do stuff here> };
// <a id="testing" href="#" onclick="alert('did stuff inline');">Click me</a>

// https://technosiastic.wordpress.com/2009/09/24/collection-of-top-jquery-tutorials-tips-tricks-techniques-to-improve-performance/
$("[class*='lng-']").mouseenter(function () {   // ^begins  $ends ~fullword
                      var group = $(this).attr('class'); alert('Yep, you entered class' + group);});
*/
/*
jQuery.expr[':'].regex = function(elem, index, match) {
    var matchParams = match[3].split(','),
        validLabels = /^(data|css):/,
        attr = {
            method: matchParams[].match(validLabels) ?
                        matchParams[].split(':')[] : 'attr',
            property: matchParams.shift().replace(validLabels,'')
        },
        regexFlags = 'ig',
        regex = new RegExp(matchParams.join('').replace(/^s+|s+$/g,''), regexFlags);
    return regex.test(jQuery(elem)[attr.method](attr.property));
}
$(':regex(class,^(lng-)').mouseenter(function () {
    var groupNumber = $(this).attr('class');
    alert('Yep, you clicked ' + groupNumber);
});
*/

/*<script>function myFunction() {
    document.getElementById("myDIV").style.WebkitColumns = "100px 3"; // Code for old Chrome and Safari
    document.getElementById("myDIV").style.MozColumns = "100px 3"; // Code for Firefox
    document.getElementById("myDIV").style.columns = "100px 3"; // Standard syntax
}</script>*/

//document.head.appendChild(document.createElement('script').text = 'function LogIt(msg) { console.log(msg);}' );
//document.getElementsByTagName("H1")[0].setAttribute("class", "democlass");
/*
// INSERT CSS STYLE  add id to remove/update it
var css = ".section {color: 'blue';}"
var element = document.createElement('style');
element.setAttribute('type', 'text/css');
if ('textContent' in element) {
  element.textContent = css;
} else {
  element.styleSheet.cssText = css;
}
document.getElementsByTagName('head')[0].appendChild(element);
// END INSERT CSS STYLE
*/
/*<head>
  <script type="text/javascript">
    document.write("<style>body { background-color:#000 }</style>");
  </script>
  # other stuff..
</head>*/

// document.querySelector('head').textContent += '<link rel="stylesheet" href="styles.css" type="text/css"/>';
// s.appendChild(document.createTextNode(styles))
// window.onload = function() { document.getElementById('first_style').removeAttribute('disabled'); } // addAttribute
/*
<!DOCTYPE html>
<html>
<head>
  <title>Untitled Page</title>
  <script type="text/javascript" src="jquery-1.7.1.js"></script>
  <script>
    var
    index = 0,
    items = [
      { selector: "h1", rules: "color:#3333BB;font: bold 18px Tahoma;padding: 12px 0 0 0;" },
      { selector: "p", rules: "padding:0;margin:0;background-color:#123456;color:#ABCDEF;"},
      { selector: "b", rules: "font-weight:normal;"},
      { selector: "i", rules: "color:#66FF66;" }
    ];
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    function addRule(stylesheetId, selector, rule) {
      var stylesheet = document.getElementById(stylesheetId);
      if (stylesheet) {
        stylesheet = stylesheet.sheet;
        if (stylesheet.addRule) {  // IE8 removeRule
          stylesheet.addRule(selector, rule);
        } else if (stylesheet.insertRule) {   // deleteRule Chrome Opera
          stylesheet.insertRule(selector + ' { ' + rule + ' }', stylesheet.cssRules.length); // .rules.  IE8
        }
      }
    }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    $(document).ready(function () {
      $("button").click(function () {
        addRule("myStyles", items[index].selector, items[index].rules);
        index++;
      });
    });
  </script>
  <style id="myStyles">
    div
    {
      border: solid 1px black;
      width: 300px;
      height: 300px;
    }
  </style>
</head>
<body>
  <button>Click Me</button>
  <div>
    <h1>test</h1>
    <p>Paragraph One</p>
    <p>Paragraph with <b>bold</b> and <i>Italics</i></p>
    <p>Paragraph 3</p>
  </div>
</body>
</html>
*/

jQuery.ajax({
    url: "https://freegeoip.net/json/",
    type: "POST",
    dataType: "jsonp",
    success: function (location) {
    $("#pais").append(location.country_code + "-" + location.city);
    console.log(location.country_code + "-" + location.city);
    }
})
/*
$.getJSON("https://freegeoip.net/json", function (location) {
    $("#pais").append(location.country_code);
});
*/
/*
$.getJSON("http://ipinfo.io/json", function (data) {
    $("#pais").append(data.country);
});
*/

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
// var dateString = new Date(timestamp).format("dd-MM-yyyy hh:mm");
// var today = new Date();
// document.write(today);
function startTime() {
    var today = new Date();
    var y = today.getUTCFullYear();
    var mes = checkTime(today.getUTCMonth() + 1);
    var dia = checkTime(today.getUTCDate());
    var sem = today.getUTCDay();
    var sema = ['D','L','M','X','J','V','S'];//php ISO-8601 1=Lundi 7=Dimanche
    var h = today.getUTCHours();
    var m = checkTime(today.getUTCMinutes());
    var s = checkTime(today.getUTCSeconds());
    var timset = today.getTimezoneOffset() / 60;
    var tim = y+"-"+mes+"-"+dia+" "+" "+h+":"+m+":"+s+" "+sema[sem]+"(UTC"+timset+")";
//  var tim = timset + " UTC " + y + "-" + mes + "-" + dia + " " + sema[sem] + " " + h + ":" + m + ":" + s;
    document.getElementById('timel').textContent = tim;
    document.getElementById('timel').style.fontSize = '75%';
    var time = setTimeout(startTime, 3000);
}

function xToggle(x) {
       //"use strict";
       x.classList.toggle("change");
       /* window.document.getElementById("kyxmenu").classList.toggle("hoverx");  *no Firefox*/
       var swy = document.getElementById("kyxmnu").classList;
       if (!swy.contains("hoverx")) {
           swy.add("hoverx");
       } else {
           swy.remove("hoverx");
       }
}

//  document.getElementsByClassName("classone classtwo")[0];  //  <p class="test">hello word2</p>
//  document.getElementsByClassName("classone classtwo")[0].appendChild(first);
//  document.querySelector(".classone").appendChild(first);
//  var el = document.querySelector("div.user-panel.main input[name='login']");
//  returns the first element <input name="login"/> within a <div class="user-panel main">

function parallel(){
// var height = $("#myDiv").height(); var width = $("#myDiv").width(); // jQuery snapshot vs. live HTMLCollections
// getBoundingClientRect().height (fractional result) offsetHeight-4 (IE8) clientHeight+9 scrollHeight
// box-sizing: border-box; in css to include padding and margin

//var nodelist = document.querySelectorAll(".synkro.div"); // alternative to implement Array.prototype.forEach;
//var nodes = Array.prototype.slice.call(nodelist,0); // nodes is an array now. // console.log(".synkro.div"+NodeList.length);

//NodeList.prototype.forEach = Array.prototype.forEach; // implement forEach in NodeList+namedItem method->HTMLCollections
HTMLCollection.prototype.forEach = Array.prototype.forEach; // implement forEach in HTMLCollection for getElementsByClassName etc.
//var nodes = document.getElementsByClassName("synkro div");
  var nodes = document.querySelectorAll(".synkro");
  var widnod = (100/nodes.length).toFixed(3)+"%";
nodes.forEach(function(node){  // console.log("node"+node.innerHTML);
    node.width=widnod; node.readOnly = true;
//  node.addEventListener('scroll', BOX);
    node.addEventListener('scroll', function (ev){ev.preventDefault();
                                    var scrltp = this.scrollTop;
                                    nodes.forEach((nod)=>{nod.scrollTop = this.scrollTop;});
                         }, { capture:true, passive:false } );  /* capture:false, passive:true */
// 'scroll' event nonblock // passive:true <never calls preventDefault // default false (touchstart touchmove <default true)
//  node.addEventListener("mouseup", BOX);
    node.addEventListener("mouseup", function (ev){ev.preventDefault();
                                     var height = this.offsetHeight+"px"; this.scrollBy(0,2);  /* 10 */
                                     nodes.forEach((nod)=>{nod.style.height = height;});
                          }, { capture:false, passive:true } );
    node.addEventListener("contextmenu", function (ev){ev.preventDefault();
                                         this.readOnly = false;
                          }, { capture:false, passive:true } ); // textarea
//  node.addEventListener("contextmenu", function (ev){ev.preventDefault();this.removeAttribute("readOnly");}); // textarea
//  node.onscroll = BOX; // alternative to addEventListener .onclick .oncontextmenu
//  node.onmouseup = BOX; // alternative to addEventListener .onclick .oncontextmenu
//  node.oncontextmenu = function (ev){ev.preventDefault();this.readOnly = false;}; // textarea
//  node.addEventListener("dblclick", function (){this.contentEditable = "true";}); // div
}); // nodes forEach
}  // end parallel

/*
function BOX(){// event.target.preventDefault();
  var height = this.offsetHeight+"px"; //  this.getBoundingClientRect().height+"px";
  var scrltp = this.scrollTop;
  nodes.forEach(function(nod){nod.style.height = height;nod.scrollTop=scrltp;});
//  setTimeout(BOX, 100);
}; // function BOX ev
*/

/*
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
*/

function loadwin() {
    //"use strict";
    //logout();
    viewsize();
}

function pageScroll() {
    	window.scrollBy(0,50); // horizontal and vertical scroll increments
    	scrolldelay = setTimeout('pageScroll()',100); // scrolls every 100 milliseconds
}
function stopScroll() {
    	clearTimeout(scrolldelay);
}

$(document).ready(function () {
    $("#menut").lazeemenu();

    $("#jsmtree").jstree({
      "core" : { // core options go here
        "multiple" : false, // no multiselection
        "check_callback" : true,  // so that operations work... "dnd"
        "themes" : {
          "theme": "default",  // "default-dark"
          "dots" : true, // no connecting dots between dots
          "icons": true,
          "url": "jstree_default.css"
          //"url": "/css/jstree/themes/default/style.css"
        }
      },
      "state" : { "key" : "kyx_tree1" },  // key is important if you have multiple trees in the same domain
      "plugins" : ["themes", "ui", "dnd", "checkbox", "state"] // activate the state plugin on this instance
    });

    filup();

/*  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 16,  // 18
        minZoom: 11 //,
        id: 'mapbox.streets', // mapbox.streets mapbox.satellite mapbox.terrain-rgb ??mapbox.terrain ??mapbox.traffic//        accessToken: "pk.eyJ1Ijoia2V5YXgiLCJhIjoiY2l4bWN1YzQ5MDE5bjJ3bW9iOTJ4am9ybSJ9.PqDgM5EVwOLB89_ERRMZnA" // 'your.mapbox.access.token'
        }).addTo(mymap);
*/
  var mymap = L.map('mapid').setView([35.568465, -5.378065], 14); // ([51.505, -0.09], 13); // ([35.568641, -5.381112], 17);
  L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Maps data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
        maxZoom: 16,  // 18
        minZoom: 11 //,
    }).addTo(mymap);
    var marker = L.marker([51.5, -0.09]).addTo(mymap);
    var circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap);
    var popup = L.popup();
    function onMapClick(e) {  //  alert("You clicked the map at " + e.latlng);
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(mymap);
    }
    mymap.on('click', onMapClick);
///})   //  end  L.tileLayer
})  // end  $(document).ready


function viewsize() {
//  "use strict";
    parallel();
//    altura();
//document.getElementById("right").onmouseup = Boks;
//////console.log("About:",document.getElementById("about").firstChild.textContent);
//////console.log("About:",document.getElementById("abouta").lastChild.nodeValue);

    $(window).on('beforeunload', function (evt) { if (evt.originalEvent.defaultPrevented) return;
                                                alert("leave website");//    sockt.close();
                                                });
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var t = document.getElementById("timel");
    t.textContent = startTime();
    var x = document.getElementById("sizewin");
    x.textContent = "W: " + w + " H: " + h;
    var xx = document.getElementById("masterx");

    xx.textContent = "<u>Keyax Multilingual Computers:</u><br>";
    xx.textContent += new Date();
    xx.textContent += "<b>Latin Script ٱلۡحَمۡدُ لِلَّهِ رَبِّ ٱلۡعَـٰلَمِينَ (﻿٢﻿)  languages اللغة العربية ⵟⵉⴼⵉⵏⴰⵖ кириллицы Алфа ελληνικά  עִברִית אלפא</b><br>";
    xx.textContent += "Latin Script languages اللغة العربية ⵟⵉⴼⵉⵏⴰⵖ кириллицы Алфа ελληνικά עִברִית אלפא<br>";
//    xx.textContent += "<img src='lion.gif' alt='lion'>";
/*  document.getElementById("utube").style.width = "100%";
    var alto=window.document.getElementById("utube").style.width;
    document.getElementById("utube").parentElement.style.height = "400px";
*/
}

function who() {
    "use strict";
//    parallel();
//    altura();

//  document.getElementById("masterx").innerHTML += "<img src='lion.gif' alt='lion'>";
//  $("#masterx").append("<img src='lion.gif' alt='lion'>");
//  $("<img src='lion.gif' alt='lion'>").appendTo("#masterx", "#keyform");
//var host = "http://192.168.1.1";
//var host = "http://kyx.dynu.net";
//var host = window.location.hostname;
//var uri = `${hostname}/who`;      //koa-router ???????
var uri = `http://${hostname}/who`;      //koa-router ???????
var request = new Request(uri, {
    method: 'POST',
    credentials: 'same-origin' //,  // to include cookies
//    headers: myHeaders,
//    body: "",
//    response: ""
    });

fetch(request)
    .then ((response) => {
       if(response) {return response.text();}
            else{throw new Error('Network response was not ok.');}
         })
  //  .then(JSON.stringify)
    .then((resulta) => {// alert(resulta);
      // Handle response we get from the API
      document.getElementById("usery").textContent = resulta;
//         let results = processData(resulta);
//         return results;
})
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        document.getElementById("usery").textContent = "Wait";
        console.log("ERREUR:"+ JSON.stringify(error));//JSON.stringify(error)
    });
    //var usuario = document.getElementById("loginid").value;
    //var clave = document.getElementById("pwdid").value;
} // end who()

// DRAG&DROP
function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}

//$("a[target='_blank'], a[target='_new']").attr('target','nw').attr('title','Opens in a new window');
/*
(function( $ ){ // define plugin  //  $.fn.extend
   $.fn.myfunction = function() {
      alert('hello world');
      return this; // makes chainable
   };
})( jQuery );
$('#my_div').myfunction(); //  use plugin
*/

// INPUT FILES TO UPLOAD 
function filup(){

  //document.querySelector>>jQuery.Deferred exception: tagsinp is null filup@http://keyax.org/keyax.js:404:1   //  @http://keyax.org/keyax.js:300:5
  let tagsinp = document.querySelectorAll("input.tagsinp")[0];
  tagsinp.addEventListener('blur', function(evt) {evt.preventDefault();
          var txt= this.value.replace(/[^a-zñA-ZÑ0-9\+\-\.\#]/g,'').toLowerCase(); // allowed characters
          var tagtxt = document.createElement('span'); tagtxt.textContent= txt; //insertAdjacentText('afterbegin',txt);
          document.querySelector(".tags").insertAdjacentHTML('afterbegin',tagtxt.outerHTML);  // <button><i class="fa fa-ban"></i></button>
          document.querySelectorAll(".tags span").forEach(tag=>tag.addEventListener("click",function(){this.parentNode.removeChild(this);}));
  //      console.log("tags",tagtxt.outerHTML);
          });
  tagsinp.addEventListener('keyup', function(evt) {evt.preventDefault(); // 'keypress' for chars detect | 'keydown' 'keyup'  for key pressed detect
    if(/(188|13)/.test(evt.which)) this.blur(); //            evt.charCode>ascii            evt.which  evt.keyCode // if: comma|enter (delimit more keyCodes with | pipe)
  });
  tagsinp.addEventListener('mouseover', function(evt) { evt.preventDefault(); this.blur(); });

  /*
  if (event.which == null) char= String.fromCharCode(event.keyCode); // old IE // from http://unixpapa.com/js/key.html
    else if (event.which != 0 && event.charCode != 0) char= String.fromCharCode(event.which);	  // All others
  //else // special key
  */
  /*
  //$(function(){ // DOM ready    // ::: TAGS BOX
    $("#tags input").on({
       focusout : function() { var txt= this.value.replace(/[^a-z0-9\+\-\.\#]/ig,''); // allowed characters
                               if(txt) $("<span></span>",{text:txt.toLowerCase(), insertBefore:this});
                               document.querySelectorAll("div.tags span").forEach(tag=>tag.addEventListener("click",function(){this.parentNode.removeChild(this);}));

                               this.value="";
                             },
       keyup : function(ev) { // if: comma|enter (delimit more keyCodes with | pipe)
                              if(/(188|13)/.test(ev.which)) $(this).focusout();
                            }
    });
  //  $('#tags').on('click', 'span', function() { if(confirm("Remove "+ $(this).text() +"?")) $(this).remove();
  //              });
  //});
  */

let inputz = document.getElementById('filupload');
  inputz.style.opacity = 0.10;inputz.style.zIndex=-1;inputz.style.position='absolute'; //  >>>  css .filup
inputz.addEventListener('change', updateImageDisplay);

function updateImageDisplay() {
//  var curFiles = inputz.files;var paras;var i;
//let inputz = document.getElementById('filupload');
var curFiles = [] = inputz.files;
var imags = new Array(curFiles.length);
var paras = new Array(curFiles.length);
var bardivs = new Array(curFiles.length);
var cancels = new Array(curFiles.length);

let preview = document.getElementById('preview');
      while(preview.firstChild) {
      preview.removeChild(preview.firstChild);
      };
if(curFiles.length === 0) { var para = document.createElement('p');
                            para.textContent = 'No files currently selected for upload';
                            preview.appendChild(para);
                          }
if(curFiles.length > 0) {
      var list = document.createElement('ol');
          preview.appendChild(list);
      for(i = 0; i < curFiles.length; i++) {  // fileList has not forEach method
///          var liFrag = document.createDocumentFragment();
//           var liItem = document.createElement('li');
//           liItem.addEventListener("change", updateImg, false);
//           liFrag.appendChild(liItem);
      if(!validFileType(curFiles[i])) {
           paras[i].textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
           liItem.appendChild(paras[i]);
          }  // if !validFileType
      if(validFileType(curFiles[i])) {
            imags[i] = document.createElement('img'); // new Image();
            imags[i].setAttribute("class","imgs");
            imags[i].idx = i;
            imags[i].src = window.URL.createObjectURL(curFiles[i]); //"file_"+curFiles[i].name;
////        var bar = document.createElement('progress');
////            bar.setAttribute("value","50");bar.setAttribute("max","100");
            bardivs[i] = document.createElement('div');
            bardivs[i].setAttribute("class","progress-bar oranges stripes shine"); // progress-bar blue|green|oranges stripes shine"
            bardivs[i].insertAdjacentHTML('afterbegin','<span style="width: 0%"></span>'); // bardiv.innerHTML = '<span style="width: 0%"></span>';
//            bardiv.getElementsByTagName('span')[0].style.width = "100%"; // OK
            cancels[i] = document.createElement("button");cancels[i].setAttribute("class","cancels");
            cancels[i].insertAdjacentHTML('afterbegin','<i class="ctrls fa fa-ban"></i>');  // <button><i class="fa fa-ban"></i></button>
            paras[i] = document.createElement('p');paras[i].setAttribute("class","paras");
//            paras[i].insertAdjacentHTML('afterbegin','<i class="paras"></i>');  // <button><i class="fa fa-ban"></i></button>
            paras[i].textContent = 'Size: ' + returnFileSize(curFiles[i].size) + '. ' + 'File: ' + curFiles[i].name + '.'; // + 'WxH: '+imagen.width+'x'+imagen.height

            var updateImg = function(Img, Bardiv, Cancel, Para){
                var liFrag = document.createDocumentFragment();
                var liItem = document.createElement('li');
                liFrag.appendChild(liItem);
                Img.addEventListener("load",function(evt){URL.revokeObjectURL(evt.target.src); // Img.src
                Img.crossOrigin = "anonymous";

                  var kanvas = document.getElementById('kanvas');
                  if (kanvas.getContext) { var ctx = kanvas.getContext('2d');
                                           ctx.drawImage(evt.target, 0, 0, 120, 90); // offsetx,y,viewx,y,
                                           var vidio = document.querySelector("#vid2");
                                           ctx.drawImage(vidio, 20, 20, 100, 90); // offsetx,y,viewx,y,
                                           var kanimg = document.getElementById('kanimg');
//                                         kanimg.setAttribute('crossOrigin', 'anonymous');
//SecurityError:The operation is insecure// kanimg.src = kanvas.toDataURL("image/jpeg"); // default 'image/png'
//                                         console.log("kanimg: ",kanimg.src);
                                         }

                   Para.textContent += "WxH: "+evt.target.naturalWidth+'x'+evt.target.naturalHeight;
                   liItem.appendChild(Img);
                   liItem.appendChild(Bardiv); //  bar|bardiv
                   liItem.appendChild(Cancel);
                   liItem.appendChild(Para);
                },{capture: false, passive:true} );
// 'scroll' event nonblock // passive:true <never calls preventDefault // default false (touchstart touchmove <default true)
                list.appendChild(liFrag);   //    with document.createDocumentFragment()
//              list.appendChild(liItem); // without document.createDocumentFragment()
            };  //  end updateImg
            updateImg(imags[i], bardivs[i], cancels[i], paras[i]);
//          console.log("HTML cancel: ",cancel.outerHTML);
           } //  if validFileType
        }  // end for curFiles
    }  //  if(curFiles.length > 0)
} // end updateImageDisplay

var fileTypes = ['image/jpeg', 'image/pjpeg', 'image/png' ];
function validFileType(file) {
     for(var i = 0; i < fileTypes.length; i++) {
        if(file.type === fileTypes[i]) {
        return true;
        }
     }
  return false;
};
function returnFileSize(number) {
     if(number < 1024) {
     return number + 'bytes';
     } else if(number > 1024 && number < 1048576) {
     return (number/1024).toFixed(1) + 'KB';
     } else if(number > 1048576) {
     return (number/1048576).toFixed(1) + 'MB';
     }
   }
};  //  end filup()

// FORM UPLOAD  // Create our request constructor with all the parameters we need
function keysubmit(keyform){
var kform = document.forms.namedItem("keyform"); // document.forms[].name  //
// var fileups = document.querySelector("input[name='filupload']").files; // [0];
//               document.querySelector('input[type="file"]:not([multiple])');
// Array.from(fileups.files).forEach((fil,idx,aray) =>
// kform.elements.forEach((elt)=>{console.log("ELEMENT: "+elt.name+"="+elt.value);}); //  includes labels and buttons
// document.getElementById("myForm").elements[0].value;  //  kform.elements[].name=kform.elements[].value&
console.log("tagsinp: ",document.getElementById("tagsinp").value);
console.log("kform.tags1: ",kform.tags1.value);  // name="tags1"

var uri = `http://${hostname}/uploadz`; // "hi/uploadz"; // var uri = "http://kyx.dynu.net/uploadz";
let inputz = document.getElementById('filupload');
var curFiles = [] = inputz.files;
var progbars = [] = document.querySelectorAll(".progress-bar");  //.forEach(x=>x.textContent=data);
var cancels  = [] = document.querySelectorAll(".cancels");
var formsup = [];
for(var i = 0; i < curFiles.length; i++) {  // fileList has not forEach method
formsup[i] = new FormData();
formsup[i].append("tagen",kform.tags1.value);  //  document.getElementById("form1_tags1").value
formsup[i].append("size",curFiles[i].size);
formsup[i].append("file",curFiles[i]);

var kanimg = document.getElementById('kanimg');
formsup[i].append("kanimg", kanimg.src);

Ajax(uri, i, formsup[i], progbars[i], cancels[i], processData);
}
} //  end function keysubmit(keyform)

//Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience.
// For more help http://xhr.spec.whatwg.org/   xhr.open("POST", uri, async = true); //, user = null, password = null);
function Ajax(uri, idx, forma, progbar, cancel, processData)
{  var xhr = new XMLHttpRequest();
   xhr.open("POST", uri, async = true); //, user = null, password = null);
   xhr.send(forma);  //  xhr.send(xhr.response);
   xhr.addEventListener("load", function() {  //  xhr.onload = handler(xhr);
        if (xhr.status == 200
         && xhr.readyState === 4 //   xhr.readyState === xhr.DONE
         && xhr.responseText !== null)
        { processData(xhr.responseText); }
        else { console.log("datalog1 + error"); }  // something went wrong
   });
   xhr.upload.addEventListener('progress',function (event) {
        if (event.lengthComputable) {
        var percent = Math.round((event.loaded / event.total) * 100)
        console.log(percent);
        progbar.getElementsByTagName('span')[0].style.width = percent+"%";
      }
   });  //  xhr.upload.addEventListener progress
   xhr.addEventListener('error',function (event) {console.log("XHR error on file: ", idx);});
   xhr.addEventListener('abort',function (event) {console.log("XHR aborted on file: ", idx);});
   cancel.addEventListener('click', function (evt) {evt.preventDefault();xhr.abort();});
// cancel.addEventListener('click', function (evt) {evt.preventDefault();console.log("XHR second click evt on file: ", idx);});
// cancel.onclick = function (evt) {evt.preventDefault();xhr.abort();};  // overrided by next event
// cancel.onclick = function (evt) {evt.preventDefault();console.log("XHR second click evt on file: ", idx);};
}

function processData(data) {
    // taking care of data
    //TypeError: Body has already been consumed.  keyax.js:288:65
//  var datax = JSON.stringify(data);
    console.log("datalog2:",data );
    //document.getElementById("langs").innerHTML = data; // id=lang0 id=lang1
    document.querySelectorAll(".langs").forEach(x=>x.textContent=data);
}


// LOGIN 
//function keysubmit(logform){return;};
function loginsubmit(logform, accion){  // logform : /loginpass, /signupass
//var kform = document.forms.namedItem("keyform");
//////var kyform = new FormData(keyform);
//var uri = "http://kyx.dynu.net/login";
var uri = `http://${hostname}/${accion}`;
console.log("uri:"+uri);
var myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');
//myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
//myHeaders.append('Content-Type', 'multipart/form-data'); // requires koa-busboy // default in FormData
//myHeaders.append('Content-Type', 'text/plain');
//myHeaders.append('Content-Type', 'application/octet-stream'); // limit 100kb
/*
Content-Type: application/octet-stream
Content-Disposition: attachment; filename="picture.png"
--->>> Means "I don't know what the hell this is. Please save it as a file, preferably named picture.png".
Content-Type: image/png
Content-Disposition: attachment; filename="picture.png"
--->>> Means "This is a PNG image. Please save it as a file, preferably named picture.png".
Content-Type: image/png
Content-Disposition: inline; filename="picture.png"
--->>> "This is a PNG image. Please display it unless you don't know how to display PNG images.
--->>> Otherwise, or if the user chooses to save it, we recommend the name picture.png
*/
var forma = new FormData(logform);
//var filex = document.querySelector("input[name='files1']").files[0];
//////var filex = document.forms['keyform']['files1'].files[0];
//////console.log("forma"+filex.size);
//forma.append('filelist', formfil.files);
/////sockt.emit('upload', filex.size);

// var formjson = '{"email": "test@keyax.info", "password": "555777"}';
// var fj = JSON.stringify(formjson); // "{\\"email\\": \\"test@keyax.info\\", \\"password\\": \\"555777\\"}"
// Error: invalid JSON, only supports object and array -> 400 BadRequest

//  returns the first element <input name="login"/> within a <div class="user-panel main">
var logemail=document.querySelector("form.login input[name='email']").value;
var logpwd=document.querySelector("form.login input[name='password']").value;
var formjson = `{"email": "${logemail}", "password": "${logpwd}"}`;
console.log(formjson);
var request = new Request(uri, {
    method: 'POST',
    headers: myHeaders,
    body: formjson,
//  body: forma ,
//  response: "",
    credentials: 'same-origin' //,  // to include cookies
    });
    fetch(request)
    .then ((response) => {
       if(response) {return response.text();}
            else{throw new Error('Network response was not ok.');}
         })
//    .then(JSON.stringify)
    .then((resulta) => {//alert(resulta);
      // Handle response we get from the API
  //       let results = processData(resulta);
         return resulta;})
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log("ERREUR:"+ JSON.stringify(error));//JSON.stringify(error)
    });
    //await next();
    }

function logings(data){
var data = {};
        data.title = "title";
        data.message = "message";
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: "`http://${hostname}/xfield" ,
          success: function(data) {
                      console.log('success');
                      console.log(JSON.stringify(data));
                      }
          });
}
/*
function logings(xuser){
  var form = document.getElementById("xform"),
       formData = new FormData(form);
       xhr = new XMLHttpRequest();
   xhr.open("POST", "/xform");
   xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
   xhr.send(formData);

}
*/
function logout() {
    //"use strict";
    var xmlhttp = new XMLHttpRequest();
    var response = ">>> logged out";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            response = xmlhttp.responseText;
            window.document.getElementById("usery").innerHTML = response;
      //      window.location.href = "#videos";
        } else {
            document.getElementById("usery").textContent = "Waiting Logout...";
        }/*dump("Error in query php.\n"); *opc*/
    };
    xmlhttp.open("POST", "/logout", true);
    xmlhttp.send(null); /*null: legacy Firefox ≤3, GET without Activex*/
}

/*
function onPress_ENTER() {
    var keyPressed = event.keyCode || event.which;
    //if ENTER is pressed
    if (keyPressed === 13) {
            //alert("enter pressed");
        keyPressed = null;
    } else {
        return false;
    }
}
*/

/*
<script>
    if(condition){
      window.location = "http://yournewlocation.com";
    }
  </script>
function redirectHandler(condition, url){
  if(condition){
    window.location = url;
  }else{
    return false;
  }
}
if(redirectHandler(nologgedin, "/login.php")||redirectHandler(adminuser, "/admin.php"));
*/

/*
element { --main-bg-color: brown; } // Defining the variable
element { background-color: var(--main-bg-color); } // Using the variable:

var h3 = document.querySelector('h3');
var result = getComputedStyle(h3, ':after').content;

getComputedStyle(element).getPropertyValue("--my-var");// get variable from wherever
var style = document.defaultView.getComputedStyle(elem1, null);

element.style.setProperty("--my-var", jsVar + 4);// set variable on inline style
element.style.getPropertyValue("--my-var");// get variable from inline style

*/

/*
<!DOCTYPE html><html><body>
<h2>Store and retrieve data from local storage.</h2>
<p id="demo"></p>
<script>
var lng,lbl,lbl2;
lng = "eng";
lbl = {axe:{"file not found":""},
       eng:{"file not found":"File not found"},
       arb:{"file not found":"ملف غير موجود"} }
lbl = {axe: "file not found",
       eng: "File not found",
       arb: "ملف غير موجود"}
localStorage.setItem("labels", JSON.stringify(lbl)); // Store data
lbl2 = JSON.parse(localStorage.getItem("labels")); //Retrieve data
document.getElementById("demo").textContent = lbl2[lng]["file not found"];
</script>
</body></html>
*/

// TEST LOCALSTORAGE
var locstore = function(){
try{ if(window.localStorage) {
        window.localStorage.setItem("keyax/app1","english semantics"); //  window.sessionStorage
        window.onstorage = function(evt){console.log('localStorage key ',evt.key,"value ",oldValue," >> ",newValue);}
    } else {
    document.cookie="keyax/app1=english semantics; expires=Mon, 28 Mar 2019 12:00:00 UTC";
    console.log('Cookie where used'); // log
    }
  } catch(err) { console.log("error localstorage: ",err); }
}(); //END TEST LOCALSTORAGE

/*  COOKIES
function alertCookie() { //document.cookie = "kyx:usr=Yones";
//var cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)kyx:usr\s*\=\s*([^;]*).*$)|^.*$/, "$1");
  var cookieValue = decodeURIComponent(document.cookie);
   console.log("cookie:"+cookieValue); }
// <button onclick="alertCookieValue()">Show cookie value</button>

function getCook(cookie) {
  return document.cookie.split(';').reduce(function(prev, c) {
        var arr = c.split('=');
        return (arr[0].trim() === cookie) ? arr[1] : prev;
    }, undefined);
}
*/
/*
///function getCookie(cookie) {var x= ; console.log(x);}
function getCookienk() {
    var pair = decodeURIComponent(document.cookie);
    var y = pair.split('; ').find(x => x.startsWith(name+'='));
    console.log("cookishit"+pair);
    //if (pair)
    //   return pair.split('=')[1]
}
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.log( c.substring(name.length, c.length) );
        }
    }

    return "";
}
*/
/*
function getCookie() {
    var cname = "kyx:user";
    var name = cname + "=";
    console.log("cooky:"+name);
    var decodedCookie = decodeURIComponent(document.cookie);
console.log("d"+ decodedCookie + "d");
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];console.log(c);
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            console.log( c.substring(name.length, c.length)  );
        }
    }
    return "kyx";
}
*/

function listings(){
    return jQuery.ajax({
//     url: `http://${hostname}/sqldb/sp`,
       url: `/sqldb/sp`,
        type: "POST",
        credentials: 'same-origin' //,  // to include cookies
    //    dataType: "jsonp"//,
    /*    success: function (lists) {alert("listing: "+ lists)
              console.log("loc:"+lists);
              var loc =  JSON.stringify(lists);
        $("#pais").append(loc.name + "-" + loc._id);*
      }*/
    });
}
function handleData(lists /* , textStatus, jqXHR */ ) {
    //  var loc =  JSON.stringify(lists.name);
    $("#langs").append(JSON.stringify(lists));
      //  alert(JSON.stringify(lists));
        //do some stuff
}
//  listings().done(handleData);  //  exec in load keyax.js

function showHint2(vlng) {listings();}
//document.getElementById("lang").addEventListener("keypress", showHint(lang), false);
function showHint(vlng) {
//var host = "http://kyx.dynu.net";
//var host = "http://192.168.1.3:8000";
//console.log("self.fetch"+ self.fetch); // something went wrong
//var uri = `${host}/pets/sqlang/${vlng}`;   //koa-route OOOKKK
//var uri = `${hostname}/sqldb/${vlng}`;      //koa-router ???????
var uri = `/sqldb/${vlng}`;      //koa-router ???????
//console.log("uri"+uri);
//var uri = `${host}:8000/mongo`;
//var uri = `${host}/pets/pets`;
if (self.fetch) { console.log("fetch request......");// run my fetch request here
// Create our request constructor with all the parameters we need
var myHeaders = new Headers();
myHeaders.append('Accept', 'application/json');
myHeaders.append('Content-Type', 'application/json');
//myHeaders.append('Content-Type', 'text/plain; charset=utf-8');
//myHeaders.append('Content-Type', 'text/html; charset=utf-8');
//myHeaders.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');

myHeaders.append('Cache', 'no-cache');
//myHeaders.append('Cookie', '');

var request = new Request(uri, {
    method: 'POST',
    credentials: 'same-origin' //,  // to include cookies
//    headers: myHeaders,
//    body: "",
//    response: ""
    });
    fetch(request)
    .then ((response) => {
       if(response) {return response.json();}
            else{throw new Error('Network response was not ok.');}
         })
    .then(JSON.stringify)
    .then((resulta) => {// alert(resulta);
      // Handle response we get from the API
         let results = processData(resulta);
         return results;})
    .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log("ERREUR:"+ JSON.stringify(error));//JSON.stringify(error)
    });
    //await next();
    } else { // do something with XMLHttpRequest?
    console.log("xhr request......");
    Ajax(uri, processData);

     }
} // showHint close


/*********
//var myHeaders = new Headers();
//myHeaders.append('Content-Type', 'multipart/form-data');
var request = new Request(uri, {
    method: 'POST',
    credentials: 'same-origin',  // to include cookies
    body: forma//,
//  response: "",
//  headers: myHeaders
    });
if   (self.fetch)
 { console.log("fetch request......");// run my fetch request here
fetch(request)
  .then ((response) => {
       if(response) {return response.json();}  // (response.status == 200)
            else{throw new Error('Network response was not ok.');}
         })
  .then(JSON.stringify)
  .then((resulta) => {//alert(resulta);
      // Handle response we get from the API
         let results = processData(resulta);
         return results;})
  .catch(function(error) {
        // This is where you run code if the server returns any errors
        console.log("ERREUR:",JSON.stringify(error));
   });  //  end fetch
} else { // do something with XMLHttpRequest?
console.log("xhr request......");
Ajax(uri, forma, processData);
}
**********/
