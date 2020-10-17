import React from 'react'
import { 
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet  
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

import Dot from '../../components/Dot'
import SizeButton from '../../components/SizeButton'
import Button from '../../components/Button'
import Footer from '../../components/Footer'

export default function Detail() {
 return (
   <ScrollView style={styles.container}>
      <Image
        style={styles.image} 
        source={require('../../../assets/imgs/HeatherPop/00004.png')}
        resizeMode='cover' />
      <View style={{ opacity: 0.5 }}>
        <Text style={[ styles.title, { fontSize: hp('5%') }]}>950 NEW YORK</Text>
      </View>
      <View>
        <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
          <Text style={[ styles.title, { fontSize: hp('4%') }]}>
            R$ 159,99
          </Text>
          <Text style={[ styles.title, { fontSize: hp('2%'), opacity: 0.5}]}>
            {'R$ 159,99 à vista com desconto ou\n5x de R$ 31,99 Sem juros'}
          </Text>
        </View>

        <View style={{ opacity: 0.5 }}>
          <Text style={[ styles.title, { fontSize: 15 }]}>CORES DISPONÍVEIS</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Dot color='yellow'/>
            <Dot color='blue'/>
            <Dot color='gray'/>
            <Dot color='beige'/>
            <Dot color='black'/>
            <Dot color='orange'/>
            <Dot color='white'/>
            <Dot color='pink'/>
          </ScrollView>
        </View>

        <View style={{ opacity: 0.5 }}>
          <Text style={[ styles.title, { fontSize: 15 }]}>ESCOLHA TAMANHO</Text>
        </View>
        <View style={{ flexDirection: 'row', width: '100%' }}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <SizeButton bgColor='#950000' color='#FFF'>7 1/8</SizeButton>
            <SizeButton>7 1/4</SizeButton>
            <SizeButton>7 3/8</SizeButton>
            <SizeButton>7 1/2</SizeButton>
            <SizeButton>7 5/8</SizeButton>
            <SizeButton>7 3/4</SizeButton>
            <SizeButton>7 7/8</SizeButton>
            <SizeButton>7 8</SizeButton>
          </ScrollView>
        </View>

        <View style={styles.textContent}>
          <Text style={styles.textTitle}>
            950 NEW YORK
          </Text>
          <Text style={styles.textContent}>
            O Boné New Era® 9FIFTY Aba Reta 950 Snapback MLB New York Yankees OF Colors MBPERBON031 é confeccionado em tecido resistente e recebe clássica flag New Era® na lateral esquerda. As vias respiráveis na parte superior ficam responsáveis por dissipar a umidade e garantem aquela sensação agradável de bem-estar. Muito resistente, conta com costuras reforçadas, o que contribui no aumento da durabilidade. O 9FIFTY? Original Fit vem com a aba em um formato quadrado e mais curto, a copa do boné vem um pouco mais reta e o cap é mais raso, sendo um modelo FIT que não cobre as orelhas e tem as linhas mais retas. Seu fechamento snapback é prático e garante um ajuste preciso à cabeça. The 9FIFTY? Original Fit, reinventamos um clássico.
          </Text>
        </View>
        <Button />
        <View style={styles.line} />
        <Footer />
      </View>
   </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FFF'
  }, 
  image: {
    width: '100%',
    height: 400,
    resizeMode: 'contain'
  },
  title: {
    fontFamily: 'Anton',
    paddingHorizontal: '2%'
  }, 
  textContent: {
    fontSize: 16,
    lineHeight: 25, 
    marginHorizontal: '2%', 
    paddingHorizontal: '2%',
    marginTop: 10, 
    fontFamily: 'NanumGothic'
  }, 
  textTitle: {
    fontSize: 22,
    marginVertical: '2%',
    fontFamily: 'NanumGothic'
  }, 
  line: {
    borderWidth: 1,
    borderBottomColor: '#DDD',
    marginVertical: '2%'
  }
})