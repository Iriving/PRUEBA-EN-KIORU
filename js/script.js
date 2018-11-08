
var opciones = [0, 1, 2];
var eleccionMaquina;

function aleatorio(minimo, maximo){
    var numero = Math.floor(Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

function usuario(eleccionUsuario){
    eleccionUsuario = parseInt(eleccionUsuario);
    eleccionMaquina = aleatorio(0,2);
  

    if(eleccionUsuario == 0){//el usuario eligio piedra 
        if(opciones[eleccionMaquina] == 1){//si la maquina eligio papel 
            document.getElementById('efecto').innerHTML ='<h1 style="color:#d13c3c">¡BUUU Perdiste!</h1> <br> <h3>La maquina eligio: papel </h3><br>  <h3> tu piedra.  LOL<h3/>';
        }else{
            if(opciones[eleccionMaquina] == 2){
                document.getElementById('efecto').innerHTML ='<h1 style="color:#196b27">¡ UJUUU  Ganaste!</h1> <br><h3>La maquina eligio tijera y tu piedra.</h3>';
            }else{
                if(opciones[eleccionMaquina] == 0){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1> <br><h3>Ambos eligieron piedra tu puedes amiguito.</h3>';
                }
            }
        } 
    }

    if(eleccionUsuario == 1){
        if(opciones[eleccionMaquina] == 2){
            document.getElementById('efecto').innerHTML = ' <h1 style="color:#d13c3c">¡BUUU Perdiste!</h1> <br> <h3>La maquina eligio: tijera </h3><br>  <h3> tu papel.  LOL<h3/>';
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1 style="color:#196b27">¡UJUUUU  Ganaste!</h1> <br><h3>La maquina eligio piedra y tu papel.</h3>';
                
            }else{
                if(opciones[eleccionMaquina] == 1){
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1><br> <h3>Ambos eligieron papel tu puedes amiguito.</h3>'; 
                }
            }
        }
    }

    if(eleccionUsuario == 2) {
        if(opciones[eleccionMaquina] == 1){
            document.getElementById('efecto').innerHTML ='<h1 style="color:#196b27">¡ UJUUUU  Ganaste!</h1><br>  <h3>La maquina eligio papel y tu tijera.</h3>';
        
        }else{
            if(opciones[eleccionMaquina] == 0){
                document.getElementById('efecto').innerHTML ='<h1 style="color:#d13c3c">¡BUUU Perdiste!</h1> <br> <h3>La maquina eligio: piedra </h3><br>  <h3> tu tijera.  LOL<h3/>'; 
            }else{
                if(opciones[eleccionMaquina] == 2) {
                    document.getElementById('efecto').innerHTML ='<h1>¡Empate!</h1><br> <h3>Ambos eligieron tijera tu puedes amiguito.</h3>';
                }
            }
        }
    }

    document.getElementById('efecto').style.display = "";
}



function quitarEfecto() {
    document.getElementById('efecto').style.display = "none";
}