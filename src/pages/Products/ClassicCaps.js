import React from 'react'
import { 
    View,
    StyleSheet,
    ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Caps from '../../components/Caps'
import Footer from '../../components/Footer'

export default function ClassicCaps() {
    const navigation = useNavigation()
 return (
   <View style={styles.container}>
        <ScrollView>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00001.png')} cost='R$125,99' 
                  onClick={() => navigation.navigate('Detail')}>
                    FUTEBOL GRÊMIO DIAMOND
                </Caps>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00002.png')} cost='R$125,99' 
                  onClick={() => navigation.navigate('Detail')}>
                    FUTEBOL INTERNACIONAL DIAMOND
                </Caps> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00003.png')} cost='R$179,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    MINIE MOUSE DISNEY
                </Caps>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00004.png')} cost='R$179,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    MICKEY MOUSE DISNEY
                </Caps> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00005.png')} cost='R$159,00' 
                  onClick={() => navigation.navigate('Detail')}>
                    CORE ALIVE
                </Caps>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00006.png')} cost='R$169,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    NFL GREEN  
                </Caps> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00007.png')} cost='R$189,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    MLB LOS ANGELES
                </Caps>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00008.png')} cost='R$199,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    RETRO CROWN  
                </Caps> 
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00009.png')} cost='R$249,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    MCLAREN F1
                </Caps>
                <Caps img={require('../../../assets/imgs/ClassicCaps/00010.png')} cost='R$179,90' 
                  onClick={() => navigation.navigate('Detail')}>
                    SULLEY E WAZOWSKI  
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