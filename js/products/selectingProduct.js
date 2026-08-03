import { getEditando } from './state.js';

export default function initSelectingProduct(){
    const listaProdutos = document.querySelector('.products-list');
    const listaProdutosItens = [...document.querySelectorAll('.products-list li')];
    const divDescricao = document.querySelector('.products-description-bg');
    const spanDescricao = document.querySelector('#descricaoId');
    const spanCusto = document.querySelector('#custo');
    const spanTipo = document.querySelector('#tipo');
    const spanData = document.querySelector('#dataCadastroProduto');
    const spanNome = document.querySelector('#nomeId');
    const spanID = document.querySelector('#produtoId');
    console.log(getEditando())
    
    if(listaProdutos) {
       listaProdutos.addEventListener("click", ativarSelecao);
       function ativarSelecao() {
        if(getEditando() == false){
        // Procura o <li> mais próximo do elemento clicado
        const li = event.target.closest("li");

        // Se clicou fora de um <li>, não faz nada
        if (!li || !listaProdutos.contains(li)) return;

        const ativo = li.classList.contains("ativoDesc");

        // Remove a seleção de todos os itens
        listaProdutos.querySelectorAll("li").forEach((item) => {
            item.classList.remove("ativoDesc");
        });

        divDescricao.classList.remove("divAtivoDesc");

        // Se o item não estava ativo, ativa
        if (!ativo) {
            li.classList.add("ativoDesc");
            divDescricao.classList.add("divAtivoDesc");
            selecionarProduto(li);
        }
        }
    };



        function selecionarProduto(element){
            console.log(element)
            const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos'));

            const idItem = element.dataset.id;

            const produto = dadosProdutos.find((p) => p.id == idItem);

            if (!produto) return;

            spanDescricao.innerText = produto.descricao;
            spanCusto.innerText = produto.custo;
            spanTipo.innerText = produto.tipo;
            spanData.innerText = produto.data_hora_formatada;
            spanNome.innerText = produto.nome;
            spanID.innerText = produto.id;
        }


    }
    
}
