export default class Produto {
        constructor(nome, descricao, custo, tipo){
            this.id = 0;
            this.nome = nome;
            this.descricao = descricao;
            this.custo = custo;
            this.tipo = tipo;
        }

        criarID(produtos){
            if (produtos.length === 0) {
                this.id = 1;
                return;
            }
            const maiorId = Math.max(...produtos.map(produto => produto.id));
            this.id = maiorId + 1;
        }

        armazenarProduto(produtos){
            const dadosUser = JSON.parse(localStorage.getItem('dadosUsuario'));

            this.usuario = dadosUser.usuario;
            this.situacao = dadosUser.situacao;

            
            const dadosProdutos = JSON.parse(localStorage.getItem("dadosProdutos")) || [];

            this.criarID(dadosProdutos);

            dadosProdutos.push(this);

            localStorage.setItem(
                "dadosProdutos",
            JSON.stringify(dadosProdutos)
            );
            }
            
    }