export default function initUserHeader() {
    const textUser = document.querySelector('[data-user="usuario"]');

    let user = JSON.parse(
        localStorage.getItem('usuarioLogado')
    );

    if(textUser){
    textUser.innerText = user.usuario;
    }
}