import React from 'react'
import { 
  View, 
  StyleSheet, 
  TouchableOpacity
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Dot(props) {
 return (
  <TouchableOpacity>
    <View style={[styles.container, {backgroundColor: props.color}]}></View>
  </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: wp('20%'),
    height: hp('8%'),
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 10, 
    marginTop: 10,
    borderColor: '#E6E6E6',
    borderWidth: 3
  }
})