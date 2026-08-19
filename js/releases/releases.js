import initCalcularEstoque from "./calcularEstoque.js";

export default function initReleases() {
    const containerLancamento = document.querySelector('.modal-releases');
    const avisoErro = document.querySelector('.avisoErroLancamento');

    let tipoLancamento = '';

document.addEventListener('click', (event) => {
    const botao = event.target.closest("[data-estoque]");

    if (!botao) return;

    if (botao.dataset.estoque === "add") {
        criarLancamento('add');
    } else if (botao.dataset.estoque === "rem") {
        criarLancamento('rem');
    }
})

//ativa o modal de lancamentos
function criarLancamento(atributo){
    tipoLancamento = atributo;
    const tituloLancamento = document.querySelector('#titulo_lancamento');
    const custoLancamento = document.querySelector('#custo_lancamento');

    containerLancamento.style.display = 'block';
    avisoErro.style.display = 'none';


    carregarProdutos();
    
    if (atributo === 'add') {
        tituloLancamento.innerText = 'Implantação';
    } else if (atributo === 'rem') {
        tituloLancamento.innerText = 'Requisição';
        custoLancamento.readOnly = true;
        custoLancamento.style.backgroundColor = 'rgba(185, 185, 185, 0.30)'
    }
}

//carrega os produtos no option do select do modal
function carregarProdutos() {
    const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos'));
    const listaProdutos = document.querySelector('#produtos_opcoes');
    
    listaProdutos.innerHTML = '';

    if (dadosProdutos != null) {
        dadosProdutos.forEach(e => {
        const option = document.createElement("option");

        option.textContent = e.nome;
        option.value = e.id;

        listaProdutos.appendChild(option);
        });
    }
    
}


//cancelar lancamento
function cancelarLancamento() {
    containerLancamento.style.display = 'none';
}

//confirmar lancamento
function confirmarLancamento() {
    const dadosProdutos = JSON.parse(localStorage.getItem('dadosProdutos'));
    const select = Number(document.querySelector('#produtos_opcoes').value);
    const quantidadeLancamento = document.querySelector('#quantidade_lancamento');
    const custoLancamento = document.querySelector('#custo_lancamento');

    if (dadosProdutos != null) {
        const produto = dadosProdutos.find(produto => produto.id === select);

        if (produto != undefined && quantidadeLancamento.value != "" || custoLancamento.value != "") {
            let qtdLancamentoTratada = Number(quantidadeLancamento.value)
            const qtdCalculada = initCalcularEstoque(tipoLancamento, produto, qtdLancamentoTratada, custoLancamento);
            produto.estoque_disponivel = qtdCalculada;
            localStorage.setItem(
                'dadosProdutos',
            JSON.stringify(dadosProdutos)
        );
        } else {
            avisoErro.innerText = 'Preencha todos os campos!';
            avisoErro.style.display = 'block';
        }
    } else {
        avisoErro.innerText = 'Preencha todos os campos!';
        avisoErro.style.display = 'block';
    }
}
    const botaoCancelar = document.querySelector('#cancelLancamento');
    const botaoConfirmar = document.querySelector('#confirLancamento');

    if (botaoCancelar){
        botaoCancelar.addEventListener('click', cancelarLancamento);
        botaoConfirmar.addEventListener('click', confirmarLancamento);
}

}