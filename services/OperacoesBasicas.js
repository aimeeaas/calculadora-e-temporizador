// Função responsável pelos cálculos e recebe os parâmetros escolhidos
function OperacoesBasicas(n1, n2, selectedValue) {
    // Atmazena o resultado da conta
    var resultado;
    // Cria uma variável auxiliar, poderia usar direto selectedValue, mas isso melhora leitura
    var opcao = selectedValue;

    // Qual opção foi escolhida
    // else if ou switch era melhor
    if (opcao === 'Somar'){
        // converte string → número decimal
        resultado = parseFloat(n1) + parseFloat(n2);
    }
    // === → comparação estrita (boa prática)
    if(opcao === 'Subtrair'){
        resultado = parseFloat(n1) - parseFloat(n2);
    }
    if(opcao === 'Multiplicar'){
        resultado = parseFloat(n1) * parseFloat(n2);
    }
    if(opcao === 'Dividir'){
        resultado = parseFloat(n1) / parseFloat(n2);
    }

    // Verifica se NÃO é número
    if(isNaN(parseFloat(n1)) || isNaN(parseFloat(n2))){
         // alert: template string (JS moderno), permite inserir variável no texto
        alert('Erro', 'Insira números válidos!');
    } else{
        alert(`Resultado: ${resultado}`);
    }
}

// exporta como objeto, por isso você usa: MathUtils.OperacoesBasicas(...)
export default {OperacoesBasicas};

/* VERSÃO MELHORADA

import { Alert } from "react-native";

function OperacoesBasicas(n1, n2, selectedValue) {
    let resultado;

    let num1 = parseFloat(n1);
    let num2 = parseFloat(n2);

    if (isNaN(num1) || isNaN(num2)) {
        Alert.alert("Erro", "Insira números válidos!");
        return;
    }

    if (selectedValue === 'Somar'){
        resultado = num1 + num2;
    } else if(selectedValue === 'Subtrair'){
        resultado = num1 - num2;
    } else if(selectedValue === 'Multiplicar'){
        resultado = num1 * num2;
    } else if(selectedValue === 'Dividir'){
        if (num2 === 0){
            Alert.alert("Erro", "Divisão por zero!");
            return;
        }
        resultado = num1 / num2;
    }

    Alert.alert("Resultado", `Resultado: ${resultado}`);
}

export default { OperacoesBasicas };
*/