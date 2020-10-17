import React from 'react'
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView 
} from 'react-native'

import Caps from './Caps'

export default function Footer() {
 return (
  <View>
    <Text style={styles.title}>VOCÊ PODE GOSTAR</Text>
    <View style={{ flexDirection: 'row' }}>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{ marginHorizontal: 10 }}>
          <Caps img={require('../../assets/imgs/Footer/10001.png')} cost='161,90'>
            BROOKLYN NETS
          </Caps>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <Caps img={require('../../assets/imgs/Footer/20002.png')} cost='161,90'>
            GOLDEN STATE WARRIORS
          </Caps>
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <Caps img={require('../../assets/imgs/Footer/30003.png')} cost='161,90'>
            CHICAGO BULLS
          </Caps>
        </View>
      </ScrollView>
        
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontFamily: 'Anton',
    marginVertical: '2%',
    paddingHorizontal: '2%'
  }
})