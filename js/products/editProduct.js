import { setEditando } from './state.js';
import initLoadingProducts from './loadingProducts.js';


export default function initEditProduct() {
    const itensDescricao = [...document.querySelectorAll('.products-description-item')];
    const divButtons = document.querySelector('.products-description-button');

    itensDescricao.forEach(item => {
        item.addEventListener('click', () => {

            const span = item.querySelector('span');
            const input = item.querySelector('input');

            if (setEditando && span) {
                    span.hidden = true;
                    input.hidden = false;
                
                

                input.value = span.textContent;

                divButtons.style.display = 'block';
                setEditando(true);

                input.focus();
                input.select();
                
            }
        });
    });

    const buttonConfirm = document.querySelector('#buttonDescConfirm');
    const buttonCancel = document.querySelector('#buttonDescCance');
    if(buttonConfirm){
    buttonConfirm.addEventListener('click', confirmarAlteracao);
    buttonCancel.addEventListener('click', cancelarAlteracao);
    }

    function confirmarAlteracao() {

        const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos')) || [];

        const liAtivo = document.querySelector('.products-list li.ativoDesc');

        if (!liAtivo) return;

        const produto = dadosProdutos.map(p => {
            if(p.id == liAtivo.dataset.id){
                const inputDescricao = document.querySelector('#descricaoId input');
                const inputCusto = document.querySelector('#custo input');
                const inputTipo = document.querySelector('#tipo input');
                const inputNome = document.querySelector('#nomeId input');

                const spanCusto = document.querySelector('#custo span');
                const spanTipo = document.querySelector('#tipo span');
                const spanDescricao = document.querySelector('#descricaoId span');
                const spanNome = document.querySelector('#nomeId span');

                p.nome = inputNome.value || spanNome.innerText;
                p.descricao = inputDescricao.value || spanDescricao.innerText;
                p.custo = inputCusto.value || spanCusto.innerText;
                p.tipo = inputTipo.value || spanTipo.innerText;

                spanCusto.innerText = p.custo || spanCusto.innerText;
                spanNome.innerText = p.nome || spanNome.innerText;
                spanTipo.innerText = p.tipo || spanTipo.innerText;
                spanDescricao.innerText = p.descricao || spanDescricao.innerText;

                return p;
            } else {
                return p;
            }
                
            });

        itensDescricao.forEach(item => {

             const span = item.querySelector('span');
             const input = item.querySelector('input');

             span.hidden = false;
             input.hidden = true;
         });

        localStorage.setItem(
            'dadosProdutos',
            JSON.stringify(produto)
        );

        divButtons.style.display = 'none';
        
        initLoadingProducts();
        setEditando(false);
    }

    function cancelarAlteracao() {

        itensDescricao.forEach(item => {

            const span = item.querySelector('span');
            const input = item.querySelector('input');

            input.value = span.textContent;

            span.hidden = false;
            input.hidden = true;
        });

        divButtons.style.display = 'none';
        setEditando(false);
    }
}