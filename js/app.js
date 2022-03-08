{
	"folders": [
		{
			"path": "."
		}
	],
	"settings": {}
}
function validate(){
    var nameUser = document.getElementById("nameUser"); 
    if(nameUser.value.length == 0){
        nameUser.classList.add('error');
        nameUser.classList.remove('success');  
        return 0;
    }else{
        nameUser.classList.remove('error');
        nameUser.classList.add('success');
    }    

    var selecDep = document.getElementById("selecDep");
    if(selecDep.value == 0){
       selecDep.classList.add('error');
       selecDep.classList.remove('success');
    }else{
       selecDep.classList.remove('error');
       selecDep.classList.add('success');
    }

    var selecCity = document.getElementById("selecCity");
    if(selecCity.value == 0){
        selecCity.classList.add('error');
        selecCity.classList.remove('success');
    }else{
        selecCity.classList.remove('error');
        selecCity.classList.add('success');
    }

    var address = document.getElementById("address");
    if(address.value.length == 0){
        address.classList.add('error');
        address.classList.remove('success');
    }else{
        address.classList.remove('error');
        address.classList.add('success');
    }

    var phone = document.getElementById("phone");
    if(phone.value.length == 0){
       phone.classList.add('error');
       phone.classList.remove('success');
    }else{
       phone.classList.remove('error');
       phone.classList.add('success');
    }
    
    var email = document.getElementById("email");
    if(email.value.length == 0){
        email.classList.add('error');
        email.classList.remove('success');
    }else{
        email.classList.remove('error');
        email.classList.add('success');
    }

    var id = document.getElementById("ID");
    if(ID.value.length == 0){
        ID.classList.add('error');
        ID.classList.remove('success');
    }else{
        ID.classList.remove('error');
        ID.classList.add('success');
    }

    var tipoCliente = document.getElementById("tipoCliente");
    if(tipoCliente.value.length == 0){
        tipoCliente.classList.add('error');
        tipoCliente.classList.remove('success');
    }else{
        tipoCliente.classList.remove('error');
        tipoCliente.classList.add('success');
    }

    var entidad = document.getElementById("entidad");
    if(entidad.value.length == 0){
        entidad.classList.add('error');
        entidad.classList.remove('success');
    }else{
        entidad.classList.remove('error');
        entidad.classList.add('success');
    }

    var desprendibles = document.getElementById('desprendibles');
        var down = document.getElementById('GFG_DOWN');
          
        desprendibles.innerHTML = "Click on the button to see"
                    + " if any file is selected";
          
        function GFG_Fun() {
            if ($('#file')[0].files.length === 0) {
                down.innerHTML = "No files selected";
            } else {
                down.innerHTML = "Some file is selected";
            }
        }

    var checkbox = document.getElementById('checkbox');
    checkbox.addEventListener("change", validaCheckbox, false);
    
    function validaCheckbox(){
    var checked = checkbox.checked;
    if(checked){
        alert('checkbox esta seleccionado');
    }
    }


}





