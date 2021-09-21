var url = "http://localhost/login_php/conexion1.php";




var personas = new function(){
    this.tablaregistro=document.getElementById("tablaregistro");
    this.editarnombre=document.getElementById("editarnombre");
    this.editarapellido=document.getElementById("editarapellido");
    this.editarcorreo=document.getElementById("editarcorreo");
    this.numero=document.getElementById("numero");



    this.LeerTabla= function(){

        
        var datos="";

        fetch(url)
        .then(r=>r.json())
        .then((respuesta)=>{
            console.log(respuesta)
            respuesta.map(
                function(persona,index,array){
                    datos+="<tr>";
                    datos+="<td>"+persona.id+"</td>";
                    datos+="<td>"+persona.nombre+"</td>";
                    datos+="<td>"+persona.apellido+"</td>";
                    datos+="<td>"+persona.correo+"</td>";                    
                    datos+='<td><div><button type="button" class="btn btn-success btn-lg" data-toggle="modal" data-target="#modelId" onclick="personas.Editar('+persona.id+')">Editar</button><button type="button" class="btn btn-danger btn-lg"  onclick="personas.Eliminar('+persona.id+')">Eliminar</button></div>'+'</td>';
                    datos+="</tr>";
                

            });
            return this.tablaregistro.innerHTML=datos;
        })
        .catch(console.log)

        
    }



    this.Eliminar=function(id){      


      

        console.log(id);

        fetch(url+"?borrar="+id)
        .then(respuesta=> respuesta.json())
        .then((datosRespuestas)=>{
            console.log("Eliminados");
            alertify.success("Eliminado con exito :)");

            this.LeerTabla();
        }).catch(error => alertify.error("NO se pudo Eliminar el registro :("))







    }


    this.Editar = function(id){
        console.log(id);

        this.id="";



        fetch(url+"?consultar="+id)
        .then(respuesta=>respuesta.json())
        .then((datosRespuestas)=>{

            console.log(datosRespuestas);
            
            this.numero=id;       
            this.editarnombre.value=datosRespuestas[0]['nombre'];
            this.editarapellido.value=datosRespuestas[0]['apellido'];
            this.editarcorreo.value=datosRespuestas[0]['correo'];
            
            console.log(this.numero);
            
            



        })
        .catch(console.log);

    

    }


    this.Actualizar=function(){ 

        var datosEnviar={id:this.numero,nombre:this.editarnombre.value,apellido:this.editarapellido.value,correo:this.editarcorreo.value};
        console.log(datosEnviar);

        fetch(url+"?actualizar=1",{method:"POST",body:JSON.stringify(datosEnviar)})
        .then(respuesta=>respuesta.json)
        .then((datosRespuestas)=>{
            console.log("Actualizados");
            this.editarnombre.value="";
            this.editarapellido.value="";
            this.editarcorreo.value="";        
            
            this.LeerTabla();
            
            alertify.success("Actualizado Con Exito :)");
            modal.hide();
            
                

            })
            .catch(console.log)


        console.log("actualizar");
        this.numero = "";
    }



}

personas.LeerTabla();