// Importações de navegação
import { NavigationContainer } from '@react-navigation/native'; // É o "container principal" da navegação, SEM ele nenhuma navegação funciona
import { createDrawerNavigator } from '@react-navigation/drawer'; // Cria o menu lateral (Drawer)
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; // Cria as abas inferiores (Tabs)
import { Image, View, Text } from 'react-native';

// Importação das screens
import BhaskaraScreen from './screens/calculos/BhaskaraScreen';
import ImcScreen from './screens/calculos/ImcScreen';
import OperacoesScreen from './screens/calculos/OperacoesScreen';
import TrianguloScreen from './screens/calculos/TrianguloScreen';
import HomeScreen from './screens/home/HomeScreen';
import PomodoroScreen from './screens/timers/PomodoroScreen';
import TimerScreen from './screens/timers/TimerScreen';
import CepScreen from './screens/cep/CepScreen';
import AlunoScreen from './screens/alunos/AlunoScreen';

// Função que cria um grupo de abas (Tabs), vai ser usada dentro do Drawer
function CalculosTabs() {
  // Cria o "objeto" de navegação de abas
  const Tab = createBottomTabNavigator();

  return (
    // Tab.Navigator = container das abas
    // screenOptions = onde você estiliza TUDO
    <Tab.Navigator screenOptions={{
      // Cor do topo da tela
      headerStyle: {
        backgroundColor: 'rgba(241, 225, 250, 1)'
      },
      // Cor do texto e ícones do header
      headerTintColor: '#69328d',
      // Estilo do título
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },
      // Fundo da barra de abas
      tabBarStyle: {
        backgroundColor: '#f5f5f5',
        height: 60
      },
      // Cor do item selecionado
      tabBarActiveTintColor: '#69328d',
      // Cor dos itens não selecionados
      tabBarInactiveTintColor: '#a17ebf'
    }}>

      <Tab.Screen name="Bhaskara" component={BhaskaraScreen} />
      <Tab.Screen name="IMC" component={ImcScreen} />
      <Tab.Screen name="Operações" component={OperacoesScreen} />
      <Tab.Screen name="Triângulos" component={TrianguloScreen} />
    </Tab.Navigator>
  )
}

// Outra função que cria um grupo de abas (Tabs), vai ser usada dentro do Drawer
function TimersTabs() {
  // Cria novamente as tabs
  const Tab = createBottomTabNavigator();

  return (
    // Tab.Navigator = container das abas
    // screenOptions = onde você estiliza TUDO
    <Tab.Navigator screenOptions={{
      // Cor do topo da tela
      headerStyle: {
        backgroundColor: 'rgba(241, 225, 250, 1)'
      },
      // Cor do texto e ícones do header
      headerTintColor: '#69328d',
      // Estilo do título
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      // Fundo da barra de abas
      tabBarStyle: {
        backgroundColor: '#f5f5f5',
        height: 60
      },
      // Cor do item selecionado
      tabBarActiveTintColor: '#69328d',
      // Cor dos itens não selecionados
      tabBarInactiveTintColor: '#a17ebf'
    }}>
      <Tab.Screen name="Temporizador" component={TimerScreen} />
      <Tab.Screen name="Pomodoro" component={PomodoroScreen} />
    </Tab.Navigator>
  )
}

// Componente principal do app (OBRIGATÓRIO)  
export default function App() {
  // Cria o menu lateral
  const Drawer = createDrawerNavigator();

  return (
    // NavigationContainer é OBRIGATÓRIO envolver tudo e controla a navegação
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        // Cor da barra superior
        headerStyle: {
          backgroundColor: '#69328d'
        },

        headerTitle: () => (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              source={require('./assets/logo.png')}
              style={{ width: 35, height: 35 }}
            />

            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16, }}> Home </Text>
          </View>
        ),

        // Estiliza o menu: Cor, largura e borda
        drawerStyle: {
          backgroundColor: '#f5f5f5',
          width: 260,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20
        },
        // Cor do item selecionado
        drawerActiveBackgroundColor: 'rgba(241, 225, 250, 1)',
        // Cor do texto ativo
        drawerActiveTintColor: '#69328d',
        // Cor do texto do header
        headerTintColor: 'rgba(241, 225, 250, 1)',
        // Deixa o título em negrito
        headerTitleStyle: {
          fontWeight: 'bold'
        },
        // Estilo do texto do menu
        drawerLabelStyle: {
          fontSize: 14,
          margin: 5,
          fontWeight: "bold"
        }
      }}>

        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cálculos" component={CalculosTabs} />
        <Drawer.Screen name="Timers" component={TimersTabs} />
        <Drawer.Screen name="CEP" component={CepScreen} />
        <Drawer.Screen name="Aluno" component={AlunoScreen} />
      </Drawer.Navigator>
    </NavigationContainer >
    // Aqui tem Tabs dentro do Drawer: component={CalculosTabs} e component={TimersTabs}
  );
}

// O NavigationContainer envolve toda a navegação. O DrawerNavigator cria um menu lateral e o BottomTabNavigator cria abas inferiores. Cada Screen representa uma tela, e o screenOptions permite estilizar os componentes de navegação.