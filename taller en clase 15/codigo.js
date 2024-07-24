alert("Hola Mundo!");
alert("Soy el primer Script");

var numero1 = 5;
var numero2 = 8;


if(numero1<=numero2) {
    alert("numero1 no es mayor que numero2");
    }
    if(numero2>0) {
    alert("numero2 es positivo");
    }
    if(numero1 !=0) {
    alert("numero1  distinto de cero");
    }
  
 
        
        
    var numero = prompt("Introduce un número y se mostrará su factorial");
    var resultado = 1;
     
    for(var i=1; i<=numero; i++) {
      resultado *= i;
    }
    alert(resultado);

   

    let body  = document.getElementById("button")
    let defaultColor = button.style.backgroundColor
    let colors = ["red", "blue", "green", "purple"]
    let count = 0;
    
    body.onmouseenter = function (e) {
        e.target.style.backgroundColor = colors[count % colors.length];
        count++;
    }
    
    body.onmouseleave = function (e) {
        e.target.style.backgroundColor = defaultColor;}

        

    