import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const B = (props) => {
  const { navigation, route } = props
  const { navigate, goBack } = navigation
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height
  const colorRef = useRef('blue')
  const [color, setColor] = useState('blue')

  useEffect(() => {}, [])

  const [imageSource, setImageSource] = useState(
    require('./assets/mobile4.png')
  )
  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
      }}
    >
      <View
        style={{
          height: screenHeight * 0.25,
          width: screenWidth,
          flexDirection: 'row',
        }}
      >
        <Image
          source={
            colorRef.current === 'white'
              ? require('./assets/mobile1.png')
              : colorRef.current === 'red'
              ? require('./assets/mobile2.png')
              : colorRef.current === 'black'
              ? require('./assets/mobile3.png')
              : colorRef.current === 'blue'
              ? require('./assets/mobile4.png')
              : require('./assets/mobile4.png')
          }
          style={{
            height: screenHeight * 0.25,
            width: screenWidth * 0.38,
            resizeMode: 'contain',
          }}
        />
        <View
          style={{
            marginHorizontal: 20,
            marginVertical: 15,
            flex: 1,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'black',
            }}
          >
            Điện Thoại Vsmart Joy 3
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'black',
            }}
          >
            Hàng chính hãng
          </Text>

          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'black',
              marginVertical: 13,
            }}
          >
            Màu:
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                color: 'black',
              }}
            >
              {' ' + color}
            </Text>
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: '500',
              color: 'black',
            }}
          >
            Cung cấp bởi{' '}
            <Text
              style={{
                fontSize: 15,
                fontWeight: '700',
                color: 'black',
              }}
            >
              Tiki Tradding
            </Text>
          </Text>
          <Text
            style={{
              marginTop: 13,
              fontSize: 18,
              fontWeight: '700',
              color: 'black',
            }}
          >
            1.790.000 đ
          </Text>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#c4c4c4',
        }}
      >
        <Text
          style={{
            marginHorizontal: 15,
            marginTop: 11,
            fontSize: 15,
            fontWeight: '400',
          }}
        >
          Chọn 1 màu bên dưới
        </Text>

        <TouchableOpacity
          onPress={() => {
            colorRef.current = 'white'
            setColor('white')
            setImageSource(require('./assets/mobile1.png'))
          }}
        >
          <View
            style={{
              marginTop: 11,
              height: screenHeight * 0.13,
              width: screenHeight * 0.13,
              backgroundColor: '#c5f1fb',
              alignSelf: 'center',
            }}
          ></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            colorRef.current = 'red'
            setColor('red')
            setImageSource(require('./assets/mobile2.png'))
          }}
        >
          <View
            style={{
              marginTop: 8,
              height: screenHeight * 0.13,
              width: screenHeight * 0.13,
              backgroundColor: 'red',
              alignSelf: 'center',
            }}
          ></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            colorRef.current = 'black'
            setColor('black')
            setImageSource(require('./assets/mobile3.png'))
          }}
        >
          <View
            style={{
              marginTop: 8,
              height: screenHeight * 0.13,
              width: screenHeight * 0.13,
              backgroundColor: 'black',
              alignSelf: 'center',
            }}
          ></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            colorRef.current = 'blue'
            setColor('blue')
            setImageSource(require('./assets/mobile4.png'))
          }}
        >
          <View
            style={{
              marginTop: 8,
              height: screenHeight * 0.13,
              width: screenHeight * 0.13,
              backgroundColor: '#234896',
              alignSelf: 'center',
            }}
          ></View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigate('A', {
              color: colorRef.current,
            })
          }}
        >
          <View
            style={{
              borderRadius: 10,
              backgroundColor: 'rgba(25, 82, 226, 0.58)',
              borderStyle: 'solid',
              borderColor: '#ca1536',
              borderWidth: 1,
              height: screenHeight * 0.07,
              width: screenWidth * 0.9,
              alignSelf: 'center',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 15,
              shadowColor: 'rgba(0, 0, 0, 0.25)',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.5,
              shadowRadius: 4,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                color: '#f9f2f2',
                textAlign: 'left',
              }}
            >
              XONG
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default B

const styles = StyleSheet.create({})
