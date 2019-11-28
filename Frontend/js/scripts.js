
function agregar(){
    var tabla = document.getElementById("tabla");//crea la fila de la tabla y reemplaza cell# con el valor
    var row = tabla.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = "nombre";
    cell2.innerHTML = "mascota";
    cell3.innerHTML = "servicio";
}