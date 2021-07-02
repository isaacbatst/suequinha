import React from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

interface TextProperties extends TextProps {
  children?: any
}

function TextWithFont(props: TextProperties){
  return <Text {...props} style={styles.text}>{props.children}</Text>
} 

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 22,
     fontFamily: 'Oxygen_400Regular',
  }
})

export default TextWithFont