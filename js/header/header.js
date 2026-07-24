export default function initUserHeader() {
    const textUser = document.querySelector('[data-user="usuario"]');

    if(localStorage.dadosUsuario){
        const user = JSON.parse(localStorage.getItem('dadosUsuario'));

        if (user && user.situacao === 'logado') {
        console.log('Usuário Logado');
    } else {
        if (window.location.pathname !== '/index.html') {
            window.location.href = './index.html';
        }
        return;
    }

    if (textUser) {
        textUser.innerText = user.usuario;
    }
    } else {
        if(window.location.pathname !== '/index.html'){
        window.location.href = './index.html';
        }
    }

    
}