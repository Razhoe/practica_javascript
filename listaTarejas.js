/* Creando el boton cerrar y añadiendolo a la lista */

var miLista = document.getElementsByTagName("li"); // Devuelve un elemento
var i;
for(i = 0; i < miLista.length; i++){ //Creando ciclo para mirar la longitud de la lista
    var span = document.createElement("span"); //Creando un elemento con etiquta span
    var signo = document.createTextNode("\u00D7"); //Creando el signo de multiplicacion
    span.className = "cerrar"; //Asignandole una clase a la variable span
    span.appendChild(signo); //Agregando el signo al final
    miLista[i].appendChild(span);
}

/* Dandole funcion al signo de multiplicacion */
var cerrar = document.getElementsByClassName("cerrar");
var i;
for ( i = 0; i < cerrar.length; i++){
    cerrar[i].onclick = function(){ //Creando la funcion al dar click
        var div = this.parentElement;
        div.style.display = "none";
    }
}

/* añadiendo la opcion de marcar a la lista */
var lista = document.querySelector('ul'); // Obteniendo el primer elemento
lista.addEventListener('click', function(evento) { //Creando una funcion para añadirla a la lista
  if (evento.target.tagName === 'LI') { //Realizando una comparacion con solamente los mismos elementos
    evento.target.classList.toggle('marcar');
  }
}, false);


// Creando un nuevo item en la lista
function agregarElemento() {
    var li = document.createElement("li"); //Creando elemento de tipo "li"
    var valor = document.getElementById("miValor").value; //Devuelve el valor
    var t = document.createTextNode(valor);
    li.appendChild(t);
    if (valor === '') {
      alert("Debes escribir un elemento");
    } else {
      document.getElementById("miListaDeTareas").appendChild(li);
    }
    document.getElementById("miValor").value = "";
  
    // Creando de nuevo el boton cerrar
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "cerrar";
    span.appendChild(txt);
    li.appendChild(span);
  
    // añadiendo la funcion al boton cerrar
    for (i = 0; i < cerrar.length; i++) {
      cerrar[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  } 
