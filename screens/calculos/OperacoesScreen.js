// IMPORTAÇÕES

// Hook do React: criar variáveis que mudam na tela e controlar inputs
import { useState } from "react";
// Controla a barra do celular (hora, bateria etc)
import { StatusBar } from 'expo-status-bar';
// Componentes 
import { StyleSheet, View, Text } from 'react-native';
// Cria uma lista de seleção (dropdown)
import { Picker } from '@react-native-picker/picker';

// Componentes reutilizáveis
import TextInputBox from '../../components/textInputBox/TextInputBox.js';
import CustomButtom from '../../components/customButtom/CustomButtom.js';
// Importa a lógica, cálculo separado da tela. Isso é separação de responsabilidades!
import MathUtils from '../../services/OperacoesBasicas.js';

// Componente da tela
function OperacoesScreen(){
    // Memória da tela, armazena os números digitados
    // setNumber é a função que altera
    const [n1, setNumber1] = useState('');
    const [n2, setNumber2] = useState('');
    // Valor selecionado no picker, começa com Somar
    const [selectedValue, setSelectedValue] = useState('Somar');

    return(
        // View = estrutura da tela (tipo <div>)
        <View style={style.container}>
            <StatusBar style="auto" />
            <Text style={style.title}> Operações Básicas </Text>
            
            <TextInputBox
            value={n1} // Valor atual
            onChangeText={setNumber1} // Atualiza o estado
            placeholder="0" // Texto exemplo
            keyboardType="numeric" // Teclado tipo numérico 
            />

            <Picker
            selectedValue={selectedValue} // Valor atual selecionado
            style={style.picker}
            onValueChange={(itemValue) => setSelectedValue(itemValue)} // Quando muda, pega o valor e atualiza o state
            >
                <Picker.Item label="Somar" value="Somar" />
                <Picker.Item label="Subtrair" value="Subtrair" />
                <Picker.Item label="Multiplicar" value="Multiplicar" />
                <Picker.Item label="Dividir" value="Dividir" />
            </Picker>

            <TextInputBox
            value={n2}
            onChangeText={setNumber2}
            placeholder="0"
            keyboardType="numeric"
            />
            
            <CustomButtom 
            title="Calcular"
            // Quando clica chama função e envia:n1, n2, operação
            // arrow function evita execução automática
            onPress ={() => 
                MathUtils.OperacoesBasicas(n1, n2, selectedValue)}
            style={style.buttom}
            />
        </View>
    )
}
const style = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center', 
        fontWeight: 'bold',  
        color: '#69328d', 
    },
    picker: {
        height: 50,
        width: 145,
        borderRadius: 5,
        borderColor: '#a17ebf',
        borderWidth: 2,
        color: '#69328d',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold', 
    }
})

export default OperacoesScreen;

// O useState é utilizado para controlar os dados da tela. O Picker permite selecionar uma operação, enquanto os inputs capturam os valores. Ao clicar no botão, a função é chamada passando os dados para processamento.

/* 
Erro comum	                    Resultado
não usar arrow no onPress	    executa sozinho
usar = ao invés de ==	        bug
não usar parseFloat	            concatena string
não atualizar state	            não muda valor
*/