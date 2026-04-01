import { StyleSheet, View, Text } from 'react-native';

import CustomButtom from '../../components/customButtom/CustomButtom.js';
import Temporizador from "../../services/Temporizador.js";

function TimerScreen(){
    const {time, startTimer, stopTimer, resetTimer, formatTimer} = Temporizador();

    return(
        <View style={styles.container}>
            
            <Text style={styles.title}>Temporizador</Text>
            <Text style={styles.time}>{formatTimer(time)}</Text>

            <CustomButtom title="Iniciar" onPress={startTimer}/>
            <CustomButtom title="Parar" onPress={stopTimer}/>
            <CustomButtom title="Resetar" onPress={resetTimer}/>
        </View>
    );
}

const styles = StyleSheet.create({
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
    time: {
        fontSize: 80,
        marginBottom: 25,
        fontWeight: "bold",
        color: '#69328d',
    }
});

export default TimerScreen;