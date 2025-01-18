function comprar(){
    //escolher entre os ingressos, adicionar quantidade
    let produto = document.getElementById('tipo-ingresso');
    let quantidade = parseInt(document.getElementById('qtd').value);

    if(produto.value == 'pista'){
        comprarPista(quantidade);
    } else if(produto.value == 'superior'){
        comprarSuperior(quantidade)
    } else {
        comprarInferior(quantidade)
    }
}

function comprarPista(quantidade){
    let quantidadePista = parseInt(document.getElementById('qtd-pista').textContent);
    if(quantidade > quantidadePista) {
        alert('quantidade indisponivel no momento');
    } else{
        quantidadePista = quantidadePista - quantidade;
        document.getElementById('qtd-pista').textContent = quantidadePista;
        alert('compra realizada com sucesso');
    }
}
function comprarSuperior(quantidade){
    let quantidadeSuperior = parseInt(document.getElementById('qtd-superior').textContent);
    if(quantidade > quantidadeSuperior) {
        alert('quantidade indisponivel no momento');
    } else{
        quantidadeSuperior = quantidadeSuperior - quantidade;
        document.getElementById('qtd-superior').textContent = quantidadeSuperior;
        alert('compra realizada com sucesso');
    }
}
function comprarInferior(quantidade){
    let quantidadeInferior = parseInt(document.getElementById('qtd-inferior').textContent);
    if(quantidade > quantidadeInferior) {
        alert('quantidade indisponivel no momento');
    } else{
        quantidadeInferior = quantidadeInferior - quantidade;
        document.getElementById('qtd-inferior').textContent = quantidadeInferior;
        alert('compra realizada com sucesso');
    }
}