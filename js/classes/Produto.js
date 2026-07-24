export default class Produto {
        constructor(nome, descricao, custo, tipo){
            this.id = 0;
            this.nome = nome;
            this.descricao = descricao;
            this.custo = custo;
            this.tipo = tipo;
        }

        criarID(produtos){
            const maiorId = Math.max(...produtos.map(produto => produto.id));
            this.id = maiorId + 1;
            console.log(produtos)
        }

        armazenarProduto(produtos){
            const dadosUser = JSON.parse(localStorage.getItem('dadosUsuario'));

            this.usuario = dadosUser.usuario;
            this.situacao = dadosUser.situacao;

            localStorage.setItem(
                'dadosProdutos',
                JSON.stringify(produtos)
            );
        }
    }