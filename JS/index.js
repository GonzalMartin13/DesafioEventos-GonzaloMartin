let permitirInterno = document.getElementById("empleado");
permitirInterno.onclick = () => { 
    for (let i = 0; i < 1; i++){
    const divPadre = document.getElementById("Ingreso");
    let divEmpleado = document.createElement ("div");
    let formEmpleado_label = document.createElement("label");
    let formEmpleado_Input = document.createElement ("input");
    let formEmpleado_Boton = document.createElement ("button");
    divEmpleado.innerHTML = "<h3>Ingrese Sus Datos</h3>";
    divEmpleado.className = "col-md-4 registroInterno";
    divEmpleado.id = "logueo";
    divPadre.appendChild(divEmpleado);
    formEmpleado_label.className = "mb-2";
    formEmpleado_label.innerText = "Cual es su ID";
    divEmpleado.appendChild(formEmpleado_label);
    formEmpleado_Input.id = "ingresoID";
    divEmpleado.appendChild (formEmpleado_Input);
    formEmpleado_Boton.className = "botonID";
    formEmpleado_Boton.id = "verificarID";
    formEmpleado_Boton.innerText = "Ingresar";
    divEmpleado.appendChild(formEmpleado_Boton);
    }
}
