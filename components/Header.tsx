import React from 'react'
import { StyleSheet, View } from 'react-native'
import { primary } from '../constants/colors'
import TextStyled from './TextStyled'

function Header () {
  return <View style={styles.header}>
  <TextStyled style={styles.text}>Suequinha</TextStyled>
</View>
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: primary,
    paddingVertical: 20
  },
  text: {
    color: 'white',
    textAlign: 'center'
  }
})

export default Header
