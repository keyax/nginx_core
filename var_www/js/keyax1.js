/*globalXwindow*/
/*jslintXbrowser:true*/
//"useXstrict";

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
$(document).ready(function () {
    $("#menut").lazeemenu();
})

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
    var tim = timset + " UTC " + y + "-" + mes + "-" + dia + " " + sema[sem] + " " + h + ":" + m + ":" + s;
    document.getElementById('timel').innerHTML = tim;
    document.getElementById('timel').style.fontSize = '75%';
    var time = setTimeout(startTime, 3000);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}
   // var dateString = new Date(timestamp).format("dd-MM-yyyy hh:mm");
   // var today = new Date();
   // document.write(today);

function viewsize() {

  $(window).on('beforeunload', function(){
      sockt.close();
  });


    //"use strict";
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    var t = document.getElementById("timel");
    t.innerHTML = startTime();
    var x = document.getElementById("sizewin");
    x.innerHTML = "W: " + w + " H: " + h;
    var xx = document.getElementById("masterx");
    xx.innerHTML = "<u>Keyax Multilingual Computers:</u><br>";
    xx.innerHTML += new Date();
    xx.innerHTML += "<b>Latin Script languages اللغة العربية ⵟⵉⴼⵉⵏⴰⵖ кириллицы Алфа ελληνικά  עִברִית אלפא</b><br>";
    xx.innerHTML += "Latin Script languages اللغة العربية ⵟⵉⴼⵉⵏⴰⵖ кириллицы Алфа ελληνικά עִברִית אלפא<br>";
/*  document.getElementById("utube").style.width = "100%";
    var alto=window.document.getElementById("utube").style.width;
    document.getElementById("utube").parentElement.style.height = "400px";*/
}

var xuser = {};
function formch() {
xuser.usr="texto";
}

function logings(data){
var data = {};
        data.title = "title";
        data.message = "message";
        $.ajax({
          type: 'POST',
          data: JSON.stringify(data),
          contentType: 'application/json',
          url: "http://kyx.dynu.com:9000/xfield" ,
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

}*/

//=== document.getElementById("myBtn").addEventListener("click", function(){
//===      document.getElementById("demo").innerHTML = "Hello World"; });
//</script>

// *******************<script>
/*
angular.module('ngapp', []).controller('ctrlr', ['$http', function ($http) {
                var formData = { 'email' :'yones_kyx', 'pass':'Euro5577'};
                var postData = 'myData='+JSON.stringify(formData);
                $http({ method : 'POST',
                        url : 'm/login.php',
                        data: postData,
                        headers : {'Content-Type': 'application/x-www-form-urlencoded'}

                }).success(function(res){
                        console.log("exito" + res + "final");
      // document.getElementById("message").textContent = "You have login successfully with email "+data;
                }).error(function(error){
                        console.log(error);
        });

        }]);
*/
/*
* This method will be called on click event of button.
* Here we will read the email and password value and call our PHP file.
*/

//$scope.logings = function (user) {
//$scope.master = angular.copy(user);
//document.getElementById("message").textContent = "";
//$http.post('m/login.php', {email: user.login, pass: user.pwd}).then(successCallback, errorCallback);
/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
angular.module('ngapp', []).controller('ctrlr', ['$http', function ($http) {
        var formData = {'email': user.login, 'pass': user.pwd};
        var postData = 'myData=' + JSON.stringify(formData);
        var request= $http({
                method: 'POST',
                url: 'm/login.php',
                data: postData,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
        request.success(function (res) {
                   console.log("exito" + res + "final");
          // document.getElementById("message").textContent = "You have login successfully with email "+data;
        });
        request.error(function (error) {
                        console.log(error);
        });
    }]);
<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<- */
/*var request = $http({
    method: "post",
    url: "m/login.php",
    data: {
        email: user.login,
        pass: user.pwd
    },
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
});
*/
// ** Check whether the HTTP Request is successful or not.
//request.success(function (data) {
//    document.getElementById("message").textContent = "You have login successfully with email "+data;
//})
////////}

// ************************</script>

/*
document.getElementById("myBtn").addEventListener("click", function(){
    document.getElementById("demo").innerHTML = "Hello World";
});*/



 /*   var usuario = document.getElementById("loginid").value;
    var clave = document.getElementById("pwdid").value;
    var usekey = "login=" + usuario + "&pwd=" + clave;
    var url = "http://keyax.net/m/login.php";
    var xmlhttp = new XMLHttpRequest();
    var response = "who";*/
        // Simple GET request example:
// $http.post('http://keyax.net/m/login.php?login=yones_kyx&pwd=Euro5577', data, config).then(successCallback, errorCallback);
/*
$http({
  method: 'POST',
  url: 'http://keyax.net/m/login.php?login=yones_kyx&pwd=Euro5577'
}).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });*/
  // "use strict";
/*    var usuario = document.getElementById("loginid").value;
    var clave = document.getElementById("pwdid").value;
    var usekey = "login=" + usuario + "&pwd=" + clave;
    var url = "http://keyax.net/m/login.php";
    var xmlhttp = new XMLHttpRequest();
    var response = "who";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) { //status === 0 && statusText === "" in file:// and ftp://
    //      usuario = document.getElementById("form1").elements.namedItem("login").value;
    //      clave = document.getElementById("form1").elements.namedItem("pwd").value;
            response = xmlhttp.responseText;
            document.getElementById("logs").innerHTML = response;
            document.getElementById("usery").innerHTML = response;
            window.location.href = "#videos";

        } else {
            document.getElementById("logs").innerHTML = "Waiting Response...";
        }

//  xmlhttp.open("GET", "http://keyax.net/m/login.php?login=" + usuario + "&pwd=" + clave, true);
//  xmlhttp.send(null);  // null: legacy Firefox ≤3, GET parms without Activex
    xmlhttp.open("POST", url + "?" + usekey, true);
    xmlhttp.send(null);
//    document.getElementById('form1').submit()
    return "callback: " + response;
};
*/

function xToggle(x) {
    //"use strict";
    x.classList.toggle("change");
    /* window.document.getElementById("cortina").classList.toggle("hovers");  *no Firefox*/
    var swy = document.getElementById("cortina").classList;
    if (!swy.contains("hovers")) {
        swy.add("hovers");
    } else {
        swy.remove("hovers");
    }
}
/*function loging() {
    var frm1 = document.getElementById("form1")
    frm1.onsubmit = function(E){return false;}
}*/
/*
   function loging() {// form validation then submit()
   // "use strict";
    var usuario = document.getElementById("loginid").value;
    var clave = document.getElementById("pwdid").value;
    var usekey = "login=" + usuario + "&pwd=" + clave;
    var url = "m/login.php";   //"http://keyax.net/m/login.php";
    var xmlhttp = new XMLHttpRequest();
    var response = "who";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) { //status === 0 && statusText === "" in file:// and ftp://
    //      usuario = document.getElementById("form1").elements.namedItem("login").value;
    //      clave = document.getElementById("form1").elements.namedItem("pwd").value;
            response = xmlhttp.responseText;
            document.getElementById("logs").innerHTML = response;
            document.getElementById("usery").innerHTML = response;
            window.location.href = "#videos";

        } else {
            document.getElementById("logs").innerHTML = "Waiting Response...";
        }
    };
//  xmlhttp.open("GET", "http://keyax.net/m/login.php?login=" + usuario + "&pwd=" + clave, true);
//  xmlhttp.send(null);  // null: legacy Firefox ≤3, GET parms without Activex
    xmlhttp.open("POST", url + "?" + usekey, true);
    xmlhttp.send(null);
//    document.getElementById('form1').submit()
    return "callback: " + response;
}*/

/* this function will handle form's post callback and load response to div
function frameload(){
    var divpos = document.getElementById('f3id').innerHTML;
    document.getElementById('divpost').innerHTML = divpos;
}*/

function logout() {
    //"use strict";
    var xmlhttp = new XMLHttpRequest();
    var response = "who";
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
            response = xmlhttp.responseText;
            window.document.getElementById("usery").innerHTML = response;
            window.document.getElementById("f3id").innerHTML = "Logout...";
            window.document.getElementById("divpost").innerHTML += "response...";
            window.document.getElementById("logs").innerHTML = ">>Logged out";
            window.location.href = "#videos";
        } else {
            document.getElementById("logs").innerHTML = "Waiting Logout...";
        }/*dump("Error in query php.\n");} *opc*/
    };
    xmlhttp.open("POST", "m/logout.php", true);
    xmlhttp.send(null); /*null: legacy Firefox ≤3, GET without Activex*/

};

    //document.getElementById("lang").addEventListener("keypress", showHint(lang), false);
    function showHint(vlng) {
//        "use strict";
        var uri = `http://kyx.dynu.com:9000/sqldb/:${vlng}`;
        var xhr = new XMLHttpRequest();
        if (vlng.length === 0) {
            document.getElementById("lang").style.backgroundColor = "white";
            document.getElementById("langs").innerHTML = "";
            return;
        } else {
        document.getElementById("lang").style.backgroundColor = "yellow";


        function processData(vlng) {
            // taking care of data
            console.log("datalog" + vlng);
        }
        function handler() {
            if (xhr.status === 200
                && xhr.readyState === 4
                && xhr.responseText !== null) {
//              && xhr.responseText.getElementById("lang").textContent)
//                success!
    //            processData(xhr.responseText.getElementById("lang").textContent);
//              alert("hellos!!" + xhr.responseText);
                document.getElementById("lang").innerHTML = xhr.responseText;
                return xhr.responseText;
                } else {
              // something went wrong
              console.log("datalog + data");
            }
        }
    }
//      xhr.onload = handler;
  //    xhr.send();

  xhr.open("POST", uri, async = true); //, user = null, password = null);
/*
  xhr.setRequestHeader("Access-Control-Allow-Origin","*");
  xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
//supported in new browsers...do JSONP based stuff in older browsers...figure out how
  xhr.setRequestHeader("Content-Type","text/html");
  xhr.setRequestHeader("Accept","text/html");
//        xhr.setRequestHeader("Accept","application/json");
  //xhr.onload = handler;
*/
      xhr.onload = function () {
      if (xhr.readyState === xhr.DONE) {
          if (xhr.status === 200) {
              console.log(xhr.response);
              console.log(xhr.responseText);
          }
      }
  };
//  xhr.send(JSON.stringify(data));
  xhr.send();
};
    //Synchronous XMLHttpRequest on the main thread is deprecated because of its detrimental effects to the end user's experience.
    // For more help http://xhr.spec.whatwg.org/
    //    var vlng=document.getElementById("lang").value;
/*
        var uri = `http://kyx.dynu.com:9000/xfield/${vlng}`;

        xhr.onload = handler;
        xhr.open("POST", uri, async = true); //, user = null, password = null);
        xhr.setRequestHeader("Access-Control-Allow-Origin","*");
        xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
  //supported in new browsers...do JSONP based stuff in older browsers...figure out how
        xhr.setRequestHeader("Content-Type","text/html");
        xhr.setRequestHeader("Accept","text/html");
//        xhr.setRequestHeader("Accept","application/json");
//        xhr.send(JSON.stringify(data));
        xhr.send(null);*/
////    };

/*
function showHint(vlng) {
    //"use strict";
//    if (e.defaultPrevented) { // the default was prevented
//}
    //var vlng=document.getElementById("lang").value;
    if (vlng.length === 0) {
        document.getElementById("lang").style.backgroundColor = "white";
        document.getElementById("langs").innerHTML = "xxx";
        return;
    }
var uri = `http://kyx.dynu.com:9000/xfield/${vlng}`;

//    xhr.setRequestHeader("Access-Control-Allow-Origin","*");
function autoreq(uri, done) {
       console.log('work please');
       var xhr = new XMLHttpRequest();
       console.log(xhr);
       console.log(file);
//       xhr.open("GET", "app/sign?file_name=" + file.name + "&file_type=" + file.type);
       xhr.open("GET", uri, true);
       xhr.onreadystatechange = function() {
           if(xhr.readyState === 4 && xhr.status === 200) {
               var response = JSON.parse(xhr.responseText);
               console.log(response);
               done(response);
           }
       };
       xhr.send();
   };
}*/
/*
    xhr.open("GET", `http://kyx.dynu.com:9000/xfield/${vlng}` , true);
    xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
    xhr.setRequestHeader("Access-Control-Allow-Origin","*");
    xhr.setRequestHeader("Access-Control-Allow-Methods","GET, PUT, OPTIONS");
    xhr.setRequestHeader("Accept","text/html");
    xhr.setRequestHeader("Content-Type","text/html");*/
     //supported in new browsers...do JSONP based stuff in older browsers...figure out how

//  xhttp.open("POST", "m/getlang.php?lng=" + vlng, true);

//    xhttp.setRequestHeader('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');
//serv    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Origin; Content-Type; Methods");
//serv    xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
//serv    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET; POST; OPTIONS");
//    xhttp.setRequestHeader("Content-type", "application/json; charset=utf-8");
//      xhttp.setRequestHeader("Content-Type", "text/html; charset=utf-8");
//    xhttp.setRequestHeader("Connection", "close");
/*
    document.getElementById("lang").style.backgroundColor = "yellow";
    xhr.onreadystatechange = function() {
      if(this.readyState == this.HEADERS_RECEIVED) {
        console.log(xhr.getResponseHeader("Content-Type"));
        document.getElementById("langs").innerHTML = xhttp.responseText;
      }
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
//          alert("hellos!!"+xhttp.responseText);
          document.getElementById("langs").innerHTML = xhttp.responseText;
          }
    };
    xhr.onload = function () {
        if (xhttp.readyState === xhr.DONE) {
            if (xhttp.status === 200) {
                console.log(xhr.response);
                console.log(xhr.responseText);
            }
        }
    };
     xhr.send(JSON.stringify(xhr.response));

  //   xhr.send();
}();

}
*/
function loadwin() {
    //"use strict";
    //logout();
    viewsize();
}

function who() {
    "use strict";
    //var usuario = document.getElementById("loginid").value;
    //var clave = document.getElementById("pwdid").value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState === 4 && xmlhttp.status === 200) { /*opcional*/
            document.getElementById("usery").innerHTML = xmlhttp.responseText;
        } else {
            document.getElementById("usery").innerHTML = "Wait";
        }
    };
    xmlhttp.open("GET", "m/who.php", true);
    xmlhttp.send();
}

function submitk() {
    //"use strict";
    //$.get("functions.php");//Undeclared '$'.
    return false;
}

function submitkk() {
    //"use strict";
    return false;
}

function onPress_ENTER() {
    //"use strict";
    var keyPressed = event.keyCode || event.which;
    //if ENTER is pressed
    if (keyPressed === 13) {
            //alert("enter pressed");
        keyPressed = null;
    } else {
        return false;
    }
}

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
