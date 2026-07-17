export default function initErr(){
    const containerErr = document.querySelector('#container_erro');

    function fecharContainerErr() {
        containerErr.style.display = 'none';
    }

    if(containerErr){
        containerErr.addEventListener('click', fecharContainerErr);
    }
}