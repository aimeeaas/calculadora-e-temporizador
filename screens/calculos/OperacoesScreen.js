import { useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import TextInputBox from '../../components/textInputBox/TextInputBox.js';
import CustomButtom from '../../components/customButtom/CustomButtom.js';
import MathUtils from '../../services/OperacoesBasicas.js';

function OperacoesScreen(){
    const [n1, setNumber1] = useState('');
    const [n2, setNumber2] = useState('');
    const [selectedValue, setSelectedValue] = useState('Somar');

    return(
        <View style={style.container}>
            <StatusBar style="auto" />
            <Text style={style.title}> Operações Básicas </Text>
            
            <TextInputBox
            value={n1}
            onChangeText={setNumber1}
            placeholder="0"
            keyboardType="numeric"
            />

            <Picker
            selectedValue={selectedValue}
            style={style.picker}
            onValueChange={(itemValue) => setSelectedValue(itemValue)}
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