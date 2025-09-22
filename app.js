
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

function sortearAmigo(){
    let nomeSorteado = Math.floor(Math.random() * amigos.length);
    let resultado = document.getElementById('resultado');

    if(amigos.length == 0){
        alert('Por favor, insira um nome.');
    } else if (amigos.length == 1){
        alert('Por favor, insira pelo menos mais um nome.');
    } else {
        console.log(amigos[nomeSorteado]);
        resultado.innerHTML = amigos[nomeSorteado];
    }
}
