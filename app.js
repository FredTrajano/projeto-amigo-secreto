
let amigos = [];

function adicionarAmigo(){
    let amigoDigitado = document.getElementById('amigo').value;
    if(amigoDigitado == ''){
        alert('Por favor, insira um nome.');
    } else {
        amigos.push(amigoDigitado);
        document.getElementById('amigo').value = '';
        percorreArray(amigos);
    }
    console.log(amigos);
}

function percorreArray(arrayAmigos){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for(let nome of arrayAmigos){
        lista.innerHTML += `<li>${nome}</li>`;
    }
}
