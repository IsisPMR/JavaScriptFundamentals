//EVENTOS EN JAVASCRIPT
function setcolor(){
    alert("setcolor")
    let element = document.getElementsByTagName('body')
    document.body.style.backgroundColor = "yellow";
}

function changelettercolor(){
    let elem = document.getElementById('contenedor');
    elem.style.color = "blue";
}

// onmouseout
function changelettercolorback(){
    let elem2 = document.getElementById('contenedor');
    elem2.style.color = "black";
}

//Submit  Index linea 20
function SAVE(){
 alert("La información ha sido enviada con exito");
}

//window.onload = () => alert("holaevent");


//INDEX LINEA 31
//function save(){
 //   alert("save");
 //   let emement = document.getElementById('name').value;
 //   console.log(element);
 //  if(element !== "ANA"){
 //   alert("no puedo enviar tu formulario hasta que escribas ANA")
 //   return ;
 //   }
//}