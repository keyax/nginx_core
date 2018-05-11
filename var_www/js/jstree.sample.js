/*
<div id="jstree">
  </div>
<button id="sam">create node</button>
*/


$(function () {
    var data = [
       { "id" : "ajson1", "parent" : "#", "text" : "Simple root node" },
       { "id" : "ajson2", "parent" : "#", "text" : "Root node 2" },
       { "id" : "ajson3", "parent" : "ajson2", "text" : "Child 1" },
       { "id" : "ajson4", "parent" : "ajson2", "a_attr":{"text":"gogo", "href":"http://google.com"}},
    ];

$("#jstree").jstree({
     "core" : {
         // so that create works
         "check_callback" : true,
         "data": data
     },
    "plugins" : [ "contextmenu",  "dnd"],
          "contextmenu":{ "items": {
                              "create": {
                                   "label": "Add",
                                   "action": function (obj) {
                                              $('#jstree').jstree().create_node('#',{"id" :"ajson5","text":"newly added" }, "last",
                                                                                function(){ alert("done"); });
                                              },
                                   }
                             }
                        }
}).on('create_node.jstree', function(e, data) { console.log('saved'); });

$("#sam").on("click",function() {
     $('#jstree').jstree().create_node('#',{"id":"ajson5","text":"newly added"},"last",
                                        function(){ alert("done"); });
     });
});  //  end $(function(){})

/*
 * jsTree storage plugin
 * Stores the currently opened/selected nodes in a localStorage and then restores them
 */


///  JSTREE CONTEXT MENU CONFIGURE /////
//https://groups.google.com/forum/#!topic/jstree/CkLlbIrA9dU
CSS:
.vakata-context {padding:1px !important;width:200px}
.vakata-context li a {font-size:11px;height:20px !important;line-height:20px !important;outline:0 !important;white-space:normal !important;padding-right:0 !important}
.vakata-context li > a > i {height:20px !important;line-height:20px !important;margin-left:-22px !important;width:22px !important;float:left}
.vakata-context li a span {height:20px !important;line-height:20px !important;float:left}
.vakata-context .vakata-context-separator a, .vakata-context .vakata-context-separator a:hover {margin-left:22px !important}
.vakata-context .lW {float:left;width:92%}
.vakata-context .lW span.hotkey {font-size:11px;color:#818181;font-weight:bold;float:right;display:block;width:auto;border:0;background-color:inherit}
.vakata-context span.sc {text-decoration:underline;font-weight:normal;color:inherit;float:none;display:inline;margin:0;padding:0;background-color:inherit;border:0}

Contextmenu initialization:

contextmenu: {
    select_node: true,
    items: function () {
        menu = {
            create_inside: {
                separator_before: false,
                separator_after: false,
                label: '<div class="lW"><span class="sc">C</span>reate sub-folder<span class="hotkey">c</span></div>',
                shortcut: 67,
                action: function (data) {
                    inst = $.jstree.reference(data.reference);
                    createNode.call(inst, 'last', inst.get_node(data.reference), inst.get_node(data.reference, true));
                }
            },
            rename: {
                label: '<div class="lW"><span class="sc">R</span>ename<span class="hotkey">r</span></div>',
                shortcut:  82,
                icon: 'glyphicon glyphicon-pencil',
                action: function (data) {
                    inst = $.jstree.reference(data.reference);
                    renameNode.call(inst, inst.get_node(data.reference), inst.get_node(data.reference, true));
                },
                _disabled: false,
                _class: 'class',
                separator_before: false,
                separator_after: true,
            },
            create_before: {
                separator_before: false,
                separator_after: false,
                label: '<div class="lW">Create folder <span class="sc">b</span>efore<span class="hotkey">b</span></div>',
                shortcut: 66,
                action: function (data) {
                    inst = $.jstree.reference(data.reference);
                    createNode.call(inst, 'before', inst.get_node(data.reference), inst.get_node(data.reference, true));
                }
            },
            create_after: {
                separator_before: false,
                separator_after: false,
                label: '<div class="lW">Create folder <span class="sc">a</span>fter<span class="hotkey">a</span></div>',
                shortcut: 65,
                action: function (data) {
                    inst = $.jstree.reference(data.reference);
                    createNode.call(inst, 'after', inst.get_node(data.reference), inst.get_node(data.reference, true));
                }
            },
            remove: {
                label: '<div class="lW">Remove<span class="hotkey">Del</span></div>',
                shortcut: 46,
                icon: 'glyphicon glyphicon-trash',
                action: function (data) {
                    inst = $.jstree.reference(data.reference);
                    removeNode.call(inst, inst.get_node(data.reference), inst.get_node(data.reference, true));
                },
                _disabled: false,
                _class: 'class',
                separator_before: true,
                separator_after: false,
            }
        };
        return menu;
    }
}


/////////////// TEXTAREA HIGHLIGHT  ///////////////////////////////
//  https://codersblock.com/blog/highlight-text-inside-a-textarea/
//  https://codepen.io/lonekorean/pen/gaLEMR
<!DOCTYPE html>
<html>
<body>
<div class="container">
  <div class="backdrop">
    <div class="highlights"></div>
  </div>
  <textarea>This demo shows how to highlight bits of text within a textarea. Alright, that's a lie. You can't actually render markup inside a textarea. However, you can fake it by carefully positioning a div behind the textarea and adding your highlight markup there. JavaScript takes care of syncing the content and scroll position from the textarea to the div, so everything lines up nicely. Hit the toggle button to peek behind the curtain. And feel free to edit this text. All capitalized words will be highlighted.</textarea>
</div>
<button>Toggle Perspective</button>

<script>
var $container = $('.container');
var $backdrop = $('.backdrop');
var $highlights = $('.highlights');
var $textarea = $('textarea');
var $toggle = $('button');

// yeah, browser sniffing sucks, but there are browser-specific quirks to handle that are not a matter of feature detection
var ua = window.navigator.userAgent.toLowerCase();
var isIE = !!ua.match(/msie|trident\/7|edge/);
var isWinPhone = ua.indexOf('windows phone') !== -1;
var isIOS = !isWinPhone && !!ua.match(/ipad|iphone|ipod/);

function applyHighlights(text) {
  text = text
 //   .replace(/\n$/g, '\n\n')
    .replace(/[A-Z].*?\b/g, '<mark>$&</mark>');

  if (isIE) {
    // IE wraps whitespace differently in a div vs textarea, this fixes it
    text = text.replace(/ /g, ' <wbr>');
  }
  return text;
}

function handleInput() {
  var text = $textarea.val();
  var highlightedText = applyHighlights(text);
  $highlights.html(highlightedText);
}

function handleScroll() {
  var scrollTop = $textarea.scrollTop();
  $backdrop.scrollTop(scrollTop);

  var scrollLeft = $textarea.scrollLeft();
  $backdrop.scrollLeft(scrollLeft);
}

function fixIOS() {
  // iOS adds 3px of (unremovable) padding to the left and right of a textarea, so adjust highlights div to match
  $highlights.css({
    'padding-left': '+=3px',
    'padding-right': '+=3px'
  });
}

function bindEvents() {
  $textarea.on({
    'input': handleInput,
    'scroll': handleScroll
  });

  $toggle.on('click', function() {
    $container.toggleClass('perspective');
  });
}

if (isIOS) {
  fixIOS();
}

bindEvents();
handleInput();
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans);

*, *::before, *::after {
  box-sizing: border-box;
}

body {
  margin: 30px;
  background-color: #f0f0f0;
}

.container, .backdrop, textarea {
  width: 460px;
  height: 180px;
}

.highlights, textarea {
  padding: 10px;
  font: 20px/28px 'Open Sans', sans-serif;
  letter-spacing: 1px;
}

.container {
  display: block;
  margin: 0 auto;
  transform: translateZ(0);
  -webkit-text-size-adjust: none;
}

.backdrop {
  position: absolute;
  z-index: 1;
  border: 2px solid #685972;
  background-color: #fff;
  overflow: auto;
  pointer-events: none;
  transition: transform 1s;
}

.highlights {
	white-space: pre-wrap;
	word-wrap: break-word;
	color: red; /*transparent;*/
}

textarea {
  display: block;
  position: absolute;
  z-index: 2;
  margin: 0;
  border: 2px solid #74637f;
  border-radius: 0;
  color: #444;
  background-color: transparent;
  overflow: auto;
  resize: none;
  transition: transform 1s;
}

mark {
  border-radius: 3px;
  color: green; /* transparent */
  background-color: #b1d5e5;
}

button {
  display: block;
  width: 300px;
  margin: 30px auto 0;
  padding: 10px;
  border: none;
  border-radius: 6px;
  color: #fff;
  background-color: #74637f;
  font: 18px 'Opens Sans', sans-serif;
  letter-spacing: 1px;
  appearance: none;
  cursor: pointer;
}

.perspective .backdrop {
  transform:
    perspective(1500px)
    translateX(-125px)
    rotateY(45deg)
    scale(.9);
}

.perspective textarea {
  transform:
    perspective(1500px)
    translateX(155px)
    rotateY(45deg)
    scale(1.1);
}

textarea:focus, button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #c6aada;
}
</style>
</body>
</html>


////////////////////  JSON VALID  //////////
//  http://jsfiddle.net/markcoleman/zsKEg/3/
/*
<textarea>{"Name" : "Valid Json"}</textarea>
<textarea>{"Name : "Invalid Json"}</textarea>
<div id="result"></div>


$("textarea").each(function() {
    try {
        var theJson = jQuery.parseJSON($(this).val());
        $("#result").append($("<h1>" + theJson.Name + "</h1>").addClass("good"));
    }
    catch (e) {
        $("#result").append($("<h1>Invalid Json " + $(this).val() + "</h1>").addClass("bad"));
    }
});


h1{
    font-size:20px;
    color:#FFFFFF;
    padding:5px;
}
h1.good{
    background-color:green;
}
h1.bad{
    background-color:red;
}
*/

//////////// HIGHLIGHT TEXTAREA JQUERY & DIV ///////
//  https://stackoverflow.com/questions/20518310/how-to-highlight-a-part-of-text-in-textarea
//  http://garysieling.github.io/jquery-highlighttextarea/examples.html

// DIV //  http://jsfiddle.net/c26r9/1/
/*
<div id="phrase"> I tweeted something #one #two @three @four </div>
<p> <a href="javascript:void(0);" class="replaceone">Replace all atsign I see</a> </p>
<p> <a href="javascript:void(0);" class="replaceall">Replace all hashtags in the string</a> </p>
<p> <a href="javascript:void(0);" class="reset">Reset to the original, unmodified string</a> </p>


var status = 'I tweeted something #one #two @three @four';
$('.replaceone').click(function(e) {
    e.preventDefault();
    var newStatus = status.replace(/@([^ ]+)/g, '<span class="atsign">@$1</span>');
    $("#phrase").html(newStatus);               //   @$1 <=> $&   $\u0060 |<-   $\u0027 ->|
});
$('.replaceall').click(function(e) {
    e.preventDefault();
    var newStatus = status.replace(/#([^ ]+)/g, '<span class="hashtag">#$1</span>');
    $("#phrase").html(newStatus);
});
$('.reset').click(function(e) {
    e.preventDefault();
    $("#phrase").html(status);
});


.hashtag {
    background-color: red;
    color: #FFFFFF;
    padding: 0px 2px;
}
.atsign {
    background-color: green;
    color: #FFFFFF;
    padding: 0px 2px;
}
*/
