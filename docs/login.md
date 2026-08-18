Página de login -> index.html

Dois métodos de acesso:
    - Usuário cadastrado no arquivo js/dados/user.json
    - Botão "Não tenho conta", entra com usuário "user"

O login fica armazenado no localStorage na chave dadosUsuario

Só será possível acessar as outras páginas se existir a chave dadosUsuario no localStorage com as propriedades situacao e usuario preenchidas
    - situacao: "logado"
    - usuario: "user"

    