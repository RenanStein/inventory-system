export default function initCreateProducts() {
    const buttonCreate = document.querySelector('#buttonCreateProduct');
    const modalCreate = document.querySelector('#modalCreate');

    // ativar modal de criação de produto
    function ativarModal(){
        modalCreate.style.display = 'grid';
    }
    buttonCreate.addEventListener('click', ativarModal);


    const buttonCancelarModal = document.querySelector('.products-modal-cance');
    function cancelarModal(){
        modalCreate.style.display = 'none';
    }
    buttonCancelarModal.addEventListener('click', cancelarModal);

}