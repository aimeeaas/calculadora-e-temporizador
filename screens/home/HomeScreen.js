// Importa tudo do react
import * as React from 'react';

// Importa componentes do react native
import { View, Text, Image, StyleSheet, ScrollView, Dimensions } from 'react-native';

// Importa a API que busca as imagens de gatos
import GatoApi from '../../apis/GatoApi';

// Importa indicador de carregamento (loading)
import { ActivityIndicator } from 'react-native';

// Importa o hook useState
import { useState } from "react";

// Função/Componente HomeScreen
function HomeScreen() {
    // Pega a altura da tela do celular
    const screenHeight = Dimensions.get('window').height;

    // Estadp que armazena a URL da imagem do gato
    const [urlGato, setUrl] = useState(null);

    //Estado que controla o carregamento da imagem
    const [carregando, setCarregando] = useState(false);

    // Função assíncrona responsável por buscar um novo gato
    const carregarNovoGato = async () => {
        // Ativa o loading
        setCarregando(true);

        // Chama a API e recebe a URL da imagem
        const url = await GatoApi.buscaGato();

        // Atualiza o estado com a URL recebida
        setUrl(url);

        // Desativa o loading
        setCarregando(false);
    };

    // useEffect executa automaticamente quando a tela abre
    React.useEffect(() => {
        // Carrega a imagem do gato ao iniciar a tela
        carregarNovoGato();
    }, []);

    // Retorno visual da tela
    return (
        <ScrollView
            pagingEnabled   // Faz o scroll encaixar por páginas
            showsVerticalScrollIndicator={false}    // Remove a barrinha lateral de rolagem
        >
            {/*     PRIMEIRA 'PÁGINA'     */}
            <View style={{
                justifyContent: 'center',   // Centraliza verticalmente
                alignItems: 'center',   // Centraliza horizontalmente
                height: screenHeight,   // Faz a View ocupar a altura inteira da tela
                backgroundColor: '#f5f5f5'
            }}>
                <Text style={styles.text1}>UtilityHub</Text>

                <Image
                    source={require('../../assets/img2.png')}
                    style={styles.image}
                />
            </View>

            {/*     SEGUNDA 'PÁGINA'     */}
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: screenHeight,
                backgroundColor: '#f5f5f5'
            }}>
                <Text style={styles.text1}>Gatos Fofos</Text>
                {/* Verifica se ainda está carregando */}
                {carregando ? (
                     // Mostra loading enquanto carrega
                    <ActivityIndicator size="large" />
                ) : (
                    // Se existir URL da imagem, exibe a imagem
                    urlGato && <Image style={styles.image} 
                     // Imagem online via URL
                    source={{ uri: urlGato }} />
                )}
            </View>
        </ScrollView>
    );
}

// Estilos
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
        fontSize: 32,
        color: '#69328d',
        marginBottom: 20,
    },
    image: {
        width: 290,
        height: 220,

    },

});
export default HomeScreen;