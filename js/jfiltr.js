
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


var op=0;

function fbtn(){
//document.getElementById("subnvg").style.display="none";
  var nodes = document.getElementsByClassName("fbt");
       
            if(op==0){
            for(var i = 0; i < nodes.length; i++) {
                nodes[i].style.background="rgba(18, 138, 125, .9)";
            }
            op=1;
            
            } else{
              for(var i = 0; i < nodes.length; i++) {
                nodes[i].style.background="black";
              }
              op=0;
 
            }
                 localStorage.setItem("v1",op);

}


var co=0;

function colo(){
//document.getElementById("subnvg").style.display="none";
  var nodes = document.getElementsByClassName("colr");
       
            if(co==0){
            for(var i = 0; i < nodes.length; i++) {
                nodes[i].style.border="1px solid #15f4ee";
            }
            co=1;
            
            } else{
              for(var i = 0; i < nodes.length; i++) {
                nodes[i].style.border="1px solid white";
              }
              co=0;
 
            }
                 localStorage.setItem("cor",co);

}