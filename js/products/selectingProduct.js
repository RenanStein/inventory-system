export default function initSelectingProduct(){
    const listaProdutos = document.querySelector('.products-list');
    const listaProdutosItens = [...document.querySelectorAll('.products-list li')];

    if(listaProdutos) {
        listaProdutosItens.forEach((e) =>{
            e.addEventListener('click', selecionarProduto);
        })

        function selecionarProduto(element){
            console.log(element.target.dataset.id)
        }


    }
}