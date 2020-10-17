import React from 'react'
import { 
  TouchableOpacity,
  Image,
  StyleSheet
} from 'react-native'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function Banner(props) {
 return (
  <TouchableOpacity styles={styles.container}
    onPress={props.onClick} >
      <Image
        style={styles.capImg}
        source={props.img} />
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
    height: hp('42%'),
    resizeMode: 'contain' 
  }
})