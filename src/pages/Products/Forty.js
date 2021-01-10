import React from 'react'
import {
  View,
  StyleSheet,
  ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Caps from '../../components/Caps'
import Footer from '../../components/Footer'

export default function Forty() {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Caps img={require('../../../assets/imgs/Forty/00001.png')} cost='R$180,99'
            onClick={() => navigation.navigate('Detail')}>
            NEW YORK YANKEES MLB
          </Caps>
          <Caps img={require('../../../assets/imgs/Forty/00002.png')} cost='R$120,99'
            onClick={() => navigation.navigate('Detail')}>
            OAKLAND ATHLETICS
          </Caps>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Caps img={require('../../../assets/imgs/Forty/00003.png')} cost='R$120,99'
            onClick={() => navigation.navigate('Detail')}>
            NEW YORK YANKEES
          </Caps>
          <Caps img={require('../../../assets/imgs/Forty/00004.png')} cost='R$135,00'
            onClick={() => navigation.navigate('Detail')}>
            CHICAGO WHITE SOX
          </Caps>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Caps img={require('../../../assets/imgs/Forty/00005.png')} cost='R$140,00'
            onClick={() => navigation.navigate('Detail')}>
            ATLANTA BRAVES MLB
          </Caps>
          <Caps img={require('../../../assets/imgs/Forty/00006.png')} cost='R$75,99'
            onClick={() => navigation.navigate('Detail')}>
            NEW YORK GIANTS
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