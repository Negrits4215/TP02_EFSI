const tiempoInicio= [];
const tiempoFinal=[];
const tarea=[];


// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    const complete = new Date;
    tiempoFinal[tiempoFinal.length] = complete.getTime();
    tiempoFinal[0];
    console.log(ev.target)
    ev.target.innerHTML += " " + complete;
    ev.target.style.color("red");
  }
}, false);
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  const dia = new Date;
  var t = document.createTextNode(inputValue + " "+ dia);

  tiempoInicio[tiempoInicio.length] = dia.getTime();
  tarea[tarea.length] = inputValue;
  
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

function minTemp(){
  if(tiempoFinal.length!=0){
    var i = (tiempoFinal[0]-tiempoInicio[0]);
    var min;
    for (x=0; x<tiempoFinal.length;x++){
      if((tiempoFinal[x-1]-tiempoInicio[x-1])>i){
        i=(tiempoFinal[x-1]-tiempoInicio[x-1]);
        min = tarea[x-1];
      }
      else{
        min=tarea[0]
      }
    }
    document.getElementById("min").innerHTML = min;
  }
  else{
    document.getElementById("min").innerHTML = "Complete una tarea"
  }
}