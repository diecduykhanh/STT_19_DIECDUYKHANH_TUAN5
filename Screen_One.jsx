import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-web'

const A = (props) => {
  // Lấy navigate và route từ props
  const { navigation, route } = props
  const { navigate, goBack } = navigation

  // Ở đây lấy ra cái máy mà màn hình số 2 đã chọn.
  // Nếu mới đầu vào chưa chọn thì mặc định là blue
  const colorRef = route.params ? route.params.color || 'blue' : 'blue'
  // Lấy kích thước toàn màn hình
  const screenWidth = Dimensions.get('window').width
  const screenHeight = Dimensions.get('window').height

  const [start, setStart] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ])
  return (
    <View
      style={{
        height: screenHeight,
        width: screenWidth,
      }}
    >
      <View
        style={{
          height: screenHeight * 0.63,
          width: screenWidth,
        }}
      >
        <Image
          source={
            colorRef == 'white'
              ? require('./assets/mobile1.png')
              : colorRef == 'red'
              ? require('./assets/mobile2.png')
              : colorRef == 'black'
              ? require('./assets/mobile3.png')
              : colorRef == 'blue'
              ? require('./assets/mobile4.png')
              : require('./assets/mobile4.png')
          }
          style={{
            height: screenHeight * 0.63,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
        }}
      >
        <Text
          style={{
            marginHorizontal: 20,
            fontSize: 15,
            color: 'black',
            fontWeight: '500',
          }}
        >
          Điện Thoại Vsmart Joy 3 - Hàng chính hãng
        </Text>
        <View
          style={{
            marginTop: screenHeight * 0.01,
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              marginStart: screenWidth * 0.05,
            }}
          >
            {start.map((item, index) => (
              <Image
                key={index}
                source={require('./assets/star.png')}
                style={{
                  marginHorizontal: 3,
                  height: 30,
                  width: 30,
                }}
              />
            ))}
          </View>
          <Text
            style={{
              marginHorizontal: 20,
              fontSize: 15,
              color: 'black',
              fontWeight: '500',
            }}
          >
            (Xem 828 đánh giá)
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 15,
            marginHorizontal: 20,
          }}
        >
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 17,
            }}
          >
            1.790.000 đ
          </Text>
          <Text
            style={{
              fontWeight: '500',
              textDecorationLine: 'line-through',
              color: '#5e5e5e',
              marginHorizontal: 35,
              fontSize: 16,
            }}
          >
            1.790.000 đ
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginStart: 20,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontWeight: '700',
              textAlign: 'left',
              color: 'red',
            }}
          >
            Ở ĐÂU RẺ HƠN HOÀN TIỀN
          </Text>
          <Image
            source={require('./assets/help.png')}
            style={{
              height: screenHeight * 0.02,
              width: screenHeight * 0.02,
              marginHorizontal: 15,
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate('B')
          }}
        >
          <View
            style={{
              height: 38,
              width: screenWidth * 0.9,
              borderColor: '#7f7f7f',
              borderWidth: 1,
              borderRadius: 10,
              alignSelf: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Text style={{}}>4 MÀU-CHỌN MÀU</Text>
            <Image
              style={{
                height: 10,
                width: 10,
                position: 'absolute',
                right: 8,
              }}
              source={require('./assets/right.png')}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            marginTop: 15,
            width: screenWidth - 40,
            height: screenHeight * 0.06,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            backgroundColor: 'red',
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              textAlign: 'center',
              color: '#fff',
              fontWeight: '700',
            }}
          >
            Chọn mua
          </Text>
        </View>
      </View>
    </View>
  )
}

export default A

const styles = StyleSheet.create({})
