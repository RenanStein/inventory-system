export default function initSelectingProduct(){
    const listaProdutos = document.querySelector('.products-list');
    const listaProdutosItens = [...document.querySelectorAll('.products-list li')];
    const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos'));


    if(listaProdutos) {
        listaProdutosItens.forEach((e) =>{
            e.addEventListener('click', selecionarProduto);
        })

        function selecionarProduto(element){
            const idItem = element.target.dataset.id;

            if(dadosProdutos){}

        }


    }
}