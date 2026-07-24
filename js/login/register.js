export default function buttonRegister() {
    const buttonRegister = document.querySelector('[data-login="registrar"]');

    function registrar() {
            const acessoUsuario = {
                usuario: 'user',
                situacao: 'logado'
            }

            localStorage.setItem(
                'dadosUsuario',
                JSON.stringify(acessoUsuario)
            );

            window.location.href = './products.html';
    }

    if(buttonRegister){
        buttonRegister.addEventListener('click', registrar);
    }
}