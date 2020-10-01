import React from 'react'
import { 
    View, 
    Text,
    StyleSheet, 
    TouchableOpacity 
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

export default function SizeButton(props) {
 return (
     <TouchableOpacity>
        <View style={[ styles.container, { backgroundColor: props.bgColor || '#FFF' }]}>
            <Text style={[ styles.text, { color: props.color || '#DDD' } ]}>
                {props.children}
            </Text>
        </View>
   </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
        width: wp('20%'),
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderColor: '#E6E6E6',
        borderWidth: 3,
        marginHorizontal: 10
    }, 
    text: {
        color: '#FFF',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
        fontFamily: 'NanumGothic'
    }
})