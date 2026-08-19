export default function initCalcularEstoque(tipoLancamento, produto, quantidadeLancamento, custoLancamento) {
    let estoqueDisponivel = produto.estoque_disponivel;
    let estoqueFinal = 0;
    
    if (tipoLancamento === 'add') {
       estoqueFinal = estoqueDisponivel + quantidadeLancamento;
    } else if (tipoLancamento === 'rem') {
       estoqueFinal = estoqueDisponivel - quantidadeLancamento;
    }
    return estoqueFinal;
}