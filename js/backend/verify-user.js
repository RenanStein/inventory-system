export default async function verifyUser(nome, senha) {

    const response = await fetch('/js/dados/user.json');
    const usuarios = await response.json();

    // Procura o usuário pelo nome
    const usuario = usuarios.find(u => u.user === nome);

    // Usuário não encontrado
    if (!usuario) {
        return {
            situacao: false,
            motivo: 'Usuário não existe.'
        };
    }

    // Usuário inativo
    if (!usuario.ativo) {
        return {
            situacao: false,
            motivo: 'Usuário inativo.'
        };
    }

    // Senha incorreta
    if (usuario.senha !== senha) {
        return {
            situacao: false,
            motivo: 'Senha inválida.'
        };
    }

    // Login realizado
    return {
        usuario: usuario.user,
        situacao: true
    };
}