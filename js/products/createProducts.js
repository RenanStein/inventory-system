import Produto from "../classes/Produto.js";

export default function initCreateProducts() {
    const buttonCreate = document.querySelector('#buttonCreateProduct');
    const modalCreate = document.querySelector('#modalCreate');

    if(buttonCreate){
    // ativar modal de criação de produto - BOTÃO +
    function ativarModal(){
        modalCreate.style.display = 'grid';
    }
    buttonCreate.addEventListener('click', ativarModal);


    // function de fechar o modal - BOTÃO CANCELAR
    const buttonCancelarModal = document.querySelector('.products-modal-cance');
    function cancelarModal(){
        modalCreate.style.display = 'none';
    }
    buttonCancelarModal.addEventListener('click', cancelarModal);


    
    const buttonConfirmModal = document.querySelector('.products-modal-confir');
    const inputNome = document.querySelector('#nomeProduto');
    const inputDescricao = document.querySelector('#descricaoProduto');
    const inputCusto = document.querySelector('#custoProduto');
    const inputTipo = document.querySelector('#tipoProduto');

    const listaProdutos = document.querySelector('.products-list');

    const divListaProdutos = document.querySelector('.products-item');
    const divProdutoDescricao = document.querySelector('.products-description-bg');
    const paragNotExist = document.querySelector('.products-not-exists');

    let produtos = [];


    function confirmarModal(){
        if (inputNome.value != '' && inputDescricao.value != '' && inputCusto.value != '' && inputTipo.value != '') {
            const novoProduto = new Produto(inputNome.value, inputDescricao.value, inputCusto.value, inputTipo.value);
            produtos.push(novoProduto)
            
            novoProduto.criarID(produtos)
            novoProduto.armazenarProduto(produtos)

            renderizarProduto(novoProduto);

            modalCreate.style.display = 'none';
        } else {
            window.alert("Preencha todos os campos para cadastrar um produto.")
        }
    }

    buttonConfirmModal.addEventListener('click', confirmarModal);


    function renderizarProduto(produto){
        divListaProdutos.style.display = 'grid';
        divProdutoDescricao.style.display = 'grid';
        paragNotExist.style.display = 'none';

        const li = document.createElement("li");

        li.textContent = produto.nome;
        li.dataset.id = produto.id;

        listaProdutos.appendChild(li);
        }
    }

}