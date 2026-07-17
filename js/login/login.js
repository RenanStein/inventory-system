import verifyUser from '../backend/verify-user.js';
export default function initLogin(){
    const buttonLogin = document.querySelector('[data-login="entrar"]');

    const inputSenha = document.querySelector('#senha');
    const inputNome = document.querySelector('#nome');

    const messageErr = document.querySelector('#mensagem_erro');
    const containerErr = document.querySelector('#container_erro');

    async function fazerLogin(){
        const resposta = await verifyUser(inputNome.value, inputSenha.value);

        console.log(resposta)
        //se a situação retornar true = user validado 
        if(resposta.situacao == true){
            //transferir de pagina
            const acessoUsuario = {
                usuario: resposta.usuario,
                situacao: 'logado'
            }

            localStorage.setItem(
                'usuarioLogado',
                JSON.stringify(acessoUsuario)
            );

            window.location.href = './products.html';
        } else {
            console.log(resposta.motivo)
            messageErr.innerText = resposta.motivo;
            containerErr.style.display = 'block';
        }
    }


    if(buttonLogin){
        buttonLogin.addEventListener('click', fazerLogin);
    }
};