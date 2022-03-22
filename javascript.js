// //declaracion de una funcion al a que quiero llamar cualgan click en h1
// //antes se usaba onclick manejar manejarClick en html
// //ahora voy a conseguir lo mismo activando un eventListerner en el H1.
// function manejarClick(){
//
//   alert("Me has hecho click.");
// }
//
//
//
// //ahora le añado al elemento h1 una oreja/eventListener que escucha a ver si se produce un click sobre el h1.
// document.querySelector("h1").addEventListener("click",manejarClick);
//
// document.querySelector("h1").addEventListener("mouseout",function noTeVayas(){
//
// alert("Porfa,no te quites de encima mio.");
//                                                     });

//lo de abajo... quiero añadir eventListener a todos los bortones para que me avise cuando hagan click a cualquiera
var arrayConLosBotones=document.querySelectorAll(".caja");

//averiguo la longitud del array numeros de botones que he guardado

var numeroDeBotones=arrayConLosBotones.length;

//ahora recorro uno por uno los botones usando un bucle de tipo FOR
//y en cada repeticion añado un Listener al boton que corresponde.

// for(var i=0;i<numeroDeBotones;i++){arrayConLosBotones[i].addEventListener( "click",function avisoClick() {alert("Hiciste click en un boton.");});}
  //aqui añado eventListener

  for (var i=0;i<numeroDeBotones;i++) {arrayConLosBotones[i].addEventListener ("click",function tocarTOM1() {//var tom1 = new Audio ("sonidos/tom-1.mp3");
//tom1.play();

// alert(this.innerHTML);
//extraemos la letra del boton para saber que sonido reproducir

var letraBoton=this.innerHTML;
//ahora uso la leta en un switch para reflejar los 7 casos posibles.
switch (letraBoton){
case  "w": var tom1 = new Audio ("sonidos/tom-1.mp3");
           tom1.play();
           break;



case  "a": var tom2 = new Audio ("sonidos/tom-2.mp3");
            tom2.play();
            break;



case  "s": var tom3 = new Audio ("sonidos/tom-3.mp3");
              tom3.play();
              break;


case  "d": var tom4 = new Audio ("sonidos/tom-4.mp3");
              tom4.play();
              break;



case  "j": var tom5 = new Audio ("sonidos/snare.mp3");
                            tom5.play();
                            break;


case  "k": var tom6 = new Audio ("sonidos/crash.mp3");
                              tom6.play();
                              break;


case  "l": var tom7 = new Audio ("sonidos/kick-bass.mp3");
                                tom7.play();
                                break;



}

;});}
