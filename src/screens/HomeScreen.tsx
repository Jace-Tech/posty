import { View, Text } from 'react-native'
import React from 'react'
import { GLOBAL_STYLE } from '../utils/styles'

interface HomeScreenProps {} 

const HomeScreen:React.FC<HomeScreenProps> = () => {
  return (
    <View style={[GLOBAL_STYLE.container]}>
      <Text style={[GLOBAL_STYLE.pageTitle]}>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen