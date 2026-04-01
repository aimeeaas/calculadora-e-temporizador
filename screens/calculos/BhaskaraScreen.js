import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import TextInputBox from '../../components/textInputBox/TextInputBox.js';
import CustomButtom from '../../components/customButtom/CustomButtom.js';
import MathUtils from '../../services/FormulaBhaskara.js';

function BhaskaraScreen(){
    const [a, setNumberA] = useState('');
    const [b, setNumberB] = useState('');
    const [c, setNumberC] = useState('');


    return(
        <View style={style.container}>
            <StatusBar style="auto" />
            <Text style={style.title}> Fórmula de Bhaskara </Text>
            
            <TextInputBox
            value={a}
            onChangeText={setNumberA}
            placeholder="Valor de A"
            keyboardType="numeric"
            />

            <TextInputBox
            value={b}
            onChangeText={setNumberB}
            placeholder="Valor de B"
            keyboardType="numeric"
            />

            <TextInputBox
            value={c}
            onChangeText={setNumberC}
            placeholder="Valor de C"
            keyboardType="numeric"
            />
            
            <CustomButtom 
            title="Calcular"
            onPress ={() => MathUtils.FormulaBhaskara(a, b, c)}
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
        marginBottom: 10,
        textAlign: 'center', 
        fontWeight: 'bold',  
        color: '#69328d', 
    }
})

export default BhaskaraScreen;