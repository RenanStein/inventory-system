import { setEditando } from './state.js';

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

    buttonConfirm.addEventListener('click', confirmarAlteracao);
    buttonCancel.addEventListener('click', cancelarAlteracao);

    function confirmarAlteracao() {

        const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos')) || [];

        const liAtivo = document.querySelector('.products-list li.ativoDesc');

        if (!liAtivo) return;

        const produto = dadosProdutos.find(
            p => p.id == liAtivo.dataset.id
        );

        if (!produto) return;

        itensDescricao.forEach(item => {

            const span = item.querySelector('span');
            const input = item.querySelector('input');

            produto[input.dataset.produto] = input.value;

            span.textContent = input.value;

            span.hidden = false;
            input.hidden = true;
        });

        localStorage.setItem(
            'dadosProdutos',
            JSON.stringify(dadosProdutos)
        );

        divButtons.style.display = 'none';
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