
let amigos = [];
console.log(amigos);

//funcion en caso de que necesites cambiar un texto
function asignarTexto (elemento,texto){
    let elemtoHTML = document.querySelector(elemento);
    elemtoHTML.innerHTML = texto;
    return;
}

function limpiarImput() {
    let valorImput = document.querySelector('#amigo').value = "";
}

function listarAmigos(){
    // mostrar la lista de amigos
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = amigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function agregarAmigoSecreto(){
   // amigo secreto esta vacio
   let amigosUsuarioSecretos = document.getElementById('amigo').value;
   amigosSecretos = amigosUsuarioSecretos.trim();
   if (amigosSecretos === null || amigosSecretos === ''){
         alert('Por favor, inserte un nombre');
   }else{
    // construir la lista amigos
    amigosSecretos = amigos.push(amigosSecretos);
    //mostrar la lista de amigos
    listarAmigos();
    //limpiar el input
    limpiarImput();
   }
} 


function sortearAmigoSecreto(){
    // validar que la lista no este vacia
    if (amigos.length === 0){
        alert('no hay amigos');
        return;
    }else {
    //sortear amigo secreto
    let amigosSorteados = amigos[Math.floor(Math.random()*amigos.length)];
    //mostrar el amigo secreto
    let resultadoAmigo = document.getElementById('resultado');
    resultadoAmigo.innerHTML = `<li>${amigosSorteados}</li>`  
    }
}