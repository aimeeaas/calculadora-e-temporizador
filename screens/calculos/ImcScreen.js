import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import TextInputBox from '../../components/textInputBox/TextInputBox.js';
import CustomButtom from '../../components/customButtom/CustomButtom.js';
import MathUtils from '../../services/CalculoImc.js';

function ImcScreen(){
    const [peso, setNumber1] = useState('');
    const [altura, setNumber2] = useState('');

    return(
        <View style={style.container}>
            <StatusBar style="auto" />
            <Text style={style.title}> Cálculo de IMC </Text>
            
            <TextInputBox
            value={peso}
            onChangeText={setNumber1}
            placeholder="60.3"
            keyboardType="numeric"
            />

            <TextInputBox
            value={altura}
            onChangeText={setNumber2}
            placeholder="1.60"
            keyboardType="numeric"
            />
            
            <CustomButtom 
            title="Calcular"
            onPress ={() => MathUtils.CalculoImc(peso, altura)}
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
        margin: 5,
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

export default ImcScreen;