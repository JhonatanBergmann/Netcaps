import React from 'react'
import { 
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Caps from '../../components/Caps'
import Footer from '../../components/Footer'

export default function CapsCarrier() {
    const navigation = useNavigation()
 return (
   <View style={styles.container}>
        <ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Caps img={require('../../../assets/imgs/CapsCarrier/00001.png')} cost='R$229,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    LOS ANGELES DODGERS
                </Caps>
                <Caps img={require('../../../assets/imgs/CapsCarrier/00002.png')} cost='R$229,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    NEW YORK YANKEES
                </Caps> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Caps img={require('../../../assets/imgs/CapsCarrier/00003.png')} cost='R$229,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    BANDEIRA EUA 6 PACK
                </Caps>
                <Caps img={require('../../../assets/imgs/CapsCarrier/00004.png')} cost='R$229,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    ARCO IRIS 6 PACK
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