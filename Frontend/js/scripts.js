
function buscar(nombreI){
    const nombre = document.getElementById(nombreI).value;
    fetch(`/buscar/${nombreI}`,{
        method: 'POST',
        body: JSON.stringify({"nombre": nombre}),
        headers: {
         'Content-Type': 'application/json'
       }}).then((res)=>{
        return res.json();
    }).then((res)=>{
        if(res.length<1){
            alert("No se encontró a nadie con ese nombre");
        }else{
            res.forEach(element => {
                var tabla = document.getElementById("tabla");//crea la fila de la tabla y reemplaza cell# con el valor
            var row = tabla.insertRow(-1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            cell1.innerHTML = element.nombre_persona;
            cell2.innerHTML = element.nombre_mascota;
            cell3.innerHTML = element.descripcion_servicio;
            });
        }
    }).catch((err)=>{
        console.log(err);
    })
}

