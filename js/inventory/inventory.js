import initLogReleases from './logReleases.js';

export default function initInventory() {
    const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos'));
    const listaProdutos = document.querySelector('.products-list');

    const nomeProduto = document.querySelector('#estoque-nome');
    const custoProduto = document.querySelector('#estoque-custo');
    const tipoProduto = document.querySelector('#estoque-tipo');
    const descricaoProduto = document.querySelector('#estoque-descricao');
    const estoqueDisponivel = document.querySelector('#inventory-disponivel');

    function ativarSelecaoProduto(event) {
        const liAtivo = document.querySelector('.ativoDesc');

        initLogReleases();

        if(nomeProduto){
        const produtoSelecionado = dadosProdutos.find(e => {
            return e.id == liAtivo.dataset.id
        });

            nomeProduto.innerHTML = '<strong>Nome: </strong>' + produtoSelecionado.nome;
            custoProduto.innerHTML = '<strong>Custo: </strong>' + produtoSelecionado.custo;
            tipoProduto.innerHTML = '<strong>Tipo: </strong>' + produtoSelecionado.tipo;
            descricaoProduto.innerHTML = '<strong>Descrição: </strong>' + produtoSelecionado.descricao;
            estoqueDisponivel.innerHTML = '<strong>Estoque Disponível: </strong>' + produtoSelecionado.estoque_disponivel;
        }
    }

    if(listaProdutos){
        listaProdutos.addEventListener("click", ativarSelecaoProduto);
    }

}
