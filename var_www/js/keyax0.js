function xToggle(x) {x.classList.toggle("change");
		/* window.document.getElementById("cortina").classList.toggle("hovers");/*no Firefox*/
		var swy=window.document.getElementById("cortina").classList
		  if(!swy.contains("hovers")){swy.add("hovers")}
		  else{swy.remove("hovers")}
		}

function loadwin(){
    logout();
    viewsize();
    }

function viewsize() {window.document.getElementById("master").innerHTML = "London:";
                     window.document.getElementById("master").innerHTML += window.innerWidth+"w";
                     window.document.getElementById("master").innerHTML += window.innerHeight+"h";
                     window.document.getElementById("master").innerHTML += "<b> España  المغرب كِتَابٌ لَكُمْ ΑΒΓ  αω Алфа  ⵟⵉⴼⵉⵏⴰⵖ</b> אלפא";
                     window.document.getElementById("masterp").innerHTML = " España المغرب αω Алфа ⵟⵉⴼⵉⵏⴰⵖ אלפא";
			
                  /*   window.document.getElementById("utube").style.width = "100%";
			var alto=window.document.getElementById("utube").style.width;
                      window.document.getElementById("utube").parentElement.style.height = "400px";*/
      }

function loging() {
    //'use strict';
    var usuario = document.getElementById("loginid").value;
    var clave = document.getElementById("pwdid").value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { /*opcional*/
    //        usuario = document.getElementById("form1").elements.namedItem("login").value;
    //        clave = document.getElementById("form1").elements.namedItem("pwd").value;
    //document.getElementById("usery").innerHTML += usuario.clave;
    //document.getElementById("logs").innerHTML = usuario.clave;
              document.getElementById("logs").innerHTML = xmlhttp.responseText;
              document.getElementById("usery").innerHTML = xmlhttp.responseText;
        } else {document.getElementById("logs").innerHTML = "Login incorrecto";} /*dump("Error in query php.\n");}  *opc*/
    };
    //urlog="m/login.php?login=yones_kyx&pwd=Euro5577";
    //dump(urlog);
    xmlhttp.open("GET", 'http://keyax.net/m/login.php?login='+usuario+';pwd='+clave, true);/* ?login=yones_kyx&pwd=Euro5577 */
    xmlhttp.send();/*(null)*/
}

function logout() {
    //"use strict";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { /*opcional*/
                window.document.getElementById("usery").innerHTML = xmlhttp.responseText;
                window.document.getElementById("logs").innerHTML += ">>Logout correcto ";
                window.location.href = '#';
        } else {document.getElementById("logs").innerHTML = "Logout incorrecto";}/*dump("Error in query php.\n");} *opc*/
    };
    xmlhttp.open("GET", "m/logout.php", true);/* ?login=yones_kyx&pwd=Euro5577 */
    xmlhttp.send();/*(null)*/
}

    //document.getElementById("lang").addEventListener("keypress", showHint(lang), false);
function showHint(vlng) {
    //var vlng=document.getElementById("lang").value;
    var xhttp;
    if (vlng.length == 0) { 
        document.getElementById("lang").style.backgroundColor = "white";
        document.getElementById("langs").innerHTML = "";
        return;
        }
    document.getElementById("lang").style.backgroundColor = "yellow";
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (xhttp.readyState == 4 && xhttp.status == 200)
           {
           //alert("hellos!!"+xhttp.responseText);   
           document.getElementById("langs").innerHTML = xhttp.responseText;
           }
    };
    xhttp.open("GET", "m/getlang.php?lng="+vlng , true);
    xhttp.send();
}

function() who() {
    //'use strict';
    //var usuario = document.getElementById("loginid").value;
    //var clave = document.getElementById("pwdid").value;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) { /*opcional*/
             document.getElementById("usery").innerHTML = xmlhttp.responseText;
        } else {document.getElementById("usery").innerHTML = "Guest";} 
    };
   xmlhttp.open("GET", 'http://keyax.net/m/who.php', true);
   xmlhttp.send();
}

function submitk() {
	$.get("functions.php");
	return false;
	}

function submitkk() {
		}
			



function onPress_ENTER()
{
        var keyPressed = event.keyCode || event.which;

        //if ENTER is pressed
        if(keyPressed==13)
        {
            alert('enter pressed');
            keyPressed=null;
        }
        else
        {
            return false;
        }
}


var modal = document.getElementById('myModal');// Get the modal
var btn = document.getElementById("BtnLogin");// Get the button that opens the modal
var span = document.getElementsByClassName("close")[0];// Get the <span> element that closes the modal
btn.onclick = function() {modal.style.display = "block";}// When the user clicks the button, open the modal 
span.onclick = function() {modal.style.display = "none";}// When the user clicks on <span> (x), close the modal
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      alert(  modal.style.display = "block");
    }
}

