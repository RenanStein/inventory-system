import { setEditando } from './state.js';

export default function initEditProduct() {
    const divDesc = [...document.querySelectorAll('.products-description-item')];
    const divButtons = document.querySelector('.products-description-button');

    let valorAntigo;
    let valorNovo;

    divDesc.forEach((event) => {
        event.addEventListener('click', (e) => {
            const span = e.currentTarget.querySelector('span');
            const datasetProduto = span.dataset.produto
            if (span) {
                const input = document.createElement('input');

                input.dataset.produto = datasetProduto

                input.classList.add('products-description-input');
                e.currentTarget.classList.remove('products-description-item')
                divButtons.style.display = 'block';

                input.value = span.textContent;
                valorAntigo = span.textContent;

                span.replaceWith(input);
                setEditando(true);

                input.focus();
                input.select();


                // input.addEventListener('blur', () => {
                //     const novoSpan = document.createElement('span');
                //     novoSpan.textContent = input.value;
                //     e.currentTarget.classList.add('products-description-item');
                //     // divButtons.style.display = 'none';
                //     valorNovo = input.value;

                //     input.replaceWith(novoSpan);
                // });
            }
        });
    });

    const buttonConfirm = document.querySelector('#buttonDescConfirm');
    const buttonCancel = document.querySelector('#buttonDescCance');
    const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos'));


    function confirmarAlteracao(){
        dadosProdutos.find(e => console.log(e))
        const inputs = [...document.querySelectorAll('input.products-description-input')];
        if(inputs){
            const abc = inputs.map(e => {
                const elementoPai = e.parentElement;

                const novoSpan = document.createElement('span');
                novoSpan.textContent = e.value;

                elementoPai.classList.add('products-description-item')
                e.classList.remove('products-description-input');

                e.replaceWith(novoSpan);
                setEditando(false);

                return {
                    teste: 'teste',
                }
            })
            console.log(abc)
        }
        
    }

    buttonConfirm.addEventListener('click', confirmarAlteracao);
}