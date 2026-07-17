export default function initUserHeader() {
    const textUser = document.querySelector('[data-user="usuario"]');

    let user = JSON.parse(
        localStorage.getItem('usuarioLogado')
    );

    console.log(window.location.pathname)
    if(window.location.pathname != '/index.html'){
     if(user.situacao !== 'logado') {
         window.location.href = './index.html';
     }
    }

    if(textUser){
        textUser.innerText = user.usuario;
    }
}