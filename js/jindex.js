
function bot(){
      // document.getElementsByClassName("rw").style.color="blue";
       var nodes = document.getElementsByClassName("ra");
       //se tiene que hacer de esta forma porque
       //no funciona de otra manera "class"-getElementsByClassName
       for(var i = 0; i < nodes.length; i++) {
        nodes[i].style.color = 'blue';
       }

}



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




//SOLO EL PRIMERO CUENTA
/*
const miTitulo = document.querySelector('p');
miTitulo.textContent = '¡Hola mundo!';
*/

/*
document.querySelector('html').onclick = function() {
    alert('¡Ouch! ¡Deja de pincharme!');
}
*/

//PRACTICANDO: *zX

/*
let miBoton = document.querySelector('button');
let miTitulo2 = document.querySelector('h1');
let subti2 = document.querySelector('h2');

miBoton.onclick = function() {
    estableceNombreUsuario();
}
*/

//Esto verifica en la misma pagina si actualizar
//si el nombre que escribio antes es el mismo o diferente
/*
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    //localStorage.setItem('nombre', miNombre);
    let xd =localStorage.getItem('nombre');

    if (!(xd==miNombre)) {
    	localStorage.setItem('nombre', miNombre);
    	subti2.textContent = 'NUEVO';
    	miTitulo2.textContent = 'Mozilla es genial,' + miNombre;

      //estableceNombreUsuario();
      
    }
    else {
       let nombreAlmacenado = localStorage.getItem('nombre');
       miTitulo2.textContent = 'Mozilla es genial,' + nombreAlmacenado;
       subti2.textContent = 'YA ESTA ALMACENADO';
    }

}
*/


/*
//esto es cuando clicleamos el boton
function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    localStorage.setItem('nombre', miNombre);
    miTitulo2.textContent = 'Hola  __  ' + miNombre;

    
}    

//esto es cuando entro a una pagina 
//automaticamente se activa
if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo2.textContent = 'Hola carepinga  --  ' + nombreAlmacenado;
}
*/

//*zX


