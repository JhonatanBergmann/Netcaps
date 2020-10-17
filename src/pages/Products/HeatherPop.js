import React from 'react'
import { 
  View,
  StyleSheet,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Caps from '../../components/Caps'
import Footer from '../../components/Footer'

export default function HeatherPop() {
    const navigation = useNavigation()
 return (
  <View style={styles.container}>
    <ScrollView>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Caps img={require('../../../assets/imgs/HeatherPop/00001.png')} cost='R$179,90' 
          onClick={() => navigation.navigate('Detail')}>
            NEW YORK YANKEES MLB
        </Caps>
        <Caps img={require('../../../assets/imgs/HeatherPop/00002.png')} cost='R$124,99' 
          onClick={() => navigation.navigate('Detail')}>
            940 NEC NYC
        </Caps> 
      </View>

      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <Caps img={require('../../../assets/imgs/HeatherPop/00003.png')} cost='R$179,90' 
          onClick={() => navigation.navigate('Detail')}>
            LOS ANGELES DODGERS MLB
        </Caps>
        <Caps img={require('../../../assets/imgs/HeatherPop/00004.png')} cost='R$159,99' 
          onClick={() => navigation.navigate('Detail')}>
            950 NEW YORK
        </Caps> 
      </View>

    <View style={styles.line} />
    <Footer />

    </ScrollView>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  },
  line: {
    borderBottomColor: '#CECECF',
    borderBottomWidth: 2
  }
})