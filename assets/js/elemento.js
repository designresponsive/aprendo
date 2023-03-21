const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const alerta = document.getElementById("alerta");
const images = document.getElementById("images");

boton1.addEventListener("click", function() {
  boton1.style.display = "none";
  boton2.style.display = "block";
  alerta.textContent = ""
  images.style.display = "none";
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);
  
  boton2.style.margin = x + 'px';
  boton2.style.top = y + 'px';
  boton2.style.marginLeft = '30px';
});

boton2.addEventListener("click",function(){
  boton2.style.display = "none";
  boton3.style.display = "block";
  // boton2.style.marginTop = '30px' ;
  // boton2.style.marginLeft = '62px';
  // boton2.style.marginBottom = '44px';
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);
  
  boton3.style.margin = x + 'px';
  boton3.style.top = y + 'px' - 100;
  boton2.style.marginRight= '30px';
  boton2.className = "main-button-slider";
});

boton3.addEventListener("click", function(){
  boton3.style.display = "none";
  boton4.style.display = "block";
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);
  
  boton4.style.margin = x + 'px';
  boton4.style.top = y + 'px'- 100;
  boton2.style.marginRight = '30px';
});

boton4.addEventListener("click", function(){
  boton4.style.display = "none";
  boton5.style.display = "block";
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);
  
  boton5.style.margin = x + 'px';
  boton5.style.top = y + 'px'- 100;
  boton2.style.marginRight = '30px';
});

boton5.addEventListener("click", function(){
  boton5.style.display = "none";
  boton6.style.display = "block";
  const x = Math.floor(Math.random() * 500);
  const y = Math.floor(Math.random() * 500);
  
  boton6.style.margin = x + 'px';
  boton6.style.top = y + 'px'- 100;
  boton2.style.marginRight = '30px';
});

boton6.addEventListener("click", function(){
  boton6.style.display = "none";
  boton1.style.display = "disabled";

  images.style.display = "block";
  
});

setTimeout(function() {
    document.getElementById("images").style.display = "none";
  }, 9000)
 
  ;
  
