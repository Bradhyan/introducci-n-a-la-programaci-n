window.onload = function(){


    
    const selectElement = document.forms[0].categoria;
    
    
    
    const container = document.getElementById("container");
    
  
    const sendButton = document.getElementById("send-button");
    
    const finish = document.getElementById("finish");
    
io
    

    
    finish.addEventListener('click', completarCompra);
    
 

    
    product_list = [];
    
    var ids = 0;
    
    var elementos = document.forms[0].elements;
    
    function addProduct () { 
       
        var id = ids;
        var categoria = elementos[0].value;
        var tamaño = document.forms[0].size.value;
    
       
        var c2 = document.getElementById("sin_decorar");
        var c3 = document.getElementById("pastillaje");
        var c4 = document.getElementById("crema");
    
        var complementos = [c1,c2,c3,c4];
    
        
    `<p><strong>${categoria} </strong><br>
    
    Cantidad: ${categoria.cantidad}   Precio: ${categoria.precio}   Complementos: ${categoria.extras}4 c/u
    
    Total a pagar: ${producto.getTotal()}</p>
    
    <input type="button" class="button" name="delete" value="Eliminar">`;
    
        container.appendChild(element);
        product_list.push(producto);
        document.forms[0].reset();
        console.log(product_list);
    
        container.removeEventListener("click", deleteProduct);
        container.addEventListener("click", function(e){
    
        console.log(e.target+": "+e.target.name+" "+ producto.id);
        if(e.target.name === 'delete'){
            deleteProduct(e.target, producto.id);
        }
    
    });
        return false;
    
    }
    
    function completarCompra(){
        var total = 0;
        for(i=0; i< product_list.length; i++){
             console.log(product_list[i]);
             total+=product_list[i].getTotal();
        }
        alert("Monto total a pagar: "+total);
    }
    
    function deleteProduct(element, id){
        if(element.name === 'delete'){
            element.parentElement.remove();
            if(product_list.length>0){
                
                product_list.splice(id,1);
                ids-=1;
            }
                console.log("Productos: "+ product_list.length);
        }else{
    
            return;
        }
    
    }
    
    
    
        console.log("ID: "+id);
    
        switch (tipo) {
            case "fresa":
                this.precio = 19.000;
                break;

            case "zanahoria":
                this.precio = 14.000;
                break;

            case "banano":
                this.precio = 14.000;
                break;

            case "chocolate":
                this.precio = 18.000;
                break;

            case "envinada":
                this.precio = 21.000;
                break;
        }
        this.subtotal = this.cantidad*this.precio;
    
        var envase = 0;
    
        if(this.tamaño == "pequeño"){
            envase+=2.00;
        }
        else if(this.tamaño == "mediano"){
            envase+=5.00;
    
        }else{
            envase+=7.00;
        }
    
        var adicional = 0;
    
        for (var i=0; i<complementos.length;i++){
               if(complementos[i].checked == true){
                   adicional+=4.00;
                   this.extras+=complementos[i].value+", ";
               }
        }
    
        this.getTotal = function (){
            var total = this.subtotal + envase + adicional;
            return total;
        }  
    
       }   