import React from 'react'
import {
  TouchableOpacity,
  View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Home from './pages/Home/Home'
import Forty from './pages/Products/Forty'
import HeatherPop from './pages/Products/HeatherPop'
import ClassicCaps from './pages/Products/ClassicCaps'
import CapsCarrier from './pages/Products/CapsCarrier'
import Detail from './pages/Detail/Detail'

const Stack = createStackNavigator()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }} />

        <Stack.Screen
          name='Forty'
          component={Forty}
          options={{
            headerRight: () => (
              <View>
                <TouchableOpacity style={{ right: 10, flexDirection: 'row' }}>
                  <Icon name={'shopping-cart'} size={25} color={'white'} style={{ margin: 5 }} />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: 'Estilo e Tradição',
            headerTintColor: 'white', // BOTAO DE VOLTAR
            headerStyle: { backgroundColor: '#950000' },
            headerTitleStyle: {
              fontFamily: 'NanumGothic',
              color: 'white'
            },
            headerShown: true
          }} />

        <Stack.Screen
          name='HeatherPop'
          component={HeatherPop}
          options={{
            headerRight: () => (
              <View>
                <TouchableOpacity style={{ right: 10, flexDirection: 'row' }}>
                  <Icon name={'shopping-cart'} size={25} color={'white'} style={{ margin: 5 }} />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: 'Nunca Saem de Moda',
            headerTintColor: 'white', // BOTAO DE VOLTAR
            headerStyle: { backgroundColor: '#950000' },
            headerTitleStyle: {
              fontFamily: 'NanumGothic',
              color: 'white'
            },
            headerShown: true
          }} />

        <Stack.Screen
          name='ClassicCaps'
          component={ClassicCaps}
          options={{
            headerRight: () => (
              <View>
                <TouchableOpacity style={{ right: 10, flexDirection: 'row' }}>
                  <Icon name={'shopping-cart'} size={25} color={'white'} style={{ margin: 5 }} />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: 'Clássicos e Nova Coleção',
            headerTintColor: 'white', // BOTAO DE VOLTAR
            headerStyle: { backgroundColor: '#950000' },
            headerTitleStyle: {
              fontFamily: 'NanumGothic',
              color: 'white'
            },
            headerShown: true
          }} />

        <Stack.Screen
          name='CapsCarrier'
          component={CapsCarrier}
          options={{
            headerRight: () => (
              <View>
                <TouchableOpacity style={{ right: 10, flexDirection: 'row' }}>
                  <Icon name={'shopping-cart'} size={25} color={'white'} style={{ margin: 5 }} />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: 'Chegaram os Novos',
            headerTintColor: 'white', // BOTAO DE VOLTAR
            headerStyle: { backgroundColor: '#950000' },
            headerTitleStyle: {
              fontFamily: 'NanumGothic',
              color: 'white'
            },
            headerShown: true
          }} />

        <Stack.Screen
          name='Detail'
          component={Detail}
          options={{
            headerRight: () => (
              <View>
                <TouchableOpacity style={{ right: 10, flexDirection: 'row' }}>
                  <Icon name={'shopping-cart'} size={25} color={'white'} style={{ margin: 5 }} />
                </TouchableOpacity>
              </View>
            ),
            headerTitle: 'Detalhes do Produto',
            headerTintColor: 'white', // BOTAO DE VOLTAR
            headerStyle: { backgroundColor: '#950000' },
            headerTitleStyle: {
              fontFamily: 'NanumGothic',
              color: 'white'
            },
            headerShown: true
          }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes