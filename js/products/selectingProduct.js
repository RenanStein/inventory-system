import { getEditando } from './state.js';
import initInventory from '../inventory/inventory.js';


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
       function ativarSelecao(event) {
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

        if(divDescricao)
        divDescricao.classList.remove("divAtivoDesc");

        // Se o item não estava ativo, ativa
        if (!ativo) {
            li.classList.add("ativoDesc");
            if(divDescricao)
            divDescricao.classList.add("divAtivoDesc");

            if(li){
            selecionarProduto(li);
            }
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
            const itensDescricao = [...document.querySelectorAll('.products-description-item')];

            const idItem = element.dataset.id;

            const produto = dadosProdutos.find((p) => p.id == idItem);

            if (!produto) return;

            if (spanDescricao) spanDescricao.innerText = produto.descricao;
            if (spanCusto) spanCusto.innerText = produto.custo;
            if (spanTipo) spanTipo.innerText = produto.tipo;
            if (spanData) spanData.innerText = produto.data_hora_formatada;
            if (spanNome) spanNome.innerText = produto.nome;
            if (spanID) spanID.innerText = produto.id;
        }   


    }
    
}
