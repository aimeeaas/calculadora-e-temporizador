import { View, Text, Image, StyleSheet } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Calculadora & Timer</Text>
            <Image
                source={require('../../assets/img2.png')}
                style={styles.image}
            />
             <Text style={styles.text2}>by Aimee A. A. Silva</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#69328d',
        margin: 10,
    },
    text2: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 11,
        color: '#a17ebf',
        fontStyle: 'italic',
    },
    image: {
        width: 290,
        height: 220,
    }

});
export default HomeScreen;