function ini(){
  document.getElementById("nsco").style.display="none"
  document.getElementById("nsdor").style.display="none";
  document.getElementById("nsof").style.display="none";
  document.getElementById("nssa").style.display="none";
}

function sal(){
  document.getElementById("nsco").style.display="none"
  document.getElementById("nsdor").style.display="none";
  document.getElementById("nsof").style.display="none";

  document.getElementById("nssa").style.display="block";
}

function com(){
  document.getElementById("nssa").style.display="none";
  document.getElementById("nsdor").style.display="none";
  document.getElementById("nsof").style.display="none";

  document.getElementById("nsco").style.display="block";
}

function dorm(){
/*
var nodes = document.getElementsByClassName("navsub");
       //se tiene que hacer de esta forma porque
       //no funciona de otra manera "class"-getElementsByClassName
       for(var i = 0; i < nodes.length; i++) {
        nodes[i].style.display = 'block';
       }
*/
  document.getElementById("nssa").style.display="none";
  document.getElementById("nsco").style.display="none"
  document.getElementById("nsof").style.display="none";

  document.getElementById("nsdor").style.display="block";
}

function ofi(){
  document.getElementById("nssa").style.display="none";
  document.getElementById("nsco").style.display="none"
  document.getElementById("nsdor").style.display="none";

  document.getElementById("nsof").style.display="block";
}


function nona1(){
//document.getElementById("subnvg").style.display="none";
  var nodes = document.getElementsByClassName("navsub");
       for(var i = 0; i < nodes.length; i++) {
        nodes[i].style.display = 'none';
       }
}