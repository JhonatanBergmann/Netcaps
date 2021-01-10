import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'

export default function Caps(props) {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
      <Image
        source={props.img}
        style={styles.capImg} />
      <Text style={styles.shoesText}>
        {(props.children)}
      </Text>
      <View opacity={0.4}>
        <Text style={styles.capText}> {props.cost} </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: '2%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  capImg: {
    width: 175,
    height: 175
  },
  capText: {
    fontSize: 16
  }
})