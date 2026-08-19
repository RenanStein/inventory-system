import initCalcularEstoque from "./calcularEstoque.js";

export default function initReleases() {
    const containerLancamento = document.querySelector('.modal-releases');
    const quantidadeLancamento = document.querySelector('#quantidade_lancamento');
    const custoLancamento = document.querySelector('#custo_lancamento');
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
    quantidadeLancamento.value = "";
    custoLancamento.value = "";


    carregarProdutos();
    
    if (atributo === 'add') {
        tituloLancamento.innerText = 'Implantação';
        custoLancamento.readOnly = false;
    } else if (atributo === 'rem') {
        tituloLancamento.innerText = 'Requisição';
        custoLancamento.readOnly = true;
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
    let qtdLancamentoTratada = Number(quantidadeLancamento.value)
    let custoLancamentoTratado = Number(custoLancamento.value);

    if (dadosProdutos != null) {
        const produto = dadosProdutos.find(produto => produto.id === select);

        if (produto == undefined) {
            avisoErro.innerText = 'Deve ser selecionado um produto!';
            avisoErro.style.display = 'block';
        } else if (qtdLancamentoTratada == "") {
            avisoErro.innerText = 'Deve ser informada uma quantidade!';
            avisoErro.style.display = 'block';
        } else if (custoLancamentoTratado == "") {
            avisoErro.innerText = 'Deve ser informada um custo!';
            avisoErro.style.display = 'block';
        } else if (qtdLancamentoTratada <= 0) {
            avisoErro.innerText = 'A quantidade deve ser maior que zero!';
            avisoErro.style.display = 'block';
        } else if (custoLancamentoTratado <= 0) {
            avisoErro.innerText = 'O custo deve ser maior que zero!';
            avisoErro.style.display = 'block';
        } else {
            const qtdCalculada = initCalcularEstoque(tipoLancamento, produto, qtdLancamentoTratada, custoLancamento);
            produto.estoque_disponivel = qtdCalculada;
            localStorage.setItem(
                'dadosProdutos',
            JSON.stringify(dadosProdutos)
            );
            containerLancamento.style.display = 'none';
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