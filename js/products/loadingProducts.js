import Produto from "../classes/Produto.js";

export default function initLoadingProducts() {
    const dadosUser = JSON.parse(localStorage.getItem('dadosUsuario'));
    const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos'));
    const listaProdutos = document.querySelector('.products-list');
    const divListaProdutos = document.querySelector('.products-item');
    const divProdutoDescricao = document.querySelector('.products-description-bg');
    const paragNotExist = document.querySelector('.products-not-exists');

    if(dadosProdutos){
        dadosProdutos.forEach(e => {
            if(dadosUser.usuario === e.usuario) {

            // adicionar produtos do localStorage no dom
            const li = document.createElement("li");

            li.textContent = e.nome;
            li.dataset.id = e.id;

            listaProdutos.appendChild(li);

            } else {
                console.log('teste')
            }
        });
    } else {
        divListaProdutos.style.display = 'none';
        divProdutoDescricao.style.display = 'none';
        paragNotExist.style.display = 'block';
    }
}