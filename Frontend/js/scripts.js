
function buscar(e,nombreI){
    e.preventDefault();
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
            alert("No se encontró a ninguna "+nombreI+" con ese nombre");
        }else{
            var tabla = document.getElementById("tabla");
            tabla.innerHTML= "";
            res.forEach(element => {
            const tr = document.createElement('tr');
            tr.innerHTML = `<td>${element.nombre_persona}</td>
                            <td>${element.nombre_mascota}</td>
                            <td>${element.descripcion_servicio}</td>`;
            tabla.append(tr);
            });
        }
    }).catch((err)=>{
        console.log(err);
    });
}

