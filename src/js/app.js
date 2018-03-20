 function allowDrop(ev) {
     ev.preventDefault();
 }

 function drag(ev) {
     ev.dataTransfer.setData("text", ev.target.classList[0]);

 }

 function drop(ev) {
     ev.preventDefault();
     var data = ev.dataTransfer.getData("text");
     var nuevo = ev.target.classList[0];
     if (data === nuevo) {
         ev.target.appendChild(document.querySelector("." + data));
     } else {

     }


 }