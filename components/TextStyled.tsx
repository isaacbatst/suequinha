import React from 'react'
import { StyleSheet, Text, TextProps } from 'react-native'
import { regular } from '../constants/font'

interface TextProperties extends TextProps {
  children?: any
}

function TextStyled (props: TextProperties) {
  const { style = {} } = props

  return <Text {...props} style={Object.assign({}, styles.text, style)}>{props.children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: regular
  }
})

export default TextStyled
