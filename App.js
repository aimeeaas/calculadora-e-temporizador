/* ELABORE UM PROGRAMA QUE UTILIZE O DROWER PARA PAGINAR 3 PAGINAS. A HOME, CONTENDO APENAS UMA APRESENTACAO E UMA IMAGEM.
A SEGUNDA PAGINA É DE CALCULOS, ONDE OPERA UM TABCONTROL OPERANDO O CALCULO DE BASKARA, O IMC, E O SOMADOR DE 4 OPERACOES, E O TRIANGULO.
E POR FIM A TERCEIRA PAGINA, TAMBEM COM UM TABCONTROL PARA CRIAR 2 TIMERS, UM SIMPLES COM O BOTAO DE START STOP E ZERAR, E UM INVERSO PARA POMODORO, ONDE CONTA 20MIM ATE O ZERO. */

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import BhaskaraScreen from './screens/calculos/BhaskaraScreen';
import ImcScreen from './screens/calculos/ImcScreen';
import OperacoesScreen from './screens/calculos/OperacoesScreen';
import TrianguloScreen from './screens/calculos/TrianguloScreen';
import HomeScreen from './screens/home/HomeScreen';
import PomodoroScreen from './screens/timers/PomodoroScreen';
import TimerScreen from './screens/timers/TimerScreen';

function CalculosTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'rgba(241, 225, 250, 1)'
      },
      headerTintColor: '#69328d',
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 16
      },

      tabBarStyle: {
        backgroundColor: '#f5f5f5',
        height: 60
      },
      tabBarActiveTintColor: '#69328d',
      tabBarInactiveTintColor: '#a17ebf'
    }}>
      <Tab.Screen name="Bhaskara" component={BhaskaraScreen} />
      <Tab.Screen name="IMC" component={ImcScreen} />
      <Tab.Screen name="Operações" component={OperacoesScreen} />
      <Tab.Screen name="Triângulos" component={TrianguloScreen} />
    </Tab.Navigator>
  )
}

function TimersTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: 'rgba(241, 225, 250, 1)'
      },
      headerTintColor: '#69328d',
      headerTitleStyle: {
        fontWeight: 'bold'
      },

      tabBarStyle: {
        backgroundColor: '#f5f5f5',
        height: 60
      },
      tabBarActiveTintColor: '#69328d',
      tabBarInactiveTintColor: '#a17ebf'
    }}>
      <Tab.Screen name="Temporizador" component={TimerScreen} />
      <Tab.Screen name="Pomodoro" component={PomodoroScreen} />
    </Tab.Navigator>
  )
}

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#69328d'
        },
        drawerStyle: {
          backgroundColor: '#f5f5f5',
          width: 260,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20
        },

        drawerActiveBackgroundColor: 'rgba(241, 225, 250, 1)',
        drawerActiveTintColor: '#69328d',

        headerTintColor: 'rgba(241, 225, 250, 1)',
        headerTitleStyle: {
          fontWeight: 'bold'
        },

        drawerLabelStyle: {
          fontSize: 14,
          margin: 5,
          fontWeight: "bold"
        },

        tabBarStyle: {
          backgroundColor: '#f5f5f5',
          height: 60
        },
        tabBarActiveTintColor: '#69328d',
        tabBarInactiveTintColor: '#a17ebf'
      }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cálculos" component={CalculosTabs} />
        <Drawer.Screen name="Timers" component={TimersTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}


