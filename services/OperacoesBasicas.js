
function OperacoesBasicas(n1, n2, selectedValue) {
    var resultado;
    var opcao = selectedValue;

    if (opcao === 'Somar'){
        resultado = parseFloat(n1) + parseFloat(n2);
    }
    if(opcao === 'Subtrair'){
        resultado = parseFloat(n1) - parseFloat(n2);
    }
    if(opcao === 'Multiplicar'){
        resultado = parseFloat(n1) * parseFloat(n2);
    }
    if(opcao === 'Dividir'){
        resultado = parseFloat(n1) / parseFloat(n2);
    }

    
    if(isNaN(parseFloat(n1)) || isNaN(parseFloat(n1))){
        alert('Erro', 'Insira números válidos!');
    } else{
        alert(`Resultado: ${resultado}`);
    }
}
export default {OperacoesBasicas};