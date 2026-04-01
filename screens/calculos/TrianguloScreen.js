import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';

import TextInputBox from '../../components/textInputBox/TextInputBox.js';
import CustomButtom from '../../components/customButtom/CustomButtom.js';
import MathUtils from '../../services/CalculoTriangulo.js';

function TrianguloScreen(){
    const [l1, setNumber1] = useState('');
    const [l2, setNumber2] = useState('');
    const [l3, setNumber3] = useState('');


    return(
        <View style={style.container}>
            <StatusBar style="auto" />
            <Text style={style.title}> Cálculo Triângulo </Text>
            
            <TextInputBox
            value={l1}
            onChangeText={setNumber1}
            placeholder="0"
            keyboardType="numeric"
            />

            <TextInputBox
            value={l2}
            onChangeText={setNumber2}
            placeholder="0"
            keyboardType="numeric"
            />

            <TextInputBox
            value={l3}
            onChangeText={setNumber3}
            placeholder="0"
            keyboardType="numeric"
            />
            
            <CustomButtom 
            title="Calcular"
            onPress ={() => MathUtils.CalculoTriangulo(l1, l2, l3)}
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

export default TrianguloScreen;