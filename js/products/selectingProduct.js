export default function initSelectingProduct(){
    const listaProdutos = document.querySelector('.products-list');
    const listaProdutosItens = [...document.querySelectorAll('.products-list li')];
    const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos'));
    const divDescricao = document.querySelector('.products-description-bg');
    const spanDescricao = document.querySelector('#descricaoId');
    const spanCusto = document.querySelector('#custo');
    const spanTipo = document.querySelector('#tipo');
    const spanData = document.querySelector('#dataCadastroProduto');


    if(listaProdutos) {
        listaProdutosItens.forEach((li) => {
        li.addEventListener("click", () => {
            const ativo = li.classList.contains("ativoDesc");

            listaProdutosItens.forEach((item) => {
            item.classList.remove("ativoDesc");
            divDescricao.classList.remove("divAtivoDesc");
            });

            if (!ativo) {
            li.classList.add("ativoDesc");
            divDescricao.classList.add("divAtivoDesc");
            selecionarProduto(li);
            }
        });
        });



        function selecionarProduto(element){
            const idItem = element.dataset.id;
            const li = document.querySelector(`[data-id="${idItem}"]`)
            const li2 = element;

            dadosProdutos.forEach(e => {
                if(e.id == idItem){
                    spanDescricao.innerText = e.descricao;
                    spanCusto.innerText = e.custo;
                    spanTipo.innerText = e.tipo;
                    spanData.innerText = e.data_hora_formatada;
                }
            })

        }


    }

}
