import { getEditando } from './state.js';

export default function initSelectingProduct(){
    const listaProdutos = document.querySelector('.products-list');
    const listaProdutosItens = [...document.querySelectorAll('.products-list li')];
    const divDescricao = document.querySelector('.products-description-bg');
    const spanDescricao = document.querySelector('#descricaoId span');
    const spanCusto = document.querySelector('#custo span');
    const spanTipo = document.querySelector('#tipo span');
    const spanData = document.querySelector('#dataCadastroProduto p');
    const spanNome = document.querySelector('#nomeId span');
    const spanID = document.querySelector('#produtoId p');
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

        const itensDescricao = [...document.querySelectorAll('.products-description-item')];

        itensDescricao.forEach(item => {
            const span = item.querySelector('span');
            const input = item.querySelector('input');

            if(span){
                span.hidden = false;
                input.hidden = true;
            }
            
        });
        }
    };



        function selecionarProduto(element){
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
