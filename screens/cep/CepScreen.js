import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text} from 'react-native';

import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButtom from '../../components/customButtom/CustomButtom';
import CepApis from "../../apis/CepApis";

// Componente cepScreen
function CepScreen() {
    // Estado que armazena o CEP digitado
    const [cep, setCep] = useState("");

    // Estado que armazena o endereço retornado da API
    const [endereco, setEndereco] = useState(null);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>CEP</Text>
            <TextInputBox 
                value={cep}     // Valor digitado
                onChangeText={setCep}   // Atualiza o estado ao digitar
                placeholder="Digite o CEP"   // Texto exibido quando vazio
                keyboardType="numeric"
            />

            <CustomButtom
                title="Calcular"
                onPress={() => CepApis.buscaEndereco(cep, setEndereco)}
                style={styles.buttom}
            />
           
            <Text style={styles.mensagem}>{endereco ? `Seu endereço: ${endereco.logradouro}` : 'Insira o CEP'}
                 {/* 
                Operador ternário:
                condição ? valor_se_verdadeiro : valor_se_falso
                */}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor:'#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#69328d',
        margin: 10,
    },
    mensagem: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#a17ebf',
        fontStyle: 'italic',
        margin: 20,
    }
})

export default CepScreen;