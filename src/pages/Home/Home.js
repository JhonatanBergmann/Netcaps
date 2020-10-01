import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity, 
    Alert
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Banner from '../../components/Banner'
import Header from '../../components/Header'

export default function Home() {
    const navigation = useNavigation()
 return (
   <View style={styles.container}>
       <Header />
       <View style={styles.header}>
            <Image
                style={styles.image} 
                source={require('../../../assets/imgs/banner.png')} />
            <View style={styles.textContainer}>
                <Text style={styles.text}>NOVIDADES</Text>
                    <Icon
                        style={{ alignSelf: 'center', padding: 5, marginTop: 5 }} 
                        name='circle'
                        size={15}
                        color={'#950000'} />
                    <Icon
                        style={{ alignSelf: 'center', padding: 5, marginTop: 5 }} 
                        name='circle'
                        size={15}
                        color={'#F0AF37'} /> 
                    <Icon
                        style={{ alignSelf: 'center', padding: 5, marginTop: 5 }} 
                        name='circle'
                        size={15}
                        color={'#5B6551'} />       
                    <Text style={[styles.text, { color: '#950000' }]}>PARA VOCÊ</Text>
                    <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}
                        onPress={() => Alert.alert('Clicou', 'Descrição...')}>
                        <Icon 
                            name='filter-alt'
                            size={30}
                            color='#000' />
                    </TouchableOpacity>
            </View>
       </View>
        <View style={styles.line} />
        <ScrollView horizontal={false}>

            <View style={{ alignItems:'center', justifyContent: 'center' }}>
                <Banner img={require('../../../assets/imgs/1001.png')} onClick={() => navigation.navigate('Forty')} />
            </View>

            <View style={{ alignItems:'center', justifyContent: 'center' }}>
                <Banner img={require('../../../assets/imgs/2001.png')} onClick={() => navigation.navigate('HeatherPop')} />
            </View>

            <View style={{ alignItems:'center', justifyContent: 'center' }}>
                <Banner img={require('../../../assets/imgs/3001.png')} onClick={() => navigation.navigate('ClassicCaps')} />
            </View>

            <View style={{ alignItems:'center', justifyContent: 'center' }}>
                <Banner img={require('../../../assets/imgs/4001.png')} onClick={() => navigation.navigate('CapsCarrier')} />
            </View>

            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => Alert.alert('Clicou', 'Descrição...')}>
                    <Image style={styles.endImg} source={require('../../../assets/imgs/10001.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Clicou', 'Descrição...')}>
                    <Image style={styles.endImg} source={require('../../../assets/imgs/20001.png')} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => Alert.alert('Clicou', 'Descrição...')}>
                    <Image style={styles.endImg} source={require('../../../assets/imgs/30001.png')} />
                </TouchableOpacity>
            </View>

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
    header: {
        marginBottom: 10
    },
    image: {
        width: '100%', 
        height: 150
    },
    textContainer: {
        flexDirection: 'row',
        marginVertical: '3%',
        marginHorizontal: '3%'
    },
    text: {
        fontFamily: 'Anton',
        fontSize: hp('3.5%'),
        marginHorizontal: '1.5%'
    },
    line: {
        borderBottomColor: '#CECECF',
        borderBottomWidth: 2
    },
    endImg: {
        width: wp('32.2%'),
        height: hp('32.2%'),
        margin: 2
    }
})