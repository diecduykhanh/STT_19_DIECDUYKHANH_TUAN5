import { StyleSheet } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import A from './Screen_One'
import B from './Screen_Two'

const App = () => {
  const Stack = createNativeStackNavigator()
  return (
    //  điều hướng các màn hình
    // NavigationContainer Đóng gói toàn bộ ứng dụng
    <NavigationContainer>
      <Stack.Navigator
        // Quản lý các màn hình
        initialRouteName="A"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="A" component={A} />
        {/*Stack.Screen các thành phần của màn hình  */}
        <Stack.Screen name="B" component={B} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
