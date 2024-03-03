
const tijera = "tijera";
const piedra = "piedra";
const papel = "papel";


function ingresarJugada(){
    const temp = +prompt("Ingrese el número de jugadas que desea")
    return temp;
} 
const numeroJugada = ingresarJugada()

if (isNaN(numeroJugada)) {
    alert('Ingrese un número')
    ingresarJugada();
}



function validarJugada(jugada){
   
    const stringNormalizado = jugada.toLowerCase();

    if (stringNormalizado === "tijera" || stringNormalizado ==="piedra" || stringNormalizado ==="papel"){
        let jugadaUsuario = null;
        if(stringNormalizado === "tijera"){
            jugadaUsuario = 0;
        }
        if(stringNormalizado === "piedra"){
            jugadaUsuario = 1;
        }
        if(stringNormalizado === "papel"){
            jugadaUsuario = 2;
        }


        let jugadaMaquina = Math.floor(Math.random()*3)
       

        console.log(jugadaMaquina)
        console.log(jugadaUsuario)
        if(jugadaUsuario === jugadaMaquina){
            console.log('empate')
          
        }else if(jugadaUsuario === 0 && jugadaMaquina === 2){
            console.log('Felicitaciones, usted ha ganado')
        
        }else if(jugadaUsuario === 2 && jugadaMaquina === 1){
            console.log('Felicitaciones, usted ha ganado')

        }else if(jugadaUsuario === 1 && jugadaMaquina === 0){
            console.log('Felicitaciones, usted ha ganado')
        }else{
            console.log('Lastima, usted ha perdido contra la máquina')
        }
   
        

    }else{
        alert('Ingrese jugada valida')
    }
}


for (let i = 0; i < numeroJugada; i++) {
    const jugada = prompt("Ingrese su jugada")
    validarJugada(jugada)
}



