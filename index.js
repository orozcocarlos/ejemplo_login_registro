var url = "http://localhost/login_php/conexion1.php";

var personas = new function(){

    this.nombre=document.getElementById("nombre");
    this.apellido=document.getElementById("apellido");
    this.correo=document.getElementById("correo");

    
    this.Agregar=function(){
        console.log(this.nombre.value);
        console.log(this.apellido.value);
        console.log(this.correo.value);


        var datosEnviar={nombre:this.nombre.value,apellido:this.apellido.value,correo:this.correo.value};

        fetch(url+"?insertar=1",{method:"POST",body:JSON.stringify(datosEnviar)})
        .then(respuesta=>respuesta.json)
        .then((datosRespuestas)=>{
            console.log("Insertados");     
            console.log(datosEnviar);  
            this.nombre.value="";
            this.apellido.value="";
            this.correo.value="";
            alertify.success('Agregado con exito');
            

           
            
        })
        .catch(error => alertify.error("Fallo el servidor :("));
        
        
    }

}

