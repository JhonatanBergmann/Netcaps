import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Image
} from 'react-native'

import Iconheader from '../../assets/imgs/iconHeader.png'

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={Iconheader} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#950000',
    height: '7.5%', 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: "#000",shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.30,
    shadowRadius: 5.30,
    elevation: 10
  },
  image: {
    height: '60%',
    width: '30%',
    resizeMode: 'contain',
    justifyContent: 'center', 
    alignItems: 'center'
  }
})

export default Header